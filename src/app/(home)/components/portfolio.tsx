import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Portfolio() {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <h1 className="text-white text-2xl font-bold">
        Confira meus <span className="text-blue-700">Projetos</span>
      </h1>
      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-white">Trilha Front End</span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 border-blue-700" />
          <CarouselNext className="text-blue-700 border-blue-700" />
        </Carousel>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-white">Trilha Back End</span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 border-blue-700" />
          <CarouselNext className="text-blue-700 border-blue-700" />
        </Carousel>
      </div>

      <div className="flex flex-col items-center justify-center w-full">
        <span className="text-white">Trilha Cientista de Dados</span>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-3/4"
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card>
                  <CardContent className="flex aspect-square items-center justify-center p-6">
                    <span className="text-3xl font-semibold">
                      Danilo Amaral
                    </span>
                  </CardContent>
                </Card>
                <span className="text-3xl font-semibold text-white">
                  Danilo
                </span>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="text-blue-700 border-blue-700" />
          <CarouselNext className="text-blue-700 border-blue-700" />
        </Carousel>
      </div>
    </div>
  );
}
