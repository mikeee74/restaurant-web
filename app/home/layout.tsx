'use client';

import { Layout } from 'antd';

const { Header, Content, Footer } = Layout;

export default function DashboardLayout({
  children, // will be a home or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <Layout className="min-h-dvh">
      <Header>
        <h1 className="text-white">Header</h1>
      </Header>
      <Content className="min-h-full">{children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}
