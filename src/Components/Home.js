import {
  PoweroffOutlined
} from '@ant-design/icons'
import { Layout, Menu, Row, Typography, message } from 'antd'
import '../Components/Css/Skeleton.css'
import DisplayUsers from './DisplayUsers'
import React from 'react'


const { Header, Content, Footer, Sider } = Layout
const { Title } = Typography
function Home () {
  return (
    <div>
      <Layout>

        <Header style={{ boxShadow: '1px 12px 8px 0px #aaaaaa', padding: '12px 30px', position: 'fixed', width: '100%', zIndex: 1 }}>
          <PoweroffOutlined style={{ color: 'white', float: 'right', fontSize: '20px' }} onClick={() => message.success('Logout Sucess')} />
          <Title style={{ color: 'white' }} level={4}>Vishal Devani</Title>
        </Header>
        <Layout style={{ margin: '50px 0px 0px 0px' }} >
          <Sider
            breakpoint="md"
            collapsedWidth="0"

            style={{ marginTop: 20 }}
          >
            <Menu
              defaultSelectedKeys={['Dashboard']}
              mode="inline"
            >
              <Menu.Item key="Dashboard">
            Dashboard
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Content>
             
              <div className="content_div" > <DisplayUsers/></div>
            </Content >
          </Layout>
          
        </Layout>
       
      </Layout>
      <div className="footer_div">
      <Footer style={{ textAlign: 'center',}}>

<Row justify="center">
 
  <b>©2020 TheOne Technologies </b>
</Row>
</Footer>
</div>
    </div>
  )
}

export default Home
