"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ImagePortfolio from "./image-portfolio";

export default function Recommendation() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h1 className="text-white text-2xl font-bold">
        Algumas <span className="text-blue-700">Recomendações</span>
      </h1>
      <div className="flex flex-col items-center justify-center w-full gap-3 md:w-[80%]">
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-[75%] md:w-[50%]"
        >
          <CarouselContent>
            <CarouselItem>
              <div className="p-1">
                <Card className="bg-dark200 border-dark200">
                  <CardContent className="flex items-center justify-center p-6 md:p-6 lg:p-6">
                    <ImagePortfolio
                      src="/Recomedacao01.PNG"
                      alt="Recomendação"
                      unoptimized={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card className="bg-dark200 border-dark200">
                  <CardContent className="flex items-center justify-center p-6 md:p-6 lg:p-6">
                    <ImagePortfolio
                      src="/recomedação02.PNG"
                      alt="Recomendação"
                      unoptimized={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="p-1">
                <Card className="bg-dark200 border-dark200">
                  <CardContent className="flex items-center justify-center p-6 md:p-6 lg:p-6">
                    <ImagePortfolio
                      src="/recomedacao03.PNG"
                      alt="Recomendação"
                      unoptimized={true}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
