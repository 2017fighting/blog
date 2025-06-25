import IconMail from "@/assets/icons/IconMail.svg";
import IconGitHub from "@/assets/icons/IconGitHub.svg";
import IconBrandX from "@/assets/icons/IconBrandX.svg";
import IconWhatsapp from "@/assets/icons/IconWhatsapp.svg";
import IconFacebook from "@/assets/icons/IconFacebook.svg";
import IconTelegram from "@/assets/icons/IconTelegram.svg";
import IconPinterest from "@/assets/icons/IconPinterest.svg";
import type { GiscusProps } from "@giscus/react";

export const SOCIALS = [
  {
    name: "Github",
    href: "https://github.com/2017fighting",
    linkTitle: `我的GitHub`,
    icon: IconGitHub,
  },
  {
    name: "Mail",
    href: "mailto:raincore@heybox.top",
    linkTitle: `给我发邮件`,
    icon: IconMail,
  },
] as const;

export const SHARE_LINKS = [
  {
    name: "WhatsApp",
    href: "https://wa.me/?text=",
    linkTitle: `Share this post via WhatsApp`,
    icon: IconWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/sharer.php?u=",
    linkTitle: `Share this post on Facebook`,
    icon: IconFacebook,
  },
  {
    name: "X",
    href: "https://x.com/intent/post?url=",
    linkTitle: `Share this post on X`,
    icon: IconBrandX,
  },
  {
    name: "Telegram",
    href: "https://t.me/share/url?url=",
    linkTitle: `Share this post via Telegram`,
    icon: IconTelegram,
  },
  {
    name: "Pinterest",
    href: "https://pinterest.com/pin/create/button/?url=",
    linkTitle: `Share this post on Pinterest`,
    icon: IconPinterest,
  },
  {
    name: "Mail",
    href: "mailto:?subject=See%20this%20post&body=",
    linkTitle: `Share this post via email`,
    icon: IconMail,
  },
] as const;

export const GISCUS: GiscusProps = {
  repo: "2017fighting/blog",
  repoId: "R_kgDOO-vDjw",
  category: "Blog Discussion",
  categoryId: "DIC_kwDOO-vDj84CrxyW",
  mapping: "pathname",
  reactionsEnabled: "1",
  emitMetadata: "0",
  inputPosition: "top",
  lang: "zh-CN",
  loading: "lazy",
  strict: "0",
};
