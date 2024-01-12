import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiArrowToRight, BiQuestionMark } from "react-icons/bi";
import "../styles/faq.css"; 

const Contacts = () => {
  return (
    <Layout title={"FAQ - Artisan Ecommerce"}>
      <div className="row contactus" style={{ marginBottom: "20px" }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="faq-container">
            <h1 className="bg-dark p-2 text-white text-center mb-4">FAQ</h1>
            <ul className="faq-list">
              <li>
                <BiQuestionMark /> Q: What products does Pampanga Artisan offer?
                <p><BiArrowToRight /> A: Pampanga Artisan specializes in a wide range of handcrafted artisan products, including local artworks, handmade crafts, and unique Pampangan creations.</p>
              </li>
              <li>
                <BiQuestionMark /> Q: How can I place an order on the Pampanga Artisan website?
                <p><BiArrowToRight /> A: To place an order, simply browse our products, add desired items to your cart, and proceed to checkout.</p>
              </li>
              <li>
                <BiQuestionMark /> Q: What payment methods are accepted?
                <p><BiArrowToRight /> A: The payment method is through the bank.</p>
              </li>
              <li>
                <BiQuestionMark /> Q: Can I track my order once it's placed?
                <p><BiArrowToRight />A: Yes, you can track your order through the provided tracking information. </p>
              </li>
              <li>
                <BiQuestionMark /> Q: How does shipping work for Pampanga Artisan?
                <p><BiArrowToRight /> A: Shipping is not available on our website. The website was a medium for the artisans.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="faq-list">
            <li>
              <BiQuestionMark /> Q: How can I reach customer support?
              <p><BiArrowToRight /> A: For any inquiries, assistance, or feedback, you can reach our customer support team through the contact information provided on our website. We're here to help!</p>
            </li>
            <li>
              <BiQuestionMark /> Q: How do I become a seller on Pampanga Artisans? 
              <p><BiArrowToRight /> A: To become a seller, contact us through our website or call us through the phone.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
