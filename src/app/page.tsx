"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleFullscreen from '@/components/navbar/NavbarStyleFullscreen/NavbarStyleFullscreen';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import TextAbout from '@/components/sections/about/TextAbout';
import FeatureCardTwelve from '@/components/sections/feature/FeatureCardTwelve';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCTA from '@/components/sections/contact/ContactCTA';
import FooterBaseReveal from '@/components/sections/footer/FooterBaseReveal';
import { CheckCircle, Coffee, Heart, HelpCircle, Mail, Sparkles, Star } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-shift"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="mediumSmall"
      sizing="largeSmall"
      background="none"
      cardStyle="outline"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="glass"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleFullscreen
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Menu", id: "menu" },
            { name: "Reviews", id: "reviews" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Unna"
          bottomLeftText="Specialty Coffee"
          bottomRightText="hello@unna.coffee"
        />
      </div>

      <div id="hero" data-section="hero" className="bg-gradient-to-br from-background via-card to-background-accent">
        <HeroBillboardCarousel
          title="Craft Your Perfect Brew"
          description="Discover the art of specialty coffee at Unna. Ethically sourced single-origin beans, expertly roasted, and crafted with passion in every cup."
          background={{ variant: "radial-gradient" }}
          tag="Specialty Coffee"
          tagIcon={Coffee}
          tagAnimation="slide-up"
          buttons={[
            { text: "Visit Us Today", href: "#contact" },
            { text: "Explore Menu", href: "#menu" }
          ]}
          buttonAnimation="blur-reveal"
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=iscggv",              imageAlt: "Close-up of premium specialty coffee beans"
            }
          ]}
          className="py-24 md:py-32"
          titleClassName="text-5xl md:text-6xl font-light"
          descriptionClassName="text-lg md:text-xl leading-relaxed"
          containerClassName="max-w-4xl"
        />
      </div>

      <div id="about" data-section="about" className="bg-background">
        <TextAbout
          tag="Our Story"
          tagIcon={Sparkles}
          tagAnimation="opacity"
          title="Unna: Where Coffee Meets Craftsmanship"
          buttons={[
            { text: "Learn More", href: "#" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
          className="py-20 md:py-28"
          titleClassName="text-4xl md:text-5xl font-light"
          containerClassName="max-w-3xl mx-auto text-center"
        />
      </div>

      <div id="features" data-section="features" className="bg-card">
        <FeatureCardTwelve
          features={[
            {
              id: "ethical-sourcing",              label: "Ethically Sourced",              title: "Farm to Cup",              items: [
                "Direct relationships with coffee farmers",                "Fair trade and sustainable practices",                "Transparent sourcing from origin"
              ]
            },
            {
              id: "expert-roasting",              label: "Expert Roasting",              title: "Small Batch Perfection",              items: [
                "Small batch roasting for optimal flavor",                "In-house roastery with precision control",                "Roasted fresh weekly for peak quality"
              ]
            },
            {
              id: "skilled-baristas",              label: "Skilled Baristas",              title: "Crafted with Passion",              items: [
                "Certified specialty coffee professionals",                "Personalized preparation for each order",                "Continuous training and innovation"
              ]
            }
          ]}
          animationType="slide-up"
          title="Why Choose Unna"
          description="We believe great coffee begins with great choices—from the farmer's field to your cup."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Our Commitment"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          className="py-20 md:py-28"
          cardClassName="border-l-4 border-accent"
          textBoxTitleClassName="text-3xl font-light"
          textBoxDescriptionClassName="text-base leading-relaxed"
          containerClassName="max-w-5xl mx-auto"
        />
      </div>

      <div id="products" data-section="products" className="bg-background">
        <ProductCardTwo
          products={[
            {
              id: "single-origin-ethiopia",              brand: "Unna",              name: "Ethiopian Highlands",              price: "$16.99",              rating: 5,
              reviewCount: "128",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=3thdef",              imageAlt: "Ethiopian Highlands single origin coffee"
            },
            {
              id: "house-blend",              brand: "Unna",              name: "House Blend",              price: "$14.99",              rating: 5,
              reviewCount: "256",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=9ko94y",              imageAlt: "Unna House Blend coffee"
            },
            {
              id: "cold-brew-concentrate",              brand: "Unna",              name: "Cold Brew Concentrate",              price: "$12.99",              rating: 5,
              reviewCount: "94",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=4ojint",              imageAlt: "Cold brew concentrate bottle"
            }
          ]}
          carouselMode="buttons"
          gridVariant="three-columns-all-equal-width"
          animationType="scale-rotate"
          title="Our Coffee Selection"
          description="Carefully curated single-origin and blended coffees, roasted to bring out the best in every bean."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Featured Products"
          tagIcon={Sparkles}
          tagAnimation="opacity"
          className="py-20 md:py-28"
          cardClassName="hover:shadow-lg transition-shadow"
          containerClassName="max-w-6xl mx-auto"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-lg leading-relaxed"
        />
      </div>

      <div id="testimonials" data-section="testimonials" className="bg-card">
        <TestimonialCardTwo
          testimonials={[
            {
              id: "testimonial-1",              name: "Sarah Mitchell",              role: "Coffee Enthusiast",              testimonial: "Unna has completely transformed my morning routine. The quality and consistency are unmatched. I've tried many specialty coffee shops, and this is truly the best.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m9zch4",              imageAlt: "Sarah Mitchell enjoying her coffee",              icon: Star
            },
            {
              id: "testimonial-2",              name: "James Chen",              role: "Regular Customer",              testimonial: "The baristas at Unna are incredibly knowledgeable and passionate. They take time to understand what you're looking for and craft the perfect drink every single time.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ih6wkr",              imageAlt: "Barista preparing specialty coffee",              icon: Star
            },
            {
              id: "testimonial-3",              name: "Emma Rodriguez",              role: "Local Business Owner",              testimonial: "I bring clients here for important meetings. The ambiance, the coffee quality, and the exceptional service make every visit memorable. Unna is my go-to spot.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=7t5dzx",              imageAlt: "Friends meeting at Unna coffeeshop",              icon: Star
            },
            {
              id: "testimonial-4",              name: "David Thompson",              role: "Home Brewing Enthusiast",              testimonial: "I started buying their beans for home brewing. The transparency about sourcing and flavor profiles has educated me so much. Worth every penny.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=wr0ggu",              imageAlt: "Premium specialty coffee blend package",              icon: Star
            },
            {
              id: "testimonial-5",              name: "Lisa Park",              role: "Writer & Remote Worker",              testimonial: "This is my favorite place to work from. The WiFi is reliable, the coffee never disappoints, and the atmosphere is perfectly conducive to creativity.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=m9zch4",              imageAlt: "Customer enjoying coffee at Unna",              icon: Star
            },
            {
              id: "testimonial-6",              name: "Marcus Williams",              role: "Specialty Coffee Aficionado",              testimonial: "Finally, a coffeeshop that takes coffee seriously. The sourcing practices, roasting expertise, and barista skills show that Unna genuinely cares about excellence.",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=ih6wkr",              imageAlt: "Expert barista at work",              icon: Star
            }
          ]}
          carouselMode="buttons"
          animationType="blur-reveal"
          title="What Our Customers Say"
          description="Real stories from people who've discovered the Unna difference."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Customer Love"
          tagIcon={Heart}
          tagAnimation="slide-up"
          className="py-20 md:py-28"
          containerClassName="max-w-6xl mx-auto"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-lg leading-relaxed"
          cardClassName="border-l-4 border-accent p-6"
        />
      </div>

      <div id="faq" data-section="faq" className="bg-background">
        <FaqDouble
          faqs={[
            {
              id: "faq-1",              title: "Where do you source your coffee beans?",              content: "We work directly with sustainable farms across Ethiopia, Colombia, Kenya, and Central America. Every bean is ethically sourced and traceable to its origin farm, ensuring fair prices for farmers and quality for you."
            },
            {
              id: "faq-2",              title: "How often is the coffee roasted?",              content: "Our small-batch roasting happens weekly. We roast in small quantities to ensure peak freshness and flavor. Most of our coffee is roasted within 7 days of your purchase."
            },
            {
              id: "faq-3",              title: "Do you offer subscriptions?",              content: "Yes! Our subscription service delivers freshly roasted beans to your door every two weeks. Choose from our rotating selection of single-origins and house blends. You can pause or cancel anytime."
            },
            {
              id: "faq-4",              title: "Are you hiring baristas?",              content: "We're always looking for passionate coffee lovers! Check our website's careers page for current openings, or stop by in person to learn about opportunities at Unna."
            },
            {
              id: "faq-5",              title: "Do you offer private events or catering?",              content: "Absolutely! We offer coffee bar catering for corporate events, weddings, and private gatherings. Contact us to discuss your event and create a customized coffee experience."
            },
            {
              id: "faq-6",              title: "What brewing methods do you recommend at home?",              content: "It depends on your preference and equipment. We recommend pour-over, AeroPress, and French press for highlighting single-origin characteristics. Our baristas are happy to provide brewing guidance with any bean purchase."
            }
          ]}
          title="Frequently Asked Questions"
          description="Everything you need to know about Unna, our coffee, and services."
          faqsAnimation="blur-reveal"
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Common Questions"
          tagIcon={HelpCircle}
          tagAnimation="opacity"
          className="py-20 md:py-28"
          containerClassName="max-w-4xl mx-auto"
          textBoxTitleClassName="text-4xl font-light"
          textBoxDescriptionClassName="text-lg leading-relaxed"
        />
      </div>

      <div id="contact" data-section="contact" className="bg-gradient-to-r from-accent to-background-accent">
        <ContactCTA
          tag="Get In Touch"
          tagIcon={Mail}
          tagAnimation="slide-up"
          title="Ready to Experience Unna?"
          description="Visit our cafe, place an order, or reach out with questions. We'd love to connect with you."
          buttons={[
            { text: "Visit Us", href: "tel:+1234567890" },
            { text: "Order Online", href: "#" }
          ]}
          buttonAnimation="blur-reveal"
          background={{ variant: "radial-gradient" }}
          useInvertedBackground={false}
          className="py-24 md:py-32"
          containerClassName="max-w-2xl mx-auto text-center"
          titleClassName="text-4xl md:text-5xl font-light"
          descriptionClassName="text-lg leading-relaxed"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseReveal
          columns={[
            {
              title: "Company",              items: [
                { label: "About Us", href: "#about" },
                { label: "Our Story", href: "#" },
                { label: "Careers", href: "#" },
                { label: "Blog", href: "#" }
              ]
            },
            {
              title: "Products",              items: [
                { label: "Coffee Beans", href: "#products" },
                { label: "Subscriptions", href: "#" },
                { label: "Merchandise", href: "#" },
                { label: "Gift Cards", href: "#" }
              ]
            },
            {
              title: "Connect",              items: [
                { label: "Contact", href: "#contact" },
                { label: "Instagram", href: "#" },
                { label: "Twitter", href: "#" },
                { label: "Newsletter", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2024 Unna Coffee. All rights reserved."
          className="py-16 md:py-24"
          containerClassName="max-w-6xl mx-auto"
          columnTitleClassName="text-lg font-light mb-4"
          columnItemClassName="text-sm hover:opacity-70 transition-opacity"
        />
      </div>
    </ThemeProvider>
  );
}