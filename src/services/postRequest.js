import HttpClient from "../helpers/HTTPclient";

export const postRequest = async (url, data) => {
  try {
    const req = await HttpClient.post(url, {
      body: data,
      headers: { "Content-Type": "application/json" },
    });
    console.log("🚀 ~ file: postRequest.js ~ line 9 ~ postRequest ~ data", data);
    // console.log("🚀 ~ file: postRequest.js ~ line 9 ~ postRequest ~ req", req);

  } catch (error) {
    console.error("🚀 ~ file: getRequets.js ~ line 10 ~ getRequets ~ error", error);
  }
};
