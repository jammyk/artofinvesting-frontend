import React, { Component } from 'react'
import data from '../../mockdata/financialStatement.json'

const { default: FinancialStatementTable } = require("./FinancialStatementTable")
const cashFlow = data["cashFlowStatements"]

class CashFlowTable extends FinancialStatementTable{

    renderCashFlowData() {
        return cashFlow.map((cashFlow, index) => {
            const { year, cashFromOperation, cashFromInvesting, cashFromFinancing, netChangeInCash,
                cashAtBeginning, cashAtEnd, freeCashFlow } = cashFlow,
                { netIncome, depreciationAndAmortization, deferredIncomeTaxes, stockBasedCompensation,
                    changeInWorkingCapital, accountsReceivable, inventory, accountsPayable, otherOperations, netCashFromOperations } = cashFromOperation,
                { ppe, netAcquisitions, purchaseOfInvestments, disposalOfInvestments, otherInvesting, netCashFromInvesting } = cashFromInvesting,
                { debtRepayment, commonStockIssuance, commonStockRepurchase, dividendsPaid, otherFinancing, netCashFromFinancing } = cashFromFinancing,
                { operatingCashFlow, capEx, totalFreeCashFlow } = freeCashFlow

            console.log(year)
            return (
                <tr>
                    <td className="year">{year}</td>
                    <td className="cashFromOperationParentRow">{this.formatNum(netCashFromOperations)}</td>
                    <div className="cashFromOperationChildRow" style={{ display: "none" }}>
                        <td>{this.formatNum(netIncome)}</td>
                        <td>{this.formatNum(depreciationAndAmortization)}</td>
                        <td>{this.formatNum(deferredIncomeTaxes)}</td>
                        <td>{this.formatNum(stockBasedCompensation)}</td>
                        <td>{this.formatNum(changeInWorkingCapital)}</td>
                        <td>{this.formatNum(accountsReceivable)}</td>
                        <td>{this.formatNum(inventory)}</td>
                        <td>{this.formatNum(accountsPayable)}</td>
                        <td>{this.formatNum(otherOperations)}</td>
                        <td>{this.formatNum(netCashFromOperations)}</td>
                    </div>
                    <td className="cashFromInvestingParentRow">{this.formatNum(netCashFromInvesting)}</td>
                    <div className="cashFromInvestingChildRow" style={{ display: "none" }}>
                        <td>{this.formatNum(ppe)}</td>
                        <td>{this.formatNum(netAcquisitions)}</td>
                        <td>{this.formatNum(purchaseOfInvestments)}</td>
                        <td>{this.formatNum(disposalOfInvestments)}</td>
                        <td>{this.formatNum(otherInvesting)}</td>
                        <td>{this.formatNum(netCashFromInvesting)}</td>
                    </div>
                    <td className="cashFromFinancingParentRow">{this.formatNum(netCashFromFinancing)}</td>
                    <div className="cashFromFinancingChildRow" style={{ display: "none" }}>
                        <td>{this.formatNum(debtRepayment)}</td>
                        <td>{this.formatNum(commonStockIssuance)}</td>
                        <td>{this.formatNum(commonStockRepurchase)}</td>
                        <td>{this.formatNum(dividendsPaid)}</td>
                        <td>{this.formatNum(otherFinancing)}</td>
                        <td>{this.formatNum(netCashFromFinancing)}</td>
                    </div>
                    <td>{this.formatNum(netChangeInCash)}</td>
                    <td>{this.formatNum(cashAtBeginning)}</td>
                    <td>{this.formatNum(cashAtEnd)}</td>
                    <td className="freeCashFlowParentRow">{this.formatNum(totalFreeCashFlow)}</td>
                    <div className="freeCashFlowChildRow" style={{ display: "none" }}>
                        <td>{this.formatNum(operatingCashFlow)}</td>
                        <td>{this.formatNum(capEx)}</td>
                        <td>{this.formatNum(totalFreeCashFlow)}</td>
                    </div>
                </tr>
            )
        })
    }

    render(){
        return(
            <table className="rtable rtable--flip">
                <thead>
                    <tr>
                        {this.renderHeader(cashFlow, 0)}
                    </tr>
                </thead>
                <tbody>
                    {this.renderCashFlowData()}
                </tbody>
            </table>
        )
    }
} 
export default CashFlowTable