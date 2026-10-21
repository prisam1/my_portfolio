import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE, SOCIAL_LINKS } from "../constants";
import { cn } from "../lib/utils";

const links = [
  { label: "LinkedIn", href: SOCIAL_LINKS.linkedin, Icon: Linkedin },
  { label: "GitHub", href: SOCIAL_LINKS.github, Icon: Github },
  { label: "Email", href: `mailto:${PROFILE.email}`, Icon: Mail },
];

interface SocialLinksProps {
  className?: string;
  size?: "sm" | "md";
}

export const SocialLinks = ({ className, size = "md" }: SocialLinksProps) => (
  <ul className={cn("flex items-center gap-3", className)}>
    {links.map(({ label, href, Icon }) => (
      <li key={label}>
        <a
          href={href}
          target={href.startsWith("mailto:") ? undefined : "_blank"}
          rel="noopener noreferrer"
          aria-label={label}
          title={label}
          className={cn(
            "flex items-center justify-center rounded-full border border-purple-600 text-white transition-all duration-300 hover:scale-110 hover:border-transparent hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500",
            size === "md" ? "h-12 w-12" : "h-10 w-10"
          )}
        >
          <Icon size={size === "md" ? 20 : 18} />
        </a>
      </li>
    ))}
  </ul>
);
