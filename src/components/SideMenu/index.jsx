import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import reactClass from 'reactClass';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

class Sider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: props.pathName
    };
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Menu onClick={this.handleClick}
        style={{ width: 240 }}ß
        selectedKeys={[this.state.current]}
        mode="inline"
      >
        <Menu.Item key="option1">
          <Link to="/option1">
            <span><Icon type="cloud-o" />Option1</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="helper">
          <Link to="/helper">
            <span><Icon type="question-circle-o" />使用帮助</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }
}

export default Sider;

