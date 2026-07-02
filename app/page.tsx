import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 gap-3 text-black font-sans">
      <Image
        src="/infitech-logo.png"
        alt="Infitech Innovation Website"
        height={300}
        width={300}
        sizes="42vw"
        className="object-cover"
        priority
        unoptimized
        loading="eager"
      />
      <h1 className="text-2xl">Infitech Innovation Website</h1>
    </div>
  );
}
