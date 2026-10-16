import messageIcon from "@/assets/contact-us/message-icon.png";
import locationIcon from "@/assets/contact-us/location-icon.png";
import phoneIcon from "@/assets/contact-us/phone-icon.png";

export const contact_content = {
  title: "Contact us",
  description:
    "We specialize in delivering innovative software solutions tailored for enterprises. Whether you have questions, need support, or want to discuss your project needs, our dedicated team is ready to assist you.",
  contacts: [
    {
      type: "Send an email",
      image: messageIcon,
      desc: "Our friendly team is here to help.",
      value: "Hello@technolabet.com",
      href: "mailto:Hello@technolabet.com",
    },
    {
      type: "Visit us",
      image: locationIcon,
      desc: "Come say hello at our HQ",
      value: "AG Grace Plaza, 6th floor, 22 Bole",
      href: undefined,
    },
    {
      type: "Call us on",
      image: phoneIcon,
      desc: "Monday – Friday 9am to 5pm",
      value: "+251",
      href: undefined,
    },
  ],
  form: {
    title: "Send a message",
    fields: [
      { name: "name", label: "Your Name", type: "text", autoComplete: "name" },
      { name: "email", label: "Your Email", type: "email", autoComplete: "email" },
      { name: "subject", label: "Subject", type: "text", autoComplete: "off" },
      { name: "message", label: "Message", type: "textarea", autoComplete: "off" },
    ],
    button: {
      label: "Send Message",
    },
  },
};
