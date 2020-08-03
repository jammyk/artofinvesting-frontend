import React, { Component } from 'react';
import logo from '../images/aoi_logo.png';
import { Link } from 'react-router-dom';
import { Row, Col } from 'antd';
import { Tabs } from 'antd';
import { Card } from 'antd';
import '../stylesheets/ArtistResult.css';
import ArtistQuarterChanges from './ArtistQuarterChanges';
import ArtistHoldings from './ArtistHoldings';


const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class ArtistResult extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Link to="/"><img src={logo} alt="logo" style={{ width: "100px", height: "100px", paddingTop: "1%", paddingLeft: "1%" }} /></Link>
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