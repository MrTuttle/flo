"use client";
import { useState } from "react";

export const MyFormControl = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    alert(`Submitted ${name} ${email}`);
  };

  return (
    <form className="flex flex-col gap-4 *:p-2 *:rounded-xl ">
      <div className="flex gap-4 *:p-2 w-full">
        <input
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button onClick={onSubmit} className="bg-stone-950 text-white rounded-lg">
        Submit
      </button>
    </form>
  );
};
