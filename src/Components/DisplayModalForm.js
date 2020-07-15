import React from 'react'
import { Button, Form, Input, Modal, Radio, Select } from 'antd'
// Add User Component
const DisplayModalForm = ({ loading,visible,onCancel,onCreate }) => {

  const [form] = Form.useForm()
  const { Option } = Select
  form.resetFields();
  return (
    <div>
      <Modal
       forceRender
        visible={visible}
        title="Add User"
        style={{ top: 20 }}
        onCancel={onCancel}
        footer={[
          <Button
          key="reset"
            style={{ margin: '0 8px' }}
            onClick={() => {
              form.resetFields()
            }}
          >
                    Reset
          </Button>,
          <Button type="primary" key="submit" loading={loading} onClick=
            {() => {
              form
                .validateFields()
                .then((values) => {

                  
                  onCreate(values,form)
                  
                })
                .catch((info) => {

                })
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
            gender: 'male',
            department:'designing',
          }}
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
            <Select  placeholder="Please select a Department"  >
              <Option value="designing">Designing</Option>
              <Option value="development">Development</Option>
              <Option value="testing">Testing</Option>
            </Select>
          </Form.Item>
         
            
            <Form.Item   
            hasFeedback
            name="gender"
            rules={[
              {
                required: true,
                message: 'Please select Department!'
              } 
            ]}>
            <Radio.Group>
              <Radio value="male" >Male</Radio>
              <Radio value="female" > Female</Radio>
              </Radio.Group>
              </Form.Item>
        </Form>
      </Modal>

    </div>
  )
}

export default DisplayModalForm
