export type WebApp = {
  title: string;
  repo: string;
  description: string;
  tags: string[];
  demo?: string;
  thumbnail: string;
};

export const WEB_APPS: WebApp[] = [
  {
    title: "Portfolio",
    repo: "https://github.com/samueldervishi1/portfolio",
    description: "My personal portfolio website built using Next.js and Tailwind CSS",
    tags: ["Next.js", "Tailwind CSS", "TypeScript"],
    thumbnail: "/_static/projects/portfolio.png",
  },
  {
    title: "CHYRA - A social media app",
    repo: "https://github.com/samueldervishi1/social-media-app",
    description:
      "A simple social media application that is still under development. It combines a Java backend with a ReactJS frontend built using Vite",
    tags: ["Java", "MongoDB", "Vite", "React", "Redis"],
    thumbnail: "/_static/projects/placeholder_1.png",
  },
  {
    title: "Quote API",
    repo: "https://github.com/samueldervishi1/quote-api",
    description: "A simple REST API that serves random quotes and using cron jobs to send the quote to email",
    tags: ["Node.js", "Express", "MongoDB", "CronJobs"],
    thumbnail: "/_static/projects/placeholder_1.png",
  },
  {
    title: "Android App",
    repo: "https://github.com/samueldervishi1/android-app",
    description: "On going project to build an android app using Kotlin",
    tags: ["Kotlin", "Android"],
    thumbnail: "/_static/projects/stack-game.png",
  },
  {
    title: "Stack Game",
    repo: "https://github.com/samueldervishi1/web-scraper",
    description: "A simple web scraping tool that scrapes the reddit homepage and displays the top posts",
    tags: ["Python", "BeautifulSoup", "Requests"],
    thumbnail: "/_static/projects/placeholder_1.png",
  },
] as WebApp[];