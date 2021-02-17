import React from "react";
import { useState } from "@wordpress/element";
import MediaLib from "./MediaLib";
import { Button } from "@wordpress/components";
const ALLOWED_MEDIA_TYPES = ["image"];
window.wp = {};
const ReplaceWPMediaUploader = ({
  onSelect,
  render,
  value,
  addToGallery,
  allowedTypes,
  gallery,
  multiple,
}) => {
  const [mediaLibOpen, toggleMediaLib] = useState(false);
  console.log(
    "media upload props ",
    multiple,
    allowedTypes,
    addToGallery,
    value
  );
  const onChange = (data) => {
    console.log("MyMediaUploader onchange", data);
    console.log(onSelect);
    data && data.length > 0 && onSelect(gallery || multiple ? data : data[0]);
  };
  return (
    <>
      <MediaLib
        allowedTypes={allowedTypes.map((type) => `${type}s`)}
        multiple={multiple}
        isOpen={mediaLibOpen}
        onToggle={() => toggleMediaLib(false)}
        onChange={onChange}
      />
      <Button onClick={toggleMediaLib}>Open My Media Library</Button>
    </>
  );
};

export default ReplaceWPMediaUploader;
