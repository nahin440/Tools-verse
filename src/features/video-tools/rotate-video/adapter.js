import { rotateVideo } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { RotateVideoOptionsPanel } from "./options-panel";

export const rotateVideoAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel: RotateVideoOptionsPanel,
  defaultOptions: { degreesVal: 90 },
  runButtonLabel: "Rotate now",
  async run(files, options, onProgress) {
    const blob = await rotateVideo(files[0], options.degreesVal || 90, (p) =>
      onProgress({ stage: "Rotating video", value: p })
    );
    return [{ blob, name: files[0].name.replace(/\.([^.]+)$/, "-rotated.$1") }];
  },
};
