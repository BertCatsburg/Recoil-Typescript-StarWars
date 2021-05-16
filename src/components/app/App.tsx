import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { Header } from 'components/header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home, About, SWPerson } from 'containers';

const App: React.FC = () => {
    // const classes = useStyles();

    return (
        <RecoilRoot>
            <Suspense fallback={<div>Loading.....</div>}>
                <BrowserRouter>
                    <Header />
                    <Switch>
                        <Route path={'/home'} exact>
                            <Home />
                        </Route>
                        <Route path={'/about'} exact>
                            <About />
                        </Route>
                        <Route path={'/starwars/person'} exact>
                            <SWPerson />
                        </Route>
                    </Switch>
                </BrowserRouter>
            </Suspense>
        </RecoilRoot>
    );
};

export default App;
