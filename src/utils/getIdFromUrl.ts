export const getIdFromUrl = (url: string): string => {
  const splitted = url.split("/");
  return splitted[splitted.length - 2];
};
