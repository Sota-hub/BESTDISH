import { useState, useCallback } from "react";
import Image from "next/image";
import { useDropzone } from "react-dropzone";

import fileIcon from "../../public/file.svg";

const DropZone = ({ setValue }) => {
  const [fileName, setFileName] = useState("");
  const [error, setError] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];

    setFileName(file.name);

    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setError("");
      setValue("file", reader.result);
    };
    reader.onerror = () => {
      setError("Failed to read image file");
    };
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg, image/png, image/gif, image/svg",
      maxSize: 1600000,
    });

  return (
    <div className="p-6 bg-gray-400 rounded-md mt-2">
      <div
        {...getRootProps()}
        className={`
        alignCenter h-60 rounded-md  cursor-pointer border-2 border-white 
        ${isDragAccept && "border-green"} 
        ${isDragReject && "border-red"}
        `}
      >
        <input {...getInputProps()} />
        <div>
          <p className="text-white text-center text-lg my-2">
            Upload your image
          </p>
          <p className="text-white text-center text-xs my-2">
            JPEG / PNG / GIF / SVG
          </p>
          {error && (
            <p className="text-red text-center text-xs my-2">{error}</p>
          )}
          {fileName && (
            <div className="alignCenter bg-white h-20 rounded-md mt-4 p-4 max-w-[215px]">
              <Image
                src={fileIcon}
                alt="file icon"
                width="35px"
                height="35px"
              />
              <p className="ml-1">{fileName}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropZone;
