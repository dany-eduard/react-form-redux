import HttpClient from "../helpers/HTTPclient";

export const getRequest = async (url) => {
  try {
    const resp = await HttpClient.get(url, {
      responseMode: "json",
    });
    console.log("🚀 ~ file: getRequets.js ~ line 8 ~ getRequets ~ resp", resp.getData());

    return resp.getData();
  } catch (error) {
    console.error("🚀 ~ file: getRequets.js ~ line 10 ~ getRequets ~ error", error);
  }
};
