// "use client";
import React, { useState } from "react";

import { ModeToggle } from "./components/ui/ModeToggle";
import SectionCards from "./components/ui/sections/SectionCards";
import { IconCard } from "./components/ui/cards/IconCard";
import { MyFormControl } from "./components/ui/forms/MyFormControl";
import ItemNav from "./components/ui/nav/ItemNav";
import { FiCodesandbox } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { GrPaint } from "react-icons/gr";

import { AreaChartGradient } from "./components/charts/AreaChartGradient";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import HeroUnderFrameVid from "./components/home/HeroUnderFrameVid";
import TitleCut from "./components/ui/TitleCut";
import { ScrollReveal } from "./components/ui/scrollReveal/scrollReveal";
import NavBarGlass from "./components/ui/nav/NavBarGlass";
import { PictureCard } from "./components/ui/cards/PictureCard";
import {
  SectionBorder,
  SectionWide,
} from "./components/ui/containers/SectionBorder";
import HeroBento from "./components/home/HeroBento";

const PageLanding = () => {
  return (
    <div // this div is just to define darkmode colors without touch tailwins shadcn variables
    // it wrap all page content
    // className=" bg-gray-50 dark:bg-black  "
    >
      <SectionBorder>
        {/* <div className=" bg-stone-50 max-w-7xl dark:bg-stone-600 rounded-2xl p-4 h-svh flex flex-col flex-wrap gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-3 justify-center text-center"> */}
        <HeroBento />
      </SectionBorder>

      <SectionBorder>
        <div className="mt-28 mb-8 w-full">
          <TitleCut>
            <div className=" flex justify-center text-4xl">
              <FiCodesandbox />
            </div>
          </TitleCut>
          <TitleCut>
            <p className="text-center text-4xl">My Dev Stack</p>
          </TitleCut>
          <TitleCut>
            <p className="text-center p-4 text-xl dark:text-gray-400">
              My developper stack allows me to quickly build SaaS <br />
              or website with a total control on the interface{" "}
            </p>
          </TitleCut>
        </div>
      </SectionBorder>

      <ScrollReveal>
        <SectionBorder>
          <SectionCards id="front">
            <IconCard
              icon="react"
              titre="Développement front"
              linkName="Lien"
              linkUrl="#"
            >
              Avec Javascript et React, je conçois des composants d’interface
              modulaire et réutilisables au typage fort (Typescript).
            </IconCard>
            <IconCard
              icon="next"
              titre="Développement Backend"
              linkName="Lien"
              linkUrl="#"
            >
              {" "}
              Compatibles avec tous type de routers (PHP, Rails...) c’est avec
              Next JS router que je connecte mes composants au back end.
              Prérendu serveur et optimisation SEO en prime.
            </IconCard>
            <IconCard
              icon="tailwind"
              titre="Optimisation SCSS"
              linkName="Lien"
              linkUrl="#"
            >
              {" "}
              Pour faire une interface impecable, il faut une bonne connaissance
              du code CSS. Aujourd’hui c’est Tailwind qui me permet d’en
              exploiter au mieux les possibilité. organisation rapide et
              optimale. Je peux aussi mettre en place une bibliothèque SCSS sur
              mesure.
            </IconCard>
            <IconCard
              icon="git"
              titre="Intégration continue"
              linkName="lien github"
            >
              Je pratique le CI/CD avec Git et Vercel, c’est à dire
              l’intégration et le déploiement continue du code. Le code est
              systématiquemet versionné sur Git.
            </IconCard>
          </SectionCards>
        </SectionBorder>
      </ScrollReveal>

      <div className="mt-8 2xl:mt-14 first:mt-0 p-8 border flex justify-center">
        <Drawer shouldScaleBackground={true}>
          <DrawerTrigger asChild>
            <Button variant="outline">Idée UX : les cartes</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div>
              <h2 className="text-center text-4xl pt-20">
                Idée UX : les cartes
              </h2>
              <h3 className="text-center text-2xl pt-3 px-8">
                Le cartes sont idéales pour présenter des contenus courts et
                structurés. Elles sont souvent utilisées pour afficher des
                informations sous forme de liste, de galerie ou de tableau. J’ai
                aporté a celle ci un soin particulier aux effets de survol.
                Connectées à une base de données, ces cartes acceptent plusieurs
                paramètres : titre, description, image, lien...
              </h3>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Fermer</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      <SectionBorder>
        <div className="mt-28 mb-8 w-full">
          <TitleCut>
            <div className=" flex justify-center text-4xl">
              <GrPaint />
            </div>
          </TitleCut>
          <TitleCut>
            <p className="text-center text-4xl">My Design Skills</p>
          </TitleCut>
          <ScrollReveal>
            <p className="text-center p-4 text-xl dark:text-gray-400">
              Formed Art school, and Artistic director for 15 past years, <br />
              I know how to create visual contents like illustrations, icons,
              logos & branding. <br />
              My missions was also to design interfaces, prototypes and manage
              design systems.
            </p>
          </ScrollReveal>
        </div>
      </SectionBorder>

      <ScrollReveal>
        <SectionBorder>
          <SectionCards>
            <IconCard icon="hotjar" titre="user behavior analysis">
              It’s impossible to create a successful product without knowing who
              will be using it. A/B testings, heatmaps, user journey, personas
              help us to increase the user experience.
            </IconCard>
            <IconCard icon="figma" titre="prototyping">
              Avec Figma ou Sketch, je modélise des maquettes interactive pour
              tester et valider les interfaces. Je met en place des librairies
              pour référencer les composants et maintenir la cohérence graphique
              de l’application tout au long de l’évolution du projet.
            </IconCard>
            <IconCard
              icon="ae"
              titre="Expert Creative Cloud"
              linkName="Lien behance"
            >
              Motion design avec After Effect, créations / retouches
              d’illustrations, d’icones ou logos avec illustrator, compos
              Photoshop professionelles... je suis votre couteau suisse pour
              tout ce qui touche à l’image.
            </IconCard>
          </SectionCards>
        </SectionBorder>
      </ScrollReveal>

      <div className="mt-28">
        <TitleCut>
          <div className=" flex justify-center text-4xl">
            <FiCodesandbox />
          </div>
        </TitleCut>
        <TitleCut>
          <p className="text-center text-4xl">Sandbox section</p>
        </TitleCut>
        <TitleCut>
          <p className="text-center p-4 text-xl dark:text-gray-400">
            Playing playing... Here I tried to do something smooth with images
            cards, it must display correctly on mobile devices{" "}
          </p>
        </TitleCut>
      </div>

      <div className="mt-28 ">
        <SectionBorder>
          <PictureCard
            bgImage="l-exploratrice"
            title="Found it!"
            bgcolor="cyan"
          >
            <p>This is a beautiful card with smooth transitions</p>
          </PictureCard>
          <PictureCard bgImage="revolver" title="Bang!" bgcolor="salmon">
            <p>We can pick background colors in a list</p>
          </PictureCard>
        </SectionBorder>
      </div>

      <div className="mt-4 ">
        <SectionBorder>
          <PictureCard bgImage="le-nuage-noir" title="Cold" bgcolor="rose">
            <p>
              Colors works on dark modes, hover effects are disabled on tactile
              devices
            </p>
          </PictureCard>
          <PictureCard
            bgImage="les-cousines"
            title="Bang! you are red!"
            bgcolor="teal"
          >
            <p>Redrum! redrum! redrum!...</p>
          </PictureCard>
          <PictureCard bgImage="les-ophelies" bgcolor="yellow">
            <p className="text-slate-800">Content is optional</p>
          </PictureCard>
        </SectionBorder>
      </div>

      <div className="mt-8 2xl:mt-14 first:mt-0 p-8 border flex justify-center">
        <Drawer shouldScaleBackground={true}>
          <DrawerTrigger asChild>
            <Button variant="outline">💡 Idée UX : colors !!!!</Button>
          </DrawerTrigger>
          <DrawerContent>
            <div>
              <h2 className="text-center text-4xl pt-20">
                💡 Idée UX : colors !!!!
              </h2>
              <h3 className="text-center text-2xl pt-3 px-8">
                La définition d’un système de couleur cohérent que l’on
                retrouvera tout au long du site est essentielle. <br />
                Il facilite entre autre un meilleur contrôle du mode sombre.
              </h3>
              <div className="text-center text-2xl pt-3 px-8">
                Vous pouvez changer le mode couleur de cette page en cliquant
                sur ce symbole : <ModeToggle />
              </div>
            </div>
            <DrawerFooter>
              <DrawerClose>
                <Button variant="outline">Fermer</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div>

      {/* <div className="mt-8 2xl:mt-14 first:mt-0 p-8 border flex justify-center">
        <Drawer direction="left">
          <DrawerTrigger>
            <Button variant="outline">Contact</Button>
          </DrawerTrigger>
          <DrawerContent className="bg-white flex flex-col rounded-t-[10px] h-full w-[75%] mt-24 fixed bottom-0 right-0">
            <DrawerHeader>
              <DrawerTitle>Are you absolutely sure?</DrawerTitle>
              <DrawerDescription>
                This action cannot be undone.
              </DrawerDescription>
            </DrawerHeader>
            <DrawerFooter>
              <Button>Submit</Button>
              <DrawerClose>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </div> */}

      {/* <div className="mt-8 2xl:mt-14 first:mt-0 p-8">
        <ul className="flex flex-wrap gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-3">
          <li className="group/item hover:cursor-pointer w-full px-2 2xl:px-3 md:w-1/2 lg:w-1/4 grow">
            <div className="p-6 rounded-xl h-full flex flex-col md:p-12 justify-between dark:bg-darkhot dark:hover:bg-neutral-800/95 hover:bg-gray-100/80 dark:text-white text-gray-800 transition-colors ease-in-out duration-300">
              <div className="flex flex-col">
                <MyFormControl />
              </div>
            </div>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default PageLanding;
