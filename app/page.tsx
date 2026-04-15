import { CTA } from "@/components/CTA";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Products } from "@/components/Products";
import { Simulator } from "@/components/Simulator";
import { SocialProof } from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <SocialProof />
        <Products />
        <Simulator />
        <CTA />
      </main>
    </>
  );
}
