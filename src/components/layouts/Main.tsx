import { Col, Layout, Row } from "antd";
import Item from "../item/Item";
import Search from "../search/Search";

const { Content } = Layout;

const contentStyle: React.CSSProperties = {
  textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  padding: "10px",
};

interface MainProps {
  children?: React.ReactNode;
}
const Main = ({}: MainProps) => {
  const items = [{ id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }, { id: 1 }];
  return (
    <Content style={contentStyle}>
      <Search></Search>
      <div style={{ overflow: "auto", paddingTop: 10 }}>
        <Row style={{ height: "100%" }}>
          {items.map((i, index) => (
            <Col xs={1} sm={2} md={3} lg={4} xl={4} key={index}>
              <Item />
            </Col>
          ))}
        </Row>
      </div>
    </Content>
  );
};

export default Main;
