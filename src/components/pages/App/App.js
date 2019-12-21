import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'
import { Content, Layout } from '../../common/Layout'
import { paths } from '../../../constatnts'
import { RequestPage } from '../Request'
import { ReviewPage } from '../Review'
import { MessagePage } from '../Message'
import SiteHeader from "../../containers/SiteHeader";
import styles from './App.module.css'

const routes = [
  { path: paths.REVIEW, component: ReviewPage},
  { path: paths.REQUEST, component: RequestPage},
  { path: paths.MESSAGE, component: MessagePage}
];

const App = () => (
    <div className="App">
      <Layout>
          <SiteHeader />
        <Content className={styles['content']}>
           <Switch>
             {routes.map( ({ path, component })=> <Route path={path} component={component} key={path}/>)}
             <Redirect to={paths.REVIEW}/>
           </Switch>
        </Content>
      </Layout>
    </div>
  )

export default App;
