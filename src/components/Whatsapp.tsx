import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "../../public/assets/img/logo/logo.svg";

const Whatsapp = () => {
  const logoUrl = logo.src;
  return (
    <FloatingWhatsApp
      accountName="Om muruga Printing"
      phoneNumber="+919655449982"
      notificationSound={true}
      avatar={logoUrl}
      darkMode={true}
      style={{ position: "relative", height: "0px!important" }}
      statusMessage="Live chat now"
      chatMessage="Welcome to Om muruga Printing 🤝. How can we help?"
    />
  );
};

export default Whatsapp;
