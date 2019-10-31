import React from 'react';
import { Router, Route } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import history from '../history';

const App = () => {
    return (
        <div className="ui container">
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact={true} component={StreamList} />
                    <Route path="/streams/new" exact={true} component={StreamCreate} />
                    <Route path="/streams/edit/:id" exact={true} component={StreamEdit} />
                    <Route path="/streams/delete" exact={true} component={StreamDelete} />
                    <Route path="/streams/show" exact={true} component={StreamShow} />
                </div>
            </Router>
        </div>
    );
};

export default App;