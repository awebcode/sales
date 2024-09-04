import React from "react";
import { Metadata } from "next";
import Page from "./Index";

export const metadata: Metadata = {
  title: "Sales Services - Enhance Your Business Skills",
  description:
    "Discover our sales services and learn how to boost your business skills. Read case studies, view testimonials, and schedule a call with our experts today.",
  openGraph: {
    title: "Sales Services - Enhance Your Business Skills",
    description:
      "Discover our sales services and learn how to boost your business skills. Read case studies, view testimonials, and schedule a call with our experts today.",
    images: [{
      url: "/images/img_image_379.png",
    }],
    url: "https://www.sales-asikur.vercel.app",
  },

  twitter: {
    title: "Sales Services - Enhance Your Business Skills",
    description:
      "Discover our sales services and learn how to boost your business skills. Read case studies, view testimonials, and schedule a call with our experts today.",
    card: "summary_large_image",
    images: ["/images/img_image_379.png"],
  },


};

export default function SalesPage() {
  return <Page />;
}
