import React, { Component } from 'react'
import API from './Util/API';
import {Skeleton , Button, Card, Col, Row, Progress } from 'antd';
import { DeleteOutlined  } from '@ant-design/icons';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
function DisplayLoader() {

    return (
        <Row>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
            
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
           
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
          
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
           
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
           
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
           
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
          
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
           
        </Card>
        </Col>
        <Col span={8}>
        <Card title=""
        loading={true}            
        >
           
        </Card>
        </Col>
        </Row>
    )
}



        



function DisplayUserInformation(result) {

    const  {info}  = result;
    const loading = result.loading    
return (
<Col  lg={{ span: 6}} md={{ span: 12}} sm={{ span: 12}} xs={{ span: 24}} className="mb-4">
            <Card title={info.FirstName}
             extra={< b>{info.id}</b>} 
            loading={loading} 
            hoverable={true} 
            actions={[
                <DeleteOutlined style={{ fontSize: '20px', color: 'red' }} key="delete" />,
                <EditOutlined  style={{ fontSize: '20px', color: '#08c' }} key="update" />               
              ]}
              
            >
                Email : {info.Email}
            </Card>
        </Col>
      
    )
}



class DisplayUsers extends Component {



    constructor(props) {

        super(props)
        this.state = { loading: true, users: [] }
    }


    componentDidMount() {


        API.get('Users').then(res => {

            this.setState({ users: res.data })
        }).catch(err => alert(err)).
            finally(() =>  this.setState({ loading: false }))

    }

    render() {
  
        const { loading } = this.state;

        return (
            <div>
                <Row>
                <Button >Perform Insert Operation</Button>
                <Button >Perform Update Operation</Button>

                </Row>

                {this.state.loading && <DisplayLoader />}
                <div>                
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 } }>
                    {
                        this.state.users.map((user)=> <DisplayUserInformation
                        key={user.id}
                        info={user}
                        loading={loading}
                        />)
                    }
                 </Row>
                 </div>
            </div>
        )
    }
}

export default DisplayUsers
