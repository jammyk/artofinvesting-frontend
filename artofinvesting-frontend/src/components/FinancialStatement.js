import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../stylesheets/Table.css'
import { Tabs, Row } from 'antd'
import IncomeStatementTable from './tables/IncomeStatementTable'
import BalanceSheetTable from './tables/BalanceSheetTable'
import CashFlowTable from './tables/CashFlowTable'
import graphData from '../mockdata/graphMockData.json'
import FinancialsGraphCarousel from './FinancialsGraphCarousel'

const { TabPane } = Tabs

class FinancialStatement extends Component {

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="incomeStatement" centered>
                    <TabPane tab="Income Statement" key="incomeStatement">
                        <FinancialsGraphCarousel financialsData={graphData} />
                        <Row justify="center">
                            <IncomeStatementTable />
                        </Row>
                    </TabPane>
                    <TabPane tab="Balance Sheet" key="balanceSheet">
                        <FinancialsGraphCarousel financialsData={graphData} />
                        <Row justify="center">
                            <BalanceSheetTable />
                        </Row>
                    </TabPane>
                    <TabPane tab="Cash Flow" key="cashFlow">
                        <FinancialsGraphCarousel financialsData={graphData} />
                        <Row justify="center">
                            <CashFlowTable />
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default FinancialStatement
