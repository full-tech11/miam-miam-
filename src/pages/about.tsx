import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
/*import { Container } from "@/ui/components/seo/container/container";*/
import { Seo } from "@/ui/components/seo/seo";
import AboutSection from "@/ui/modules/about-section/about-section";
export default function Home() {
    return (
       <>
          <Seo title="Miam miam" description="Description..." />
       
       <Navigation />
       <AboutSection />
       <Footer />
      
       </>
    );
  }
  