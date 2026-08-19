import { convertVideo } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { makeLockedMediaFormatPanel } from "@/components/tool-shared/locked-media-format-panel";

const OptionsPanel = makeLockedMediaFormatPanel("gif", "GIF conversion works best with short clips (under ~15 seconds) since animated GIFs don't compress as efficiently as video codecs.");

export const mp4ToGifAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel,
  defaultOptions: { targetExt: "gif" },
  runButtonLabel: "Convert now",
  async run(files, options, onProgress) {
    const blob = await convertVideo(files[0], "gif", (p) =>
      onProgress({ stage: "Converting video", value: p })
    );
    return [{ blob, name: files[0].name.replace(/\.[^.]+$/, "") + "." + "gif" }];
  },
};
