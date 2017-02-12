import React from 'react';
import ReactDOM from 'react-dom';
import { Layout, Icon } from 'antd';
import SideMenu from '../SideMenu';
import styles from './style';

const { Header } = Layout;

export default props => (
  <Header className={styles.header} >
    <Icon type="appstore-o" /> Header
  </Header>
);
