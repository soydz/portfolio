import { ImgHTMLAttributes } from "react";

export function Avatar({ className = "", ...props }: Readonly<ImgHTMLAttributes<HTMLImageElement>>) {
  return <img {...props} alt='' className={`border-2 border-primary ${className}`} />;
}
