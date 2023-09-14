import { Button, Col, Form, Input, Row } from "antd";
import { login } from "./api";
import type { LoginDTO } from "./api";

const App: React.FC = () => {
  const [form] = Form.useForm<LoginDTO>();

  const onFinish = (values: LoginDTO) => {
    login(values);
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Form.Item
        label="name"
        name="name"
        rules={[{ required: true, message: "Please input your name!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>
      <Row>
        <Col span={18}>
          <Form.Item
            label="captcha"
            name="captcha"
            rules={[{ required: true, message: "Please input your captcha!" }]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={6}>
          <img src="http://localhost:3000/captcha" alt="" />
        </Col>
      </Row>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default App;
