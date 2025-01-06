import { Separator } from "@/components/ui/separator";
import Image from "next/image";

export default function Certification() {
    return (
      <div>
        <h1 className="text-white text-2xl font-bold text-center mx-auto mb-4">
          Confira meus <span className="text-blue-700">Diplomas</span>
        </h1>
        <Separator />
        <div className="flex flex-col md:flex-row justify-center mb-10 mt-10">
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 mb-4 md:mb-0 md:mr-4">
            <Image
              src="/Diploma-ads.PNG"
              height={0}
              width={0}
              sizes="100vw"
              unoptimized={true}
              className="h-auto max-h-full w-full object-contain"
              alt="Diploma ADS"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
            <Image
              src="/diploma-pos.PNG"
              height={0}
              width={0}
              sizes="100vw"
              unoptimized={true}
              className="h-auto max-h-full w-full object-contain"
              alt="Diploma POS"
            />
          </div>
        </div>
        <Separator />
      </div>
    );
  }
