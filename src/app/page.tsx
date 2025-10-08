"use client";
import { SiteTheme, SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SimpleHero from '@/components/sections/layouts/hero/FrameHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import BigNumberTokenomics from '@/components/sections/layouts/tokenomics/BigNumberTokenomics';
import RevealFooter from '@/components/sections/layouts/footer/RevealFooter';
import { Globe } from '@/components/bento/contents/Globe';

const theme: SiteTheme = {
  styleVariant: "funAndTrendy",
  colorTemplate: 1,
  textAnimation: "slide",
};

export default function Home() {
  return (
    <SiteThemeProvider theme={theme}>
      <div id="nav" data-section="nav">
        <NavbarBase
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759919625074-52e3fc8f.jpg"
          logoAlt="MemeCoinX Logo"
          leftButtonText=""
          rightButtonText="Buy MemeCoinX"
          onLeftButtonClick={() => {}}
          onRightButtonClick={() => {}}
          className=""
          containerClassName=""
          logoClassName=""
          buttonClassName=""
          buttonContentClassName=""
          buttonBgColor=""
          buttonHoverBgColor=""
          buttonTextColor=""
          buttonHoverTextColor=""
        />
      </div>
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SimpleHero
          title="MemeCoinX — The Meme Coin You Can Actually Hold Today"
          description="A playful, community-driven token built for laughs and real on-chain momentum. Simple buy steps, transparent tokenomics, and vibes that never quit."
          primaryButtonText="Buy MemeCoinX"
          secondaryButtonText="Learn more"
          backgroundImage="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/draw-a-cartoon-desert-landscape-in-16-9--1759919623094-051721c4.jpg"
          backgroundImageAlt="MemeCoinX Hero Section"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SplitAbout
          description="MemeCoinX is a playful memecoin built by the community for the community. It embraces humor, creativity, and open dialogue around crypto. The project focuses on accessibility and transparency, with clear buy steps, simple tokenomics, and a friendly, inclusive vibe."
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
          step1={{ title: "Get a crypto wallet", description: "Install a wallet like MetaMask or your favorite app to hold MemeCoinX." }}
          step2={{ title: "Fund your wallet", description: "Add funds (ETH/your local currency via swaps) to swap for MemeCoinX." }}
          step3={{ title: "Swap for MemeCoinX", description: "Visit a trusted exchange or DEX and swap into MemeCoinX." }}
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <BigNumberTokenomics
          title="Tokenomics"
          description="MemeCoinX aims for fun with real-world use, balanced incentives, and community-driven governance."
          kpiItems={[
            { value: "1,000,000,000 MCX", description: "Total supply", longDescription: "Long description example", icon: Globe },
            { value: "2% per transaction", description: "Redistribution", longDescription: "Long description example", icon: Globe },
            { value: "3% to LP", description: "Liquidity", longDescription: "Long description example", icon: Globe },
            { value: "Q3 2025", description: "Launch date", longDescription: "Long description example", icon: Globe }
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <RevealFooter
          logoSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_30ordogEOn7VO6LZdIWb5atLXky/design-a-simple-high-contrast-logo-for-m-1759919625074-52e3fc8f.jpg"
          logoAlt="MemeCoinX Logo"
          copyrightText="© 2025 MemeCoinX. All memes reserved."
          columns={[
            { title: "About MemeCoinX", items: [ { label: "About MemeCoinX", onClick: () => {} }, { label: "How to Buy", onClick: () => {} }, { label: "Tokenomics", onClick: () => {} } ]},
            { title: "Terms", items: [ { label: "Terms of Use", onClick: () => {} }, { label: "Privacy Policy", onClick: () => {} }, { label: "Disclaimer", onClick: () => {} } ]},
            { title: "Community", items: [ { label: "Community", onClick: () => {} }, { label: "Roadmap", onClick: () => {} }, { label: "Contact", onClick: () => {} } ]}
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}
