import React, { Component } from 'react'
import { ResponsiveContainer, AreaChart, XAxis, YAxis, CartesianAxis, Area } from 'recharts'
import { Tooltip } from 'antd'
import { WHITE, BLUE1, DARK_LIVER, ISABELLINE } from '../../constants/colors'

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
                <AreaChart data={this.state.data} >
                    <XAxis dataKey={'time'} />
                    <YAxis hide={true} domain={['dataMin - 10', 'dataMax + 10']} />
                    <Tooltip />
                    <CartesianAxis stroke={WHITE}/>
                    <Area dataKey={'price'} fill={'#1BEE5E'} stroke={ISABELLINE}/>
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}
