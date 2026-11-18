import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

// Mapeo de estilos según la variante
const variantStyles: Record<ButtonVariant, string> = {
  // Texto oscuro sobre coral: 6.7:1 de contraste (el blanco solo daba 3:1).
  primary: "bg-primary text-neutral hover:bg-primary/90",
  outline: "border border-primary text-primary hover:bg-primary hover:text-neutral",
};

// Mapeo de estilos según el tamaño
const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-10 py-4 text-base",
};

// Comparte la apariencia del botón con enlaces que no deben anidar un <button>.
export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono transition-all duration-200 active:scale-95 hover:cursor-pointer disabled:pointer-events-none disabled:opacity-50 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Readonly<ButtonProps>) {
  return (
    <button
      {...props} // props nativas de button
      className={buttonStyles({ variant, size, className })}
    >
      {children}
    </button>
  );
}
