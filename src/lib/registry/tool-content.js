import { getTool } from "./tools";

const GENERIC_PRIVACY_FAQ = {
  question: "Is my file uploaded to a server?",
  answer:
    "No. Every operation on this page runs locally in your browser using JavaScript and WebAssembly. Your file is never transmitted anywhere, which also means it works without an internet connection once the page has loaded.",
};

const OVERRIDES = {
  "merge-pdf": {
    howItWorks: {
      title: "How to merge PDF files",
      steps: [
        "Drag and drop two or more PDF files into the upload area, or click to browse.",
        "Reorder the files by dragging them into the sequence you want in the final document.",
        'Click "Merge PDFs now" — the combined file is ready in seconds.',
        "Download your merged PDF.",
      ],
    },
    faq: [
      {
        question: "Is there a limit to how many PDFs I can merge?",
        answer:
          "No hard limit is enforced by this tool. Very large combined files are only bounded by your device's available memory, since merging happens entirely in your browser.",
      },
      {
        question: "Will the page order and formatting be preserved?",
        answer:
          "Yes. Each source PDF's pages are copied into the new document exactly as they appear, including embedded fonts, images, and page size — nothing is re-rendered or flattened.",
      },
      GENERIC_PRIVACY_FAQ,
    ],
  },
  "pdf-to-word": {
    faq: [
      {
        question: "Will the converted Word document look exactly like my PDF?",
        answer:
          "This tool reconstructs the real structure of your PDF — text with its original font size and styling, embedded images at their original position, and detected tables as real Word tables — rather than producing a flat, unstyled text dump. Complex multi-column layouts or unusual designs may still lay out somewhat differently, since Word and PDF use fundamentally different layout models.",
      },
      {
        question: "What happens if my PDF is a scanned document?",
        answer:
          "If no selectable text is found in the PDF, this tool automatically runs on-device OCR to recognize the text before building the Word document, and lets you know the result came from OCR so you can double-check accuracy.",
      },
      GENERIC_PRIVACY_FAQ,
    ],
  },
  "unlock-pdf": {
    faq: [
      {
        question: "Can this tool remove a password I don't know?",
        answer:
          "No. You need to enter the correct current password for the PDF; this tool removes protection from files you already have rightful access to, it does not attempt to bypass or crack unknown passwords.",
      },
      GENERIC_PRIVACY_FAQ,
    ],
  },
  "create-archive": {
    faq: [
      {
        question: "Can I create a RAR archive?",
        answer:
          "No — RAR is a proprietary format, and only WinRAR's own software can create RAR files; every other tool, including this one, can only extract them. You can create ZIP, 7Z, TAR, or TAR.GZ archives here, all of which are open formats.",
      },
      GENERIC_PRIVACY_FAQ,
    ],
  },
};

function genericHowItWorks(tool) {
  return {
    title: `How to ${tool.verb.toLowerCase()} a ${tool.category === "pdf" ? "PDF" : "file"}`,
    steps: [
      `Drag and drop your file into the upload area, or click to browse${tool.multiple ? " (you can add more than one)" : ""}.`,
      "Adjust the options to fit what you need.",
      `Click the button to ${tool.verb.toLowerCase()} — processing happens instantly in your browser.`,
      "Download your finished file.",
    ],
  };
}

function genericFaq(tool) {
  return [
    {
      question: `Is ${tool.name} free to use?`,
      answer: `Yes, ${tool.name} is completely free, with no signup, watermark, or file-count limit.`,
    },
    GENERIC_PRIVACY_FAQ,
  ];
}

function genericLongDescription(tool) {
  return `<h2>About ${tool.name}</h2><p>${tool.description} This tool runs entirely in your browser — no file is ever uploaded to a server, which means it's both private and fast, with no waiting on an upload before processing begins.</p>`;
}

export function getToolContent(toolSlug) {
  const tool = getTool(toolSlug);
  if (!tool) return { howItWorks: null, faq: [], longDescription: "" };

  const override = OVERRIDES[toolSlug] || {};
  return {
    howItWorks: override.howItWorks || genericHowItWorks(tool),
    faq: override.faq || genericFaq(tool),
    longDescription: override.longDescription || genericLongDescription(tool),
  };
}
