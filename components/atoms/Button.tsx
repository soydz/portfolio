import { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: Readonly<ButtonProps>) {

  // Mapeo de estilos según la variante
  const variantStyles: Record<ButtonVariant, string> = {
    primary: "bg-primary text-white hover:bg-primary/90",
    outline: "border border-primary text-primary hover:bg-primary hover:text-white",
  };
  // Mapeo de estilos según el tamaño
  const sizeStyles: Record<ButtonSize, string> = {
    sm: "px-3 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-10 py-4 text-base",
  };

  return (
    <button
      {...props} // props nativas de button
      className={`font-mono transition-all duration-200 active:scale-95 hover:cursor-pointer
        ${variantStyles[variant]}
        ${sizeStyles[size]}
        ${className}
      `}>
      {children}
    </button>
  );
}
