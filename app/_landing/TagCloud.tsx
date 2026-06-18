import { IconCloud } from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "prisma",
  "postgresql",
  "vercel",
  "git",
  "github",
  "tailwindcss",
  "Node.js",
];

// Visual Basic et Visual Studio n'existent pas sur Simple Icons, on passe par devicon
const deviconSlugs = ["visualbasic", "visualstudio"];

export function IconCloudDemo() {
  const images = [
    ...slugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`),
    ...deviconSlugs.map(
      (slug) =>
        `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${slug}/${slug}-plain.svg`,
    ),
  ];

  return (
    <div className=" max-w-lg  overflow-hidden rounded-lg mt-10  ">
      <IconCloud images={images} />
    </div>
  );
}
