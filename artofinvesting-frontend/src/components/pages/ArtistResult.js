import React, { Component } from 'react';
import { Row, Col, Tabs } from 'antd';
import ArtistQuarterChanges from '../ArtistQuarterChanges';
import ArtistHoldings from '../ArtistHoldings';
import NavBar from '../navigation/NavBar';
import '../../stylesheets/ArtistResult.css';
import { EditTwoTone, PieChartTwoTone} from '@ant-design/icons';
import data from '../../mockdata/artistHoldings.json';

const { TabPane } = Tabs;


class ArtistResult extends Component {
    callBack = (key) => {
        console.log(key);
    }

    computeAsset() {
        var res, str;
        if (data.asset >= 1000000000) {
            res = (data.asset / 1000000000).toFixed(3);
            str = " billion"
        } else if (data.asset >= 1000000) {
            res = (data.asset / 1000000).toFixed(3);
            str = " million"
        } 
        
        res.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        res = "$" + res + str;
        return res;
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <NavBar />
                    </Col>
                </Row>
                <Row>
                    <Col span={19} push={3} style={{paddingTop: "1%"}}>
                        <div style={{paddingLeft: "3%", marginTop: "3%"}}>
                            <p id="name_label">{data.name}</p>
                            <p id="company_label">{data.company}</p>
                            <p>{this.computeAsset()}</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={19} push={3} style={{paddingLeft: "2%"}}>
                        <Tabs defaultActiveKey="1" onChange={this.callback}>
                            <TabPane tab={<span><EditTwoTone/>Quarterly Changes</span>} key="1">
                                <ArtistQuarterChanges />
                            </TabPane>
                            <TabPane tab={<span><PieChartTwoTone/>Holdings</span>} key="2">
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