let quill;
let contents;

const initQuillEditor = (domId) => {
  const quillOptions = [
    ["bold", "italic", "underline", "strike"],
    [{ header: 1 }, { header: 2 }],
    ["blockquote", "code-block", "link"],
    ["image"],
    [{ font: [] }],
  ];

  const editor = new Quill(`#${domId}`, {
    theme: "snow",
    modules: {
      toolbar: {
        container: quillOptions,
      },
    },
  });

  return editor;
};

document.addEventListener("DOMContentLoaded", () => {
  quill = initQuillEditor(`edit-container`);

  quill.on("editor-change", (e) => {
    contents = quill.root.innerHTML;
  });
});

const renderButton = document.querySelector(".show-html-btn");
renderButton.addEventListener("click", () => {
  const renderTarget = document.querySelector(".render-html");
  renderTarget.innerHTML = contents;
});
