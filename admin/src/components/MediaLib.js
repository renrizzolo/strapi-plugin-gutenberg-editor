import React, { useEffect, useState } from "react";
import { useStrapi, prefixFileUrlWithBackendUrl } from "strapi-helper-plugin";
import PropTypes from "prop-types";

const MediaLib = ({
  isOpen,
  onChange,
  allowedTypes,
  multiple,
  onToggle,
  uploadFn,
}) => {
  const {
    strapi: {
      componentApi: { getComponent },
    },
  } = useStrapi();
  const [data, setData] = useState(null);
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsDisplayed(true);
    }
  }, [isOpen]);

  const Component = getComponent("media-library").Component;

  const handleInputChange = (data) => {
    console.log("handleInputChange", data);
    if (data) {
      const dts = (Array.isArray(data) ? data : [data]).map((x) => {
        const { name, alternativeText, url } = x;
        const alt = alternativeText || name;
        return { alt, url: prefixFileUrlWithBackendUrl(url) };
      });

      setData(dts);
    }
  };

  const handleClosed = () => {
    console.log("medialib close", data);
    if (data) {
      onChange(data, uploadFn);
    }

    setData(null);
    setIsDisplayed(false);
  };

  if (Component && isDisplayed) {
    return (
      <Component
        isOpen={isOpen}
        noNavigation={true}
        onClosed={handleClosed}
        onInputMediaChange={handleInputChange}
        onToggle={onToggle}
        step={uploadFn ? "browse" : "list"}
        filesToUpload={
          uploadFn && uploadFn.filesList[0]?.name
            ? uploadFn.filesList
            : undefined
        }
        allowedTypes={allowedTypes}
        multiple={multiple}
        // {...rest}
      />
    );
  }

  return null;
};

MediaLib.defaultProps = {
  isOpen: false,
  onChange: () => {},
  onToggle: () => {},
};

MediaLib.propTypes = {
  isOpen: PropTypes.bool,
  onChange: PropTypes.func,
  onToggle: PropTypes.func,
};

export default MediaLib;
