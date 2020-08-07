import React, { Component } from 'react'
import { Table, Tooltip } from 'antd'
import 'antd/dist/antd.css'
import '../../stylesheets/Table.css'

class DetailsTable extends Component {
    
    constructor(prop) {
        super(prop);
        this.state = {
            columns: []
        }
    }

    componentDidMount() {
        this.setState({
            columns: this.renderColumns(this.props.columns)
        })
    }

    renderColumns(columns) {
        const bigNumRegex = /\B(?=(\d{3})+(?!\d))/g
        for(var i=0 ; i<columns.length; i++){
            if(i === 0){
                columns[i].render = value => (
                    <Tooltip placement='topLeft' title={value}>
                      {value}
                    </Tooltip>
                  )
            }else{
                columns[i].render = value => value.toString().replace(bigNumRegex, ',')
            }
        }
        return columns
    }


    render() {
        const pageSize = this.props.data.length
        return (
            <Table
                className="detailsTable"
                columns={this.state.columns}
                dataSource={this.props.data}
                bordered
                pagination={false && { pageSize }}
            />
        )
    }
}
export default DetailsTable