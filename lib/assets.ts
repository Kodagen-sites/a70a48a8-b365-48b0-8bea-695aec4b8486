import assetManifest from "@/content/asset-manifest.json";
import framesManifest from "@/content/frames-manifest.json";
import { resolveImage } from "@/lib/image-fallback";
import { siteConfig } from "@/lib/site-config";

const images = assetManifest.images as Record<string, string>;

/**
 * Resolve a generated image by manifest slot. Falls back to a tasteful
 * brand-tinted gradient so a section never renders a broken slot before
 * gen:images has run (or if a single slot failed).
 */
export function assetImage(slot: string, keyword?: string): string {
  return resolveImage({
    src: images[slot],
    keyword,
    brandColor: siteConfig.brand.accent,
  });
}

/** Hero scroll-scrub frame sequence (written by gen:frames). */
export const heroFrames = {
  frameCount: (framesManifest as { frameCount: number }).frameCount,
  pattern:
    (framesManifest as { frameUrlTemplate?: string }).frameUrlTemplate ||
    `${(framesManifest as { frameDir?: string }).frameDir || "/frames"}/frame-{NNNN}.jpg`,
};
