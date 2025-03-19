export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="m-[20px] flex flex-col items-center justify-center gap-4 rounded-lg border border-neutral-400 p-[80px] shadow-sm">
      {children}
    </div>
  );
}
