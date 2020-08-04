import React, { Component } from 'react'
import FixedSideNav from '../navigation/FixedSideNav'
import { Row, Col, Typography, Card } from 'antd'
import FinancialStatement from '../FinancialStatement'
import NavBar from '../navigation/NavBar'
import MetricsPanel from '../metrics/MetricsPanel'
import MetricGraph from '../graphs/MetricGraph'
import data from '../../mockdata/metricsData.json';
import SharesGraph from '../graphs/SharesGraph'
import shareData from '../../mockdata/sharesOutstanding.json';
import '../../stylesheets/DetailsPage.css';
import HistoricStockPriceGraph from '../graphs/HistoricStockPriceGraph'
import Calculator from '../Calculator'


const { Title, Text } = Typography;


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
                <Row>
                    <Col span={24}>
                        <NavBar />
                    </Col>
                </Row>
                <Row className="details-historic-pricing">
                    <Col span={19} push={3}>
                        <Card id="title" bordered={false}>
                            <div className="companyTitle" style={{ textAlign: 'left', paddingTop: 20 }}>
                                <p style={{ marginBottom: '0em', fontSize: 40 }}><Text>{this.state.companyFullName}</Text></p>
                                <p style={{ marginBottom: '0.5em', fontSize: 40 }}><Text>{'$' + this.state.companySharePrice}</Text></p>
                            </div>
                            <HistoricStockPriceGraph></HistoricStockPriceGraph>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}>
                        <div className="parallax financial-statement" />
                    </Col>
                </Row>
                <Row>
                    <Col span={19} push={3}>
                        <Card
                            title='Financial Statements'
                            id='financial-statements'
                            headStyle={{ textAlign: 'left' }}
                            bordered={false}
                        >
                            <FinancialStatement />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><div className="parallax metrics-separator" /></Col>
                </Row>
                <Row>
                    <Col span={19} push={3}>
                        <Card
                            title='Metrics'
                            id='metrics'
                            headStyle={{ textAlign: 'left' }}
                            bodyStyle={{ justifyContent: 'center' }}
                            bordered={false}
                        >
                            <MetricsPanel />
                            <MetricGraph xAxis='year' data={data} lineOne={'returnOnAssets'} lineTwo={'returnOnEquity'} lineThree={'returnOnInvestedCapital'} />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><div className="parallax share-separator" /></Col>
                </Row>
                <Row>
                    <Col span={19} push={3}>
                        <Card
                            title='Shares Outstanding'
                            id='shares'
                            headStyle={{ textAlign: 'left' }}
                            bordered={false}
                        >
                            <SharesGraph xAxis='year' data={shareData} barKey="sharesOutStnding" />
                        </Card>
                    </Col>
                </Row>
                <Calculator />
            </div >
        )
    }
}
