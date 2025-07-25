import { contact_content } from "@/content/contactUs.content";
import { Container } from "../container";
import { Typography } from "../Typography";
import contactUsBg from "@/assets/contact-us/bg-blur.svg";
import Image from "next/image";
import { Footer } from "../footer";
import { footer_content } from "@/content/footer.content";

export default function ContactUs() {
  return (
    <Container
      className="h-screen pb-[15px] relative overflow-clip"
      // style={{
      //   backgroundImage: `url(${contactUsBg.src})`,
      //   backgroundPosition: "right",
      //   backgroundSize: "55% 100%",
      //   backgroundRepeat: "no-repeat",
      // }}
    >
      <Container className="basic-container absolute inset-0 main-contact-bg" />
      <Container className="flex justify-between gap-x-[165px] items-center basic-container h-full">
        {/* left side */}
        <Container as="article" className="basic-container w-full">
          <Container as="article" className="basic-container">
            <Typography
              size="large"
              type="title"
              className="hero-title-gradient"
            >
              {contact_content.title}
            </Typography>
            <Typography
              size="sub-desc"
              type="sub"
              className="mt-2 text-base-70"
            >
              {contact_content.description}
            </Typography>
          </Container>
          <Container className="basic-container mt-[43px]">
            {contact_content.contacts.map((contact, index) => (
              <Container
                as="article"
                key={index}
                className="flex items-center gap-x-3 mt-6 basic-container"
              >
                <Image
                  src={contact.image}
                  alt={contact.type}
                  width={50}
                  height={50}
                  className="self-start w-[50px] h-[50px]"
                />
                <article className="flex flex-col gap-y-[8px]">
                  <Typography
                    size="sub-desc"
                    type="title"
                    className="text-secondary-main"
                  >
                    {contact.type}
                  </Typography>
                  <Typography
                    size="sub-desc"
                    type="sub"
                    className="text-base-70"
                  >
                    {contact.desc}
                  </Typography>
                  <Typography
                    size="sub-desc"
                    type="sub"
                    className="text-white font-semibold"
                  >
                    {contact.value}
                  </Typography>
                </article>
              </Container>
            ))}
          </Container>
        </Container>
        {/* right side */}
        {/* <Container as="article" className="absolute inset-0 bg-orange-300" /> */}
        <Container className="relative basic-container h-full w-full flex items-center">
          {/* <Container
            className="absolute inset-0 "
            style={{
              backgroundImage: `url(${contactUsBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          /> */}
          <Container
            as="article"
            className="relative group w-full max-h-[592px] h-full rounded-[30px] overflow-hidden"
          >
            <Container className="basic-container absolute inset-0 contact-us-form"></Container>
            {/* SVG Blur Background */}

            <Container className="basic-container bg-[#0e022400] py-0 absolute inset-[2px] rounded-[30px] z-20 px-8 lg:px-8">
              <Container className="py-0 px-8 lg:px-8 absolute inset-0 flex flex-col items-center justify-center text-center gap-y-2 cards-gradient"></Container>
            </Container>
          </Container>
        </Container>
      </Container>
      {/* <Footer /> */}
    </Container>
  );
}
