import AboutUs from "@/components/About-us/AboutUs";
import Header from "../components/Header/Navbar";
import React from "react";
import AfterHeroCards from "@/components/After-hero-sec/AfterHeroCards";
import HeroSection from "@/components/Hero/HeroSection";
import Branding from "@/components/Branding/Branding";
import VideoTestimonialsSection from "@/components/Testimonials/VideoTestimonials";
import Testimonials2 from "@/components/Testimonials/Testimonials2";
import SalesTeamSection from "@/components/SalesTeamSection/SalesTeamSection";
import HeroBackgroundImage from "../components/Header/HeroBackgroundImage";
import BottomGoogleMeetSection from "../components/BottomSections/BottomGoogleMeetSection";
import WeeklyTimeline from "../components/WeeklyOverviewCard/WeeklyTimeline";
import BottomTT2 from "../components/BottomSections/BottomTT2";
import Footer from "@/components/Footer/Footer";



export default function SalesPage() {
  return (
    <div className="w-full bg-black-900 ">
      <div className=" flex flex-col items-center">
        <div className="relative h-[73.13rem] self-stretch md:h-auto">
          {/* sales section */}
          <HeroBackgroundImage />
          <div className="absolute  left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[4.88rem] md:gap-[3.63rem] sm:gap-[2.44rem]">
            <div className="container-xs md:px-[1.25rem]">
              <Header />
            </div>
            <div className="flex flex-col items-center gap-[3.13rem] self-stretch">
              <div className="container-xs flex flex-col items-center gap-[3.13rem] px-[3.50rem] md:px-[1.25rem]">

                <HeroSection />


              </div>

              {/* sales section */}
              <div className=""><Branding /></div>
            </div>
          </div>
        </div>
        <div className="container-xs mt-[9.38rem] flex flex-col gap-[9.38rem] md:gap-[7.00rem] md:px-[1.25rem] sm:gap-[4.69rem]">
          <div  className="flex flex-col gap-[9.38rem] px-[0.38rem] md:gap-[7.00rem] sm:gap-[4.69rem]">
            <div className="md:py-20">
              <AfterHeroCards />
             </div>
            {/* About us section */}
            <div id="about" className="md:py-10"> <AboutUs /></div>
           

          </div>
        </div>

        {/* video testimonials section */}
        <div id="reviews">  <VideoTestimonialsSection /></div>

        {/* WeeklyTimeline */}
        <WeeklyTimeline />

        {/* sales team section */}
        <div id="services"><SalesTeamSection /></div>

        {/* testimonials section */}
        <div id="case-studies"> <Testimonials2 /></div>
       

        {/*bottom to top 2 no sec */}
        <BottomTT2 />

        {/* BottomGoogleMeetSection */}
        <BottomGoogleMeetSection />
        <Footer />

      </div>
    </div>
  );
}
