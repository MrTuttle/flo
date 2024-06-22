import React from "react";

import { ModeToggle } from "../components/ui/ModeToggle";
import SectionCards from "../components/ui/sections/SectionCards";
import { IconCard } from "../components/ui/cards/IconCard";

const pageSandbox = () => {
  return (
    <div // this div is just to define darkmode colors without touch tailwins shadcn variables
      className=" bg-gray-50 dark:bg-black dark:text-grayflo"
    >
      <div className="fixed z-50 top-0 right-0 p-4">
        <ModeToggle />
      </div>
      <SectionCards>
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
          Avec Next JS router, je développe une app de qualitéPrérendu serveur
          et optimisation SEO. Ce routeur permet de tout faire avec React.
        </IconCard>
        <IconCard
          icon="tailwind"
          titre="Optimisation CSS"
          linkName="Lien"
          linkUrl="#"
        >
          Avec Tailwind, j’ai accès à toute la richesse des CSS avec une
          organisation rapide et optimale. Je peux aussi mettre en place une
          bibliothèque SCSS sur mesure.
        </IconCard>
        <IconCard
          icon="git"
          titre="Intégration continue"
          linkName="lien github"
        >
          Je pratique le CI/CD avec Git et Vercel, c’est à dire l’intégration et
          le déploiement continue du code. Le code est systématiquemet versionné
          sur Git.
        </IconCard>

        <IconCard icon="none">
          Le framework backend basé sur React, intérêt ? optimisation SEO,
          prérendu sur le serveur...
        </IconCard>
      </SectionCards>
    </div>
  );
};

export default pageSandbox;
