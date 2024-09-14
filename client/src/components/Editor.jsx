import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor() {
  const quillRef = useRef(null);

  const handleImageUpload = () => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = async () => {
      const file = input.files[0];
      if (file) {
        const formData = new FormData();
        formData.append("file", file);

        try {
          // Upload image to the backend
          const response = await fetch("/upload-image", {
            method: "POST",
            body: formData,
          });
          const data = await response.json();

          // Insert image into the editor
          const editor = quillRef.current.getEditor();
          const range = editor.getSelection();
          editor.insertEmbed(range.index, "image", data.url);
        } catch (error) {
          console.error("Error uploading image:", error);
        }
      }
    };
  };

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote", "code"],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
      ],
      handlers: {
        image: handleImageUpload,
      },
    },
  };

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      ref={quillRef}
      placeholder="Enter the message..........."
    />
  );
}

export default Editor;
