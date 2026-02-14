export interface Project {
  id: string;
  title: string;
  mediaType: "image" | "video";
  mediaSrc: string;
  slug: string;
  role?: string;
  tools?: string[];
  heroMediaType?: "image" | "video";
  heroMediaSrc?: string;
  gallery?: Array<{
    id: string;
    mediaType: "image" | "video";
    mediaSrc: string;
    alt?: string;
  }>;
  results?: string;
}

// Single source of truth for all portfolio projects
export const projects: Project[] = [
  {
    id: "1",
    title: "Project Alpha",
    mediaType: "image",
    mediaSrc: "/images/work-1.jpg",
    slug: "project-alpha",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-1.jpg",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-2.jpg", alt: "Gallery image 1" },
      { id: "2", mediaType: "video", mediaSrc: "/videos/work-1.mp4" },
      { id: "3", mediaType: "image", mediaSrc: "/images/work-3.jpg", alt: "Gallery image 2" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "2",
    title: "Project Beta",
    mediaType: "video",
    mediaSrc: "/videos/work-2.mp4",
    slug: "project-beta",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "video",
    heroMediaSrc: "/videos/work-2.mp4",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-3.jpg", alt: "Gallery image 1" },
      { id: "2", mediaType: "image", mediaSrc: "/images/work-4.jpg", alt: "Gallery image 2" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "3",
    title: "Project Gamma",
    mediaType: "image",
    mediaSrc: "/images/work-3.jpg",
    slug: "project-gamma",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-3.jpg",
    gallery: [
      { id: "1", mediaType: "video", mediaSrc: "/videos/work-3.mp4" },
      { id: "2", mediaType: "image", mediaSrc: "/images/work-5.jpg", alt: "Gallery image 1" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "4",
    title: "Project Delta",
    mediaType: "image",
    mediaSrc: "/images/work-4.jpg",
    slug: "project-delta",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-4.jpg",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-6.jpg", alt: "Gallery image 1" },
      { id: "2", mediaType: "video", mediaSrc: "/videos/work-4.mp4" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "5",
    title: "Project Epsilon",
    mediaType: "video",
    mediaSrc: "/videos/work-5.mp4",
    slug: "project-epsilon",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "video",
    heroMediaSrc: "/videos/work-5.mp4",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-1.jpg", alt: "Gallery image 1" },
      { id: "2", mediaType: "image", mediaSrc: "/images/work-2.jpg", alt: "Gallery image 2" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "6",
    title: "Project Zeta",
    mediaType: "image",
    mediaSrc: "/images/work-6.jpg",
    slug: "project-zeta",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-6.jpg",
    gallery: [
      { id: "1", mediaType: "video", mediaSrc: "/videos/work-5.mp4" },
      { id: "2", mediaType: "image", mediaSrc: "/images/work-3.jpg", alt: "Gallery image 1" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  // Additional projects to match the 12-item grid
  {
    id: "7",
    title: "Project G",
    mediaType: "image",
    mediaSrc: "/images/work-1.jpg",
    slug: "project-g",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-1.jpg",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-2.jpg", alt: "Gallery image 1" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "8",
    title: "Project H",
    mediaType: "video",
    mediaSrc: "/videos/work-1.mp4",
    slug: "project-h",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "video",
    heroMediaSrc: "/videos/work-1.mp4",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-3.jpg", alt: "Gallery image 1" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "9",
    title: "Project I",
    mediaType: "image",
    mediaSrc: "/images/work-2.jpg",
    slug: "project-i",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-2.jpg",
    gallery: [
      { id: "1", mediaType: "video", mediaSrc: "/videos/work-2.mp4" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "10",
    title: "Project J",
    mediaType: "image",
    mediaSrc: "/images/work-3.jpg",
    slug: "project-j",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-3.jpg",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-4.jpg", alt: "Gallery image 1" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "11",
    title: "Project K",
    mediaType: "video",
    mediaSrc: "/videos/work-3.mp4",
    slug: "project-k",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "video",
    heroMediaSrc: "/videos/work-3.mp4",
    gallery: [
      { id: "1", mediaType: "image", mediaSrc: "/images/work-5.jpg", alt: "Gallery image 1" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
  {
    id: "12",
    title: "Project L",
    mediaType: "image",
    mediaSrc: "/images/work-4.jpg",
    slug: "project-l",
    role: "Creative Direction, Design",
    tools: ["Figma", "After Effects", "Cinema 4D"],
    heroMediaType: "image",
    heroMediaSrc: "/images/work-4.jpg",
    gallery: [
      { id: "1", mediaType: "video", mediaSrc: "/videos/work-4.mp4" },
    ],
    results: "This project delivered exceptional results, exceeding client expectations and establishing a new standard for digital experiences.",
  },
];

// Get project by slug
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

// Get project index by slug
export function getProjectIndex(slug: string): number {
  return projects.findIndex((p) => p.slug === slug);
}
