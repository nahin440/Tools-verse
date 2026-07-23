// Category-level SEO content: a longer intro, a short list of benefits, and a
// small FAQ set for each of the 6 tool categories. Keyed by category key
// (pdf, image, document, audio, video, archive) as returned by getCategoryBySlug().

export const CATEGORY_CONTENT = {
  pdf: {
    intro:
      "PDF is the closest thing to a universal document format — it looks the same on every device, prints predictably, and locks formatting in place. But that same rigidity makes routine tasks like combining files, removing a page, or shrinking a file size feel harder than they should be. This collection covers the full range of everyday PDF work — merging, splitting, compressing, rotating, watermarking, password protection, OCR, signing, and form filling — with every tool running directly in your browser using a real PDF engine, not a simplified approximation. Nothing you upload here is sent to a server.",
    benefits: [
      "Every tool reads and writes real PDF structure, so fonts, tables, and page geometry come through exactly as they were, not flattened or approximated.",
      "Password protection and unlocking use standards-compliant encryption that works in any PDF reader, not just this site.",
      "OCR runs a genuine open-source engine (Tesseract) on-device, so scanned documents become searchable without your file ever leaving your computer.",
      "No file size caps, watermarks, or account requirements on any tool.",
    ],
    faq: [
      {
        question: "Do I need to install anything to edit a PDF here?",
        answer:
          "No — every PDF tool runs directly in your browser tab using JavaScript and WebAssembly. There's nothing to install, and it works the same way on Windows, Mac, Linux, or a tablet.",
      },
      {
        question: "Are my PDFs uploaded to a server when I use these tools?",
        answer:
          "No. All processing — merging, compressing, editing, OCR — happens locally on your device. Your files are never transmitted anywhere, which is also why these tools keep working without an internet connection once the page has loaded.",
      },
      {
        question: "Can I use these tools on a phone or tablet, or only a desktop computer?",
        answer:
          "The tools work on any modern browser, including mobile. Complex page-editing tasks are naturally easier with a larger screen, but nothing here requires a desktop specifically.",
      },
      {
        question: "Which PDF tool should I use to make a scanned document searchable?",
        answer:
          "OCR PDF adds an invisible, searchable text layer over a scanned document's images using on-device optical character recognition, without altering how the page looks.",
      },
      {
        question: "Is there a limit on how many PDFs I can process, or how large they can be?",
        answer:
          "No artificial limits are imposed by these tools. The only real constraint is your own device's available memory, since everything runs client-side rather than on a shared server with usage quotas.",
      },
    ],
  },

  image: {
    intro:
      "Photos and graphics rarely arrive in the exact format, size, or dimensions a specific use case needs — a website wants a smaller WEBP, a print job wants a larger TIFF, a form wants a cropped passport photo, an old iPhone photo needs converting from HEIC. This collection handles conversion between every common format, compression, resizing, cropping, rotation, watermarking, background removal, and metadata inspection, all processed locally in your browser rather than uploaded to a server.",
    benefits: [
      "Batch processing across most tools means converting, compressing, or resizing dozens of images takes one pass, not one at a time.",
      "Background removal uses a genuine machine learning segmentation model, not a simple color-based cutout.",
      "Image metadata tools let you see exactly what's embedded in a photo — including GPS location — before deciding what to share or strip.",
      "Every format conversion and edit happens on your device, so nothing is uploaded anywhere, and there's no account or signup required.",
    ],
    faq: [
      {
        question: "What image formats can I work with here?",
        answer:
          "PNG, JPG, WEBP, AVIF, BMP, TIFF, GIF, SVG, ICO, and HEIC are all supported across the conversion, compression, and editing tools in this category.",
      },
      {
        question: "Can I process multiple images at once?",
        answer:
          "Yes, batch processing is supported on most tools in this category — upload several images, apply your settings once, and download them individually or together as a ZIP.",
      },
      {
        question: "Are my photos uploaded anywhere when I use these tools?",
        answer:
          "No. All image processing happens directly in your browser. The one exception is Remove Background, where the machine learning model itself (not your photo) downloads from a CDN the first time you use it — your image is never part of that request.",
      },
      {
        question: "Which tool should I use to convert an iPhone photo (HEIC) to something more universal?",
        answer:
          "Convert Image handles HEIC alongside every other supported format, so you can turn an iPhone photo into JPG, PNG, or whatever format the destination actually needs.",
      },
      {
        question: "Can I check whether a photo contains my location before sharing it?",
        answer:
          "Yes, Image Metadata shows you exactly what's embedded in a photo file, including GPS coordinates if present, camera details, and color profile data — and lets you strip it all in one step if you'd rather not share it.",
      },
    ],
  },

  document: {
    intro:
      "Documents move constantly between formats — a resume drafted in Word needs to become PDF for an application, a report exported to PDF needs to become editable again for revisions, a spreadsheet needs a fixed, printable layout, a README written in Markdown needs to become something presentable. This collection covers conversion in both directions between Word, Excel, PowerPoint, PDF, plain text, HTML, and Markdown, using engines that read each format's real internal structure rather than approximating it.",
    benefits: [
      "Word and PowerPoint conversions parse the actual OOXML file structure directly, preserving exact fonts, colors, and layout rather than losing formatting detail the way simpler converters do.",
      "PDF-to-Word and PDF-to-Excel include real table detection, rebuilding genuine editable tables instead of dumping text into a single column.",
      "HTML-to-PDF renders using the browser's own layout engine for real CSS fidelity, not a simplified approximation.",
      "Every conversion runs locally, so sensitive documents like contracts and financial reports never leave your device.",
    ],
    faq: [
      {
        question: "Will converting a Word document to PDF change how it looks?",
        answer:
          "No — this tool parses the DOCX file's actual structure (fonts, images, tables, layout) directly, so the resulting PDF matches the original document's appearance closely.",
      },
      {
        question: "Can I get an editable Word document back from a PDF?",
        answer:
          "Yes, PDF to Word reconstructs text with its original styling, embedded images, and detected tables into a genuinely editable DOCX file. If the source PDF is a scan with no selectable text, on-device OCR runs automatically first.",
      },
      {
        question: "Do these tools handle spreadsheets and presentations, or only text documents?",
        answer:
          "Both directions are covered for Excel and PowerPoint as well — converting spreadsheets and slide decks to PDF, and converting PDFs back into editable spreadsheet or presentation files.",
      },
      {
        question: "Are my documents uploaded to a server during conversion?",
        answer:
          "No. Every document conversion runs locally in your browser using JavaScript and WebAssembly, which matters for sensitive files like contracts, financial statements, or personal records.",
      },
      {
        question: "Can I convert a Markdown file into a nicely formatted document?",
        answer:
          "Yes, Markdown to PDF renders headings, lists, tables, and code blocks with proper visual styling, turning raw Markdown syntax into a properly typeset PDF.",
      },
    ],
  },

  audio: {
    intro:
      "Whether it's converting between formats for compatibility, trimming dead air from a recording, normalizing volume before publishing, or extracting a soundtrack from a video, audio editing tasks tend to be quick fixes that don't warrant installing dedicated software. This collection runs on a genuine FFmpeg build compiled to WebAssembly, the same engine widely used in professional audio and video tools, entirely inside your browser.",
    benefits: [
      "A real FFmpeg engine handles conversion, trimming, merging, splitting, normalization, and extraction — the same processing quality as installed desktop software.",
      "Waveform-based trimming and splitting make it easy to see exactly where a sound begins or ends before you cut.",
      "Loudness normalization brings recordings to a consistent, appropriate volume without risking distortion from a blunt volume increase.",
      "Nothing is uploaded to a server — audio files, including sensitive voice recordings, are processed entirely on your own device.",
    ],
    faq: [
      {
        question: "What audio formats are supported?",
        answer:
          "MP3, WAV, AAC, FLAC, OGG, M4A, AIFF, and AMR are all supported for conversion and editing across this category.",
      },
      {
        question: "Can I pull just the audio out of a video file?",
        answer:
          "Yes, Extract Audio from Video demuxes the audio track from a video file and lets you save it in your choice of output format.",
      },
      {
        question: "Is my audio file uploaded anywhere during processing?",
        answer:
          "No. Every audio tool here runs locally using a real FFmpeg engine compiled to WebAssembly. Your file is never transmitted anywhere.",
      },
      {
        question: "Which tool should I use to fix a recording that's too quiet or too loud?",
        answer:
          "Normalize Audio analyzes the file and adjusts it toward a consistent target loudness, which is a more reliable fix than simply applying a flat volume boost that risks distortion.",
      },
      {
        question: "Can I combine several separate recordings into one file?",
        answer:
          "Yes, Merge Audio joins multiple files into one continuous track in whatever order you set, even if the source files are in different formats.",
      },
    ],
  },

  video: {
    intro:
      "Video files are demanding to work with — large, format-sensitive, and often need trimming, resizing, or compressing before they'll actually fit where they're going. This collection covers conversion, compression, resizing, cropping, trimming, frame rate changes, watermarking, and rotation, all powered by a real FFmpeg build compiled to WebAssembly and running entirely in your browser rather than a remote server.",
    benefits: [
      "A genuine FFmpeg engine handles every operation, delivering the same codec support and encoding quality as installed desktop video software.",
      "Compression and resizing give you direct control over bitrate and dimensions, so you can target a specific file size or platform requirement precisely.",
      "Cropping and rotation apply consistently across the full timeline, giving a clean result rather than a fix that only affects part of the clip.",
      "Large video files never leave your device — everything is processed locally, which also means no upload wait before processing starts.",
    ],
    faq: [
      {
        question: "What video formats are supported?",
        answer:
          "MP4, AVI, MOV, MKV, WEBM, and animated GIF are all supported for conversion, alongside editing tools that work across these common formats.",
      },
      {
        question: "Are large video files uploaded to a server for processing?",
        answer:
          "No. All video processing runs locally in your browser using a real FFmpeg engine compiled to WebAssembly. Your video is never transmitted anywhere, and there's no upload wait before processing begins.",
      },
      {
        question: "How long does it take to process a video?",
        answer:
          "Processing time depends on the video's length, resolution, and your own device's processing power, since encoding happens entirely on your hardware rather than a shared server.",
      },
      {
        question: "Which tool should I use to fit a video under a platform's upload size limit?",
        answer:
          "Compress Video lets you set a target quality and bitrate to shrink file size, and Resize Video can reduce pixel dimensions for an even smaller file if needed.",
      },
      {
        question: "Can I reformat a landscape video into a vertical format for mobile platforms?",
        answer:
          "Yes, Crop Video lets you select a specific frame region — including a vertical 9:16 crop — applied consistently across the entire video.",
      },
    ],
  },

  archive: {
    intro:
      "Compressed archives make sharing, uploading, and storing multiple files far more practical than handling them individually. This collection covers both creating and extracting the common archive formats — ZIP, 7Z, TAR, GZ, and RAR — using a real compiled compression engine that runs entirely in your browser.",
    benefits: [
      "Archive creation runs on the actual 7-Zip binary compiled to WebAssembly, producing genuine, standards-compliant archives rather than a simplified reimplementation.",
      "Extraction supports RAR files as well, a proprietary format that's more complex to support but common enough to need reliable handling.",
      "Browse an archive's contents and download just the files you need, without extracting everything.",
      "Files are compressed and extracted entirely on your device, never uploaded to a server.",
    ],
    faq: [
      {
        question: "Which archive formats are supported?",
        answer:
          "ZIP, 7Z, TAR, and GZ can all be created here, and ZIP, RAR, 7Z, TAR, and GZ can all be extracted.",
      },
      {
        question: "Can I create a RAR archive?",
        answer:
          "No — RAR is a proprietary format, and only WinRAR's own software can create RAR files. Every tool, including this one, can extract them, but ZIP, 7Z, TAR, or GZ are the available formats for creating a new archive.",
      },
      {
        question: "Are my files uploaded to a server when I compress or extract an archive?",
        answer:
          "No. Both archive creation and extraction run entirely in your browser using a real compiled compression engine. Your files are never transmitted anywhere.",
      },
      {
        question: "Can I extract just one file from a large archive instead of everything?",
        answer:
          "Yes, Extract Archive lets you browse the archive's contents and download individual files you need, rather than forcing a full extraction of everything inside.",
      },
      {
        question: "Which archive format should I choose when creating one?",
        answer:
          "ZIP is the most universally compatible option and opens natively on nearly every operating system. 7Z typically compresses more tightly but needs dedicated software on some systems. TAR and GZ are common in Unix and Linux environments.",
      },
    ],
  },
};

export function getCategoryContent(categoryKey) {
  return (
    CATEGORY_CONTENT[categoryKey] || {
      intro: "",
      benefits: [],
      faq: [],
    }
  );
}
