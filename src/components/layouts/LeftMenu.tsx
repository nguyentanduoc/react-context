import { Layout } from "antd";
const { Sider } = Layout;

const siderStyle: React.CSSProperties = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#3ba0e9",
};
interface LeftMenuProps {}
const LeftMenu = ({}: LeftMenuProps) => {
  return <Sider style={siderStyle}>LeftMenu</Sider>;
};

export default LeftMenu;
