"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children?: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `  
              [--white-gradient:repeating-linear-gradient(100deg,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.9)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(255,255,255,0.9)_16%)]
              [--dark-gradient:repeating-linear-gradient(100deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.9)_7%,var(--transparent)_10%,var(--transparent)_12%,rgba(0,0,0,0.9)_16%)]
              [--aurora:repeating-linear-gradient(100deg,rgba(0,191,255,0.9)_10%,rgba(75,0,130,0.85)_15%,rgba(135,206,250,0.8)_20%,rgba(238,130,238,0.75)_25%,rgba(70,130,180,0.7)_30%)]
              [background-image:var(--white-gradient),var(--aurora)]
              dark:[background-image:var(--dark-gradient),var(--aurora)]
              [background-size:500%,_400%] /* Expanded background-size */
              [background-position:70%_90%,20%_60%] /* Adjusted position to cover bottom left */
              filter blur-[10px] invert dark:invert-0
              after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)]
              after:dark:[background-image:var(--dark-gradient),var(--aurora)]
              after:[background-size:350%,_250%] /* Adjusted for after-pseudo */
              after:animate-aurora after:[background-attachment:fixed] after:mix-blend-difference
              pointer-events-none
              absolute -inset-[10px] opacity-70 will-change-transform`,

              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_80%)]`
            )}
          ></div>
        </div>
        {children}
      </div>
    </main>
  );
};
