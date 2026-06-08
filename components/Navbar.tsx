import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-slate-800 bg-slate-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <Link
          href="/"
          className="text-xl font-bold text-white"
        >
          Stratus GrowthOps
        </Link>

        <div className="flex gap-6 text-slate-300">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/leads">Leads</Link>
          <Link href="/pipeline">Pipeline</Link>
          <Link href="/interns">Interns</Link>
          <Link href="/reports">Reports</Link>
        </div>

      </div>
    </nav>
  );
}