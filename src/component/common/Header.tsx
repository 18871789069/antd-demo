import React from 'react';
import { PageHeader } from 'antd';

class Header extends React.Component {

    render() {
        return (
            <PageHeader
                className="site-page-header"
                onBack={() => null}
                title="Title"
                subTitle="This is a subtitle"
            />
        )
    }
}

export default Header;