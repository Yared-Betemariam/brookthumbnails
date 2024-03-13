import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa6";

const Footer = () => {
  const date = new Date();
  return (
    <div className="w-full px-8 lg:wrapper flex  text-orange-50/60 bg-neutral-900/80 lg:rounded-md py-4 items-center justify-between lg:mb-4">
      <span className="">Copyright &copy; {date.getFullYear()} Brook.</span>
      <div className="flex space-x-4 text-xl">
        <FaTelegram />
        <FaInstagram />
      </div>
    </div>
  );
};
export default Footer;
