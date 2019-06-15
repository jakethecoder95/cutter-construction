import React from "react";

import unslpash from "../../../api/unslpash";
import ImageList from "./ImageList";

class GalleryContent extends React.Component {
  state = { images: [] };

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages = async () => {
    const response = await unslpash.get("/search/photos", {
      params: { query: "home repair" }
    });

    this.setState({ images: response.data.results });
  };

  render() {
    return (
      <div className="gallery__page-content">
        <div className="container">
          <ImageList images={this.state.images} />
        </div>
      </div>
    );
  }
}

export default GalleryContent;
