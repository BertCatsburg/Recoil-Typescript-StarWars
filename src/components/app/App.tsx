import { RecoilRoot } from 'recoil';
import { Header } from 'components/header';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { Home, About } from 'containers';

const App: React.FC = () => {
    return (
        <RecoilRoot>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path={'/home'} exact>
                        <Home />
                    </Route>
                    <Route path={'/about'} exact>
                        <About />
                    </Route>
                </Switch>
            </BrowserRouter>
        </RecoilRoot>
    );
};

export default App;
