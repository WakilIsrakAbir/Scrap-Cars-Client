"use client";

import { useState, useRef } from "react";
import { Upload, X, RefreshCw, AlertCircle, CheckCircle2 } from "lucide-react";

export default function ImageUploader({ images, setImages, max = 5, maxSizeMB = 10 }) {
  const inputRef = useRef(null);
  const replaceInputRef = useRef(null);
  const [replaceIndex, setReplaceIndex] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const MAX_BYTES = maxSizeMB * 1024 * 1024;

  const handleFiles = (files) => {
    setErrorMessage("");
    const selected = Array.from(files);
    const validFiles = [];
    const oversizedFiles = [];

    selected.forEach((file) => {
      if (file.size > MAX_BYTES) {
        const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
        oversizedFiles.push(`${file.name} (${sizeMB}MB)`);
      } else {
        validFiles.push(file);
      }
    });

    if (oversizedFiles.length > 0) {
      setErrorMessage(
        `Some images exceed the ${maxSizeMB}MB limit: ${oversizedFiles.join(", ")}`
      );
    }

    const availableSlots = max - images.length;
    if (validFiles.length > availableSlots) {
      setErrorMessage(
        `You can only add up to ${max} photos. Extra photos were ignored.`
      );
    }

    const allowedFiles = validFiles.slice(0, availableSlots);
    const withPreviews = allowedFiles.map((file) => ({
      file,
      preview: URL.createObjectURL(file),
    }));

    setImages([...images, ...withPreviews]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (images.length >= max) return;
    handleFiles(e.dataTransfer.files);
  };

  const removeImage = (index) => {
    setErrorMessage("");
    const updated = [...images];
    if (updated[index]?.preview) {
      URL.revokeObjectURL(updated[index].preview);
    }
    updated.splice(index, 1);
    setImages(updated);
  };

  const handleTriggerReplace = (index, e) => {
    e.stopPropagation();
    setReplaceIndex(index);
    if (replaceInputRef.current) {
      replaceInputRef.current.value = "";
      replaceInputRef.current.click();
    }
  };

  const handleReplaceFile = (e) => {
    const file = e.target.files?.[0];
    if (!file || replaceIndex === null) return;

    if (file.size > MAX_BYTES) {
      const sizeMB = (file.size / (1024 * 1024)).toFixed(1);
      setErrorMessage(`Selected image is ${sizeMB}MB, which exceeds the ${maxSizeMB}MB limit!`);
      return;
    }

    setErrorMessage("");
    const updated = [...images];
    if (updated[replaceIndex]?.preview) {
      URL.revokeObjectURL(updated[replaceIndex].preview);
    }
    updated[replaceIndex] = {
      file,
      preview: URL.createObjectURL(file),
    };
    setImages(updated);
    setReplaceIndex(null);
  };

  return (
    <div className="space-y-3">
      {/* Error / Alert notification */}
      {errorMessage && (
        <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      {/* Hidden input for replacing a single image */}
      <input
        ref={replaceInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleReplaceFile}
      />

      {/* Drop zone */}
      <div
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
        onClick={() => {
          if (images.length < max) {
            inputRef.current?.click();
          }
        }}
        className={`border-2 border-dashed rounded-xl p-6 text-center transition-all ${
          images.length >= max
            ? "border-emerald-500/30 bg-emerald-500/5 cursor-default"
            : "border-white/10 hover:border-accent/40 bg-navy-950/40 cursor-pointer"
        }`}
      >
        {images.length >= max ? (
          <div className="flex flex-col items-center">
            <CheckCircle2 className="w-8 h-8 text-emerald-400 mb-2" />
            <p className="text-sm font-medium text-emerald-300">
              Maximum {max} photos added
            </p>
            <p className="text-xs text-slate-400 mt-1">
              You can replace or remove any photo below
            </p>
          </div>
        ) : (
          <div>
            <Upload className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm text-slate-300 font-medium">
              Drag &amp; drop photos or <span className="text-accent underline">browse</span>
            </p>
            <p className="text-xs text-slate-400 mt-1">
              Up to {max} images (JPG, PNG, WebP) • <span className="text-amber-400 font-semibold">Max 10MB each</span>
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              ({images.length}/{max} photos added)
            </p>
          </div>
        )}

        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          disabled={images.length >= max}
          onChange={(e) => handleFiles(e.target.files)}
          className="hidden"
        />
      </div>

      {/* Preview grid with change/delete actions */}
      {images.length > 0 && (
        <div>
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>Uploaded Photos ({images.length}/{max})</span>
            <span className="text-[11px] text-slate-500">Hover over photo to Change or Remove</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {images.map((img, i) => (
              <div
                key={i}
                className="relative group rounded-xl overflow-hidden aspect-square bg-navy-900 border border-white/10 shadow-md"
              >
                <img
                  src={img.preview || img}
                  alt={`Car photo ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />

                {/* Badge for Image index */}
                <span className="absolute top-1.5 left-1.5 px-1.5 py-0.5 rounded text-[10px] font-bold bg-navy-950/80 text-white backdrop-blur-sm border border-white/10">
                  #{i + 1}
                </span>

                {/* Action overlay on hover */}
                <div className="absolute inset-0 bg-navy-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                  {/* Change/Replace Image Button */}
                  <button
                    type="button"
                    title="Change this photo"
                    onClick={(e) => handleTriggerReplace(i, e)}
                    className="w-8 h-8 rounded-lg bg-accent text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  >
                    <RefreshCw className="w-4 h-4" />
                  </button>

                  {/* Remove Image Button */}
                  <button
                    type="button"
                    title="Remove this photo"
                    onClick={(e) => {
                      e.stopPropagation();
                      removeImage(i);
                    }}
                    className="w-8 h-8 rounded-lg bg-rose-500 text-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
