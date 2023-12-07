import Image, { ImageProps } from "next/image";

export default function Banner({ alt, ...props }: ImageProps) {
  return (
    <Image
      height={0}
      width={0}
      className="h-screen w-full object-cover absolute z-0"
      sizes="100vw"
      unoptimized={true}
      alt={alt}
      {...props}
    />
  );
}