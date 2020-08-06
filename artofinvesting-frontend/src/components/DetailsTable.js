import React, { Component } from 'react'
import { Table, Tooltip } from 'antd'
import 'antd/dist/antd.css'
import '../stylesheets/Table.css'

class DetailsTable extends Component {
    
    renderColumns(columns) {
        for(var i=0 ; i<columns.length; i++){
            if(i === 0){
                columns[i].render = value => (
                    <Tooltip placement='topLeft' title={value}>
                      {value}
                    </Tooltip>
                  )
            }else{
                columns[i].render = value => value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
            }
        }
        console.log(columns)
        return columns
    }


    render() {
        const pageSize =40
        return (
            <Table
                className="detailsTable"
                columns={this.renderColumns(this.props.columns)}
                dataSource={this.props.data}
                bordered
                pagination={this.props.data.length > pageSize && { pageSize }}
            />
        )
    }
}
export default DetailsTable