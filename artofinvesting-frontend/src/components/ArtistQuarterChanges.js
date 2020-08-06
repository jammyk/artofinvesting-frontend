import React, { Component } from 'react';
import { Row, Col, Card } from 'antd';
import data from '../mockdata/artistHoldings.json';
import '../stylesheets/ArtistQuarterChanges.css';

const recent = data["recentChanges"];

const sells = recent.filter(function (el) {
    return el.action === "Sell";
});

const buys = recent.filter(function (el) {
    return el.action === "Buy";
});

class ArtistQuarterChanges extends Component {
    render() {
        return (
            <div className="site-card-wrapper">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title="Buys" bordered={true}>
                        {buys.map((buys, index) => {
                            return <div style={{clear: "both"}}>
                                    <p className="name"><strong>{buys.ticker}</strong>&nbsp;{buys.name}</p>
                                    <p className="percentage">{buys.percentChange}</p>
                                </div>
                                
                            
                        })}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Sells" bordered={true}>
                        {sells.map((sells, index) => {
                            return <div style={{clear: "both"}}>
                                    <p className="name"><strong>{sells.ticker}</strong>&nbsp;{sells.name}</p>
                                    <p className="percentage">{sells.percentChange}</p>
                                </div>
                                
                            
                        })}
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ArtistQuarterChanges;