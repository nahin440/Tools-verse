import { changeVideoFps } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { ChangeVideoFpsOptionsPanel } from "./options-panel";

export const changeVideoFpsAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel: ChangeVideoFpsOptionsPanel,
  defaultOptions: { targetFps: 30 },
  runButtonLabel: "Apply now",
  async run(files, options, onProgress) {
    const blob = await changeVideoFps(files[0], options.targetFps || 30, (p) =>
      onProgress({ stage: "Changing frame rate", value: p })
    );
    return [{ blob, name: files[0].name.replace(/\.([^.]+)$/, "-fps.$1") }];
  },
};
