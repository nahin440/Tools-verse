import { burnSubtitles } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { AddSubtitlesOptionsPanel } from "./options-panel";

export const addSubtitlesAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel: AddSubtitlesOptionsPanel,
  defaultOptions: {},
  runButtonLabel: "Burn in subtitles",
  async run(files, options, onProgress) {
    if (!options.subtitleFile) {
      throw new Error("Upload a .srt or .vtt subtitle file first.");
    }
    const blob = await burnSubtitles(files[0], options.subtitleFile, (p) =>
      onProgress({ stage: "Burning in subtitles", value: p })
    );
    return [{ blob, name: files[0].name.replace(/\.([^.]+)$/, "-subtitled.$1") }];
  },
};
