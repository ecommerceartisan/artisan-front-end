import React from "react";
import Layout from "./../components/Layout/Layout";
import { BiArrowToRight } from "react-icons/bi";
import "../styles/faq.css"; 

const policy = () => {
  return (
    <Layout title={"FAQ - Artisan Ecommerce"}>
      <div className="row contactus" style={{ marginBottom: "20px" }}>
        <div className="col-md-6 d-flex align-items-center justify-content-center">
          <div className="faq-container">
            <h1 className="bg-dark p-2 text-white text-center mb-4">Private Policy</h1>
            <h6>Thank you for choosing to shop with Pampanga Artisans. We are committed to protecting your privacy and ensuring that your personal information is handled in a secure and responsible manner. This Privacy Policy outlines the types of personal information we collect, how we use it, and the measures we take to safeguard your data.</h6>
            <ul className="policy-list">
              <li>
                <BiArrowToRight /> 1. Information We Collect?
                <p><BiArrowToRight /> 1.1. Personal Information: When you create an account, place an order, or interact with our website, we may collect personal information such as your name, address, email, phone number, and payment details.</p>
              </li>
              <li>
                <BiArrowToRight /> 2. How We Use Your Information.
                <p><BiArrowToRight /> 2.1. Order Processing: We use your personal information to process and fulfill your orders, communicate order updates, and handle customer service inquiries.</p>
                <p><BiArrowToRight /> 2.2. Account Management: Your account information is used for account setup, and to personalize your experience on our website</p>
              </li>
              <li>
                <BiArrowToRight /> 3. Information Sharing
                <p><BiArrowToRight /> 3.1. Third-Party Service Providers: We may share your information with trusted third-party service providers to assist with order fulfillment, payment processing, and other essential services.</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-md-6">
          <ul className="policy-list">
          <li>
                <BiArrowToRight /> 4. Data Security
                <p><BiArrowToRight />4.1. SSL Encryption: We use an SSL encryption to protect your personal and financial information during transmission.</p>
                <p><BiArrowToRight /> 4.2. Secure Payment Processing: Our payment gateways adhere to strict security standards to ensure the safety of your payment details</p>
              </li>
            <li>
              <BiArrowToRight /> 5. Your Choices
              <p><BiArrowToRight />5.1. Account Information: You can review and update your account information by logging into your account on our website.</p>
            </li>
            <li>
              <BiArrowToRight /> 6. Contact Us 
              <p><BiArrowToRight />If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at www.help@artisanecommerce.com.ph
Thank you for entrusting Pampanga Artisans with your information. We value your privacy and are committed to maintaining the trust you place in us.</p>
            </li>
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export default policy;
