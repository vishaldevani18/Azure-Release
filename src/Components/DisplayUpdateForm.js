import React from 'react'
import {  message, Select, Modal, Button,  Form, Input, Radio } from 'antd';

function DisplayUpdateForm(props) {

        const data=props.data
        const updatevisible = props.updatevisible
        const onCancel = props.onCancel
        const onUpdate = props.onUpdate
        console.log(props.data);

     const [form] = Form.useForm();
     const {Option} = Select;
     form.resetFields();

     return (

        <div>
         <Modal

                visible={updatevisible}
                title="Update User"
                style={{ top: 20 }}
                onCancel={onCancel}
                footer={[
                    <Button
                        style={{ margin: '0 8px' }}
                        onClick={() => {
                            form.resetFields();
                        }}
                    >
                        Add Data
              </Button>,
                    <Button key="back" onClick=
                        {() => {
                            form
                                .validateFields()
                                .then(values => {

                                    const id = data._id

                                    onUpdate(values, id);
                                    form.resetFields();
                                })
                                .catch(info => {
                                    message.error("" + info);
                                });
                        }}>
                        Submit
            </Button>
                ]}
            >


                <Form


                    form={form}
                    layout="vertical"
                    name="form_in_modal"
                    initialValues={{
                        gender: data.Gender,
                        firstname: data.FirstName,
                        lastname: data.LastName,
                        email: data.Email,
                        city: data.City,
                        state: data.State,
                        country: data.Country,
                        department: data.Department
                    }}
                >
                    <Form.Item
                        name="firstname"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'first name is require',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="FirstName" />
                    </Form.Item>
                    <Form.Item name="lastname" hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'last name is require',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="Lastname" />
                    </Form.Item>

                    <Form.Item name="email" hasFeedback
                        rules={[
                            {
                                type: 'email',
                                required: true,
                                message: 'Valid Email is Require',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="Email" />
                    </Form.Item>
                    <Form.Item name="city" hasFeedback
                        rules={[
                            {

                                required: true,
                                message: 'City is require',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="City" />
                    </Form.Item>

                    <Form.Item name="state" hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'state is Require',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="State" />
                    </Form.Item>

                    <Form.Item name="country" hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'country is Require',
                            },
                        ]}
                    >
                        <Input type="text" placeholder="Country" />
                    </Form.Item>



                    <Form.Item
                        name="department"
                        hasFeedback
                        rules={[
                            {
                                required: true,
                                message: 'Please select Department!',
                            },
                        ]}
                    >
                        <Select placeholder="Please select a Department" >
                            <Option value="designing">Designing</Option>
                            <Option value="development">Development</Option>
                            <Option value="testing">Testing</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item name="gender" className="collection-create-form_last-form-item">
                        <Radio.Group>
                            <Radio value="MALE">Male</Radio>
                            <Radio value="FEMALE">Female</Radio>
                        </Radio.Group>
                    </Form.Item>

                </Form>
            </Modal>
            </div>
    );

           
}

export default DisplayUpdateForm
