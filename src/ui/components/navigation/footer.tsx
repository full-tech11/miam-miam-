
import { Typography } from "@/ui/design-system/typography/typography";
import { Container } from "../seo/container/container";
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard, FaCcPaypal } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="py-10 bg-gray-900 text-white">
      <Container className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
        
        {/* Section Contact */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Typography variant="h3" theme="white" weight="medium">
            Contact
          </Typography>
          <Typography variant="h3" theme="gray">Adress:  Piazzale della fame, Parma,27</Typography>
          <Typography variant="h3" theme="gray">Phone: +39 334 241 6724</Typography>
          <Typography variant="h3" theme="gray">Email: niamniam@foods.com</Typography>
        </div>

        {/* Section Navigation */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Typography variant="h3" theme="white" weight="medium">
            Navigation
          </Typography>
          <Typography variant="h3" theme="gray">Home</Typography>
          <Typography variant="h3" theme="gray">Menu</Typography>
          <Typography variant="h3" theme="gray">orders</Typography>
          <Typography variant="h3" theme="gray">Privacy policy</Typography>
        </div>

        {/* Section Réseaux Sociaux */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Typography variant="h3" theme="white" weight="medium">
            Follow-us
          </Typography>
          <div className="flex gap-4 mt-2">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaFacebook />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaInstagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Section Paiement */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Typography variant="h3" theme="white" weight="medium">
            Payment Methods
          </Typography>
          <div className="flex gap-4 mt-2 text-3xl">
            <FaCcVisa className="text-gray-400 hover:text-white" />
            <FaCcMastercard className="text-gray-400 hover:text-white" />
            <FaCcPaypal className="text-gray-400 hover:text-white" />
          </div>
        </div>
      </Container>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500">
        <Typography variant="h3" theme="gray">
          © Foods Niam niam. All rights reserved.
        </Typography>
      </div>
    </div>
  );
};
  