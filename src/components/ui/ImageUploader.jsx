"use client";

import { useState, useRef } from "react";
import { Upload, X, ImageIcon } from "lucide-react";

export default function ImageUploader({ images, setImages, max = 5 }) {
  const inputRef = useRef(null);

  const handleFiles = (files) => {
    const newFiles = Array.from(files).slice(0, max - images.length);
    const withPreviews = newFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));
    setImages([...images, ...withPreviews]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index) => {
    const updated = [...images];
    URL.revokeObjectURL(updated[index].preview);
    updated.splice(index, 1);
    setImages(updated);
  };

  return (
    <div className="space-y-3">
      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => inputRef.current?.click()}
        className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center cursor-pointer hover:border-accent/40 transition-colors"
      >
        <Upload className="w-8 h-8 text-slate-500 mx-auto mb-2" />
        <p className="text-sm text-slate-400">
          Drag &amp; drop photos or <span className="text-accent">browse</span>
        </p>
        <p className="text-xs text-slate-500 mt-1">
          Up to {max} images (JPG, PNG) • Max 5MB each
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {/* Preview grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 sm:grid-cols-5 gap-3">
          {images.map((img, i) => (
            <div key={i} className="relative group rounded-xl overflow-hidden aspect-square bg-navy-800">
              <img
                src={img.preview || img}
                alt={`Car photo ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute top-1.5 right-1.5 w-6 h-6 rounded-full bg-red-500 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
