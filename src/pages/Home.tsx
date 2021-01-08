import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import MyHeader from '../component/common/Header';
import MySider from '../component/common/Sider';
import User from '../pages/base/User';
const { Header, Sider, Content } = Layout;

class Home extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header className="page-header">
                        111111111111111111111111111
                    </Header>
                    <Layout className="content">
                        <Sider width={200} className="page-sider">
                            <MySider></MySider>
                        </Sider>
                        <Content className="page-content">
                            <div>
                                <Switch>
                                    <Route path="/user" component={User}></Route>
                                    <Route path="/menu" component={MyHeader}></Route>
                                </Switch>
                            </div>
                        </Content>
                    </Layout>
                </Layout>
            </div>

        )
    }
}

export default Home;