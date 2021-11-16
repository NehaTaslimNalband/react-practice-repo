import React from "react";
import { Layout } from "antd";
import Routes from "../src/routes";
const { Content } = Layout;

export default function LandingPage() {
  return (
    <div className="root-layout" theme="light">
      <Layout>
        <Content>
          <Routes />
        </Content>
      </Layout>
    </div>
  );
}
