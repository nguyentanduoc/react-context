import { Form, Layout, Select } from "antd";

const { Header: AntHeader } = Layout;
const { Option } = Select;

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
  backgroundColor: "#7dbcea",
};
interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  return (
    <AntHeader style={headerStyle}>
      <div style={{ width: 250, float: "right", paddingTop: 10 }}>
        <Form.Item name="theme" label="Theme">
          <Select placeholder="Change Theme" allowClear defaultValue={"blue"}>
            <Option value="blue">blue</Option>
            <Option value="light">light</Option>
            <Option value="dark">dark</Option>
          </Select>
        </Form.Item>
      </div>
    </AntHeader>
  );
};

export default Header;
