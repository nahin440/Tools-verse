import { videoToWaveform } from "@/lib/engines/media/media-core";
import { MEDIA_MAX_SIZE_BYTES } from "@/lib/engines/media/media-limits";
import { VideoToWaveformOptionsPanel } from "./options-panel";

export const videoToWaveformAdapter = {
  accepts: ["video/*"],
  multiple: false,
  maxSizeBytes: MEDIA_MAX_SIZE_BYTES,
  OptionsPanel: VideoToWaveformOptionsPanel,
  defaultOptions: { color: "#4f46e5" },
  runButtonLabel: "Generate waveform image",
  async run(files, options, onProgress) {
    const blob = await videoToWaveform(files[0], options, (p) =>
      onProgress({ stage: "Rendering waveform", value: p })
    );
    return [{ blob, name: files[0].name.replace(/\.[^.]+$/, "") + "-waveform.png" }];
  },
};
