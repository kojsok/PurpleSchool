interface IRequestBuilder {
    method: 'GET' | 'POST';
    body: Record<string, any>;
    headers: Record<string, string>;
    url: string;
  }
  
  class RequestBuilder implements IRequestBuilder {
    method: 'GET' | 'POST' = 'GET';
    body: Record<string, any> = {};
    headers: Record<string, string> = {};
    url: string = '';
  
    setMethod(method: 'GET' | 'POST') {
      this.method = method;
      return this;
    };
  
    setBody(body: Record<string, any>) {
      this.body = body;
      return this;
    };
  
    setHeaders(headers: Record<string, string>) {
      this.headers = headers;
      return this;
    };
  
    setUrl(url: string) {
      this.url = url;
      return this;
    };
  
    async exec(): Promise<void> {
      const res = await fetch(this.url, {
        method: this.method,
        body: JSON.stringify(this.body),
        headers: this.headers
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
      return res;
    };
  };