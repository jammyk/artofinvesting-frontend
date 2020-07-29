import React, { Component } from 'react'
import { Row, Col, Card } from 'antd';
import FinancialMetricsCard from './FinancialMetricsCard'
import OperationMetricsCard from './OperationMetricsCard'
import ValuationMetricCard from './ValuationMetricCard'

const financialTabKey = 'financial';
const operationTabKey = 'operational';
const valuationTabKey = 'valuation';


export default class MetricsPanel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            minWindowWidthDisplay: 750,
            isMinimizedDisplay: false,
            activeTabKey: 'tab1',
            tabList:
                [
                    {
                        key: financialTabKey,
                        tab: 'Financial Metrics',
                    },
                    {
                        key: operationTabKey,
                        tab: 'Operational Metrics',
                    },
                    {
                        key: valuationTabKey,
                        tab: 'Valuation Metrics',
                    }
                ],

        }
    }

    updateCurrentDisplay = () => {
        var currentWindowWidth = window.innerWidth;
        this.setState({ isMinimizedDisplay: currentWindowWidth < this.state.minWindowWidthDisplay });
    }

    onTabChange = (key, type) => {
        this.setState({ activeTabKey: key })
    }

    componentDidMount() {
        this.updateCurrentDisplay();
        window.addEventListener('resize', this.updateCurrentDisplay);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateCurrentDisplay);
    }

    getFinancialMetricsCard(isTab = false) {
        return <FinancialMetricsCard isTabs={isTab} data={this.props.data ? this.props.data.financialMetrics: null}/>;
    }

    getOperationalMetricsCard(isTab = false) {
        return <OperationMetricsCard isTabs={isTab} data={this.props.data ? this.props.data.OperationalMetrics: null} />;
    }

    getValuationMetricsCard(isTab = false) {
        return <ValuationMetricCard isTabs={isTab} data={this.props.data ? this.props.data.ValuationMetrics: null}/>;
    }

    render() {
        const contentList = {
            financialTabKey: this.getFinancialMetricsCard(true),
            operationTabKey: this.getOperationalMetricsCard(true),
            valuationTabKey: this.getValuationMetricsCard(true)
        }
        return (
            <div>
                {this.state.isMinimizedDisplay ?
                    <Row>
                        <Col>
                            <Card tabList={this.state.tabList} activeTabKey={this.state.activeTabKey} onTabChange={this.onTabChange}>
                                {contentList[this.state.activeTabKey]}
                            </Card>
                        </Col>
                    </Row>
                    :
                    <Row>
                        <Col>{this.getFinancialMetricsCard()}</Col>
                        <Col>{this.getOperationalMetricsCard()}</Col>
                        <Col>{this.getValuationMetricsCard()}</Col>
                    </Row>
                }
            </div>
        )
    }
}
