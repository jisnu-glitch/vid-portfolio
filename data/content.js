
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
  captionLeft: "Before the grade",
  captionRight: "The final look",
  labelBefore: "Original footage",
  labelAfter: "Final grade",
  // Put your two video files in /public and reference them here, e.g. "/before.mp4" and "/after.mp4".
  // The slider will autoplay and loop them silently side-by-side.
  // To use still images instead, comment out the video lines and uncomment the image lines below.
  beforeVideo: "/before.mp4",
  afterVideo: "/after.mp4",
  // beforeImage: "/hero1.png",
  // afterImage: "/hero2.png",
};

export const projects = [
  // image: optional still in /public (e.g. "/salt-road.jpg"). href: your Vimeo or YouTube page.
  { title: "Memories in Motion", meta: "Travel film · Edit and color", duration: "00:19", href: "https://www.instagram.com/p/DebTN63TFU7/", image: "/proj1.png", colors: ["#12394d", "#2f8a8f", "#f0b36c"], glow: "70%" },
  { title: "Yatra", meta: "Travel film · Vagamon · Edit and color", duration: "00:49", href: "https://www.instagram.com/p/DeDydyWA763/", image: "/proj2.png", colors: ["#3b1230", "#a02e5e", "#ff9b6a"], glow: "30%" },
  { title: "Catching cat!", meta: "Personal edit · Color grading", duration: "00:08", href: "https://www.instagram.com/p/Dd8779ATNtK/", image: "/proj3.png", colors: ["#1b2e1a", "#6d8a3c", "#f2e08a"], glow: "55%" },
  { title: "The Little Guy!", meta: "Short-form commercial · Edit", duration: "00:45", href: "https://www.instagram.com/p/Db8DmCKzDlp/", image: "/proj4.png", colors: ["#1a1c3a", "#4857c9", "#9fe0ff"], glow: "20%" },
  { title: "Good old Days", meta: "College film · Edit and color", duration: "00:43", href: "https://www.instagram.com/p/Da5uu6MgNbd/", image: "/proj5.png", colors: ["#3a2410", "#b8692b", "#ffe2b0"], glow: "75%" },
  { title: "Dandeli Ride", meta: "Friends · Color grading", duration: "00:45", href: "https://www.instagram.com/p/DUF__lLj-3j/", image: "/proj6.png", colors: ["#202020", "#6b6b6b", "#e8e8e8"], glow: "45%" },
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

export const links = [
  { label: "Instagram", href: "https://www.instagram.com/_jisnu/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/jishnu-vijayan-/" },
  { label: "Download reel PDF", href: "#" },
];
