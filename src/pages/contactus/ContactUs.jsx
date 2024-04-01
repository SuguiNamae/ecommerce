import React from "react";
import AdvertismentBar from "../../components/AdvertismentBar/AdvertismentBar";
import Header from "../../components/header/header";
import Currentpath from "../../components/currentpath/Currentpath";
import Footer from "../../components/footer/Footer";
import Rights from "../../components/rights/Rights";
import Contact_Us from "../../components/contact-us/Contact_Us";
import ContactInfoHelp from "../../components/ContactInfoHelp/ContactInfoHelp";

const ContactUs = () => {
  return (
    <div>
      <AdvertismentBar />
      <Header />
      <Currentpath />
      <Contact_Us/>
      <ContactInfoHelp/>
      <Footer />
      <Rights />
    </div>
  );
};

export default ContactUs;
