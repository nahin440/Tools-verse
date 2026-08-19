/**
 * Shared max-upload-size for every ffmpeg.wasm-backed tool (all
 * video-tools adapters, plus the audio-tools adapters that also run
 * through convertVideo/extractAudio* in media-core.js — see
 * MEDIA_ENGINE_TOOL_SLUGS in tool-page-shell.jsx for the exact list).
 *
 * 500MB, not the ~4GB a WASM32 address space can theoretically address,
 * because the real ceiling is per-tab browser memory for a single WASM
 * instance, not the WASM spec limit — and every step of the pipeline in
 * media-core.js (writeFile's fetchFile() read, ffmpeg's own decode/
 * re-encode working set, then readFile pulling the finished output back
 * out) holds its own copy in that same linear memory at once, so peak
 * usage is a multiple of the input file's size, not equal to it.
 * ffmpeg.wasm's own issue tracker documents this directly: a 400MB input
 * has been measured pushing Chrome's tab memory up by 800MB just from
 * writeFile, before ffmpeg has decoded a single frame (ffmpegwasm/
 * ffmpeg.wasm#745), Chrome has a separately-documented ~261MB ceiling
 * reading large files into MEMFS specifically (ffmpegwasm/ffmpeg.wasm#92),
 * and mobile Safari/Chrome-on-iOS throw a plain "RangeError: Out of
 * Memory" well before desktop would on the same file (ffmpegwasm/
 * ffmpeg.wasm#299) — which is what mobile users of this app were
 * actually hitting at 1GB. None of this is specific to a slow device:
 * one report is a crash on a 16GB desktop machine, since it's a per-tab
 * allocation ceiling the browser enforces, not a function of total
 * system RAM (ffmpegwasm/ffmpeg.wasm#679).
 *
 * mergeVideosAdapter (src/features/video-tools/merge-videos/adapter.js)
 * uses this same constant per-file, but is the highest-risk tool at any
 * given limit: with minFiles=2, ffmpeg has to hold two inputs AND the
 * concatenated output in memory together, not just one input/output
 * pair like every other tool here.
 *
 * If this ever needs raising again, do it gradually and re-verify
 * against real low-end/mobile devices rather than assuming desktop
 * headroom generalizes — desktop success at some size has already
 * proven not to predict mobile success at that same size once before.
 */
export const MEDIA_MAX_SIZE_BYTES = 500 * 1024 * 1024;
