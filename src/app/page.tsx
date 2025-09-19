"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import NumberGridTokenomics from '@/components/sections/layouts/tokenomics/NumberGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: 'hero', id: 'hero' },
            { name: 'about', id: 'about' },
            { name: 'how-to-buy', id: 'how-to-buy' },
            { name: 'tokenomics', id: 'tokenomics' },
            { name: 'faq', id: 'faq' },
            { name: 'footer', id: 'footer' }
          ]}
          logoSrc="/images/logo.svg"
          buttonText="Get Early Access"
          onButtonClick={() => { /* Handle click */ }}
          className="navbar" 
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero
          title="Welcome to TrendWave"
          description="Your gateway to innovative SaaS solutions."
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about">
        <SocialsAbout
          title="About Us"
          descriptions={["We provide top-notch SaaS solutions.", "Join us in revolutionizing digital services.", "Get the best tools for your business."]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy">
        <HowToBuy2D variant="reveal" />
      </div>

      <div id="tokenomics" data-section="tokenomics">
        <NumberGridTokenomics
          title="Tokenomics Overview"
          description="Explore our token structure and benefits."
          kpiItems={[
            { value: '1M', description: 'Total Supply' },
            { value: '500k', description: 'Market Liquidity' },
            { value: '5%', description: 'Tax on Transactions' }
          ]}
        />
      </div>

      <div id="faq" data-section="faq">
        <CentralFAQ
          items={[
            { title: 'What is TrendWave?', content: 'TrendWave is a leading SaaS solution provider.' },
            { title: 'How does it work?', content: 'We simplify digital services for businesses.' },
            { title: 'Contact support?', content: 'You can reach us at support@trendwave.com.' }
          ]}
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: 'Services', items: [{ label: 'Consulting', onClick: () => { /* Handle click */ } }] },
            { title: 'About Us', items: [{ label: 'Company', onClick: () => { /* Handle click */ } }] },
            { title: 'Support', items: [{ label: 'Help Center', onClick: () => { /* Handle click */ } }] }
          ]}
          copyrightText="© 2023 TrendWave. All rights reserved."
          onPrivacyClick={() => { /* Handle click */ }}
          className="footer"
        />
      </div>
    </SiteThemeProvider>
  );
}