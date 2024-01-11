import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiArrowFromRight, BiArrowToRight, BiMailSend, BiPhoneCall, BiQuestionMark, BiSupport } from "react-icons/bi";

const Contacts = () => {
  return (
    <Layout title={"FAQ - Artisan Ecommerce"}>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="/images/contactus.jpeg"
            alt="contactus" 
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-dark p-2 text-white text-center">FAQ</h1>
          <p className="mt-3">
            <BiQuestionMark /> : Q: What products does Pampanga Artisan offer?
            <p><BiArrowToRight /> :A: Pampanga Artisan specializes in a wide range of handcrafted artisan products, including local artworks, handmade crafts, and unique Pampangan creations.</p>
          </p>
          <p className="mt-3">
            <BiQuestionMark /> : Q: How can I place an order on the Pampanga Artisan website?
            <p><BiArrowToRight /> A: To place an order, simply browse our products, add desired items to your cart, and proceed to checkout.</p>
          </p>
          <p className="mt-3">
            <BiQuestionMark /> : Q: What payment methods are accepted?
            <p><BiArrowToRight /> A: The payment method is through bank.</p>
          </p>
          <p className="mt-3">
            <BiQuestionMark /> : Q: Can I track my order once it's placed?
            <p><BiArrowToRight />A: Yes, you can track your order through the provided tracking information. </p>
          </p>
          <p className="mt-3">
            <BiQuestionMark /> : Q: How does shipping work for Pampanga Artisan?
            <p><BiArrowToRight /> A:Shipping is not available to our website. The website was medium for the artisans.</p>
          </p>
          <p className="mt-3">
            <BiQuestionMark /> : Q: How can I reach customer support?
            <p><BiArrowToRight /> A: For any inquiries, assistance, or feedback, you can reach our customer support team through the contact information provided on our website. We're here to help!</p>
          </p>
          <p className="mt-3">
            <BiQuestionMark /> : Q: How do I become a seller on Pampanga Artisans? 
            <p><BiArrowToRight /> A: To become a seller, Contact us through our website or call us through phone.</p>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Contacts;
