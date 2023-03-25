import { Button, Card, Form, Input } from "antd";
import { useEffect, useState } from "react";

interface SearchProps {}

const Search = ({}: SearchProps) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values: any) => {
    console.log("Finish:", values);
  };
  return (
    <Card style={{ margin: 0, padding: 0, backgroundColor: "#1034a6" }}>
      <Form
        form={form}
        name="horizontal_login"
        layout="inline"
        onFinish={onFinish}
      >
        <Form.Item name="ProductCategory">
          <Input placeholder="Product Category" />
        </Form.Item>
        <Form.Item name="ProductName">
          <Input placeholder="Product Name" />
        </Form.Item>
        <Form.Item shouldUpdate>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit">Reset</Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default Search;
