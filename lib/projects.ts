export interface Project {
  id: string;
  title: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  slug: string;
  heroMediaType?: "image" | "video";
  heroMediaSrc?: string;
  youtube?: string;
  isShort?: boolean;
  gallery?: Array<{
    id: string;
    mediaType: "image" | "video";
    mediaSrc: string;
    alt?: string;
  }>;
}

// Single source of truth for all work / case study projects
export const projects: Project[] = [
  {
    id: "1",
    title: "Urban Decay | Lips",
    mediaType: "image",
    mediaSrc: "/work/URBAN DECAY - LIPS/UrbanDecay_Behance_1.jpg",
    slug: "urban-decay-lips",
    heroMediaType: "image",
    heroMediaSrc: "/work/URBAN DECAY - LIPS/UrbanDecay_Behance_1.jpg",
    youtube: "SvSlnNKGHm4",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/work/URBAN DECAY - LIPS/UrbanDecay_Behance_1.jpg", alt: "Urban Decay Lips image 1" },
      { id: "2", mediaType: "image", mediaSrc: "/work/URBAN DECAY - LIPS/UrbanDecay_Behance_2.jpg", alt: "Urban Decay Lips image 2" },
      { id: "3", mediaType: "image", mediaSrc: "/work/URBAN DECAY - LIPS/UrbanDecay_Behance_3.jpg", alt: "Urban Decay Lips image 3" },
      { id: "4", mediaType: "image", mediaSrc: "/work/URBAN DECAY - LIPS/UrbanDecay_Behance_5.jpg", alt: "Urban Decay Lips image 4" },
      { id: "5", mediaType: "video", mediaSrc: "https://youtu.be/SvSlnNKGHm4" },
    ],
  },
  {
    id: "2",
    title: "Clior UK | All-in-one Multivitamins",
    mediaType: "image",
    mediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_1.jpg",
    slug: "clior-uk-all-in-one-multivitamins",
    heroMediaType: "image",
    heroMediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_1.jpg",
    youtube: "CJQG8qS7oxM",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_1.jpg", alt: "Clior UK image 1" },
      { id: "2", mediaType: "image", mediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_2.jpg", alt: "Clior UK image 2" },
      { id: "3", mediaType: "image", mediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_3.jpg", alt: "Clior UK image 3" },
      { id: "4", mediaType: "image", mediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_4.jpg", alt: "Clior UK image 4" },
      { id: "5", mediaType: "image", mediaSrc: "/work/CLIOR UK - ALL IN ONE MULTIVITAMINS/Clior_Behance_5.jpg", alt: "Clior UK image 5" },
      { id: "6", mediaType: "video", mediaSrc: "https://youtu.be/CJQG8qS7oxM" },
    ],
  },
  {
    id: "3",
    title: "LYS Beauty | Redefining the Lipstick x Lipliner",
    mediaType: "image",
    mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/LIPS_Behance1.jpg",
    slug: "lys-beauty-redefining-the-lipstick-x-lipliner",
    heroMediaType: "image",
    heroMediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/LIPS_Behance1.jpg",
    youtube: "LacyJhTieRw",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/Image 7.jpg", alt: "LYS Beauty lipstick x lipliner image 1" },
      { id: "2", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/Image 8.jpg", alt: "LYS Beauty lipstick x lipliner image 2" },
      { id: "3", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/Image 9.jpg", alt: "LYS Beauty lipstick x lipliner image 3" },
      { id: "4", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/Image 10.jpg", alt: "LYS Beauty lipstick x lipliner image 4" },
      { id: "5", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/LIPS_Behance1.jpg", alt: "LYS Beauty lipstick x lipliner image 5" },
      { id: "6", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/LIPS_Behance4.jpg", alt: "LYS Beauty lipstick x lipliner image 6" },
      { id: "7", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - Redefining the Lipstick x Lipliner/LIPS_Behance6.jpg", alt: "LYS Beauty lipstick x lipliner image 7" },
      { id: "8", mediaType: "video", mediaSrc: "https://youtu.be/LacyJhTieRw" },
    ],
  },
  {
    id: "4",
    title: "LYS Beauty | Airbrush Concealer",
    mediaType: "image",
    mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/Still_1.png",
    slug: "lys-beauty-airbrush-concealer",
    heroMediaType: "image",
    heroMediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/Still_1.png",
    youtube: "ROJLYDQEp9E",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/Still_1.png", alt: "LYS Beauty Airbrush Concealer image 1" },
      { id: "2", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/Still_4.png", alt: "LYS Beauty Airbrush Concealer image 2" },
      { id: "3", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/Still_5.png", alt: "LYS Beauty Airbrush Concealer image 3" },
      { id: "4", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/Still_6.png", alt: "LYS Beauty Airbrush Concealer image 4" },
      { id: "5", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/StyleFrame1.png", alt: "LYS Beauty Airbrush Concealer image 5" },
      { id: "6", mediaType: "image", mediaSrc: "/work/LYS BEAUTY - AIRBRUSH CONCEALER/StyleFrame2.png", alt: "LYS Beauty Airbrush Concealer image 6" },
    ],
  },
  {
    id: "5",
    title: "Slimelife | Walmart Launch",
    mediaType: "video",
    mediaSrc: "https://youtube.com/shorts/umtuTjLDDEE",
    slug: "slimelife-walmart-launch",
    heroMediaType: "video",
    heroMediaSrc: "https://youtube.com/shorts/umtuTjLDDEE",
    youtube: "umtuTjLDDEE",
    isShort: true,
    gallery: [],
  },
  {
    id: "6",
    title: "Azazie | Bridal FOOH CGI",
    mediaType: "video",
    mediaSrc: "https://www.youtube.com/shorts/KrLamtQ04SI",
    slug: "azazie-bridal-fooh-cgi",
    heroMediaType: "video",
    heroMediaSrc: "https://www.youtube.com/shorts/KrLamtQ04SI",
    youtube: "KrLamtQ04SI",
    isShort: true,
    gallery: [],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}
