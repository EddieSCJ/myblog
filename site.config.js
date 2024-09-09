const CONFIG = {
  profile: {
    name: "EddieSCJ",
    image: "/avatar.png",
    role: "Backend developer",
    bio: "If you can dream it, I can build it for you.",
    email: "eddieprofessionalmail@gmail.com",
    linkedin: "eddiescj",
    github: "eddiescj",
    instagram: "",
  },
  projects: [
    {
      name: "Medium Blog",
      href: "https://eddiescj.medium.com/",
    },
    {
      name: "Starwars API",
      href: "https://github.com/eddiescj/starwars-api-kotlin",
    },
  ],
  blog: {
    title: "MyBlog",
    description: "Welcome to MyBlog!",
    theme: "auto"
  },

  link: "https://blog.eddiescj.dev/",
  since: 2024,
  lang: "en-US",
  ogImageGenerateURL: "https://og-image-korean.vercel.app",
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },
  googleAnalytics: {
    enable: true,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: true,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: ""
    },
  },
  isProd: process.env.VERCEL_ENV === "production",
  revalidateTime: 21600 * 7,
}

module.exports = { CONFIG }
