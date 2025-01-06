import Link from "next/link";
import { Card } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import {
  Bot,
  Code2,
  Heart,
  HomeIcon,
  ListOrderedIcon,
  LogInIcon,
  MenuIcon,
  ShoppingCartIcon,
} from "lucide-react";
import { Separator } from "./ui/separator";
import { CallCenter } from "./call-center";

export default function Header() {
  return (
    <>
      <Card className="hidden pl-4 pr-4 lg:flex border-none justify-around items-center pt-3 bg-transparent top-0 w-full z-10 absolute rounded-none shadow-inherit">
        <h1 className="text-lg text-white font-semibold">
          <span className="text-blue-700">Danilo</span> Amaral
        </h1>

        <div className="flex items-center justify-around w-2/5 h-10 rounded-full bg-gray-500 text-gray-300  font-semibold">
          <Link
            href="#home"
            aria-label="Link para seção de home do site"
            className="hover:text-white"
          >
            Home
          </Link>
          <Link
            href="#about"
            aria-label="Link para seção de sobre do site"
            className="hover:text-white"
          >
            Sobre
          </Link>
          <Link
            href="#skills"
            aria-label="Link para seção de habilidades do site"
            className="hover:text-white"
          >
            Habilidades
          </Link>
          <Link
            href="#portfolio"
            aria-label="Link para seção de porfolio do site"
            className="hover:text-white"
          >
            Portfolio
          </Link>
          <Link
            href="#certification"
            aria-label="Link para seção de certificados do site"
            className="hover:text-white"
          >
            Certificados
          </Link>
        </div>

        <CallCenter />
      </Card>

      <Card className="flex fixed items-center border-none lg:hidden bg-transparent backdrop-filter backdrop-blur-md bg-opacity-50 top-0 w-full z-10 justify-between p-[1.875rem]">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="icon" variant="mobileMenu">
              <MenuIcon />
            </Button>
          </SheetTrigger>

          <SheetContent side="left">
            <SheetHeader className="text-left text-lg font-semibold text-white">
              Menu
            </SheetHeader>
            <div className="flex flex-col">
              <div className="flex items-center gap-2 py-4">
                <Avatar>
                  <AvatarImage
                    src="https://avatars.githubusercontent.com/u/75812281?v=4"
                    alt="Avatar"
                  />
                  <AvatarFallback>DA</AvatarFallback>
                </Avatar>

                <div className="flex flex-col text-white">
                  <p className="font-medium">Seja Bem-Vindo</p>
                  <p className="text-sm opacity-75">Navegue pelo meu site!</p>
                </div>
              </div>
              <Separator />
            </div>

            <div className="mt-4 flex flex-col gap-2">
              <SheetClose asChild>
                <Link href="#home" aria-label="Componente de ínicio">
                  <Button variant="project">
                    <HomeIcon size={16} />
                    Home
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#about" aria-label="Componente de Sobre">
                  <Button variant="project">
                    <Bot size={16} />
                    Sobre
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#skills" aria-label="Componente de Habilidades">
                  <Button variant="project">
                    <Code2 size={16} />
                    Habilidades
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#portfolio" aria-label="Componente de dPortfolio">
                  <Button variant="project">
                    <Heart size={16} />
                    Potfolio
                  </Button>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link href="#certification" aria-label="Componente de Certificados">
                  <Button variant="project">
                    <ListOrderedIcon size={16} />
                    Certificados
                  </Button>
                </Link>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/">
          <h1 className="text-lg text-white font-semibold">
            <span className="text-blue-700">Danilo</span> Amaral
          </h1>
        </Link>

        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/75812281?v=4"
            alt="Avatar"
          />
          <AvatarFallback>DA</AvatarFallback>
        </Avatar>
      </Card>
    </>
  );
}
