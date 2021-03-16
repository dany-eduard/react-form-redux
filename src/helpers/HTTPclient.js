import ResponseHandler from "./responseHandler.js";
import { RESPONSE_MODES, REQUEST_METHODS } from './respnseModes.js'
export default class HttpClient {
  static get(resource, options) {
    return HttpClient.instance._sendRequest(resource, options);
  }

  static post(resource, options) {
    Object.assign(options, {
      method: REQUEST_METHODS.POST,
    });
    return HttpClient.instance._sendRequest(resource, options);
  }

  static put(resource, options) {
    Object.assign(options, {
      method: REQUEST_METHODS.PUT,
    });
    return HttpClient.instance._sendRequest(resource, options);
  }

  static delete(resource, options) {
    Object.assign(options, {
      method: REQUEST_METHODS.DELETE,
    });
    return HttpClient.instance._sendRequest(resource, options);
  }

  static get instance() {
    if (!HttpClient._instance) {
      HttpClient._instance = new HttpClient();
    }
    return HttpClient._instance;
  }

  async _sendRequest(resource, options = {}) {
    const defaultHeader = new window.Headers();
    defaultHeader.append("Content-Type", "application/json");
    const init = {
      method: REQUEST_METHODS.GET,
      headers: defaultHeader,
    };
    const responseDataMode = options.responseMode;
    delete options.responseMode;
    Object.assign(init, options);
    const response = await window.fetch(resource, init);
    const responseHandler = new ResponseHandler(response);
    const resolvedResponse = await responseHandler.getFormattedResponse(
      responseDataMode
    );
    return {
      getData() {
        return resolvedResponse.data;
      },
      getResponseCode() {
        return resolvedResponse.code;
      },
      getResponseHeaders() {
        return resolvedResponse.headers;
      },
    };
  }
}
