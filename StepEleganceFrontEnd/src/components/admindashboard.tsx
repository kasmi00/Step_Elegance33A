
import React from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    ShopOutlined,
    UserOutlined,
    DropboxOutlined,
    FileOutlined,
    SettingOutlined,
} from '@ant-design/icons';
import './admindashboard.css';

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
    
    return (
        <>
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo">Admin Dashboard</div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserOutlined />}>
                        Users
                    </Menu.Item>
                    <Menu.Item key="3" icon={< ShopOutlined />}>
                        Products
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DropboxOutlined />}>
                        Orders
                    </Menu.Item>
                    <Menu.Item key="5" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background"/>
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background" >
                        Content goes here
                    </div>
                </Content>
            </Layout>
        </Layout>
        </>
        
    );
};

export default App;
