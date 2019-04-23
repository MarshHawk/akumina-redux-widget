import * as Akumina from "akumina-core";
import * as React from "react";
import { Provider } from "react-redux";
import { initStore } from "./store/index";
import { demoInitialUserStories, columns } from "./store/initialStateStaticApi";
import { BoardContainer } from "./containers/boardContainer";
import "@atlaskit/css-reset";

interface IMyFirstReactComponentState {
  pageLifecycleComplete: boolean;
  testIncrement: number;
}

interface IMyFirstReactComponentProps {
  id: number;
  displaytemplateurl: string;
  mycustomprop: string;
}

export class MyFirstReactComponent extends React.Component<
  IMyFirstReactComponentProps,
  IMyFirstReactComponentState
> {
  /**
   *
   */
  constructor(props: IMyFirstReactComponentProps) {
    super(props);
    this.state = {
      pageLifecycleComplete: false,
      testIncrement: 0
    };
    this.Increment = this.Increment.bind(this);
  }
  componentWillMount() {
    var cur = this;
    if (!Akumina.Digispace.SiteContext.IsLoaderComplete) {
      Akumina.Digispace.AppPart.Eventing.Subscribe(
        "/loader/completed/",
        function() {
          cur.AkRender();
        },
        this.props.id
      );
    } else {
      cur.AkRender();
    }
  }

  AkRender() {
    this.setState({ pageLifecycleComplete: true });
  }

  Increment() {
    this.setState({ testIncrement: this.state.testIncrement + 1 });
  }

  render() {
    console.log(this.state.pageLifecycleComplete);
    if (this.state.pageLifecycleComplete) {
      return (
        <div>
          <p>Keep going again: {this.props.mycustomprop}</p>
          <p>testIncrement: {this.state.testIncrement}</p>
          <Provider
            store={initStore({
              userStories: demoInitialUserStories,
              columns: columns,
              userSuggests: []
            })}
          >
            <BoardContainer />
          </Provider>
        </div>
      );
    } else {
      return <div>Loading...</div>;
    }
  }
}

class AkMsGraphApiService {
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
