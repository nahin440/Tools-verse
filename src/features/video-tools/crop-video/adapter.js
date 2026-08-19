import { cropVideo } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { CropVideoOptionsPanel } from "./options-panel";

export const cropVideoAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel: CropVideoOptionsPanel,
  defaultOptions: {},
  runButtonLabel: "Crop now",
  async run(files, options, onProgress) {
    if (!options.cropBox) {
      throw new Error("Adjust the crop area before continuing.");
    }
    const box = {
      x: Math.round(options.cropBox.x),
      y: Math.round(options.cropBox.y),
      width: Math.round(options.cropBox.width),
      height: Math.round(options.cropBox.height),
    };
    const blob = await cropVideo(files[0], box, (p) => onProgress({ stage: "Cropping video", value: p }));
    return [{ blob, name: files[0].name.replace(/\.([^.]+)$/, "-cropped.$1") }];
  },
};
