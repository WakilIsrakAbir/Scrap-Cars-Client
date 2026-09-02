"use client";

import { POST_STATUSES } from "@/lib/constants";
import { useLanguage } from "@/context/LanguageContext";

export default function StatusBadge({ status }) {
  const { t } = useLanguage();
  const config = POST_STATUSES[status] || POST_STATUSES.PENDING;
  const label = t(`statuses.${status}`, config.label);

  return (
    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${config.bg} ${config.color} border ${config.border}`}>
      {label}
    </span>
  );
}
