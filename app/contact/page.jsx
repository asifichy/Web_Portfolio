import { MailIcon, HomeIcon, PhoneIcon, PhoneCall } from "lucide-react";
import Form from "@/components/Form";

const Contact = () => {
  return (
    <section className="mb-12 xl:mb-24">
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-no-repeat bg-contain bg-top"></div>
        </div>
        {/* info text & form */}
        <div className="grid xl:grid-cols-2 gap-8">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={20} className="text-primary" />
              <div>asifimtiyajchowdhury@gmail.com</div>
            </div>
            {/* home */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={20} className="text-primary" />
              <div>Dhaka, Bangladesh</div>
            </div>
            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={20} className="text-primary" />
              <div>+8801748298776</div>
            </div>
          </div>
          {/* form */}
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
