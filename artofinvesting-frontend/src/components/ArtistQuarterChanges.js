import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';

class ArtistQuarterChanges extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Buys" bordered={true}>
                        Card content
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Sells" bordered={true}>
                        Card content
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ArtistQuarterChanges;