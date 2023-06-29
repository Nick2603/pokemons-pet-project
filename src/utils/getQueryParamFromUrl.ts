export enum queryParam {
  LIMIT = "LIMIT",
  OFFSET = "OFFSET",
};

export const getQueryParamFromUrl = (url: string, param: queryParam): number | null  => {
  let regex: RegExp | null = null;

  if (param === queryParam.LIMIT) {
    regex = /limit=(\d+)/;
  };

  if (param === queryParam.OFFSET) {
    regex = /offset=(\d+)/;
  }

  const match = regex ? url.match(regex) : null;
  const value = match ? parseInt(match[1]) : null;

  return value;
};
