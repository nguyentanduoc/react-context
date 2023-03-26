import { Button, Card, Form, Input } from "antd";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../ThemeContext";

interface SearchProps {}

// #00ABBD
//#E6DFD9
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
  const { theme } = useContext(ThemeContext);
  const backgroundColor = theme === "theme1" ? "#00ABBD" : "#E6DFD9";
  return (
    <Card style={{ margin: 0, padding: 0, backgroundColor }}>
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
