import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './App.module.css';
import { Header, Content, Layout } from '../../common/Layout'
import { paths } from '../../../constatnts'
import { RequestPage } from '../Request'
import { ReviewPage } from '../Review'
import { MessagePage } from '../Message'
import SiteHeader from "../../containers/SiteHeader";

const routes = [
  { path: paths.REVIEW, component: ReviewPage},
  { path: paths.REQUEST, component: RequestPage},
  { path: paths.MESSAGE, component: MessagePage}
];

const App = () => (
    <div className="App">
      <Layout>
        <Header>
          <SiteHeader />
        </Header>
        <Content>
           <Switch>
             {routes.map( ({ path, component })=> <Route path={path} component={component} key={path}/>)}
           </Switch>
        </Content>
      </Layout>
    </div>
  )

export default App;
