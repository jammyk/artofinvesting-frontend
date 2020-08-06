import React, { Component } from 'react';
import { Row, Col, Tabs, Card } from 'antd';
import ArtistQuarterChanges from './ArtistQuarterChanges';
import ArtistHoldings from './ArtistHoldings';
import NavBar from './NavBar';
import '../stylesheets/ArtistResult.css';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class ArtistResult extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <NavBar />
                    </Col>
                </Row>
                <Row>
                    <Col span={16} style={{paddingTop: "1%"}}>
                        <Card style={{ width: 300}} bordered={false}>
                            <p>Name</p>
                            <p>Company</p>
                            <p>Asset Under Mgmt</p>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24} style={{paddingLeft: "2%"}}>
                        <Tabs defaultActiveKey="1" onChange={callback}>
                            <TabPane tab="Quarterly Changes" key="1">
                                <ArtistQuarterChanges />
                            </TabPane>
                            <TabPane tab="Holdings" key="2">
                                <ArtistHoldings className="holding"/>
                            </TabPane>
                        </Tabs>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default ArtistResult;