import { footer_content } from "@/content/footer.content";
import { Container } from "./container";
import { Typography } from "./Typography";

export function Footer() {
  return (
    <Container className="flex justify-between px-[10px] py-[10px]">
      <Typography type="sub" size="small" className="text-base-70">
        {footer_content.copyright}
      </Typography>
      <Typography type="sub" size="small" className="text-base-70">
        {footer_content.companyName}
      </Typography>
    </Container>
  );
}
