import React from 'react'
import { BackTop, message, Select, Modal, Button, Card, Col, Row, Form, Input, Radio } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { EditOutlined } from '@ant-design/icons';
import { PlusSquareTwoTone } from '@ant-design/icons';
function UpdateForm(props) {
    const {data} = props
    const [form] = Form.useForm();
    const { Option } = Select;
    return (
        <div>
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
        </div>
    )
}

export default UpdateForm
