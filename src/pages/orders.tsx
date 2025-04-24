import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import Orders from "@/ui/components/order-card/orders";
import { Seo } from "@/ui/components/seo/seo";

export default function Home() {
  return (
     <>
        <Seo title="Miam miam" description="Description..." />
     
     
     <Navigation />
     <Orders />
     <Footer />
    
     </>
  );
}