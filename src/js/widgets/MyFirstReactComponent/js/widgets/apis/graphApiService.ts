export default class AkMsGraphApiService {
    static readonly GRAPH_BASE_ENDPOINT = "https://graph.microsoft.com/v1.0/";
    static readonly GRAPH_API_ROUTE = "/api/graph/graphquery?queryurl=";
    _interchangeUrl: string;
    _interchangeQueryKey: string;
    _loginUserName: string;
  
    constructor(
      interchangeUrl: string,
      interchangeQueryKey: string,
      loginUserName: string
    ) {
      this._interchangeUrl = interchangeUrl;
      this._interchangeQueryKey = interchangeQueryKey;
      this._loginUserName = loginUserName;
    }
  
    fetchAllUsers(): Promise<Response> {
      let entityTypeParam: string = "/users";
      let requestUrl: string = this._interchangeUrl;
      requestUrl += AkMsGraphApiService.GRAPH_API_ROUTE;
      requestUrl += encodeURIComponent(
        AkMsGraphApiService.GRAPH_BASE_ENDPOINT + entityTypeParam
      );
      requestUrl += this.getEncodedCacheKeyObject(entityTypeParam);
  
      let requestOptions: RequestInit = {
        method: "GET",
        cache: "no-cache",
        credentials: "include",
        headers: {
          "X-Akumina-QueryKey": this._interchangeQueryKey
        }
      };
  
      return fetch(requestUrl, requestOptions);
    }
  
    private getEncodedCacheKeyObject(entityTypeParam: string): string {
      let cacheKeyObject = {
        key:
          `/user/${this._loginUserName}/` +
          AkMsGraphApiService.GRAPH_BASE_ENDPOINT +
          entityTypeParam,
        dependencies: []
      };
      return "&cacheKey=" + encodeURIComponent(JSON.stringify(cacheKeyObject));
    }
  }