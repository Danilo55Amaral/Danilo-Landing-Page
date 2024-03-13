"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import { WhatsappLogo } from "@phosphor-icons/react";
import emailjs from "@emailjs/browser";
import { Textarea } from "./ui/textarea";

export function CallCenterLink() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [telephone, setTelephone] = useState("");
  const [service, setService] = useState("");

  function sendEmail(e: any) {
    e.preventDefault();

    if (name === "" || email === "" || telephone === "" || service === "") {
      alert("Preencha todos os campos");
      return;
    }

    const templateParams = {
      from_name: name,
      service: service,
      message: message,
      email: email,
      telephone: telephone,
    };

    emailjs
      .send(
        "service_21e56zm",
        "template_d37obcs",
        templateParams,
        "kTodgLkMZlA-NqN4L"
      )
      .then(
        (response) => {
          console.log("EMAIL ENVIADO", response.status, response.text);
          setName("");
          setEmail("");
          setMessage("");
          setService("");
          setTelephone("");
        },
        (error) => {
          console.log("ERRO: ", error);
        }
      );
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <span>Contato</span>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-white">
            Central de Atendimento
          </DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo e entrarei em contato o mais breve
            possível!
          </DialogDescription>
        </DialogHeader>
        <form className="grid gap-4 py-4" onSubmit={sendEmail}>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-white">
              Nome
            </Label>
            <Input
              type="text"
              placeholder="Digite seu nome"
              className="col-span-3 text-white"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="email" className="text-white">
              Email
            </Label>
            <Input
              type="email"
              placeholder="Digite seu Email"
              className="col-span-3 text-white"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="telephone" className="text-white">
              Telefone
            </Label>
            <Input
              type="tel"
              placeholder="Digite seu número para contato"
              className="col-span-3 text-white"
              onChange={(e) => setTelephone(e.target.value)}
              value={telephone}
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="service" className="text-white">
              Assunto
            </Label>
            <Input
              type="text"
              placeholder="Entrevista Orçamento Serviços Outros"
              className="col-span-3 text-white"
              onChange={(e) => setService(e.target.value)}
              value={service}
            />
          </div>
          <div className="grid items-center gap-4">
            <Label htmlFor="text" className="text-white">
              Digite aqui a sua mensagem 🤖
            </Label>
            <Textarea
              placeholder="Escreva aqui"
              className="text-white"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </div>
          <DialogFooter>
            <Button
              type="submit"
              variant="primary"
              className="w-full justify-center gap-2 text-white"
            >
              Enviar
            </Button>
          </DialogFooter>
        </form>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem className="w-[90%] text-white" value="item-1">
            <AccordionTrigger>Contato via Whatsapp</AccordionTrigger>
            <AccordionContent>
              <Link href="https://wa.me/message/ZAEPJ4ITGJ3WL1">
                <WhatsappLogo
                  size={26}
                  weight="fill"
                  className="hover:text-blue-700"
                />
              </Link>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </DialogContent>
    </Dialog>
  );
}
