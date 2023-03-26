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
      <Layout
        style={{
          paddingTop: 10,
          height: "85%",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        <Row gutter={10}>
          {items.map((i, index) => (
            <Col xl={4} key={index}>
              <Item />
            </Col>
          ))}
        </Row>
      </Layout>
    </Content>
  );
};

export default Main;