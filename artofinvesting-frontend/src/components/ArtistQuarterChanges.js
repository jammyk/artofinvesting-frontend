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
                        <Card title="Buys" bordered={true} headStyle={{backgroundColor: "#cce6ff"}} bodyStyle={{paddingTop: "1%"}}>
                        <div style={{clear: "both"}}>
                            <p className="name">Name</p>
                            <p className="percentage">% Change</p>
                        </div>
                        {buys.map((buys, index) => {
                            return <div style={{clear: "both"}}>
                                    <p className="name"><a href="/details"><strong>{buys.ticker}</strong>&nbsp;{buys.name}</a></p>
                                    <p className="percentage" id="b">{buys.percentChange}</p>
                                </div>
                                
                            
                        })}
                        </Card>
                    </Col>
                    <Col span={8}>
                        <Card title="Sells" bordered={true} headStyle={{backgroundColor: "#cce6ff"}} bodyStyle={{paddingTop: "1%"}}>
                        <div style={{clear: "both"}}>
                            <p className="name">Name</p>
                            <p className="percentage">% Change</p>
                        </div>
                        {sells.map((sells, index) => {
                            return <div style={{clear: "both"}}>
                                    <p className="name"><a href="/details"><strong>{sells.ticker}</strong>&nbsp;{sells.name}</a></p>
                                    <p className="percentage" id="s">{sells.percentChange}</p>
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