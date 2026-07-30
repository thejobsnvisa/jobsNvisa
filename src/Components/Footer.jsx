import logo from "../assets/logo.svg";
import facebookIcon from "../assets/Facebook.svg";
import linkdinIcon from "../assets/Linkdin.svg";
import youtubeIcon from "../assets/Youtube.svg";
import instagramIcon from "../assets/Instagram.svg";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/Phone.svg";
import locationIcon from "../assets/Location.svg";
import xIcon from "../assets/X.svg";
import { Link } from "react-router-dom";

const socialIcons = [
  { src: facebookIcon, alt: "facebook", href: "https://www.facebook.com/thejobsnvisa/about/?id=61579092253323&sk=about#" },
  { src: linkdinIcon, alt: "linkedin", href: "https://au.linkedin.com/company/the-jobs-n-visa-pty-ltd?trk=public_post_feed-actor-image" },
  { src: youtubeIcon, alt: "youtube", href: "https://www.youtube.com/@JobsNVisa" },
  { src: instagramIcon, alt: "instagram", href: "https://www.instagram.com/jobsnvisa/" },
  { src: xIcon, alt: "x", href: "https://x.com/thejobsnvisa" },
];

const Footer = () => {
  return (
    <div className="w-full rounded-tl-[30px] rounded-tr-[30px] lg:rounded-tl-[30px] lg:rounded-tr-[30px] bg-[#e4ffec] mt-10">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 py-16">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="w-full lg:max-w-[331px]">
            <img src={logo} alt="logo" className="w-[183px] h-[48px]" />
            <p className="mt-4 text-base text-black">
              Your gateway to career excellence in Australia
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {socialIcons.map(({ src, alt, href }) => (
                <a
                  key={alt}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="h-[50px] w-[50px] rounded-[18px] border border-green-200 bg-green-200/70 flex items-center justify-center"
                >
                  <img src={src} alt={alt} className="h-[30px] w-[30px]" />
                </a>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/brochures"
                aria-label="Brochures"
                className="inline-flex items-center justify-center rounded-tl-[12px] rounded-tr-[12px] rounded-bl-[12px] bg-green-200 px-10 py-3 text-sm font-semibold text-green-800"
              >
                Brochures
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-auto min-w-[180px]">
            <h3 className="text-[18px] font-bold text-green-900">Support</h3>
            <div className="mt-4 space-y-3 text-base text-green-800">
              <Link to="/help-center" className="block hover:underline">
                Help Center
              </Link>
              <Link to="/privacy-policy" className="block hover:underline">
                Privacy Policy
              </Link>
              <Link to="/terms" className="block hover:underline">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="block hover:underline">
                Cookie Policy
              </Link>
            </div>
          </div>

          <div className="w-full sm:w-auto min-w-[220px]">
            <h3 className="text-[18px] font-bold text-green-900">Contact Info</h3>
            <div className="mt-4 space-y-3 text-base text-green-800">
              <a href="tel:+61387643335" className="flex items-center gap-2 hover:underline">
                <img src={phoneIcon} alt="phone" className="h-6 w-6" />
                <span>+61 3 8764 3335</span>
              </a>
              <a href="mailto:info@jobsnvisa.com.au" className="flex items-center gap-2 hover:underline">
                <img src={emailIcon} alt="email" className="h-6 w-6" />
                <span>info@jobsnvisa.com.au</span>
              </a>
              <a href="https://maps.google.com/?q=Sydney,Melbourne,Brisbane" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:underline">
                <img src={locationIcon} alt="location" className="h-6 w-6" />
                <span>Sydney, Melbourne, Brisbane</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-green-200 pt-8 pb-4 text-center text-base text-gray-500 w-full">
          © 2026 JobsNVisa. All rights reserved.
          <br />
          Licensed Migration Agent | Registered Employment Services
        </div>
      </div>
    </div>
  );
};

export default Footer;
