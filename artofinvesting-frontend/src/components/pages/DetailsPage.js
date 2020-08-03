import React, { Component } from 'react'
import FixedSideNav from '../navigation/FixedSideNav'
import { Row, Col, Typography, Card } from 'antd'
import FinancialStatement from '../FinancialStatement'
import NavBar from '../navigation/NavBar'
import MetricsPanel from '../metrics/MetricsPanel'
import MetricGraph from '../graphs/MetricGraph'
import data from '../../mockdata/metricsData.json';
import SharesGraph from '../graphs/SharesGraph'

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
                <Card id="title">
                    <div className="companyTitle" style={{ textAlign: 'left', paddingLeft: 150, paddingTop: 20 }}>
                        <Title level={1} style={{ color: '#1890ff' }}>{this.state.companyTicker + ' - ' + this.state.companyFullName}</Title>
                        <Title level={3}>{'$' + this.state.companySharePrice}</Title>
                    </div>
                </Card>
                <div>
                    <Row>
                        <Col push={1} span={4}>
                            <FixedSideNav />
                        </Col>
                        <Col span={18}>
                            <Card title='Financial Statements' id='financial-statements' headStyle={{ textAlign: 'left' }}>
                                <FinancialStatement />
                            </Card>
                            <Card title='Metrics' id='metrics' headStyle={{ textAlign: 'left' }} bodyStyle={{ justifyContent: 'center' }}>
                                <MetricsPanel />
                                <MetricGraph data={data} lineOne={'returnOnAssets'} lineTwo={'returnOnEquity'} lineThree={'returnOnInvestedCapital'} />
                            </Card>
                            <Card title='Shares Outstanding' id='shares' headStyle={{ textAlign: 'left' }}>
                                <SharesGraph />
                            </Card>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
