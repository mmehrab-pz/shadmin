
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { HeaderAvatar } from "./HeaderAvatar";
import ChangeMode from "./ChangeMode";


export function Header() {
  return (
    <header className="w-full border-b border-b-border h-13.75 flex items-center justify-between pr-3.75 pl-6.25">
      <SidebarTrigger className="-ml-1" />
      <section className={"flex items-center gap-2"}>
        <ChangeMode />
        <HeaderAvatar />
      </section>
    </header>
  );
}
