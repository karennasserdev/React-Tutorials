import React from 'react';
import './Content.css'
import { Switch, Route } from "react-router-dom"

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';
import NotFound from '../../views/examples/notFound';

const Content = props => (
    <main className="Content">
        <Switch>
            <Route path='/about'>
                <About />
            </Route>
            {/* :id não é um valor literal, ou seja, é um parametro que sera passado para a url */}
            <Route path='/param/:id'>
                <Param />
            </Route>
            {/* Home com a rota / tem que ser o último no Switch porque todas as rotas começam com / mas podemos considerar a rota EXACT, ele so entra na Home se a rota for EXATAMENTE / e assim pode ficar em primeira posição no Switch */}
            <Route exact path='/'>
                <Home />
            </Route>
            <Route path='*'>
                <NotFound />
            </Route>

        </Switch>
    </main>
)


export default Content