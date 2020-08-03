import React, { Component } from 'react'
import FixedSideNav from './FixedSideNav'
import { Row, Col, Typography } from 'antd'
import FinancialStatement from './FinancialStatement'
import NavBar from './NavBar'
import MetricsPanel from './metrics/MetricsPanel'
import MetricGraph from './graphs/MetricGraph'
import data from '../mockdata/metricsData.json';

const { Title } = Typography;

export default class DetailsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            'companyFullName': 'Microsoft Corp.',
            'companyTicker': 'MSFT',
            'companySharePrice': 216.59
        }
    }

    componentDidMount() {
        // todo axios call
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="companyTitle" id="title" style={{ textAlign: 'left', paddingLeft: 150, paddingTop: 20 }}>
                    <Title level={1} style={{ color: '#1890ff' }}>{this.state.companyTicker + ' - ' + this.state.companyFullName}</Title>
                    <Title level={3}>{'$' + this.state.companySharePrice}</Title>
                </div>
                <div>
                    <Row>
                        <Col push={1} span={4}>
                            <FixedSideNav />
                        </Col>
                        <Col span={18}>
                            <div id='financial-statements'>
                                <Title level={3}>Financial Statements</Title>
                                <FinancialStatement />
                            </div>
                            <div id='metrics'>
                                <Title level={3}>Metrics</Title>
                                <MetricsPanel />
                                <MetricGraph data={data} lineOne={'returnOnAssets'} lineTwo={'returnOnEquity'} lineThree={'returnOnInvestedCapital'} />
                            </div>
                            <div id='shares'>
                                <Title level={3}>Shares Outstanding</Title>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
