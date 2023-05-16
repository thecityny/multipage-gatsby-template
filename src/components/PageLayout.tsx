import React from "react";

import Logo from "../assets/images/logo.svg";
import LogoSmall from "../assets/images/logo-small.svg";
import TwitterIcon from "../assets/images/social-icons/twitter.svg";
import InstagramIcon from "../assets/images/social-icons/instagram.svg";
import FacebookIcon from "../assets/images/social-icons/facebook.svg";
import { Helmet } from "react-helmet";

import "../styles/app.scss";

const Header = () => (
  <nav className="nav">
    <div className="nav-container">
      <div className="nav-logo">
        <a href="https://thecity.nyc/" aria-label="THE CITY">
          <Logo />
        </a>
      </div>
      <div className="nav-title"></div>
      <div className="nav-links">
        <a href="https://checkout.fundjournalism.org/memberform?&org_id=thecity&campaign=7011U000000VXZIQA4">
          Donate
        </a>
      </div>
    </div>
  </nav>
);

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="container">
      <div className="footer">
        <div className="footer-logo">
          <a href="https://thecity.nyc/" aria-label="THE CITY">
            <LogoSmall />
          </a>
        </div>
        <div className="footer-icons">
          <a
            className="twitter"
            aria-label="Twitter"
            href="https://twitter.com/intent/follow?screen_name=TheCityNY"
          >
            <TwitterIcon />
          </a>
          <a
            className="instagram"
            aria-label="Instagram"
            href="https://www.instagram.com/thecityny"
          >
            <InstagramIcon />
          </a>
          <a
            className="facebook"
            aria-label="Facebook"
            href="https://www.facebook.com/thecityny"
          >
            <FacebookIcon />
          </a>
        </div>
        <ul className="footer-links">
          <li>
            <a href="https://thecity.nyc/about/us.html">About</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/membership.html">Donate</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/team.html">Team</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/supporters.html">Funders</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/ethics.html">Ethics</a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/republish-our-work.html">
              Republishing
            </a>
          </li>
          <li>
            <a href="https://thecity.nyc/about/contact-us.html">Contact</a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/legal/terms-of-use">
              Terms of Use
            </a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/legal/privacy-notice">
              Privacy Notice
            </a>
          </li>
          <li>
            <a href="https://www.thecity.nyc/legal/cookie-policy">
              Cookie Policy
            </a>
          </li>
        </ul>
        <div className="copyright">© {year}, THE CITY. All Rights Reserved</div>
      </div>
    </footer>
  );
};

type MetadataProps = {
  slug?: string;
  siteName?: string;
  shareImage?: string;
  seoHeadline?: string;
  seoDescription?: string;
  socialHeadline?: string;
  socialDescription?: string;
  author?: {
    name: string;
    url: string;
    "@type": string;
  }[];
};

/**
 * This component wraps child components with a header and footer and adds site metadata
 */
export const PageLayout: React.FC<{
  children: React.ReactNode;
  customMetadata?: MetadataProps;
}> = ({ children, customMetadata }) => {
  const slug = customMetadata?.slug || process.env.GATSBY_SLUG;
  const url = `${process.env.GATSBY_DOMAIN}${slug}`;

  const siteName = customMetadata?.siteName || process.env.GATSBY_SITE_NAME;
  const shareImage = customMetadata?.shareImage || "social-image.jpg";
  const seoHeadline =
    customMetadata?.seoHeadline || process.env.GATSBY_SEO_HEADLINE;
  const seoDescription =
    customMetadata?.seoDescription || process.env.GATSBY_SEO_DESCRIPTION;
  const socialHeadline =
    customMetadata?.socialHeadline || process.env.GATSBY_SOCIAL_HEADLINE;
  const socialDescription =
    customMetadata?.socialDescription || process.env.GATSBY_SOCIAL_DESCRIPTION;
  const author = customMetadata?.author || process.env.GATSBY_AUTHOR;

  return (
    <article>
      <Header />
      <Helmet>
        <title>{`${siteName} - THE CITY`}</title>
        <meta name="theme-color" content="#000000" />
        <meta name="description" content={seoDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content={socialHeadline} />
        <meta property="og:description" content={socialDescription} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={shareImage} />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en-US" />

        <meta property="twitter:title" content={socialHeadline} />
        <meta property="twitter:description" content={socialDescription} />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:image" content={shareImage} />
        <meta property="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "http://schema.org",
            "@type": "NewsArticle",
            headline: { seoHeadline },
            image: {
              "@type": "ImageObject",
              contentUrl: { shareImage },
              url: { shareImage },
              representativeOfPage: true,
            },
            dateCreated: `${process.env.GATSBY_PUB_DATE}`,
            datePublished: `${process.env.GATSBY_PUB_DATE}`,
            dateModified: `${process.env.GATSBY_UPDATE_DATE}`,
            mainEntityOfPage: { url },
            description: { seoDescription },
            publisher: {
              "@type": "Organization",
              name: { siteName },
              url: "https://www.thecity.nyc/",
            },
            author: { author },
          })}
        </script>
      </Helmet>
      {children}
      <Footer />
    </article>
  );
};
