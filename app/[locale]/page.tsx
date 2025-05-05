import { BenefitsSection } from "@/components/sections/benefits";
import { CommunitySection } from "@/components/sections/community";
import { FAQSection } from "@/components/sections/faq";
import { FeaturesSection } from "@/components/sections/features";
import { FooterSection } from "@/components/sections/footer";
import HeroSection from "@/components/sections/hero";


import { ServicesSection } from "@/components/sections/services";
import { SponsorsSection } from "@/components/sections/sponsors";
import { TestimonialSection } from "@/components/sections/testimonial";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {
  const t = await getTranslations("HomePage");
  return (
    <>
      <h1>{t("title")}</h1>
      <Link href='/contact'>{t("contact")}</Link>

      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />

      <TestimonialSection />
      <CommunitySection />
      <FAQSection />
      <FooterSection />
    </>
  );
}
