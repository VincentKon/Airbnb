"use client";

import React, { useCallback } from "react";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";
import { TbPhotoPlus } from "react-icons/tb";
import toast from "react-hot-toast";

declare global {
  var cloudinary: any;
}

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  const handleUpload = useCallback(
    (result: any) => {
      console.log("Upload result: ", result);
      const url = result?.info?.secure_url;
      if (url) {
        onChange(url);
        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Failed to upload image.");
      }
    },
    [onChange]
  );
  return (
    <CldUploadWidget
      onSuccess={handleUpload}
      uploadPreset="Airbnb"
      options={{ maxFiles: 1 }}
    >
      {({ open }) => {
        return (
          <div
            onClick={() => open?.()}
            className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
          >
            <TbPhotoPlus size={50}></TbPhotoPlus>
            <div className="font-semibold text-lg">Click to upload</div>
            {!value ? (
              <span className="text-sm text-gray-400">
                (No image uploaded yet)
              </span>
            ) : (
              <div className="absolute inset-0 w-full h-full">
                <Image
                  alt="Upload"
                  fill
                  unoptimized
                  className="object-cover"
                  src={value}
                />
              </div>
            )}
          </div>
        );
      }}
    </CldUploadWidget>
  );
};

export default ImageUpload;
