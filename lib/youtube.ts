/**
 * Parse a YouTube video id from common URL shapes (watch, shorts, youtu.be).
 */
export function parseYouTubeVideoId(url: string): string | null {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace("www.", "");

    if (host === "youtu.be") {
      const id = parsed.pathname.split("/").filter(Boolean)[0];
      return id || null;
    }

    if (host === "youtube.com" || host === "m.youtube.com") {
      if (parsed.pathname === "/watch") {
        return parsed.searchParams.get("v");
      }
      if (parsed.pathname.startsWith("/shorts/")) {
        const id = parsed.pathname.split("/").filter(Boolean)[1];
        return id || null;
      }
    }
  } catch {
    return null;
  }
  return null;
}

export type YouTubeEmbedOptions = {
  autoplay?: boolean;
  mute?: boolean;
  loop?: boolean;
  controls?: boolean;
  showInfo?: boolean;
};

/**
 * Premium-style embed: minimal chrome, no related videos, optional loop via playlist=id.
 */
export function buildYouTubeEmbedUrl(
  videoUrlOrId: string,
  options: YouTubeEmbedOptions = {},
): string | null {
  const id = videoUrlOrId.includes("http")
    ? parseYouTubeVideoId(videoUrlOrId)
    : /^[\w-]{11}$/.test(videoUrlOrId)
      ? videoUrlOrId
      : null;
  if (!id) return null;

  const {
    autoplay = false,
    mute = true,
    loop = true,
    controls = false,
    showInfo = false,
  } = options;

  const params = new URLSearchParams({
    autoplay: autoplay ? "1" : "0",
    mute: mute ? "1" : "0",
    controls: controls ? "1" : "0",
    modestbranding: "1",
    rel: "0",
    playsinline: "1",
  });

  if (loop) {
    params.set("loop", "1");
    params.set("playlist", id);
  } else {
    params.set("loop", "0");
  }

  params.set("showinfo", showInfo ? "1" : "0");

  return `https://www.youtube.com/embed/${id}?${params.toString()}`;
}
