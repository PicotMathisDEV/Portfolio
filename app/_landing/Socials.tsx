"use client";

import { Menubar, MenubarMenu, MenubarTrigger } from "@radix-ui/react-menubar";
import { LucideGithub, LucideLinkedin, TwitterIcon } from "lucide-react";
import Link from "next/link";
import CopierTexte from "./CopyToClip";

export const Socials = () => {
  return (
    <div className="absolute flex  flex-col items-center bottom-8 left-1/2 -translate-x-24">
      <h2 className="mb-2">Contact me</h2>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger className="mr-8">
            <Link href="https://github.com/PicotMathisDEV" target="blank">
              <LucideGithub />
            </Link>
          </MenubarTrigger>
          <MenubarTrigger className="mr-8">
            <CopierTexte />
          </MenubarTrigger>
          <MenubarTrigger>
            <Link
              href="https://www.linkedin.com/in/mathis-picot-a25773411/"
              target="blank"
            >
              <LucideLinkedin />
            </Link>
          </MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
};
