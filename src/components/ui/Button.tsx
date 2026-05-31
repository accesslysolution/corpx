export const Button = ({ children, variant = "primary" }: { children: React.ReactNode, variant?: "primary" | "outline" }) => {
  const base = "px-8 py-3 rounded-full transition-all duration-300 font-medium";
  const styles = variant === "primary" 
    ? "bg-[var(--primary)] text-white hover:bg-[var(--accent)]" 
    : "border border-[var(--primary)] text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white";
  
  return <button className={`${base} ${styles}`}>{children}</button>;
};