import React from 'react'
import DisplayUsers from './DisplayUsers';
import  '../Components/Css/Skeleton.css'
import { Layout,message, Menu, Breadcrumb,Col,Row,Typography} from 'antd';
import { Tag } from 'antd';
import {
  TwitterOutlined,
  YoutubeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  PoweroffOutlined,
  MailOutlined,
  AndroidOutlined ,
  IdcardOutlined,
  WhatsAppOutlined
} from '@ant-design/icons';
import SubMenu from 'antd/lib/menu/SubMenu';
const { Header, Content, Footer,Sider } = Layout;
const { Title } = Typography;
function Home() {
    return (
<div>
      <Layout>
     
     <Header  style={{position: 'fixed', padding:'12px 30px', zIndex: 1, width: '100%',boxShadow:'1px 12px 8px 0px #aaaaaa' }}>
     <PoweroffOutlined style={{ fontSize: '20px', color:'white', float:'right' }} onClick={() =>  message.success("Logout Sucess")} />
       <Title style={{color:'white'}} level={4}>Vishal Devani</Title>     
      </Header>
      <Layout style={{margin:'50px 0px 0px 0px'}} >
      <Sider
      breakpoint="md"
      collapsedWidth="0"
      onBreakpoint={broken => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
      style={{marginTop:20}}
      >
        <Menu
         defaultSelectedKeys={['Dashboard']}
         mode="inline"
        >
          <Menu.Item key='Dashboard'>
            Dashboard
          </Menu.Item>
          <SubMenu 
          
          title={
            <span>
              <MailOutlined />
              <span>Company</span>
            </span>
          }
          >
            <Menu.ItemGroup key="Company" title='Company'>
              <Menu.Item key="AboutUs">
              AboutUs
              </Menu.Item>
              <Menu.Item key="ourTeam">
              Our Team
              </Menu.Item>
              
            </Menu.ItemGroup>
          </SubMenu>
          <SubMenu 
          
          title={
            <span>
              <AndroidOutlined />
              <span>Services</span>
            </span>
          }
          >
            <Menu.ItemGroup key="Service" title='Services'>
              <Menu.Item key="Outsourcing Services">
              Outsourcing Services
              </Menu.Item>
              <Menu.Item key="Hire Developers">
              Hire Developers
              </Menu.Item>
              
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key='Portfolio'>
          <IdcardOutlined />  Portfolio
          </Menu.Item>
          <Menu.Item key='Contact Us'>
          <WhatsAppOutlined /> Contact Us
          </Menu.Item>
        </Menu>
      </Sider>
         <Layout>
         <Content>
      <Breadcrumb>
        <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
      </Breadcrumb>
      <div className="content_div" > <DisplayUsers/></div>
    </Content >
  
    <Footer style={{ textAlign: 'center'}}>

 <Row justify="center">
     <Col className="mb-2">
     <Tag icon={<TwitterOutlined />} color="#55acee">
      Twitter
     </Tag>  
     </Col>
    
     <Col className="mb-2">
     <Tag icon={<LinkedinOutlined />} color="#55acee">
       LinkedIn
     </Tag>
     </Col>

     <Col className="mb-2" >
     <Tag icon={<FacebookOutlined />} color="#3b5999">
       Facebook
     </Tag>
     </Col>

     <Col className="mb-2">
     <Tag icon={<YoutubeOutlined />} color="#cd201f">
       Youtube
     </Tag>
     </Col >
     <b>©2020 TheOne Technologies </b>
     </Row>   
        </Footer>


      </Layout>
      </Layout>
     
    </Layout>
    </div>
    )
}

export default Home
