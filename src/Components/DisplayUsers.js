import React, { Component } from 'react'
import API from './Util/API';
import { BackTop, message, Button, Row, Result } from 'antd';
import { PlusSquareTwoTone, FrownTwoTone, AudioOutlined } from '@ant-design/icons';

import { Input } from 'antd';
import DisplayLoader from './DisplayLoader';
import { confirmAlert } from 'react-confirm-alert';
import 'font-awesome/css/font-awesome.min.css';
import DisplayModalForm from './DisplayModalForm';
import DisplayUserInformation from './DisplayUserInformation';
import DisplayUpdateForm from './DisplayUpdateForm'
const { Search } = Input;

class DisplayUsers extends Component {
    constructor(props) {

        super(props)
        this.state = { btnloading: false, visible: false, updatevisible: false, loading: true, users: [], updateuser: {} }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);

    }
    onUpdate = (values, id) => {
        API.MakeRequestWithBody(`mongousers/${id}`, "PATCH", values,
            (res) => {
                API.MakeRequest("mongousers", "GET",
                    (res) => {
                        if (res.data.success) {
                            const users = [...res.data.data];
                            this.setState({ users: users });
                            message.success(' updated successfully, wait for 3 seconds');
                            setTimeout(() => {
                                this.setState({ updatevisible: false })
                            }, 3000);
                        }
                        else {

                            message.error("" + res.data.err)
                        }
                    },
                    (CatchBlock) => {

                        message.error(" " + CatchBlock)
                    }
                    ,
                    (FinallyBlock) => {
                        this.setState({ loading: false })
                    }
                )


            },
            (CatchBlock) => {

                message.error(" " + CatchBlock)
            }
            ,
            (FinallyBlock) => {
                this.setState({ loading: false, btnloading: false })
            }
        );

    }

    onCreate = values => {

        this.setState({ btnloading: true });

        API.MakeRequestWithBody("mongousers", "POST", values,

            (res) => {

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

            },
            (CatchBlock) => {

                message.error(" " + CatchBlock)
            }
            ,
            (FinallyBlock) => {
                this.setState({ loading: false, btnloading: false })
            }
        );

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
                        API.MakeRequest(`mongousers/${id}`, "DELETE",
                            (res) => {
                                const currentusers = [...this.state.users];
                                this.setState({ users: currentusers.filter(x => x._id !== id) })
                                message.success("Deleted");
                            },
                            (CatchBlock) => {

                                message.error(" " + CatchBlock)
                            }
                            ,
                            (FinallyBlock) => {
                                this.setState({ loading: false })
                            }
                        )


                },
                {
                    label: 'No',
                    onClick: () => message.error("Request Cancel")
                }
            ]
        });
    }

    componentDidMount() {

        API.MakeRequest("mongousers", "GET",

            (res) => {

                if (res.data.success) {
                    const users = [...res.data.data];
                    this.setState({ users: users })
                }
                else {

                    message.error("" + res.data.err)
                }

            },
            (CatchBlock) => {

                message.error(" " + CatchBlock)
            }
            ,
            (FinallyBlock) => {
                this.setState({ loading: false })
            }
        );
    }
    render() {

        const { loading } = this.state;
        const rescords = this.state.users.length

        return (

            <div>

                <BackTop />
                {/* This is Inser Button , modal Form Code  */}
                <div className="p-3">

                    <div className="d-flex justify-content-between p-2">
                        <div className="mr-3">
                            <Button type="primary" icon={<PlusSquareTwoTone />} onClick={() => {
                                this.setState({ visible: true })
                            }} >
                                Insert
                        </Button>
                        </div>
                        <div>
                            <Search
                                placeholder="input search"
                                enterButton="Search"
                                size="medium"
                                suffix={<AudioOutlined
                                    style={{
                                        fontSize: 16,
                                        color: '#1890ff',
                                    }}
                                />}
                                onSearch={value => console.log(value)}
                            />
                        </div>
                    </div>
                    {/* Modal form Display code */}

                    <DisplayModalForm
                   
                        visible={this.state.visible}
                        loading={this.state.btnloading}
                        onCreate={this.onCreate}
                        onCancel={() => {
                            this.setState({ visible: false })
                        }}
                    />


 {/* <Practice
          
          visible={this.state.visible}
          onCancel={"a"}
          onCreate={this.onCreate}
        /> */}




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
