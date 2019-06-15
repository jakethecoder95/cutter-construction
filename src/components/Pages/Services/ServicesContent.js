import React from "react";

const ServicesContent = props => {
  return (
    <div className="container">
      <h2 className="promo-header">
        If you need work done on your home, you name it, we can do it!
      </h2>
      <div className="grid">
        <div className="row">
          <div className="item col-md-3">
            <h3>Deck Work</h3>
            <div className="item__image">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEVMTEyjo6NJSUmmpqZGRkaqqqqhoaFeXl6CgoJycnJ2dnaFhYVCQkKSkpJOTk58fHxlZWWUlJSMjIxYWFhiYmKZmZltbW1UVFQ+Pj4unoyPAAAEuUlEQVR4nO3Z647iOBAF4KRc5dycOyH9/k+6VWXTwEirlfpPT9jzjdSQkDDyie9UFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8vxFReclvHu/p5QL644b3D+n9+uvZm6bZq+pszOmnyN83+XOyC+yKgrjp+v5+spc539a83HxBPEiQgamXEIJsbOd2f1/nB0tBjyRyvpyoj8GNu36eb8tkvmpN4DbUwTIItQpTOaVibiJ3P5BbPjoPP7RLw8IVdY9DPfEpGfRaDo71MwMecwEHrwhnDF78YC/SUM7gs+pBfeizXcJLBufjQdsRj3oUjv62DHpXaHMGx70zffMhGeiz5e0lA5r1YDy05Heq6GYRjKxjAC+y7aUtrOniA8NrBlbUlqf8LmfAdq6zIFbOHUWsfEDkM1kWngFN7reL8mOvGWyrFj1psYIV2jLIT37aRf+eFa8ekvaTXZH7A8mWq1aElwzCZsVftKBxLxnw4DXAa8OcXzrSylFGRHkbFz4ig5EfDeKRQVV7qdnrRc5ARw6rD1l6HRc+I4Ov3B3K3uQMfHIQdGpomcgt6TgZdBrl9cAuXD2DY27d/t//29/pLYN0Ex8gU8kgP3Bt6v60t2TVIexEt2Vpct9gGYyJ3W8X5cfe24JPj0LPOQM6n63dpwh+HHctb7I+VPacwVfO4KpN4Y8MfDqglT9n4N1Aae3eMaQhV4h5timzNgvvE+PmxvtVQ3jPoDrFi1YysFpxtINq7e3KtJZU7K/OFF7nyh+xXrAMdDasyyNqxDKw3iH03tpTW7qCTUr7CMdEH7JmoraOtWWgL5tNf4ItGZoQdSwc6hjrsqVwC/peS8mLpqT/js76QOr0kqK+bAY68HlvVl7s1c56P08vvT3x9wW2q1KVHpD46bIR/Mh1l0fwr2wRSI9HW1bAPE382Dz1M76GrHwT8XsLNh/4HeXoonxAiEvaaj+6B9s5nEaRdbKhMQQea652mYmGIPGm86TBu04dGO7sE0mZ8ndcNgTqRQf/UG3BjnizoZFXaWdZU4y6CrAMSDNIrWx9DOfkGXSytVGWtNZtO1T5Oy67gaAZNKmTJWdAYdBFwE2GxMvOcf1KSTNIfGo9CGvST9qcwV3LX4Xja412iX1Hf911o2Zwo0Eaz0BnRcsYc3F0KhDj3M66WNRHLXNje6ZUr1XJ4G6bbtoWdNHo37HJZfcTtT/Qpf+aPANuRZ/pOefi5KlyGn06PN/Edg7q4zUD8blz9O+wWeZF6TNsZ3+mvqse+1Z6K6DNfqLtlj76g11arqawPTJYKB11WqPtKup3HPVVa0HuD3RYswyI/AemMGpD16JvKR78zCDptFn7xe67P2DtF78z2O9WTS7K27INCGI/HMi9olX0XB2lT/6DSlqDZ8CLhCgrn7poDFpVdEyME9saWsdGuXH5PeKKaBlsD4w6HQbnrp30EQ8NL8O2MPkeGfctVeew6GJy2PRZT3ZyafRPpw2mt6NJv0Nvu+xemrb78sJW8csJellH+bywHNLzyucBl1t+sRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Df4BwWHMG0GBXSuAAAAAElFTkSuQmCC"
                width="300"
                alt="Man working on deck"
              />
            </div>
            <p>
              Whether you want the natural wood look or the reliable yet sleek
              synthetic deck, we can make it for you. We have _______ years of
              deck building experience. If you want a beautiful deck that is
              made to last go with Cutter Construction.
            </p>
          </div>
          <div className="item col-md-3 col-md-offset-3">
            <h3>Another Service</h3>
            <div className="item__image">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEVMTEyjo6NJSUmmpqZGRkaqqqqhoaFeXl6CgoJycnJ2dnaFhYVCQkKSkpJOTk58fHxlZWWUlJSMjIxYWFhiYmKZmZltbW1UVFQ+Pj4unoyPAAAEuUlEQVR4nO3Z647iOBAF4KRc5dycOyH9/k+6VWXTwEirlfpPT9jzjdSQkDDyie9UFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8vxFReclvHu/p5QL644b3D+n9+uvZm6bZq+pszOmnyN83+XOyC+yKgrjp+v5+spc539a83HxBPEiQgamXEIJsbOd2f1/nB0tBjyRyvpyoj8GNu36eb8tkvmpN4DbUwTIItQpTOaVibiJ3P5BbPjoPP7RLw8IVdY9DPfEpGfRaDo71MwMecwEHrwhnDF78YC/SUM7gs+pBfeizXcJLBufjQdsRj3oUjv62DHpXaHMGx70zffMhGeiz5e0lA5r1YDy05Heq6GYRjKxjAC+y7aUtrOniA8NrBlbUlqf8LmfAdq6zIFbOHUWsfEDkM1kWngFN7reL8mOvGWyrFj1psYIV2jLIT37aRf+eFa8ekvaTXZH7A8mWq1aElwzCZsVftKBxLxnw4DXAa8OcXzrSylFGRHkbFz4ig5EfDeKRQVV7qdnrRc5ARw6rD1l6HRc+I4Ov3B3K3uQMfHIQdGpomcgt6TgZdBrl9cAuXD2DY27d/t//29/pLYN0Ex8gU8kgP3Bt6v60t2TVIexEt2Vpct9gGYyJ3W8X5cfe24JPj0LPOQM6n63dpwh+HHctb7I+VPacwVfO4KpN4Y8MfDqglT9n4N1Aae3eMaQhV4h5timzNgvvE+PmxvtVQ3jPoDrFi1YysFpxtINq7e3KtJZU7K/OFF7nyh+xXrAMdDasyyNqxDKw3iH03tpTW7qCTUr7CMdEH7JmoraOtWWgL5tNf4ItGZoQdSwc6hjrsqVwC/peS8mLpqT/js76QOr0kqK+bAY68HlvVl7s1c56P08vvT3x9wW2q1KVHpD46bIR/Mh1l0fwr2wRSI9HW1bAPE382Dz1M76GrHwT8XsLNh/4HeXoonxAiEvaaj+6B9s5nEaRdbKhMQQea652mYmGIPGm86TBu04dGO7sE0mZ8ndcNgTqRQf/UG3BjnizoZFXaWdZU4y6CrAMSDNIrWx9DOfkGXSytVGWtNZtO1T5Oy67gaAZNKmTJWdAYdBFwE2GxMvOcf1KSTNIfGo9CGvST9qcwV3LX4Xja412iX1Hf911o2Zwo0Eaz0BnRcsYc3F0KhDj3M66WNRHLXNje6ZUr1XJ4G6bbtoWdNHo37HJZfcTtT/Qpf+aPANuRZ/pOefi5KlyGn06PN/Edg7q4zUD8blz9O+wWeZF6TNsZ3+mvqse+1Z6K6DNfqLtlj76g11arqawPTJYKB11WqPtKup3HPVVa0HuD3RYswyI/AemMGpD16JvKR78zCDptFn7xe67P2DtF78z2O9WTS7K27INCGI/HMi9olX0XB2lT/6DSlqDZ8CLhCgrn7poDFpVdEyME9saWsdGuXH5PeKKaBlsD4w6HQbnrp30EQ8NL8O2MPkeGfctVeew6GJy2PRZT3ZyafRPpw2mt6NJv0Nvu+xemrb78sJW8csJellH+bywHNLzyucBl1t+sRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Df4BwWHMG0GBXSuAAAAAElFTkSuQmCC"
                width="300"
                alt="Man working on deck"
              />
            </div>
            <p>
              Another service that you guys provide. From our conversation, I
              take it decks are your main business (or you want it to be). What
              is another popular thing you guys do? It could also be something
              deck related if you want?
            </p>
          </div>
          <div className="item col-md-3">
            <h3>Everything Else</h3>
            <div className="item__image">
              <img
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAS1BMVEVMTEyjo6NJSUmmpqZGRkaqqqqhoaFeXl6CgoJycnJ2dnaFhYVCQkKSkpJOTk58fHxlZWWUlJSMjIxYWFhiYmKZmZltbW1UVFQ+Pj4unoyPAAAEuUlEQVR4nO3Z647iOBAF4KRc5dycOyH9/k+6VWXTwEirlfpPT9jzjdSQkDDyie9UFQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8vxFReclvHu/p5QL644b3D+n9+uvZm6bZq+pszOmnyN83+XOyC+yKgrjp+v5+spc539a83HxBPEiQgamXEIJsbOd2f1/nB0tBjyRyvpyoj8GNu36eb8tkvmpN4DbUwTIItQpTOaVibiJ3P5BbPjoPP7RLw8IVdY9DPfEpGfRaDo71MwMecwEHrwhnDF78YC/SUM7gs+pBfeizXcJLBufjQdsRj3oUjv62DHpXaHMGx70zffMhGeiz5e0lA5r1YDy05Heq6GYRjKxjAC+y7aUtrOniA8NrBlbUlqf8LmfAdq6zIFbOHUWsfEDkM1kWngFN7reL8mOvGWyrFj1psYIV2jLIT37aRf+eFa8ekvaTXZH7A8mWq1aElwzCZsVftKBxLxnw4DXAa8OcXzrSylFGRHkbFz4ig5EfDeKRQVV7qdnrRc5ARw6rD1l6HRc+I4Ov3B3K3uQMfHIQdGpomcgt6TgZdBrl9cAuXD2DY27d/t//29/pLYN0Ex8gU8kgP3Bt6v60t2TVIexEt2Vpct9gGYyJ3W8X5cfe24JPj0LPOQM6n63dpwh+HHctb7I+VPacwVfO4KpN4Y8MfDqglT9n4N1Aae3eMaQhV4h5timzNgvvE+PmxvtVQ3jPoDrFi1YysFpxtINq7e3KtJZU7K/OFF7nyh+xXrAMdDasyyNqxDKw3iH03tpTW7qCTUr7CMdEH7JmoraOtWWgL5tNf4ItGZoQdSwc6hjrsqVwC/peS8mLpqT/js76QOr0kqK+bAY68HlvVl7s1c56P08vvT3x9wW2q1KVHpD46bIR/Mh1l0fwr2wRSI9HW1bAPE382Dz1M76GrHwT8XsLNh/4HeXoonxAiEvaaj+6B9s5nEaRdbKhMQQea652mYmGIPGm86TBu04dGO7sE0mZ8ndcNgTqRQf/UG3BjnizoZFXaWdZU4y6CrAMSDNIrWx9DOfkGXSytVGWtNZtO1T5Oy67gaAZNKmTJWdAYdBFwE2GxMvOcf1KSTNIfGo9CGvST9qcwV3LX4Xja412iX1Hf911o2Zwo0Eaz0BnRcsYc3F0KhDj3M66WNRHLXNje6ZUr1XJ4G6bbtoWdNHo37HJZfcTtT/Qpf+aPANuRZ/pOefi5KlyGn06PN/Edg7q4zUD8blz9O+wWeZF6TNsZ3+mvqse+1Z6K6DNfqLtlj76g11arqawPTJYKB11WqPtKup3HPVVa0HuD3RYswyI/AemMGpD16JvKR78zCDptFn7xe67P2DtF78z2O9WTS7K27INCGI/HMi9olX0XB2lT/6DSlqDZ8CLhCgrn7poDFpVdEyME9saWsdGuXH5PeKKaBlsD4w6HQbnrp30EQ8NL8O2MPkeGfctVeew6GJy2PRZT3ZyafRPpw2mt6NJv0Nvu+xemrb78sJW8csJellH+bywHNLzyucBl1t+sRAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8Df4BwWHMG0GBXSuAAAAAElFTkSuQmCC"
                width="300"
                alt="Man working on deck"
              />
            </div>
            <p>
              I thought it may be a good idea to say here that you guys do it
              all. Just so the reader knows that if they have something else
              they want done this will clarify that they can also call you about
              that.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
