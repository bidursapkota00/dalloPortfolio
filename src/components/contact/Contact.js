import React from "react";
import "./Contact.css";
// import { useState } from "react";
import mail from "../../img/mail.svg";
import address from "../../img/address.svg";
import phone from "../../img/phone.svg";
import { Form, Input, Button } from "antd";

const Contact = ({ person }) => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Success:", values);
    form.resetFields();
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div id="contact">
      <div className="head-section">
        <h1>Contact Me</h1>
      </div>
      <div className="contact-section">
        <div className="contact-info">
          <div className="call">
            <div className="call-row">
              <img src={mail} alt="" />
              <p>Email</p>
            </div>
            <p>{person.email}</p>
          </div>
          <div className="call">
            <div className="call-row">
              <img src={phone} alt="" />
              <p>phone</p>
            </div>
            <p>{person.phone}</p>
          </div>
          <div className="call">
            <div className="call-row">
              <img src={address} alt="" />
              <p>Address</p>
            </div>
            <p>{person.address}</p>
          </div>
        </div>
        <div className="form-section">
          <Form
            form={form}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <p className="ping">Ping us for any feedbacks and queries</p>
            <div className="form-row">
              <div className="form-column">
                <Form.Item
                  name="name"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input placeholder="NAME" />
                </Form.Item>
                <Form.Item
                  name="emial"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="EMAIL" />
                </Form.Item>
              </div>
              <div className="message">
                <Form.Item
                  name="message"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input.TextArea placeholder="MESSAGE" />
                </Form.Item>
              </div>
            </div>
            <div className="button-section">
              <p style={{ marginBottom: 18 }}>* all fields are compulsary</p>
              <Form.Item>
                <Button type="primary" htmlType="submit">
                  SEND
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
