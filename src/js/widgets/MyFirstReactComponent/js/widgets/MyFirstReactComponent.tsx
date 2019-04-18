import * as Akumina from 'akumina-core';
import * as React from 'react';
import { Provider } from 'react-redux';
import { initStore } from './store/index';
import { demoInitialUserStories, columns } from './store/initialStateStaticApi';
import { BoardContainer } from './containers/boardContainer';
import '@atlaskit/css-reset';

interface IMyFirstReactComponentState {
    pageLifecycleComplete: boolean,
    testIncrement: number
}

interface IMyFirstReactComponentProps {
    id: number,
    displaytemplateurl: string,
    mycustomprop: string
}

export class MyFirstReactComponent extends React.Component<IMyFirstReactComponentProps, IMyFirstReactComponentState> {

    /**
     *
     */
    constructor(props: IMyFirstReactComponentProps) {
        super(props);
        this.state = {
            pageLifecycleComplete: false,
            testIncrement: 0
        }
        this.Increment = this.Increment.bind(this);

    }
    componentWillMount() {
        var cur = this;
        if (!Akumina.Digispace.SiteContext.IsLoaderComplete) {
            Akumina.Digispace.AppPart.Eventing.Subscribe('/loader/completed/', function () { cur.AkRender(); }, this.props.id);
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
                    <p>Redux with cards</p>
                    <Provider store={initStore({userStories: demoInitialUserStories, columns:columns})}><BoardContainer /></Provider>
                </div>
            );
        } else {
            return (
                <div>
                    Loading...
                </div>
            )
        }
    }


}

