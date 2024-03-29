import Image, { ImageProps } from "next/image";

export default function ImagePortfolio({ alt, ...props }: ImageProps) {
  return (
    <Image
      height={0}
      width={0}
      className="h-auto w-full"
      sizes="100vw"
      alt={alt}
      {...props}
    />
  );
}