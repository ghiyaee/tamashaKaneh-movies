import { BsTelegram } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';
import { AiTwotoneMail } from 'react-icons/ai';
const Footer = () => {
  return (
    <footer className="h-[20vh] wx-[100vw] bg-zinc-800 flex justify-center items-center
     text-cyan-50 p-2 lg:text-[2rem]  ">
      <div className="flex gap-5">
        <AiFillLinkedin />
        <AiTwotoneMail />
        <BsWhatsapp />
        <BsTelegram />
        <BsInstagram />
      </div>
    </footer>
  );
};

export default Footer;
