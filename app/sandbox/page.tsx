"use client";
import React, { useState } from "react";

import { ModeToggle } from "../components/ui/ModeToggle";
import SectionCards from "../components/ui/sections/SectionCards";
import { IconCard } from "../components/ui/cards/IconCard";
import { MyFormControl } from "../components/ui/forms/MyFormControl";
import ItemNav from "../components/ui/nav/ItemNav";
import { FiCodesandbox } from "react-icons/fi";

const PageSandbox = () => {
  const [menuHeight, setMenuHeight] = useState(false);
  const [menuOpenF, setMenuOpenF] = useState(false);
  return (
    <div // this div is just to define darkmode colors without touch tailwins shadcn variables
      className=" bg-gray-50 dark:bg-black dark:text-grayflo"
    >
      <div className=" fixed flex justify-center backdrop-blur-xl   z-50 top-0 right-0 w-full ease-in-out duration-300">
        <div className="flex flex-col w-full max-w-7xl overflow-hidden  transition-all ease-in-out duration-1000">
          <div className="  py-2 flex justify-between text-base ">
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
            : { paddingTop: "6rem", transform: "scale(1)" }
        }
      >
        <div className=" mt-8 2xl:mt-14 first:mt-0 p-8">
          <div className="bg-stone-50 dark:bg-stone-600 rounded-2xl h-svh flex flex-col flex-wrap gap-y-4 2xl:gap-y-6 -mx-2 2xl:-mx-3 justify-center text-center">
            <h1 className="text-stone-400 text-5xl md:text-8xl">
              This is my <br />
              sandbox page
            </h1>
            <div className=" flex justify-center text-6xl">
              <FiCodesandbox />
            </div>

            <p className="text-xl md:text-4xl">
              it contains some of
              <br />
              my interfaces <br />
              experimentations & trainings
            </p>
          </div>
        </div>
        <h2 className="text-center text-4xl pt-20">Dev front stack</h2>
        <h3 className="text-center text-2xl pt-3">
          (L’occasion de coder un joli système de cartes aux animations fluides)
        </h3>
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

          <IconCard icon="none">
            Le framework backend basé sur React, intérêt ? optimisation SEO,
            prérendu sur le serveur...
          </IconCard>
        </SectionCards>
        <h2 className="text-center text-4xl pt-20">Design</h2>
        <h3 className="text-center text-2xl pt-3">
          C’est par là que je suis doucement venu au code
        </h3>
        <SectionCards>
          <IconCard
            icon="ae"
            titre="Expert Créative Cloud"
            linkName="Lien behance"
          >
            J’ai pratiqué quotidiennement la suite creative Cloud pendant plus
            de dix ans. Mes spécialitées ? l’animations de dessins vectoriels.
          </IconCard>

          <IconCard icon="figma">
            Je modélise des maquettes interactive pour tester et valider les
            interfaces, ça permet de gagner du temps et d’avoir rapidement une
            vision d’ensemble de l’application.
          </IconCard>
        </SectionCards>
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
