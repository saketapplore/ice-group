import Image from "next/image";

interface LogoProps {
  variant?: "default" | "compact" | "dark";
  className?: string;
}

export default function Logo({
  variant = "default",
  className = "",
}: LogoProps) {
  const size =
    variant === "compact"
      ? { w: 180, h: 60 }
      : variant === "dark"
      ? { w: 300, h: 125 }
      : { w: 360, h: 120 };

  return (
    <div className={`flex items-start ${className}`}>
      <Image
        src="/images/ice-logo.gif"
        alt="ICE Group Logo"
        width={size.w}
        height={size.h}
        priority
        unoptimized
        className="object-contain transition-transform "
      />
    </div>
  );
}
