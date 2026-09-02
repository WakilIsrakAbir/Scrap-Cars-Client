import { POST_STATUSES } from "@/lib/constants";

export default function StatusBadge({ status }) {
  const config = POST_STATUSES[status] || POST_STATUSES.PENDING;
  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color} border ${config.border}`}>
      {config.label}
    </span>
  );
}
