import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../stylesheets/Table.css'
import { Tabs, Row } from 'antd'
import IncStmtTable from './IncomeStatementTable'
import BalShtTable from './BalanceSheetTable'
import CashFlowTable from './CashFlowTable'
import graphData from '../mockdata/graphMockData.json'
import FinancialsGraphCarousel from './FinancialsGraphCarousel'

const { TabPane } = Tabs

class FinancialStatement extends Component {

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="incomeStatement" centered>
                    <TabPane tab="Income Statement" key="incomeStatement">
                    <FinancialsGraphCarousel graphMockData={graphData}></FinancialsGraphCarousel>
                        <Row justify="center">
                            <IncStmtTable />
                        </Row>
                    </TabPane>
                    <TabPane tab="Balance Sheet" key="balanceSheet">
                        <Row justify="center">
                            <BalShtTable />
                        </Row>
                    </TabPane>
                    <TabPane tab="Cash Flow" key="cashFlow">
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
