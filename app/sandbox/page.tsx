"use client";
import React, { useState } from "react";

import { ModeToggle } from "../components/ui/ModeToggle";
import SectionCards from "../components/ui/sections/SectionCards";
import { IconCard } from "../components/ui/cards/IconCard";
import { MyFormControl } from "../components/ui/forms/MyFormControl";
import ItemNav from "../components/ui/nav/ItemNav";
import { FiCodesandbox } from "react-icons/fi";
import { Badge } from "@/components/ui/badge";
import { GrPaint } from "react-icons/gr";

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
import HeroUnderFrameVid from "../components/home/HeroUnderFrameVid";
import TitleCut from "../components/ui/TitleCut";

const PageSandbox = () => {
  const [menuHeight, setMenuHeight] = useState(false);
  const [menuOpenF, setMenuOpenF] = useState(false);
  return (
    <div // this div is just to define darkmode colors without touch tailwins shadcn variables
      className=" bg-gray-50 dark:bg-black "
    >
      <div className="  fixed flex justify-center backdrop-blur-xl   z-50 top-0 right-0 w-full ease-in-out duration-300">
        <div className=" px-7 flex flex-col w-full max-w-7xl overflow-hidden  transition-all ease-in-out duration-1000">
          <div className="   py-2 flex justify-between text-base ">
            <div>Logo</div>
            <div className=" relative">
              <ul
                className="flex justify-center gap-10 px-4"
                onMouseEnter={() => setMenuHeight(true)}
                onMouseLeave={() => setMenuHeight(false)}
                style={
                  menuHeight
                    ? {
                        transition: "all 300ms",
                        height: "30svh",
                      }
                    : {
                        transition: "all 300ms",
                        height: "0",
                      }
                }
              >
                <ItemNav title="Front">
                  <a href="#front">
                    <li>Composants React</li>
                  </a>
                  <a href="#">
                    <li>API Rest</li>
                  </a>
                  <a href="#">
                    <li>Typescript</li>
                  </a>
                  <a href="#">
                    <li>Tailwind CSS ou SCSS</li>
                  </a>
                </ItemNav>
                <ItemNav title="Back">
                  <a href="#">
                    <li>Next JS</li>
                  </a>
                  <a href="#">
                    <li>Ruby on Rails</li>
                  </a>
                  <a href="#">
                    <li>Schema de bases de données</li>
                  </a>
                </ItemNav>
                <ItemNav title="Design">
                  <a href="#">
                    <li>Maquettes Figma</li>
                  </a>
                  <a href="#">
                    <li>Création d’icones</li>
                  </a>
                  <a href="#">
                    <li>Illustrations</li>
                  </a>
                </ItemNav>
              </ul>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
      <div
        className=" ease-in-out duration-300"
        style={
          menuHeight
            ? {
                paddingTop: "9rem",
                transform: "scale(0.90)",
                filter: "blur(24px)",
              }
            : { paddingTop: "4rem", transform: "scale(1)" }
        }
      >
        <div className="px-8 flex justify-center">
          {/* <div className=" bg-stone-50 max-w-7xl dark:bg-stone-600 rounded-2xl p-4 h-svh flex flex-col flex-wrap gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-3 justify-center text-center"> */}
          <div className="min-h-[90svh] bg-stone-50 max-w-7xl dark:bg-stone-600 rounded-2xl p-4 flex flex-col flex-wrap gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-3 justify-center text-center">
            <div className="w-9/12 md:w-4/12 mx-auto">
              <HeroUnderFrameVid />
            </div>
            <h1 className="text-stone-400 text-4xl md:text-6xl">
              Hey ! my name is Floo
              <br />
            </h1>

            <p className=" md:text-4xl text-lg">
              I am a web designer <br />
              and a front end developper <br />
              based in France
            </p>
            <p className="md:text-xl text-base text-gray-700 dark:text-gray-300 max-w-prose text-pretty mx-auto">
              {/* <p className=""> */} I have been working as a UI/UX designer
              and front-end developer since 2009. I’ve always been someone who
              has both a creative and a logical side. When I discovered web
              design, I realized it would be the perfect fit. I could use my
              creative side to design and my logical side to code. As a bonus,
              being both designer and developer allows me to make sure no detail
              is lost in translation.
            </p>
          </div>
        </div>
        <div className="mt-28">
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
            Next JS router que je connecte mes composants au back end. Prérendu
            serveur et optimisation SEO en prime.
          </IconCard>
          <IconCard
            icon="tailwind"
            titre="Optimisation SCSS"
            linkName="Lien"
            linkUrl="#"
          >
            {" "}
            Pour faire une interface impecable, il faut une bonne connaissance
            du code CSS. Aujourd’hui c’est Tailwind qui me permet d’en exploiter
            au mieux les possibilité. organisation rapide et optimale. Je peux
            aussi mettre en place une bibliothèque SCSS sur mesure.
          </IconCard>
          <IconCard
            icon="git"
            titre="Intégration continue"
            linkName="lien github"
          >
            Je pratique le CI/CD avec Git et Vercel, c’est à dire l’intégration
            et le déploiement continue du code. Le code est systématiquemet
            versionné sur Git.
          </IconCard>
        </SectionCards>
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
                  informations sous forme de liste, de galerie ou de tableau.
                  J’ai aporté a celle ci un soin particulier aux effets de
                  survol. Connectées à une base de données, ces cartes acceptent
                  plusieurs paramètres : titre, description, image, lien...
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

        <div className="mt-28">
          <TitleCut>
            <div className=" flex justify-center text-4xl">
              <GrPaint />
            </div>
          </TitleCut>
          <TitleCut>
            <p className="text-center text-4xl">My Design Stack</p>
          </TitleCut>
          <TitleCut>
            <p className="text-center p-4 text-xl dark:text-gray-400">
              Formed Art school, I know how to create, draw and build logos,
              branding, or icons. These tools allow me to create and design
              visual content. <br />
              Draw prototypes and manage design systems. Draw all I want and
              know how to animate it as vectorial images.
            </p>
          </TitleCut>
        </div>
        <SectionCards>
          <IconCard
            icon="ae"
            titre="Expert Créative Cloud"
            linkName="Lien behance"
          >
            Depuis son premier lancement, j’utilise la suite creative Cloud pour
            créer et concevoir des contenus visuels. Animation d‘illustrations
            motion design avec after effect, créations / retouches
            d’illustrations d’icones ou de logos avec illustrator, montages
            avancés de compositions Photoshop... Et je guette l’évolution de
            l’IA qui va changer en profondeur l’utilisation de ces vieux
            logiciels.
          </IconCard>

          <IconCard icon="figma">
            Avec Figma ou Sketch, je modélise des maquettes interactive pour
            tester et valider les interfaces. Je met en place des librairies
            pour référencer les composants et maintenir la cohérence graphique
            de l’application tout au long de l’évolution du projet.
          </IconCard>
        </SectionCards>
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
      </div>
      <div className="mt-8 2xl:mt-14 first:mt-0 p-8 border flex justify-center">
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
      </div>

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

export default PageSandbox;
