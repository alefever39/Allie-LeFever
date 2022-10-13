import { SocialIcon } from "react-social-icons";

function ContactInfo() {
  return (
    <div className="flex bg-red-400 rounded-md justify-around content-center shadow-lg p-2 sm:my-0 md:my-5 sm:mx-0 md:mx-20">
      <h1 className="mt-2 font-bold leading-8 tracking-tight text-gray-900 sm:text-lg md:text-xl">
        Where to find me:
      </h1>
      <SocialIcon url="https://github.com/alefever39" />
      <SocialIcon url="https://www.linkedin.com/in/allie-lefever/" />
      <SocialIcon url="mailto:alefever39@gmail.com" />
    </div>
  );
}

export default ContactInfo;
