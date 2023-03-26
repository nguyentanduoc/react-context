import { Form, Layout, Select } from "antd";
import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

const { Header: AntHeader } = Layout;
const { Option } = Select;

const headerStyle: React.CSSProperties = {
  color: "#fff",
  height: 64,
  paddingInline: 50,
  lineHeight: "64px",
};
//#A1C7E0
// #BCC5CE
interface HeaderProps {}
const Header = ({}: HeaderProps) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const backgroundColor = theme === "theme1" ? "#BCC5CE" : "#A1C7E0";
  const handleOnChange = (value: string) => {
    setTheme?.(value);
  };
  return (
    <AntHeader style={{ ...headerStyle, backgroundColor }}>
      <div style={{ width: 250, float: "right", paddingTop: 10 }}>
        <Form.Item name="theme" label="Theme">
          <Select
            placeholder="Change Theme"
            allowClear
            defaultValue={"Theme_1"}
            onChange={handleOnChange}
          >
            <Option value="theme1">Theme 1</Option>
            <Option value="theme2">Theme 2</Option>
          </Select>
        </Form.Item>
      </div>
    </AntHeader>
  );
};

export default Header;
