import html2pdf from "html2pdf.js";

export function generateSnapshotPdf(elementId, fileName) {
  const element = document.getElementById(elementId);
  if (!element) {
    alert("Resume preview not found!");
    return;
  }

  const opt = {
    margin: [0, 0, 0, 0],
    filename: fileName,
    image: { type: "jpeg", quality: 1 },
    html2canvas: {
      scale: 2, // higher scale = sharper
      useCORS: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
    pagebreak: { mode: ["avoid-all", "css", "legacy"] },
  };

  // Temporarily lock width to A4 for accurate rendering
  const originalWidth = element.style.width;
  element.style.width = "210mm";

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      element.style.width = originalWidth; // reset
    });
}
