// import { MotionBackground } from "@/components/MotionBackground";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ThemeButton } from "@/components/ui/ThemeButton";

export default function LoginPage() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(100% 100% at 50% 50%, #0020617, #dd335c",
      }}
      className="relative h-screen w-screen text-white bg-stone-950 border-amber-300"
    >
      <div className="w-full h-full flex flex-col p-4 border border-red-500 ">
        <div className="flex p-5 justify-between border border-amber-300">
          <div className="flex gap-2">
            <div className="border border-fuchsia-300">"Logo"</div>
            <div className="border border-fuchsia-300">Sentral.io </div>
          </div>
          <div className="border border-sky-300">
            <ThemeButton />
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center p-5 border border-green-500">
          <div className="flex flex-col border border-blue-500 w-72">
            <Label
              className="mb-2"
              htmlFor=""
            >
              Enter Username:
            </Label>
            <Input
              className="mb-2"
              type="text"
            />
            <Label
              className="mb-2"
              htmlFor=""
            >
              Enter Password:
            </Label>
            <Input
              className="mb-2"
              type="password"
            />
            <Button className="w-full">Access System</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
