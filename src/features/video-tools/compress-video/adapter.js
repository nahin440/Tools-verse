import { compressVideo } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { CompressVideoOptionsPanel } from "./options-panel";

export const compressVideoAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel: CompressVideoOptionsPanel,
  defaultOptions: { level: "medium" },
  runButtonLabel: "Compress now",
  async run(files, options, onProgress) {
    const blob = await compressVideo(files[0], options.level, (p) =>
      onProgress({ stage: "Compressing video", value: p })
    );
    return [{ blob, name: files[0].name.replace(/\.([^.]+)$/, "-compressed.$1") }];
  },
};
