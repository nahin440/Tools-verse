/**
 * Maps each tool slug to a dynamic import of its adapter module. Using
 * dynamic imports (rather than static imports of all 42 adapters) means
 * a person visiting /pdf-tools/merge-pdf only downloads the merge-pdf
 * engine code and its dependencies (pdf-lib), not ffmpeg.wasm's loader,
 * tesseract's loader, or every other tool's code — critical for keeping
 * the app "very light to use" across a 42-tool surface.
 */
export const ADAPTER_LOADERS = {
  "merge-pdf": () => import("@/features/pdf-tools/merge-pdf/adapter").then((m) => m.mergePdfAdapter),
  "split-pdf": () => import("@/features/pdf-tools/split-pdf/adapter").then((m) => m.splitPdfAdapter),
  "compress-pdf": () => import("@/features/pdf-tools/compress-pdf/adapter").then((m) => m.compressPdfAdapter),
  "rotate-pdf": () => import("@/features/pdf-tools/rotate-pdf/adapter").then((m) => m.rotatePdfAdapter),
  "delete-pdf-pages": () => import("@/features/pdf-tools/delete-pdf-pages/adapter").then((m) => m.deletePdfPagesAdapter),
  "extract-pdf-pages": () => import("@/features/pdf-tools/extract-pdf-pages/adapter").then((m) => m.extractPdfPagesAdapter),
  "rearrange-pdf-pages": () => import("@/features/pdf-tools/rearrange-pdf-pages/adapter").then((m) => m.rearrangePdfPagesAdapter),
  "watermark-pdf": () => import("@/features/pdf-tools/watermark-pdf/adapter").then((m) => m.watermarkPdfAdapter),
  "password-protect-pdf": () => import("@/features/pdf-tools/password-protect-pdf/adapter").then((m) => m.passwordProtectPdfAdapter),
  "unlock-pdf": () => import("@/features/pdf-tools/unlock-pdf/adapter").then((m) => m.unlockPdfAdapter),
  "number-pdf-pages": () => import("@/features/pdf-tools/number-pdf-pages/adapter").then((m) => m.numberPdfPagesAdapter),
  "crop-pdf": () => import("@/features/pdf-tools/crop-pdf/adapter").then((m) => m.cropPdfAdapter),
  "repair-pdf": () => import("@/features/pdf-tools/repair-pdf/adapter").then((m) => m.repairPdfAdapter),
  "ocr-pdf": () => import("@/features/pdf-tools/ocr-pdf/adapter").then((m) => m.ocrPdfAdapter),
  "sign-pdf": () => import("@/features/pdf-tools/sign-pdf/adapter").then((m) => m.signPdfAdapter),
  "fill-pdf-forms": () => import("@/features/pdf-tools/fill-pdf-forms/adapter").then((m) => m.fillPdfFormsAdapter),

  "convert-image": () => import("@/features/image-tools/convert-image/adapter").then((m) => m.convertImageAdapter),
  "compress-image": () => import("@/features/image-tools/compress-image/adapter").then((m) => m.compressImageAdapter),
  "resize-image": () => import("@/features/image-tools/resize-image/adapter").then((m) => m.resizeImageAdapter),
  "crop-image": () => import("@/features/image-tools/crop-image/adapter").then((m) => m.cropImageAdapter),
  "rotate-flip-image": () => import("@/features/image-tools/rotate-flip-image/adapter").then((m) => m.rotateFlipImageAdapter),
  "watermark-image": () => import("@/features/image-tools/watermark-image/adapter").then((m) => m.watermarkImageAdapter),
  "remove-background": () => import("@/features/image-tools/remove-background/adapter").then((m) => m.removeBackgroundAdapter),
  "image-metadata": () => import("@/features/image-tools/image-metadata/adapter").then((m) => m.imageMetadataAdapter),
  "convert-image-to-pdf": () => import("@/features/image-tools/convert-image-to-pdf/adapter").then((m) => m.imageToPdfAdapter),

  "word-to-pdf": () => import("@/features/document-tools/word-to-pdf/adapter").then((m) => m.wordToPdfAdapter),
  "pdf-to-word": () => import("@/features/document-tools/pdf-to-word/adapter").then((m) => m.pdfToWordAdapter),
  "excel-to-pdf": () => import("@/features/document-tools/excel-to-pdf/adapter").then((m) => m.excelToPdfAdapter),
  "pdf-to-excel": () => import("@/features/document-tools/pdf-to-excel/adapter").then((m) => m.pdfToExcelAdapter),
  "powerpoint-to-pdf": () => import("@/features/document-tools/powerpoint-to-pdf/adapter").then((m) => m.powerpointToPdfAdapter),
  "pdf-to-powerpoint": () => import("@/features/document-tools/pdf-to-powerpoint/adapter").then((m) => m.pdfToPowerpointAdapter),
  "txt-to-pdf": () => import("@/features/document-tools/txt-to-pdf/adapter").then((m) => m.txtToPdfAdapter),
  "html-to-pdf": () => import("@/features/document-tools/html-to-pdf/adapter").then((m) => m.htmlToPdfAdapter),
  "markdown-to-pdf": () => import("@/features/document-tools/markdown-to-pdf/adapter").then((m) => m.markdownToPdfAdapter),

  "convert-audio": () => import("@/features/audio-tools/convert-audio/adapter").then((m) => m.convertAudioAdapter),
  "trim-audio": () => import("@/features/audio-tools/trim-audio/adapter").then((m) => m.trimAudioAdapter),
  "normalize-audio": () => import("@/features/audio-tools/normalize-audio/adapter").then((m) => m.normalizeAudioAdapter),
  "merge-audio": () => import("@/features/audio-tools/merge-audio/adapter").then((m) => m.mergeAudioAdapter),
  "split-audio": () => import("@/features/audio-tools/split-audio/adapter").then((m) => m.splitAudioAdapter),
  "extract-audio-from-video": () => import("@/features/audio-tools/extract-audio-from-video/adapter").then((m) => m.extractAudioAdapter),

  "convert-video": () => import("@/features/video-tools/convert-video/adapter").then((m) => m.convertVideoAdapter),
  "compress-video": () => import("@/features/video-tools/compress-video/adapter").then((m) => m.compressVideoAdapter),
  "resize-video": () => import("@/features/video-tools/resize-video/adapter").then((m) => m.resizeVideoAdapter),
  "trim-video": () => import("@/features/video-tools/trim-video/adapter").then((m) => m.trimVideoAdapter),
  "crop-video": () => import("@/features/video-tools/crop-video/adapter").then((m) => m.cropVideoAdapter),
  "change-video-fps": () => import("@/features/video-tools/change-video-fps/adapter").then((m) => m.changeVideoFpsAdapter),
  "watermark-video": () => import("@/features/video-tools/watermark-video/adapter").then((m) => m.watermarkVideoAdapter),
  "rotate-video": () => import("@/features/video-tools/rotate-video/adapter").then((m) => m.rotateVideoAdapter),

  "create-archive": () => import("@/features/archive-tools/create-archive/adapter").then((m) => m.createArchiveAdapter),
  "extract-archive": () => import("@/features/archive-tools/extract-archive/adapter").then((m) => m.extractArchiveAdapter),
};

export function getAdapterLoader(slug) {
  return ADAPTER_LOADERS[slug] || null;
}
