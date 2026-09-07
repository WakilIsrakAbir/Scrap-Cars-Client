import React from "react";

export default function Skeleton({
  className = "",
  rounded = "rounded-xl",
  width,
  height,
  style = {},
  ...props
}) {
  const inlineStyle = {
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
    ...style,
  };

  return (
    <div
      style={inlineStyle}
      className={`relative overflow-hidden bg-white/[0.04] ${rounded} ${className} before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/[0.06] before:to-transparent`}
      {...props}
    />
  );
}
