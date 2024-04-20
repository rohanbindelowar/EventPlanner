import React from "react";
import banner from '../../../images/png/logo-no-background.png'
import './styles.css'
export const Banner = () => {
  return (
    <div>
      <section class="banner">
        <div class="container">
          <img
            src={banner}
            alt="banner"
            class="bannerImg"
          />
        </div>
      </section>
    </div>
  );
};
export default Banner;
