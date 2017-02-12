import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import { Layout, Icon } from 'antd';
import SideMenu from '../SideMenu';
import Header from '../Header';
import styles from './style';

const { Footer, Sider, Content } = Layout;

export default ({ children, location }) => (
  <Layout className={styles.mainLayout} >
    <Header />
    <Layout>
      <Sider className={styles.sider} >
        <SideMenu pathName={location.pathname.replace(/\//, '')} />
      </Sider>
      <Layout>
        <Content>
          <ReactCSSTransitionGroup
            component="div"
            transitionName="layout"
            transitionEnterTimeout={500}
            transitionLeaveTimeout={300}
          >
            {React.cloneElement(children, {
              key: location.pathname
            })}
          </ReactCSSTransitionGroup>
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  </Layout>
);
