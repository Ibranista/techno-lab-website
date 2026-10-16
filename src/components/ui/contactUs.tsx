import Image from "next/image";
import { contact_content } from "@/content/contactUs.content";
import { footer_content } from "@/content/footer.content";
import { Panel } from "../panel";
import { Typography } from "../Typography";
import { ArrowButton } from "./arrowButton";

const fieldClass =
  "w-full border-b border-white/30 bg-transparent pb-2 text-white outline-none transition-colors focus:border-secondary-main";

export default function ContactUs() {
  const { form } = contact_content;

  return (
    <Panel id="contact" label="Contact" className="overflow-hidden">
      <div aria-hidden className="brand-glow top-[-10%] right-[5%] h-[120%] w-[min(520px,80vw)] -rotate-[15deg] opacity-50" />

      <div className="relative flex flex-col gap-10 px-7 pt-24 pb-6 lg:px-[72px] paged:h-full paged:pt-[clamp(6rem,13vh,8rem)]">
        <div className="grid flex-1 items-center gap-12 lg:grid-cols-[1fr_minmax(0,560px)] lg:gap-20">
          {/* Left: intro + contact methods */}
          <div className="grid gap-10">
            <div className="grid gap-3">
              <Typography as="h2" type="title" size="large" className="hero-title-gradient" data-reveal>
                {contact_content.title}
              </Typography>
              <Typography type="sub" size="sub-desc" className="max-w-[460px] text-base-70" data-reveal>
                {contact_content.description}
              </Typography>
            </div>

            <ul className="grid gap-6">
              {contact_content.contacts.map((contact) => (
                <li key={contact.type} data-reveal className="flex items-start gap-4">
                  <Image src={contact.image} alt="" width={48} height={48} className="h-12 w-12 shrink-0" />
                  <div className="grid gap-1">
                    <Typography as="h3" size="sub-desc" type="title" className="text-secondary-main">
                      {contact.type}
                    </Typography>
                    <Typography size="sub-desc" type="sub" className="text-base-70">
                      {contact.desc}
                    </Typography>
                    <Typography size="sub-desc" type="sub" className="font-semibold">
                      {contact.href ? (
                        <a href={contact.href} className="transition-colors hover:text-secondary-main">
                          {contact.value}
                        </a>
                      ) : (
                        contact.value
                      )}
                    </Typography>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: form */}
          <div
            data-reveal
            className="gradient-border glass-card rounded-[28px] p-6 [--border-opacity:0.5] focus-within:[--border-opacity:1] sm:p-10"
          >
            <Typography as="h3" type="title" size="large" className="text-gradient-silver">
              {form.title}
            </Typography>
            <form className="mt-8 grid gap-7 sm:grid-cols-2">
              {form.fields.map((field) => {
                const wide = field.type === "textarea" || field.name === "subject";
                return (
                  <div key={field.name} className={wide ? "sm:col-span-2" : undefined}>
                    <label htmlFor={field.name} className="mb-2 block text-sm text-white/80">
                      {field.label}
                    </label>
                    {field.type === "textarea" ? (
                      <textarea id={field.name} name={field.name} rows={3} required className={`${fieldClass} resize-none`} />
                    ) : (
                      <input
                        id={field.name}
                        name={field.name}
                        type={field.type}
                        autoComplete={field.autoComplete}
                        required
                        className={fieldClass}
                      />
                    )}
                  </div>
                );
              })}
              <ArrowButton type="submit" className="justify-self-end sm:col-span-2">
                {form.button.label}
              </ArrowButton>
            </form>
          </div>
        </div>

        <footer className="flex flex-wrap justify-between gap-2 border-t border-white/10 pt-5">
          <Typography type="sub" size="small" className="text-base-70">
            {footer_content.copyright}
          </Typography>
          <Typography type="sub" size="small" className="text-base-70">
            {footer_content.companyName}
          </Typography>
        </footer>
      </div>
    </Panel>
  );
}
