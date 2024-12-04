import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLink = [
  { name: "Gobierno", link: "/" },
  { name: "Para El Vecino", link: "/" },
  { name: "Visitá Campana", link: "/" },
  { name: "Invertí en Campana", link: "/" },
  { name: "Trabajo", link: "/" },
];

import { Button } from "./ui/button";

export default function MenuDropdown() {
  return (
    <DropdownMenu className="translate-[500px,0]">
      <DropdownMenuTrigger asChild>
        <Button
          onClick={() => {
            console.log("hola desde un componente de react");
          }}
          className="text-black rounded-full bg-palette7"
          variant="outline"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="translate-[500px,0]">
        <DropdownMenuSeparator />
        {navLink.map((link) => (
          <DropdownMenuItem className="flex justify-center" key={link.name}>
            <a
              className="font-semibold font-sans text-base hover:text-[#fafafa] rounded-md hover:bg-[#101010] py-1 px-5"
              href={link.link}
            >
              {link.name}
            </a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
