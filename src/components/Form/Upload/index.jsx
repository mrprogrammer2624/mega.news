"use client";
import { useRef } from "react";
import clsx from "clsx";
import { Button } from "@/components/";
import { Icons } from "@/utility";

export const Upload = ({
  parentClassName,
  label,
  labelClass,
  className,
  handleChange,
  disabled,
  id,
  value,
  cols,
  rows,
  name,
  isrequired,
  ...rest
}) => {
  const inputRef = useRef(null);

  const handleClick = () => {
    // 👇️ open file input box on click of another element
    inputRef.current.click();
  };

  let fileObj;

  const handleFileChange = (event) => {
    fileObj = event.target.files && event.target.files[0];
    if (!fileObj) {
      return;
    }
    // 👇️ can still access file object here
  };
  console.log(fileObj);
  return (
    <div className={parentClassName}>
      {label && (
        <label
          htmlFor={id}
          className={clsx(labelClass, "h5 block font-medium capitalize mb-4")}
        >
          {label}
        </label>
      )}
      {/* <h1>{fileObj.name}</h1> */}
      <div className="flex items-center justify-center w-full bg-gray p-3 rounded-xl">
        <div className="flex flex-col items-center justify-center w-full border-2 border-light-white border-dashed rounded-xl">
          <div className="flex flex-col items-center justify-center gap-8 py-7">
            <div className="block w-[96px] h-[96px] text-black-25">
              {Icons.PictureIcon}
            </div>
            <div className="flex items-center justify-center flex-col gap-6">
              <p className="small text-black-75 text-center">
                Drop image here, paste or
              </p>
              {"avc" ? (
                <Button
                  handleChange={handleClick}
                  variant="secondary"
                  htmlFor="dropzone-file"
                >
                  {Icons.UploadIcon}
                  Select
                </Button>
              ) : (
                "null"
              )}
            </div>
          </div>
          <input
            ref={inputRef}
            id="dropzone-file"
            onChange={(event) => {
              handleFileChange(event);
            }}
            type="file"
            multiple
            className="hidden"
          />
        </div>
      </div>
    </div>
  );
};
