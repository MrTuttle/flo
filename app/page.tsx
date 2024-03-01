import { ModeToggle } from "@/components/ui/ModeToggle";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <ModeToggle />
      </div>
      <div className=" text-9xl">Hello</div>
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
