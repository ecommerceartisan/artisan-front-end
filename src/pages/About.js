import React from "react";
import Layout from "./../components/Layout/Layout";

const About = () => {
  return (
    <Layout title={"About us - Artisan Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
        <h1>Artisan Ecommerce</h1>
          <p className="text-justify mt-2">
            Welcome to Pampanga Artisan, where the vibrant spirit of Kapampangan artistry meets the global stage. We take pride in being a dedicated platform crafted exclusively for Kapampangan artists, providing them with a unique space to showcase their exceptional products to a worldwide audience.
At Pampanga Artisan, we understand the importance of seamless communication between artists and buyers. That's why we've designed our platform to be not only a showcase but also a hub for easy, secure, and fas
          </p>
        </div>
      </div>
    </Layout>
  );
};

// Default props for the Layout component. These will be used if not provided explicitly.
Layout.defaultProps = {
  title: "Artisan Ecommerce - Shop Now", // Title of the web page
  description: "Handmade products available for online sale", // Description of the web page
  keyword: "handmade, local, ph, etc....", // Keywords for SEO
  author: "sca", // Author information
};

export default About;
