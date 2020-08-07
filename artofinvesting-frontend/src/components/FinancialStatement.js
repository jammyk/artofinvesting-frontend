import React, { Component } from 'react'
import 'antd/dist/antd.css'
import '../stylesheets/Table.css'
import { Tabs, Row } from 'antd'
import graphData from '../mockdata/graphMockData.json'
import FinancialsGraphCarousel from './FinancialsGraphCarousel'
import DetailsTable from './tables/DetailsTable'
import data from '../mockdata/finanStmtTableData.json' 
import columns from '../mockdata/finanStmtColumns.json'

const { TabPane } = Tabs

class FinancialStatement extends Component {

    render() {
        return (
            <div>
                <Tabs defaultActiveKey="incomeStatement" centered>
                    <TabPane tab="Income Statement" key="incomeStatement">
                        <FinancialsGraphCarousel financialsData={graphData} />
                        <Row justify="center">
                            <DetailsTable columns={columns} data={data.incomeStatement}/>
                        </Row>
                    </TabPane>
                    <TabPane tab="Balance Sheet" key="balanceSheet">
                        <FinancialsGraphCarousel financialsData={graphData} />
                        <Row justify="center">
                            <DetailsTable columns={columns} data={data.balanceSheet} />
                        </Row>
                    </TabPane>
                    <TabPane tab="Cash Flow" key="cashFlow">
                        <FinancialsGraphCarousel financialsData={graphData} />
                        <Row justify="center">
                            <DetailsTable columns={columns} data={data.cashFlow} />
                        </Row>
                    </TabPane>
                </Tabs>
            </div>
        )
    }
}

export default FinancialStatement
