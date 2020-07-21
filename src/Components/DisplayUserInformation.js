import { Card, Col, Space, Typography } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import React from 'react'
const { Text } = Typography
// Display Users In Card View Component
function DisplayUserInformation (props) {
  const { loading } = props
  const { info } = props
  return (
    <Col lg={{ span: 8 }} md={{ span: 12 }} sm={{ span: 24 }} xs={{ span: 24 }} className="mb-4">
      <Card title={`${info.FirstName} ${info.LastName}`}
        extra={info.Gender === 'MALE' ? <i className="fa fa-male " aria-hidden="true"></i> : <i className="fa fa-female " aria-hidden="true"></i>}
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
