export const CategoryIcon = ({ icon, label }) => {
  return (
    <div className="flex flex-col items-center gap-2 group">
      <div className="size-14 rounded-xl bg-white dark:bg-[#192233] border border-slate-200 dark:border-slate-800 flex items-center justify-center text-primary group-active:scale-95 transition-transform">
        <span className="material-symbols-outlined text-2xl">{icon}</span>
      </div>
      <span className="text-xs font-medium text-center leading-tight">
        {label}
      </span>
    </div>
  );
};
