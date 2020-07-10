import React, { Component } from 'react'
import API from './Util/API';
import { BackTop, message, Button, Row,Result, Col } from 'antd';
import { PlusSquareTwoTone,FrownTwoTone } from '@ant-design/icons';
import DisplayLoader from './DisplayLoader';
import { confirmAlert } from 'react-confirm-alert';
import 'font-awesome/css/font-awesome.min.css';
import DisplayModalForm from './DisplayModalForm';
import DisplayUserInformation from './DisplayUserInformation'
import DisplayUpdateForm from './DisplayUpdateForm'
class DisplayUsers extends Component {
    constructor() {

        super()
        this.state = { btnloading: false, visible: false, updatevisible: false, loading: true, users: [], updateuser: {} }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }
    onUpdate = (values, id) => {
        API.patch('mongousers/' + id, {
            data: values
        }).then(res => {
            API.get('mongousers').then(res => {
                const users = [...res.data.data];
                this.setState({ users: users })
            }).catch(err => message.error("" + err)).
                finally(() => this.setState({ loading: false }))
            message.success('User information updated successfully, wait for 3 seconds');
            setTimeout(() => {


                this.setState({ updatevisible: false })

            }, 3000);

        }).catch(err => message.error("" + err)).
            finally(() => this.setState({ loading: false }))

    }

    onCreate = values => {

        this.setState({ btnloading: true });
        API.post(`mongousers/`, {
            data: values
        }).then(res => {

            console.log(res)
            if (res.data.success) {
                message.success('User Added Sucessfully');
                setTimeout(() => {
                    const newUser = {
                        _id: res.data.data._id,
                        ...res.data.data
                    }

                    const users = [...this.state.users, newUser];
                    this.setState({ users, visible: false, btnloading: false })

                }, 2000);

            }
            else {

                message.error("" + res.data.err)
            }


        }).catch(err => message.error("" + err)).
            finally(() => this.setState({ loading: false, btnloading: false }))

    };


    handleUpdate(info) {

        this.setState({ updateuser: info, updatevisible: true })

    }
    handleDelete(id) {
        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure You Want To Delete',
            buttons: [
                {
                    label: 'Yes',
                    onClick: () =>
                        API.delete(`mongousers/${id}`).
                            then(res => {

                                const currentusers = [...this.state.users];
                                this.setState({ users: currentusers.filter(x => x._id !== id) })
                                message.success("Deleted");
                            }).
                            catch(err => message.error("" + err)).
                            finally(() => this.setState({ loading: false }))
                },
                {
                    label: 'No',
                    onClick: () => message.error("Request Cancel")
                }
            ]
        });


    }

    componentDidMount() {


        API.get('mongousers').then(res => {

            if (res.data.success) {
                const users = [...res.data.data];
                this.setState({ users: users })
            }
            else {

                message.error("" + res.data.err)
            }

        }).catch(err => message.error(" " + err)).
            finally(() => this.setState({ loading: false }))

    }

    render() {

        const { loading } = this.state;
        const rescords = this.state.users.length

        return (

            <div>

                <BackTop />
                {/* This is Inser Button , modal Form Code  */}
                <div className="d-flex justify-content-center p-3">
                    <Row>
                        <Button type="primary" icon={<PlusSquareTwoTone />} onClick={() => {
                            this.setState({ visible: true })
                        }} >
                            Insert
                        </Button>

                        {/* Modal form Display code */}

                        <DisplayModalForm
                            visible={this.state.visible}
                            loading={this.state.btnloading}
                            onCreate={this.onCreate}
                            onCancel={() => {
                                this.setState({ visible: false })
                            }}
                        />

                        {
                            <DisplayUpdateForm
                                updatevisible={this.state.updatevisible}

                                data={this.state.updateuser}
                                onUpdate={this.onUpdate}
                                onCancel={() => {
                                    this.setState({ updatevisible: false })
                                }}
                            />
                        }

                        {/* {(this.state.visible) && <DisplayFormModal/>} */}

                    </Row>
                </div>
                {this.state.loading && <DisplayLoader />}

                {/* Display User Data into Card Form  */}

                <div>
                    {rescords ? <Row gutter={[24, 24]}>
                        {
                            this.state.users.map((user) => <DisplayUserInformation
                                key={user._id}
                                info={user}
                                loading={loading}
                                delete={this.handleDelete}
                                update={this.handleUpdate}
                            />)
                        }
                    </Row> :
                    //  <Row justify="space-around" align="middle">
                    //         <Col span={4}>

                    //         <FrownTwoTone style={{ fontSize: '100px'}} className="m-4" />
                    //         No records 
                    //         </Col></Row>
                    
                    <Result
                    icon={<FrownTwoTone />}
                    title="No Data Available!"
                   
                  />
                            }

                </div>
            </div>
        )
    }
}

export default DisplayUsers
