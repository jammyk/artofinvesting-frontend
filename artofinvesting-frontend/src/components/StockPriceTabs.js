import React, { Component } from 'react'
import { Tabs } from 'antd'
import HistoricStockPriceGraph from './graphs/HistoricStockPriceGraph'
import StockPricePanel from './StockPricePanel';


const { TabPane } = Tabs;

export default class StockPriceTabs extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentStockPrice: 216.59,
            pastYearData: [],
            pastThreeYearsData: [],
            pastFiveYearsData: [],
            maxData: []
        }
    }

    onTabSelect() {
        return;
    }

    computeDollarChange(dateDelta) {
        // todo for now using switch
        if (dateDelta === 1) {
            return '84.33';
        } else if (dateDelta === 5) {
            return '169.80';
        } else {
            return '216.44';
        }
    }

    computePercentChange(dateDelta) {
        // todo for now using switch
        if (dateDelta == 1) {
            return '0.6378'
        } else if (dateDelta === 5) {
            return '3.6329'
        } else {
            return '2164.4';
        }
    }


    render() {
        const { companyName } = this.props;
        return (
            <Tabs defaultActiveKey="1 year" onChange={this.onTabSelect} tabPosition='bottom'>
                <TabPane tab="1Y" key="1 year">
                    <StockPricePanel
                        companyName={companyName}
                        companyStockPrice={this.state.currentStockPrice}
                        dollarChange={this.computeDollarChange(1)}
                        percentChange={this.computePercentChange(1)}
                        timeFrame='Past Year'
                    />
                    <HistoricStockPriceGraph />
                </TabPane>
                <TabPane tab="5Y" key="5 years">
                    <StockPricePanel
                        companyName={companyName}
                        companyStockPrice={this.state.currentStockPrice}
                        dollarChange={this.computeDollarChange(5)}
                        percentChange={this.computePercentChange(5)}
                        timeFrame='Past 5 Years'
                    />
                    <HistoricStockPriceGraph />
                </TabPane>
                <TabPane tab="MAX" key="MAX">
                    <StockPricePanel
                        companyName={companyName}
                        companyStockPrice={this.state.currentStockPrice}
                        dollarChange={this.computeDollarChange(10)}
                        percentChange={this.computePercentChange(10)}
                        timeFrame='Since Inception'
                    />
                    <HistoricStockPriceGraph />
                </TabPane>
            </Tabs>
        )
    }
}
