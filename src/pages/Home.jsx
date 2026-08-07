import About from "../Components/About";
import Hero from "../Components/Hero";
import Vision from "../Components/Vision";
import WhyChoose from "../Components/WhyChoose";
import Who from "../Components/Who";
import ProcessOverview from "../Components/ProcessOverview";
import FAQ from "../Components/FAQ";
import GetInTouch from "../Components/GetInTouch";
import { Helmet } from "react-helmet-async";


const Home = () => {
  const url = "https://jobsnvisa.com.au/";

  return (
    <>
      <Helmet>
        <title>Jobs N Visa | Hire Talent & Find Skilled Jobs in Australia</title>

        <meta
          name="description"
          content="Jobs N Visa is the leading platform for hiring skilled talent and finding job opportunities in Australia. Get expert support for skilled migration, PR visas, and employer-sponsored visas."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Jobs N Visa | Hire Talent & Find Skilled Jobs in Australia"
        />
        <meta
          property="og:description"
          content="Jobs N Visa is the leading platform for hiring skilled talent and finding job opportunities in Australia. Get expert support for skilled migration, PR visas, and employer-sponsored visas."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://jobsnvisa.com.au/assets/aboutImage.png" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:width" content="630" />
      </Helmet>
      <div>
        <Hero />
        <About />
        <Vision />
        <WhyChoose />
        <Who />
        <ProcessOverview />
        <FAQ />
        <GetInTouch />
      </div>
    </>
  );
};

export default Home;
