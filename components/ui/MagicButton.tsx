import React from 'react';

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}: {
    title: string; icon: React.ReactNode; position: string; handleClick?: () => void; otherClasses?: string; 
}) => {
  return (
    <button className="relative inline-flex h-12 min-w-[200px] overflow-hidden rounded-full p-[1px] focus:outline-none md:w-60">
      <span className="absolute inset-[-1000%] animate-[spin_1.6s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,rgba(226,203,255,0.2)_0%,rgba(57,59,178,0.2)_50%,rgba(226,203,255,0.2)_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-900 bg-opacity-30 px-8 py-1 text-sm font-medium text-white text-opacity-90 backdrop-blur-md text-center tracking-wider md:tracking-widest gap-2 ${otherClasses}`}>
        {position === 'left' && icon}
        {title}
        {position === 'right' && icon}
      </span>
    </button>
  );
}

export default MagicButton;
