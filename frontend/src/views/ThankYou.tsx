import Navbar from "../components/MainPage/Navbar";
import Footer from "../components/MainPage/Footer";
import { RiMailSendLine } from "react-icons/ri";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <>
      <Navbar />
      <div className="thank-you-container">
        <div>
          <h1 className="thank-you-header">Thank You!</h1>
          <h2 className="thank-you-subheader">
            Your order was completed successfully.
          </h2>
          <RiMailSendLine className="email-icon" />
        </div>
        <div className="thank-you-container">
          <p className="thank-you-message">
            An email receipt including the details about your order has been
            sent to the email address provided.
          </p>
          <p className="thank-you-message">
            You can visit your account page at any time to check the status of
            your order.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ThankYou;
