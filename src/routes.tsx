import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Academico from './pages/Academico';
import Cursos from './pages/Cursos';

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/academico" component={Academico} />
                <Route path="/cursos" component={Cursos} />
            </Switch>
        </BrowserRouter>
    );
}