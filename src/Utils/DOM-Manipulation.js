const toogleShareBox = (isMobile) => {
  if (isMobile) {
    const box = document.querySelector("#share");
    if (box.className === "mobileMsg") {
      box.setAttribute("class", "msg");
    } else {
      box.setAttribute("class", "mobileMsg");
    }
  }
};

const fallbackCopyTextToClipboard = (
  link,
  setMessage,
  copiedSuccessfully,
  copyFailed
) => {
  const textArea = document.createElement("textarea");
  textArea.value = link;

  textArea.style.top = "0";
  textArea.style.left = "0";
  textArea.style.position = "fixed";

  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    const successful = document.execCommand("copy");
    successful &&
      setMessage({
        success: true,
        copiedSuccessfully,
      });
  } catch (err) {
    setMessage({
      success: false,
      copyFailed,
    });
  }

  document.body.removeChild(textArea);
};

export { toogleShareBox, fallbackCopyTextToClipboard };
