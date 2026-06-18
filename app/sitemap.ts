import type { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/siteConfig"

const BASE_URL = SITE_URL

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/about`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/portfolio/couple`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio/maternity`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio/family`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/portfolio/kids`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/pricing`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/testimonials`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/faq`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: "2026-06-17", changeFrequency: "monthly", priority: 0.7 },
  ]
}
