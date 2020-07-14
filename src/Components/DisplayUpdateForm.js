import React from 'react'
import { Button, Form, Input, Modal, Radio, Select, message } from 'antd';


const DisplayUpdateForm =  ({updatevisible,data,onUpdate,onCancel}) => {
  
  const [form] = Form.useForm()
  const { Option } = Select
  form.resetFields()
   
  
  return (
    <div>
      <Modal
       forceRender
        visible={updatevisible}
        title={`Update User With Id : ${data._id}`}
        style={{ top: 20 }}
        onCancel={onCancel}
        footer={[
          <Button
            key="submit"
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.setFieldsValue({
                gender: data.Gender,
                firstname: data.FirstName,
                lastname: data.LastName,
                email: data.Email,
                city: data.City,
                state: data.State,
                country: data.Country,
                department: data.Department
              })
            }}
          >
                        Fill Form
          </Button>,

          <Button
            key="reset"
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
                        Reset
          </Button>,

          <Button key="back" onClick=
            {() => {
              form
                .validateFields()
                .then((values) => {
                  const id = data._id
                  onUpdate(
                    values,
                    id
                  )
                  form.resetFields()
                })
                .catch((info) => {
                  message.error('Form Must be Fill With Correct Values')
                })
            }}>
                        Submit
          </Button>
        ]}
      >

        <Form

          form={form}
          layout="vertical"
          name="form_in_update"
        >
          <Form.Item
            name="firstname"
            hasFeedback
            rules={[
              {
                required: true,
                message: 'first name is require'
              }
            ]}
          >
            <Input type="text" placeholder="FirstName" />
          </Form.Item>
          <Form.Item name="lastname" hasFeedback
            rules={[
              {
                required: true,
                message: 'last name is require'
              }
            ]}
          >
            <Input type="text" placeholder="Lastname" />
          </Form.Item>

          <Form.Item name="email" hasFeedback
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Valid Email is Require'
              }
            ]}
          >
            <Input type="text" placeholder="Email" />
          </Form.Item>
          <Form.Item name="city" hasFeedback
            rules={[
              {

                required: true,
                message: 'City is require'
              }
            ]}
          >
            <Input type="text" placeholder="City" />
          </Form.Item>

          <Form.Item name="state" hasFeedback
            rules={[
              {
                required: true,
                message: 'state is Require'
              }
            ]}
          >
            <Input type="text" placeholder="State" />
          </Form.Item>

          <Form.Item name="country" hasFeedback
            rules={[
              {
                required: true,
                message: 'country is Require'
              }
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
                message: 'Please select Department!'
              }
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
  )
}

export default DisplayUpdateForm
