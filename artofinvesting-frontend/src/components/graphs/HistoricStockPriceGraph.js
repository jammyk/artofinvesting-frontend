import React, { Component } from 'react'
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, CartesianAxis } from 'recharts'
import { Tooltip } from 'antd'
import { WHITE, BLUE1 } from '../../constants/colors'

export default class HistoricStockPriceGraph extends Component {

    constructor(prop) {
        super(prop);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        // todo axios call
        this.setState({
            data: [
                {
                    'time': 'Jul 28',
                    'price': 203.41
                },
                {
                    'time': 'Jul 29',
                    'price': 202.02
                },
                {
                    'time': 'Jul 30',
                    'price': 199.98
                },
                {
                    'time': 'Jul 31',
                    'price': 204.59
                },
                {
                    'time': 'Aug 3',
                    'price': 211.65

                }
            ]
        })
    }

    render() {
        return (
            <ResponsiveContainer width={'100%'} height={280}>
                <LineChart data={this.state.data} >
                    <XAxis dataKey={'time'} />
                    <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    <Tooltip />
                    <CartesianAxis stroke={WHITE}/>
                    <Line dataKey={'price'} stroke={'green'} />
                </LineChart>
            </ResponsiveContainer>
        )
    }
}
