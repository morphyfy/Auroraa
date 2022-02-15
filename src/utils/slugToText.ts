export const convertSlug = (slug: string) => {
  const text = slug.replace(/-/g, " ");
  return text;
};
