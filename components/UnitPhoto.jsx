import Image from "next/image";

export default function UnitPhoto({ src, alt, priority }) {
  return (
    <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden shadow-lg ring-1 ring-ink/5">
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 768px) 420px, 90vw"
        className="object-cover"
        priority={priority}
      />
    </div>
  );
}
