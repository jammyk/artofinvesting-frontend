import React, { Component } from 'react'
import data from '../mockdata/financialStatement.json'

const { default: FinancialStatementTable } = require("./FinancialStatementTable")
const incomeStatements = data["incomeStatements"]

class IncStmtTable extends FinancialStatementTable{

    renderIncStmtData() {

        return incomeStatements.map((incSt, index) => {
            const { year, totalRevenue, costOfRevenue, grossProfit, operatingExpenses, operatingIncomeOrLoss,
                totalNetOtherIncomeAndExpense, interestExpense, incomeBeforeTax, incomeTaxExpense, incomeFromContinuingOperations,
                netIncome, netIncomeAvailableToCommonShareholders, basicEPS, dilutedEPS, basicAvgShares, dilutedAvgShares } = incSt,
                { researchAndDevelopment, sellingGeneralAndAdmin, totalOperatingExpense } = operatingExpenses
            console.log(year)
            console.log(index)
            return (
                <tr>
                    <td className="year">{year}</td>
                    <td>{this.formatNum(totalRevenue)}</td>
                    <td>{this.formatNum(costOfRevenue)}</td>
                    <td>{this.formatNum(grossProfit)}</td>
                    <td className="operatingExpensesParentRow">{this.formatNum(totalOperatingExpense)}</td>
                    <div className="operatingExpensesChildRow" style={{ display: "none" }}>
                        <td>{this.formatNum(researchAndDevelopment)}</td>
                        <td>{this.formatNum(sellingGeneralAndAdmin)}</td>
                        <td>{this.formatNum(totalOperatingExpense)}</td>
                    </div>
                    <td>{this.formatNum(operatingIncomeOrLoss)}</td>
                    <td>{this.formatNum(totalNetOtherIncomeAndExpense)}</td>
                    <td>{this.formatNum(interestExpense)}</td>
                    <td>{this.formatNum(incomeBeforeTax)}</td>
                    <td>{this.formatNum(incomeTaxExpense)}</td>
                    <td>{this.formatNum(incomeFromContinuingOperations)}</td>
                    <td>{this.formatNum(netIncome)}</td>
                    <td>{this.formatNum(netIncomeAvailableToCommonShareholders)}</td>
                    <td>{this.formatNum(basicEPS)}</td>
                    <td>{this.formatNum(dilutedEPS)}</td>
                    <td>{this.formatNum(basicAvgShares)}</td>
                    <td>{this.formatNum(dilutedAvgShares)}</td>
                </tr>

            )
        })
    }

    render(){
        return(
            <table className="rtable rtable--flip">
                <thead>
                    <tr>
                        {this.renderHeader(incomeStatements, 0)}
                    </tr>
                </thead>
                <tbody>
                    {this.renderIncStmtData()}
                </tbody>
            </table>
        )
    }
} 
export default IncStmtTable