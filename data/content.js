
// EDIT THIS FILE to make the site yours. No other file needs to change for content.

export const site = {
  name: "Jishnu Vijayan",
  title: "Jishnu Vijayan – Video Editor & Colorist",
  description:
    "Video editor and colorist creating cinematic travel films, personal videos, college films, event videos and music-driven edits.",
  email: "thiagovenv10@gmail.com",
  availability: "Available for freelance projects.",
};

export const hero = {
  headline: "Every frame has a feeling.",
  lede:
    "Video editor and colorist focused on cinematic storytelling, music-driven edits and creating moods through color. From travel films to personal stories, I turn raw footage into visuals that stay with you.",
  captionLeft: "The final look",
  captionRight: "Before the grade",
  labelBefore: "Original footage",
  labelAfter: "Final grade",
  // Put your two video files in /public and reference them here, e.g. "/before.mp4" and "/after.mp4".
  // The slider will autoplay and loop them silently side-by-side.
  // To use still images instead, comment out the video lines and uncomment the image lines below.
  // Optimised videos: H.264 1280×720, ~580 KB and ~947 KB (down from 20 MB / 28 MB originals).
  // Poster JPEGs are shown instantly while videos load (preload="none" defers download until visible).
  beforeVideo: "/before_stream.mp4",
  beforePoster: "/before_poster.jpg",
  afterVideo: "/after_stream.mp4",
  afterPoster: "/after_poster.jpg",
  // beforeImage: "/hero1.png",
  // afterImage: "/hero2.png",
};

export const projects = [
  // image: optional still in /public (e.g. "/salt-road.jpg"). href: your Vimeo or YouTube page.
  // Thumbnails are optimised JPEGs at 800px wide (~50-100 KB each, down from 2+ MB PNGs).
  { title: "Memories in Motion", meta: "Travel film · Edit and color", duration: "00:19", href: "https://www.instagram.com/p/DebTN63TFU7/", image: "/proj1_opt.jpg", colors: ["#12394d", "#2f8a8f", "#f0b36c"], glow: "70%" },
  { title: "Yatra", meta: "Travel film · Vagamon · Edit and color", duration: "00:49", href: "https://www.instagram.com/p/DeDydyWA763/", image: "/proj2_opt.jpg", colors: ["#3b1230", "#a02e5e", "#ff9b6a"], glow: "30%" },
  { title: "Catching cat!", meta: "Personal edit · Color grading", duration: "00:08", href: "https://www.instagram.com/p/Dd8779ATNtK/", image: "/proj3_opt.jpg", colors: ["#1b2e1a", "#6d8a3c", "#f2e08a"], glow: "55%" },
  { title: "The Little Guy!", meta: "Short-form commercial · Edit", duration: "00:45", href: "https://www.instagram.com/p/Db8DmCKzDlp/", image: "/proj4_opt.jpg", colors: ["#1a1c3a", "#4857c9", "#9fe0ff"], glow: "20%" },
  { title: "Good old Days", meta: "College film · Edit and color", duration: "00:43", href: "https://www.instagram.com/p/Da5uu6MgNbd/", image: "/proj5_opt.jpg", colors: ["#3a2410", "#b8692b", "#ffe2b0"], glow: "75%" },
  { title: "Dandeli Ride", meta: "Friends · Color grading", duration: "00:45", href: "https://www.instagram.com/p/DUF__lLj-3j/", image: "/proj6_opt.jpg", colors: ["#202020", "#6b6b6b", "#e8e8e8"], glow: "45%" },
];

export const pipeline = [
  {
    title: "Discover",
    text: "Understand the footage, story, mood and feeling the final video should convey.",
  },
  {
    title: "Edit",
    text: "Select the best shots, shape the story, build the pacing and sync every cut to the music.",
  },
  {
    title: "Color",
    text: "Balance exposure, refine contrast, shape the mood, match shots and create a cohesive cinematic look.",
  },
  {
    title: "Deliver",
    text: "Polish the final video, refine the sound, and export for social media, personal films and events.",
  },
];

export const about = {
  text:
    "I'm Jishnu, a video editor and colorist who loves turning everyday moments into cinematic experiences. I work on travel films, personal videos, college projects, event edits and music-driven sequences. Using DaVinci Resolve, I bring together pacing, music, atmosphere and color to give every video its own identity. For me, editing isn't just about cutting clips — it's about making people feel something.",
  tools: [
    ["Editing", "DaVinci Resolve"],
    ["Color Grading", "DaVinci Resolve Color"],
    ["Visual Effects", "Fusion"],
  ],
};

export const testimonial = {
  quote:
    "Every cut, every beat and every shade of color should make the story feel more alive.",
  by: "My editing philosophy",
};

export const experience = [
  {
    organisation: "Tinkerhub RIT",
    position: "Creative Head — Video Editor",
    period: "2024 — Present",
    works: [
      {
        eventName: "TinkerHub RIT — Speaker Interview",
        eventDate: "Date not shown",
        description: "Authentic portrait interview edit utilizing natural light and clean pacing to spotlight speaker insights.",
        image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
        link: "https://www.instagram.com/p/DWjtdSZk9DO/",
      },
      {
        eventName: "TinkerHack 4.0",
        eventDate: "Date not shown",
        description: "High-energy vertical recap cut with dynamic pacing and rhythmic transitions to capture the hackathon spirit.",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
        link: "https://www.instagram.com/p/DUt4-Gtk5yR/",
      },
      {
        eventName: "TinkerHub RIT — Event Registration Promo",
        eventDate: "Date not shown",
        description: "Social-first promo combining monochrome grading, expressive candid cuts, and bold kinetic type.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80",
        link: "https://www.instagram.com/p/DUcVYdSk5ZG/",
      },
      {
        eventName: "TinkerHack 3.0 — Participant Interviews",
        eventDate: "Date not shown",
        description: "Conversational interview edit spotlighting student voices and community drive through seamless dialogue cuts.",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80",
        link: "https://www.instagram.com/p/DUoIqkvk3ed/",
      },
      {
        eventName: "Impossible Maze! — Creative Coding Showcase",
        eventDate: "Date not shown",
        description: "Technical showcase blending code recordings, procedural maze visuals, and creator interviews into a fluid narrative.",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=800&q=80",
        link: "https://www.instagram.com/p/DSIJhOxkykv/",
      },
    ],
  },
];

export const links = [
  { label: "Instagram", href: "https://www.instagram.com/_jisnu/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jishnu-vijayan-/" },
  
];
