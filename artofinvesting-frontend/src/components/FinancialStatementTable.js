import React, { Component } from 'react'
import { DownOutlined, RightOutlined } from '@ant-design/icons'


class FinancialStatementTable extends Component {

    formatNum(bigNum) {
        return bigNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    }

    renderHeader(data, subLevel) {
        let header, source
        if (subLevel !== 0) {
            header = Object.keys(data)
            source = data
        } else {
            header = Object.keys(data[0])
            source = data[0]
        }
        return header.map((key, index) => {
            var headerName = key.replace(/([A-Z]{1}[a-z]+)|([A-Z]{2,})/g, " $1$2")
            headerName = headerName.charAt(0).toUpperCase() + headerName.slice(1)
            if (typeof (source[key]) === "object") {
                console.log(source[key][0])
                return (
                    <div id={key}>
                        <th id={key + "Parent"} title={headerName} key={key}>{headerName}<button className="expandBtn" onClick={event => this.expandRow(event)} style={{ float: "right" }}><RightOutlined style={{ display: "block" }} /> <DownOutlined style={{ display: "none" }} /></button></th>
                        <table id={key + "Child"} style={{ display: "none" }}>
                            {this.renderHeader(source[key], 1)}
                        </table>
                    </div>
                )
            }
            if (key === "year") {
                return <th className="emptyCell" key={key}> </th>
            }
            if (key.match())
                return <th key={key} title={headerName}>{headerName}</th>
        })
    }

    expandRow(event) {
        var id = event.currentTarget.offsetParent.parentElement.id,
            targetChildElement = document.getElementById(id + "Child"),
            targetParentElement = document.getElementById(id + "Parent"),
            targetParentRows = document.getElementsByClassName(id + "ParentRow"),
            targetChildRows = document.getElementsByClassName(id + "ChildRow")

        targetParentElement.classList.toggle("parent")
        targetChildElement.classList.toggle("child")
        this.toggleRowDisplay(targetChildElement)
        this.toggleRowDisplay(targetChildRows)
        this.toggleParentRowDiplay(targetParentRows)
        this.toggleExpandBtn(event)
    }

    toggleRowDisplay(targetChildElement) {
        if (!targetChildElement.length) {
            if (targetChildElement.style.display == "none") {
                targetChildElement.style.display = "block"
            } else targetChildElement.style.display = "none"
        }
        for (var i = 0; i < targetChildElement.length; i++) {
            if (targetChildElement[i].style.display == "none") {
                targetChildElement[i].style.display = "block"
            } else targetChildElement[i].style.display = "none"
        }
    }

    toggleParentRowDiplay(targetParentRows) {
        for (var i = 0; i < targetParentRows.length; i++) {
            targetParentRows[i].classList.toggle("parentRow")
        }
    }

    toggleExpandBtn(event) {
        var expandBtn = event.currentTarget.children[0],
            collapseBtn = event.currentTarget.children[1]
        if (expandBtn.style.display == "none") {
            expandBtn.style.display = "block"
            collapseBtn.style.display = "none"
        } else {
            expandBtn.style.display = "none"
            collapseBtn.style.display = "block"
        }
    }
}
export default FinancialStatementTable