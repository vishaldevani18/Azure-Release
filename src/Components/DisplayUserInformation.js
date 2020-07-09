import React from 'react'
import {  Card, Col } from 'antd';
import { Typography, Space } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
const { Text, Link } = Typography;
// Display Users In Card View Component
function DisplayUserInformation(props) {
    const loading = props.loading
   const  {info} = props
   
    return (

           
              <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }} className="mb-4">
            <Card title={info.Gender==="MALE" ? <i class="fa fa-male " aria-hidden="true"> {info.FirstName+" "+info.LastName} </i> :<i class="fa fa-female " aria-hidden="true"> {info.FirstName+" "+info.LastName} </i>} 
                extra={<small>{info._id}</small>}
                loading={loading}
                hoverable={true}
                actions={[
                    <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} key="delete" onClick={() => props.delete(info._id)} />,
                    <EditOutlined style={{ fontSize: '20px', color: '#08c' }} key="update" onClick={() => props.update(info)} />
                ]}

            >
                <Space direction="vertical">
            <Text><Text strong>Email: </Text>{info.Email}</Text>
            <Text><Text strong>City: </Text>{info.City}</Text>
            <Text><Text strong>State: </Text>{info.State}</Text>
            <Text><Text strong>Country: </Text>{info.Country}</Text>
            <Text><Text strong>Department: </Text>{info.Department}</Text>
               
                </Space>
            </Card>
        </Col>
           
    )
}



export default DisplayUserInformation

