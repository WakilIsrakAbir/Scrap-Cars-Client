"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/posts");
  }, [router]);

  return (
    <div className="py-20 text-center text-slate-400">
      <div className="w-8 h-8 border-2 border-accent border-t-transparent rounded-full animate-spin mx-auto mb-3" />
      <span>Loading Vehicle Posts...</span>
    </div>
  );
}
