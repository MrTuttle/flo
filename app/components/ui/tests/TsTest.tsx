import React from "react";

export type Cat = {
  name: string;
  age: number;
  color: string;
};
export type Dog = {
  name: string;
  age: number;
  color: string;
};

type TsTestProps = {
  cat?: Cat;
  dog?: Dog;
};

const TsTest = ({ cat, dog }: TsTestProps) => {
  const displayAnimal = () => {
    const displayCat = () => {
      cat ? (
        <div className=" bg-slate-900 rounded-xl p-8 text-slate-400">
          <ul>
            <li className="text-lg pb-2">{cat.name}</li>
            <li className="text-xs">age : {cat.age}</li>
            <li className="text-xs">color : {cat.color}</li>
          </ul>
        </div>
      ) : null;
    };
    const displayDog = () => {
      return dog ? (
        <div className=" bg-slate-900 rounded-xl p-8 text-slate-400">
          <ul>
            <li className="text-lg pb-2">{dog.name}</li>
            <li className="text-xs">age : {dog.age}</li>
            <li className="text-xs">color : {dog.color}</li>
          </ul>
        </div>
      ) : null;
    };

    return displayCat();
  };
};

export default TsTest;
