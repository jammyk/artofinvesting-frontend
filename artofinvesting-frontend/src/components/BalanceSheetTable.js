import React, { Component } from 'react'
import data from '../mockdata/financialStatement.json'

const { default: FinancialStatementTable } = require("./FinancialStatementTable")
const balanceSheet = data["balanceSheets"]

class BalShtTable extends FinancialStatementTable{

    renderBalSheetData() {
        return balanceSheet.map((balSht, index) => {
            const { year, assets, liabilitiesAndStockholdersEquity } = balSht,
                { currentAssets, nonCurrentAssets, totalAssets } = assets,
                { liabilities, stockholdersEquity, totalLiabilitiesAndStockholdersEquity } = liabilitiesAndStockholdersEquity,
                { currentLiabilities, nonCurrentLiabilities, totalLiabilities } = liabilities

            console.log(year)
            return (
                <tr>
                    <td className="year">{year}</td>
                    <td className="assetsParentRow">{this.formatNum(totalAssets)}</td>
                    <div className="assetsChildRow" style={{ display: "none" }}>
                        <td className="currentAssetsParentRow">{this.formatNum(currentAssets.totalCurrentAssets)}</td>
                        <div className="currentAssetsChildRow" style={{ display: "none" }}>
                            <td className="cashParentRow">{this.formatNum(currentAssets.cash.totalCash)}</td>
                            <div className="cashChildRow" style={{ display: "none" }}>
                                <td>{this.formatNum(currentAssets.cash.cashAndCashEquivalents)}</td>
                                <td>{this.formatNum(currentAssets.cash.otherShortTermInvestments)}</td>
                                <td>{this.formatNum(currentAssets.cash.totalCash)}</td>
                            </div>
                            <td>{this.formatNum(currentAssets.netReceivables)}</td>
                            <td>{this.formatNum(currentAssets.inventory)}</td>
                            <td>{this.formatNum(currentAssets.otherCurrentAssets)}</td>
                            <td>{this.formatNum(currentAssets.totalCurrentAssets)}</td>
                        </div>
                        <td className="nonCurrentAssetsParentRow">{this.formatNum(nonCurrentAssets.totalNonCurrentAssets)}</td>
                        <div className="nonCurrentAssetsChildRow" style={{ display: "none" }}>
                            <td className="propertyPlantAndEquipmentParentRow">{this.formatNum(nonCurrentAssets.propertyPlantAndEquipment.netPropertyPlantAndEquipment)}</td>
                            <div className="propertyPlantAndEquipmentChildRow" style={{ display: "none" }}>
                                <td>{this.formatNum(nonCurrentAssets.propertyPlantAndEquipment.grossPropertyPlantAndEquipment)}</td>
                                <td>{this.formatNum(nonCurrentAssets.propertyPlantAndEquipment.accumulatedDepreciation)}</td>
                                <td>{this.formatNum(nonCurrentAssets.propertyPlantAndEquipment.netPropertyPlantAndEquipment)}</td>
                            </div>
                            <td>{this.formatNum(nonCurrentAssets.equityAndOtherInvestments)}</td>
                            <td>{this.formatNum(nonCurrentAssets.goodwill)}</td>
                            <td>{this.formatNum(nonCurrentAssets.intangibleAssets)}</td>
                            <td>{this.formatNum(nonCurrentAssets.otherLongTermAssets)}</td>
                            <td>{this.formatNum(nonCurrentAssets.totalNonCurrentAssets)}</td>
                        </div>
                        <td>{this.formatNum(totalAssets)}</td>
                    </div>
                    <td className="liabilitiesAndStockholdersEquityParentRow">{this.formatNum(totalLiabilitiesAndStockholdersEquity)}</td>
                    <div className="liabilitiesAndStockholdersEquityChildRow" style={{ display: "none" }}>
                        <td className="liabilitiesParentRow">{this.formatNum(totalLiabilities)}</td>
                        <div className="liabilitiesChildRow" style={{ display: "none" }}>
                            <td className="currentLiabilitiesParentRow">{this.formatNum(currentLiabilities.totalCurrentLiabilities)}</td>
                            <div className="currentLiabilitiesChildRow" style={{ display: "none" }}>
                                <td>{this.formatNum(currentLiabilities.currentDebt)}</td>
                                <td>{this.formatNum(currentLiabilities.accountsPayable)}</td>
                                <td>{this.formatNum(currentLiabilities.taxesPayable)}</td>
                                <td>{this.formatNum(currentLiabilities.deferredRevenues)}</td>
                                <td>{this.formatNum(currentLiabilities.otherCurrentLiabilities)}</td>
                                <td>{this.formatNum(currentLiabilities.totalCurrentLiabilities)}</td>
                            </div>
                            <td className="nonCurrentLiabilitiesParentRow">{this.formatNum(nonCurrentLiabilities.totalNonCurrentLiabilities)}</td>
                            <div className="nonCurrentLiabilitiesChildRow" style={{ display: "none" }}>
                                <td>{this.formatNum(nonCurrentLiabilities.longTermDebt)}</td>
                                <td>{this.formatNum(nonCurrentLiabilities.deferredTaxesLiabilities)}</td>
                                <td>{this.formatNum(nonCurrentLiabilities.deferredRevenues)}</td>
                                <td>{this.formatNum(nonCurrentLiabilities.otherLongTermLiabilities)}</td>
                                <td>{this.formatNum(nonCurrentLiabilities.totalNonCurrentLiabilities)}</td>
                            </div>
                            <td>{this.formatNum(totalLiabilities)}</td>
                        </div>
                        <td className="stockholdersEquityParentRow">{this.formatNum(stockholdersEquity.totalStockholdersEquity)}</td>
                        <div className="stockholdersEquityChildRow" style={{ display: "none" }}>
                            <td>{this.formatNum(stockholdersEquity.commonStock)}</td>
                            <td>{this.formatNum(stockholdersEquity.retainedEarnings)}</td>
                            <td>{this.formatNum(stockholdersEquity.accumulatedOtherComprehensiveIncome)}</td>
                            <td>{this.formatNum(stockholdersEquity.totalStockholdersEquity)}</td>
                        </div>
                        <td>{this.formatNum(totalLiabilitiesAndStockholdersEquity)}</td>
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
                        {this.renderHeader(balanceSheet, 0)}
                    </tr>
                </thead>
                <tbody>
                    {this.renderBalSheetData()}
                </tbody>
            </table>
        )
    }
} 
export default BalShtTable