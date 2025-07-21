export const contact_content = {
  title: "Contact us",
  description:
    "We specialize in delivering innovative software solutions tailored for enterprises. Whether you have questions, need support, or want to discuss your project needs, our dedicated team is ready to assist you.",
  contacts: [
    {
      type: "Send an email",
      image: "/images/contact/email.png",
      desc: "Our friendly team is here to help.",
      value: "Hello@technolabet.com",
    },
    {
      type: "Visit us",
      image: "/images/contact/location.png",
      desc: "Come say hello at our HQ",
      value: "AG Grace Plaza, 6th floor, 22 Bole",
    },
    {
      type: "Call us on",
      image: "/images/contact/phone.png",
      desc: "Monday – Friday 9am to 5pm",
      value: "+251",
    },
  ],
  form: {
    title: "Send a message",
    fields: [
      { name: "Your Name", type: "text" },
      { name: "Your Email", type: "email" },
      { name: "Subject", type: "text" },
      { name: "Message", type: "textarea" },
    ],
    button: {
      label: "Send Message",
      icon: "/images/contact/send-icon.png",
    },
  },
};
