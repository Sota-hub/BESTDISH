import { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const DropZone = ({ onChange, setValue }) => {
  const onDrop = useCallback((acceptedFiles) => {
    setValue("file", acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject } =
    useDropzone({
      onDrop,
      multiple: false,
      accept: "image/jpeg, image/png, image/gif, image/svg",
      // maxSize: 1000000,
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
        <input {...getInputProps({ onChange })} />
        <div>
          <p className="text-white text-center text-lg my-2">
            Upload your image
          </p>
          <p className="text-white text-center text-xs my-2">
            JPEG / PNG / GIF / SVG
          </p>
        </div>
      </div>
    </div>
  );
};

export default DropZone;
