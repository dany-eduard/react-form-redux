import { RESPONSE_MODES, REQUEST_METHODS } from './respnseModes.js'

export default class ResponseHandler {
  constructor(response) {
    if (!(response instanceof window.Response)) {
      throw new Error("response argument isn't valid");
    }
    this.response = response;
  }

  async proccessResponseData(responseDataMode) {
    switch (responseDataMode) {
      case RESPONSE_MODES.JSON:
        return await this.response.json();
      case RESPONSE_MODES.BLOB:
        return await this.response.blob();
      case RESPONSE_MODES.PLAIN:
      default:
        return await this.response.text();
    }
  }

  async getFormattedResponse(responseDataMode) {
    return {
      data: await this.proccessResponseData(responseDataMode),
      code: this.response.status,
      headers: this.response.headers,
    };
  }
}
