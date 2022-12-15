export default class Network {
    static postRequest = async (url, body, returnJson = false) => {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const json = returnJson ? await response.json() : await response.text();
      return json;
    };

    static customRequestWithoutBody = async (url, method, returnJson = false) => {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      });
      const json = returnJson ? await response.json() : await response.text();
      return json;
    };

    static customRequestWithBody = async (url, method, body, returnJson = false) => {
      const response = await fetch(url, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
      });
      const json = returnJson ? await response.json() : await response.text();
      return json;
    };

    static getRequest = async (url, returnJson = false) => {
      const response = await fetch(url);
      const json = returnJson ? await response.json() : await response.text();
      return json;
    };
}