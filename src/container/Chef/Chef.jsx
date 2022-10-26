import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    {/* image */}
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    {/* content */}
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      {/* quote */}
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="chef quote" />
          <p className="p__opensans">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <p className="p__opensans">
          Consequatur, incidunt. Enim sunt optio rerum officia placeat natus
          expedita. Eveniet mollitia quam voluptate possimus sapiente
          consectetur perspiciatis officia ipsum! Perferendis repudiandae quo
          sed doloremque aspernatur consequatur, ipsum vel totam incidunt
          maiores, iusto, recusandae beatae exercitationem blanditiis. Dolore
          magni quod sequi officia?
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="signature" />
      </div>
    </div>
  </div>
);

export default Chef;
