export const APP_URL = "https://app.postigent.com";

export const links = {
  signUp: `${APP_URL}/auth`,
  signIn: `${APP_URL}/auth/login`,
  privacy: `${APP_URL}/privacy.html`,
  terms: `${APP_URL}/terms.html`,
  dataDeletion: `${APP_URL}/data-deletion.html`,
  source: "https://github.com/Oladapodaniel/postigent",
  postiz: "https://github.com/gitroomhq/postiz-app",
  email: "info@postigent.com",
};

export const company = {
  name: "WHATSBULK TECHNOLOGIES LIMITED",
  rc: "RC 9559554",
  country: "Nigeria",
};

export const channels = [
  { id: "facebook", name: "Facebook" },
  { id: "instagram", name: "Instagram" },
  { id: "linkedin", name: "LinkedIn" },
  { id: "x", name: "X" },
  { id: "tiktok", name: "TikTok" },
  { id: "youtube", name: "YouTube" },
  { id: "threads", name: "Threads" },
  { id: "telegram", name: "Telegram" },
  { id: "discord", name: "Discord" },
  { id: "pinterest", name: "Pinterest" },
  { id: "bluesky", name: "Bluesky" },
  { id: "mastodon", name: "Mastodon" },
  { id: "reddit", name: "Reddit" },
  { id: "gmb", name: "Google Business Profile" },
  { id: "wordpress", name: "WordPress" },
  { id: "slack", name: "Slack" },
] as const;
