import React, { Component } from 'react'
import FixedSideNav from '../navigation/FixedSideNav'
import { Row, Col, Card } from 'antd'
import FinancialStatement from '../FinancialStatement'
import NavBar from '../navigation/NavBar'
import MetricsPanel from '../metrics/MetricsPanel'
import MetricGraph from '../graphs/MetricGraph'
import data from '../../mockdata/metricsData.json';
import SharesGraph from '../graphs/SharesGraph'
import shareData from '../../mockdata/sharesOutstanding.json';
import '../../stylesheets/DetailsPage.css';
import Calculator from '../Calculator'
import StockPriceTabs from '../StockPriceTabs'
import { stockPriceSection, financialStatementsSection, metricsSection, sharesSection } from '../../constants/detailsSection'
import SectionTitle from '../SectionTitle'


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
                <Row >
                    <Col span={3}>
                        <div style={{ paddingLeft: '10%' }}>
                            <FixedSideNav
                                historicStockPriceSectionID={stockPriceSection}
                                financialStatementsSectionID={financialStatementsSection}
                                metricsSectionID={metricsSection}
                                sharesOutstandingSectionID={sharesSection}
                            />
                        </div>
                    </Col>
                    <Col span={19}>
                        <Card bordered={false} id={stockPriceSection} className="details-section-container">
                            <StockPriceTabs companyName={this.state.companyFullName} />
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
                            bordered={false}
                            id={financialStatementsSection}
                            className="details-section-container"
                        >
                            <SectionTitle title='Financial Statements' lastUpdated='Aug 6, 2020' />
                            <FinancialStatement />
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col span={24}><div className="parallax metrics-separator" /></Col>
                </Row>
                <Row >
                    <Col span={19} push={3}>
                        <Card
                            bodyStyle={{ justifyContent: 'center' }}
                            bordered={false}
                            id={metricsSection}
                            className="details-section-container"
                        >
                            <SectionTitle title='Various Metrics' lastUpdated='Aug 6, 2020' />
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
                            bordered={false}
                            id={sharesSection}
                            className="details-section-container"
                        >
                            <SectionTitle title='Shares Outstanding' lastUpdated='Aug 6, 2020' />
                            <SharesGraph xAxis='year' data={shareData} barKey="sharesOutStnding" />
                        </Card>
                    </Col>
                </Row>
                <Calculator />
                <Row>
                    <Col span={24}><div className="parallax metrics-separator" /></Col>
                </Row>
            </div >
        )
    }
}
