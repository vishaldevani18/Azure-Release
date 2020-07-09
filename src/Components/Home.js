import React from 'react'
import DisplayUsers from './DisplayUsers';
import  '../Components/Css/Skeleton.css'
import { Layout, Menu, Breadcrumb } from 'antd';

const { Header, Content, Footer } = Layout;


function Home() {
    return (
        <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">About</Menu.Item>
        <Menu.Item key="3">Contact</Menu.Item>
      </Menu>
    </Header>
    <Content className="site-layout" style={{ padding: '0 0px', marginTop: 64 }}>
      <Breadcrumb style={{ margin: '16px 0' }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
       
      </Breadcrumb>
      <div className="site-layout-background" style={{ padding: 0, minHeight: 500 }}>
        <DisplayUsers/>
      </div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>TheOne Technologies ©2020 </Footer>
  </Layout>
    )
}

export default Home
