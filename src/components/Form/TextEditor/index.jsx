"use client";
import React, { useMemo } from "react";
// import JoditEditor from "jodit-react";
import clsx from "clsx";
import dynamic from "next/dynamic";

const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

export const TextEditor = ({
  value = "",
  onBlur = () => {},
  onchange = () => {},
  readonly = false,
  autofocus = true,
  statusbar = true,
  tabIndex = 1,
  askBeforePasteHTML = true,
  askBeforePasteFromWord = true,
  defaultActionOnPaste = "insert_clear_html",
  placeholder = "Write something ...",
  beautyHTML = true,
  height = "auto",
  toolbarButtonSize = "medium",
  toolbarAdaptive = true,
  cleanHTML = {},
  allowResizeX = true,
  allowResizeY = true,
  parentClassName,
  id,
  name,
  label,
  labelClass,
  buttons = [
    "source",
    "|",
    "bold",
    "italic",
    "|",
    "ul",
    "ol",
    "|",
    "font",
    "fontsize",
    "brush",
    "paragraph",
    "|",
    "image",
    "table",
    "link",
    "|",
    "left",
    "center",
    "right",
    "justify",
    "|",
    "undo",
    "redo",
    "|",
    "hr",
    "eraser",
  ],
  dependencyList = [],
  ...rest
}) => {
  const editorConfig = useMemo(
    () => ({
      readonly: readonly,
      autofocus: autofocus,
      tabIndex: tabIndex,
      statusbar: statusbar,
      askBeforePasteHTML: askBeforePasteHTML,
      askBeforePasteFromWord: askBeforePasteFromWord,
      defaultActionOnPaste: defaultActionOnPaste,
      placeholder: placeholder,
      beautyHTML: beautyHTML,
      toolbarButtonSize: toolbarButtonSize,
      buttons: buttons,
      height: height,
      toolbarAdaptive: toolbarAdaptive,
      cleanHTML: cleanHTML,
      allowResizeX: allowResizeX,
      allowResizeY: allowResizeY,
    }),
    dependencyList
  );
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
      <JoditEditor
        id={id}
        name={name}
        config={editorConfig}
        value={value}
        onBlur={onBlur}
        onChange={onchange}
        {...rest}
      />
    </div>
  );
};
