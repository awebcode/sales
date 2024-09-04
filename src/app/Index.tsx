import AboutUs from "@/components/About-us/AboutUs";
import { Text } from "../components";
import Header from "../components/Header";
import SalesSection2 from "../components/WeeklyOverviewCard/WeeklyTimeline";
import SalesSection3 from "../components/BottomSections/BottomTT2";
import SalesSection4 from "../components/BottomSections/BottomGoogleMeetSection";
import React from "react";
import AfterHeroCards from "@/components/After-hero-sec/AfterHeroCards";
import HeroSection from "@/components/Hero/HeroSection";
import Branding from "@/components/Branding/Branding";
import VideoTestimonialsSection from "@/components/Testimonials/VideoTestimonials";
import Testimonials2 from "@/components/Testimonials/Testimonials2";
import SalesTeamSection from "@/components/SalesTeamSection/SalesTeamSection";
import HeaderTopSection from "../components/Header/HeaderTop";
import BottomGoogleMeetSection from "../components/BottomSections/BottomGoogleMeetSection";
import WeeklyTimeline from "../components/WeeklyOverviewCard/WeeklyTimeline";
import BottomTT2 from "../components/BottomSections/BottomTT2";
import Footer from "@/components/footer/Footer";



export default function SalesPage() {
  return (
    <div className="w-full bg-black-900 ">
      <div className=" flex flex-col items-center">
        <div className="relative h-[73.13rem] self-stretch md:h-auto">
          {/* sales section */}
          <HeaderTopSection />
          <div className="absolute bottom-0 left-0 right-0 top-0 m-auto flex h-max flex-1 flex-col items-center gap-[4.88rem] md:gap-[3.63rem] sm:gap-[2.44rem]">
            <div className="container-xs md:px-[1.25rem]">
              <Header />
            </div>
            <div className="flex flex-col items-center gap-[3.13rem] self-stretch">
              <div className="container-xs flex flex-col items-center gap-[3.13rem] px-[3.50rem] md:px-[1.25rem]">

                <HeroSection />


              </div>

              {/* sales section */}
              <Branding />
            </div>
          </div>
        </div>
        <div className="container-xs mt-[9.38rem] flex flex-col gap-[9.38rem] md:gap-[7.00rem] md:px-[1.25rem] sm:gap-[4.69rem]">
          <div className="flex flex-col gap-[9.38rem] px-[0.38rem] md:gap-[7.00rem] sm:gap-[4.69rem]">
            <AfterHeroCards />
            {/* About us section */}
            <AboutUs />

          </div>
        </div>

        {/* video testimonials section */}
        <VideoTestimonialsSection />

        {/* WeeklyTimeline */}
        <WeeklyTimeline />

        {/* sales team section */}
        <SalesTeamSection />

        {/* testimonials section */}
        <Testimonials2 />

        {/*bottom to top 2 no sec */}
        <BottomTT2 />

        {/* BottomGoogleMeetSection */}
        <BottomGoogleMeetSection />
        <Footer/>

      </div>
    </div>
  );
}
