import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
/*import { Container } from "@/ui/components/seo/container/container";*/
import { Seo } from "@/ui/components/seo/seo";
import HeroSection from "@/ui/modules/hero-section/hero-section";
import SpecialtiesSlider from "@/ui/modules/specialities-slider/specialities-slider";
/*import { Button } from "@/ui/design-system/button/button";*/
/*import { Spinner } from "@/ui/design-system/spinner/spinner";*/
/*import { Typography } from "@/ui/design-system/typography/typography";*/
/*import { RiUser2Fill } from "react-icons/ri";*/

export default function Home() {
  return (
     <>
        <Seo title="Miam miam" description="Description..." />
     
     
     <Navigation />
     <HeroSection />
     <SpecialtiesSlider />
     <Footer />
    
     </>
  );
}
