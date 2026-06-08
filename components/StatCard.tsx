type StatCardProps = {
  title: string;
  value: string;
  description: string;
};

export default function StatCard({
  title,
  value,
  description,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h2 className="mt-2 text-4xl font-bold text-white">
        {value}
      </h2>

      <p className="mt-3 text-sm text-slate-500">
        {description}
      </p>
    </div>
  );
}