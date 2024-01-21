import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    DashboardOutlined,
    ShopOutlined,
    UserOutlined,
    DropboxOutlined,
    FileOutlined,
    SettingOutlined,
    PlusOutlined,
    EditOutlined,
} from '@ant-design/icons';
import './admindashboard.css';
import UserTable from './usertableadd'; // Assuming UserTable is in the same directory

const { Header, Content, Sider } = Layout;

const App: React.FC = () => {
    const [showUserTable, setShowUserTable] = useState(false);

    const handleMenuClick = (key: string) => {
        // Check if the "Add User" menu item is clicked
        if (key === '2.1') {
            setShowUserTable(true);
        } else {
            setShowUserTable(false);
        }
    };

    const userData = [
        { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
        { id: 2, name: 'Jane Doe', age: 30, email: 'jane@example.com' },
        // Add more user data as needed
    ];

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider breakpoint="lg" collapsedWidth="0">
                <div className="logo">Admin Dashboard</div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['1']}
                    onClick={(e) => handleMenuClick(e.key as string)}
                >
                    <Menu.Item key="1" icon={<DashboardOutlined />}>
                        Dashboard
                    </Menu.Item>
                    <Menu.SubMenu key="2" icon={<UserOutlined />} title="Users">
                        <Menu.Item key="2.1" icon={<PlusOutlined />}>
                            Add User
                        </Menu.Item>
                        <Menu.Item key="2.2" icon={<EditOutlined />}>
                            Update User
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="3" icon={<ShopOutlined />} title="Products">
                        <Menu.Item key="3.1" icon={<PlusOutlined />}>
                            Add Product
                        </Menu.Item>
                        <Menu.Item key="3.2" icon={<EditOutlined />}>
                            Update Product
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.SubMenu key="4" icon={<DropboxOutlined />} title="Orders">
                        <Menu.Item key="4.1" icon={<PlusOutlined />}>
                            Add Order
                        </Menu.Item>
                        <Menu.Item key="4.2" icon={<EditOutlined />}>
                            Update Order
                        </Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item key="5" icon={<FileOutlined />}>
                        Files
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined />}>
                        Settings
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" />
                <Content style={{ margin: '16px' }}>
                    <div className="site-layout-background">
                        {showUserTable && <UserTable data={userData} />}
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default App;
