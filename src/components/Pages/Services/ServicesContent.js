import React from "react";

const ServicesContent = props => {
  return (
    <div className="container">
      <h2 className="promo-header">
        We offer a variety of services ranging from additions, remodels, and
        decks. You name it, we can do it!
      </h2>
      <div className="grid">
        <div className="row">
          <div className="item col-md-3">
            <h3>Decks</h3>
            <div className="item__image">
              <img
                src="https://lh3.googleusercontent.com/BSuyw5mmn8qgJ480TC1e21hydzmWA4PTMMbhvmPvk59QiLOIZz549CuxNe5VaJYVpdd0fagr5ixfyzG9GiyLs4x_o6P6bvdrThQ4380bCDN_OLMjlCrvnBu2AnKIVDqpvixruo1C1Rwousob8knrMihnBnYquuHIh98elGtzU-X6g2kyzSLIYuDV7z8-1tkBdyRiu15VpPiCZQ4pd8hmTQwC-riDO7_zksITsyy-xicOsS7EU-jw7_f6sNZ4bVcpCQlRTmsddeLlEpJmCj021Rj4mxstXobnfT71w5PDELhdFokm5cbucUjSMtpys3wzkYG1cKxRDjkyN-yB7fpTz5pqSV6hyBOJhVerNd5EXoK9afwCxR1sx7U-XTI7j1_AFfitBFqQxodQX2bvDVweHwoF-BG5S1v8pKBP8KtqhQLOp8OAfv7XkqVKEEfPwrtbKmnsoQTE8ZTFgT5QLZpkrNZG4NRwm-F7BqtqPckd0tYNQUl366J_khXfHPU-ckfW6t3iPR058AgZwtvjHuYFAxuLDJtl2ga8uRwID2qNiw0WQ5Itaktxc047IdsjlMoGEQLpWh4kZkWRg7xy3-OrUrCGu052O5LZJXDOwV1sBPMUXSit2q55YyBq1RJrmm1qOJv5QslT9rAKS3qFfpDSLKJc0PfwJHPVcmt3qifxHvrl83hGpuKyARr0Q6KwxQa8C_vVV6USb-Z3IZx4dKN-0dPn=w1677-h943-no"
                width="300"
                height="223"
                alt="Man working on deck"
              />
            </div>
            <p>
              Whether you want the natural wood look or the reliable yet sleek
              synthetic deck, we can make it for you. We have{" "}
              {new Date().getFullYear() - 2006} years of deck building
              experience. If you want a beautiful deck that is made to last go
              with Cutter Construction.
            </p>
          </div>
          <div className="item col-md-3 col-md-offset-3">
            <h3>Remodels & Additions</h3>
            <div className="item__image">
              <img
                src="https://lh3.googleusercontent.com/v8pbmU0FhuhokMXeohHBUxNSiUll50JXAdcEuFoSXTFMviaYRmsGA2Sz7_XOpIfiu-XekvTxaI2WKd0RErRp6cnRdJ6Niabf-NQ7k0q7YuIqqKSKmAoLx5QhvfGnVcVE5RnF9rFq2vyvO-fQiIs6dmxx1SqRubfdG0OCwuFnhAbu2s4yP0B_J1Rfnp8MivTNf8Gsr9suNKhdWd0MJ9Cgc-KEHobLNPQpem80QtyOVZzUs3K9_b0lMx8hiI21_kSIxhj7nUzyjq1aqPB1EoXqRDTrZ29OFu532U9CYCSp_sN9dwrrw7_0F95CFAOVeDJqMC9YIezP3BlMPyIqZGpMy_HQlF-UsyQ1chzALRKriI-B5lSPkJV3jZDUxEljNgkg9bNsN0L2UXbJ9uuQmh_cMjncMPh_nqiAegoUWhWZ-w1F3ZvxJGb8LaFdNiuz_25NYPCIoQvUH3KZ_vHflFDA0gfnHf-c3VSvIGby7hx_Duy1SBb_rOM7K5yUd4i08vZpL85uFBApebH7xopfZuNbH7EQDKLVTRWZnFpTptqtcnab9wg-t6vmiurrtxeJe-w-5nESU4voU5oHc36eyYU5WHsvZ20k7L801v9IJkr_oZExd1tL55Rx4-KUR0NVcW0Kl_2rscCrJl0aceLmuEMHomwgHZm8Km8WDaIGgvF0eB1eYbQxHF0Vx4N5uISMfURVMySUAN78Uq9XPPc8tvcQkNEyfw=w618-h348-no"
                width="300"
                height="223"
                alt="Man working on deck"
              />
            </div>
            <p>
              We understand the excitements and frustrations of doing a remodel
              on your house. Our goal is to make YOUR dreams and visions a
              reality in an efficient way that saves you time and money.
            </p>
          </div>
          <div className="item col-md-3">
            <h3>And More</h3>
            <div className="item__image">
              <img
                src="https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                width="300"
                height="223"
                alt="Man working on deck"
              />
            </div>
            <p>
              Cutter Construction can also take care of the design and
              permitting process, allowing our clients peace of mind knowing
              that we are handling the project as required by the city.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesContent;
