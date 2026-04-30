interface ProgressBarProps {
  percentage: number;
  className?: string;
}

export function ProgressBar({ percentage = 0, className = "" }: Readonly<ProgressBarProps>) {

  // Asegurar que el porcentaje esté entre 0 y 100
  const clampedPercentage = Math.min(Math.max(percentage, 0), 100);

  return (
    <div
      className="w-full bg-tertiary/75 overflow-hidden "
      role="progressbar"
      aria-valuenow={clampedPercentage}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        // tamaño de la barra con el valor del porcentaje
        style={{ width: `${clampedPercentage}%` }}
        className={`bg-primary h-1.5 ${className}`}
      ></div>
    </div>
  );
}
