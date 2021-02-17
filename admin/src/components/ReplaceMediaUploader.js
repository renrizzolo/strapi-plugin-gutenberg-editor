import React from "react";
import { useState } from "@wordpress/element";
import MediaLib from "./MediaLib";
import { Button } from "@wordpress/components";
import { prefixFileUrlWithBackendUrl } from "strapi-helper-plugin";

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
  const addBackendURLToMedia = (data) => {
    return data.map((data) => ({
      ...data,
      url: prefixFileUrlWithBackendUrl(data.url),
    }));
  };
  const onChange = (data) => {
    console.log(onSelect);
    const media = addBackendURLToMedia(data);
    console.log("MyMediaUploader onchange media", media);
    media &&
      media.length > 0 &&
      onSelect(gallery || multiple ? media : media[0]);
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
