import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "8d6hq1ci",
  dataset: "production",
  apiVersion: "2022-09-26",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  useCdn: true,
});
const builder = imageUrlBuilder(client);
export function urlFor(source) {
  return builder.image(source);
}
