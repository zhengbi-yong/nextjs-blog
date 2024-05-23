import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsTwitterX, BsWechat } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee, SiJuejin } from "react-icons/si";

const baseSiteConfig = {
  name: "Sisyphus",
  description: "人工智能",
  url: "https://zhengbi-yong.github.io",
  metadataBase: "/",
  keywords: [
    "自动化",
    "具身智能",
    "深度学习",
    "强化学习",
    "灵巧手",
    "Robotics",
  ],
  authors: [
    {
      name: "雍征彼",
      url: "https://zhengbi-yong.github.io",
      // twitter: "https://twitter.com/weijunext",
    },
  ],
  creator: "@zhengbi-yong",
  defaultNextTheme: "system", // next-theme option: system | dark | light
  verification: {
    google: process.env.NEXT_PUBLIC_SEO_GOOGLE_SITE_VERIFICATION || "",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  headerLinks: [
    {
      name: "repo",
      href: "https://github.com/zhengbi-yong/new-blog",
      icon: BsGithub,
    },
    {
      name: "twitter",
      href: "https://twitter.com/weijunext",
      icon: BsTwitterX,
    },
    {
      name: "buyMeCoffee",
      href: "https://www.buymeacoffee.com/weijunext",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:zhengbi.yong@outlook.com", icon: MdEmail },
    {
      name: "twitter",
      href: "https://twitter.com/weijunext",
      icon: BsTwitterX,
    },
    { name: "github", href: "https://github.com/zhengbi-yong", icon: BsGithub },
    // { name: 'buyMeCoffee', href: "https://www.buymeacoffee.com/weijunext", icon: SiBuymeacoffee },
    // {
    //   name: "juejin",
    //   href: "https://juejin.cn/user/26044008768029",
    //   icon: SiJuejin,
    // },
    // {
    //   name: "weChat",
    //   href: "https://weijunext.com/make-a-friend",
    //   icon: BsWechat,
    // },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
    images: [`${baseSiteConfig.url}/og.jpg`],
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.jpg`],
    creator: baseSiteConfig.creator,
  },
};
