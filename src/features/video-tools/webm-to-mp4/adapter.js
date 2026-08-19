import { convertVideo } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { makeLockedMediaFormatPanel } from "@/components/tool-shared/locked-media-format-panel";

const OptionsPanel = makeLockedMediaFormatPanel("mp4", null);

export const webmToMp4Adapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel,
  defaultOptions: { targetExt: "mp4" },
  runButtonLabel: "Convert now",
  async run(files, options, onProgress) {
    const blob = await convertVideo(files[0], "mp4", (p) => onProgress({ stage: "Converting video", value: p }));
    return [{ blob, name: files[0].name.replace(/\.[^.]+$/, "") + ".mp4" }];
  },
};
