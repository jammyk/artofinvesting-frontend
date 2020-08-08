import React, { Component } from 'react'
import { Typography } from 'antd';


const { Text } = Typography;


export default class SectionTitle extends Component {
    render() {
        return (
            <div className="companyTitle" style={{ textAlign: 'left', paddingTop: 85, paddingBottom: 85}}>
                <p style={{ marginTop: '-0.3em', marginBottom: '0', fontSize: 40 }}>
                    <Text>{this.props.title}</Text>
                </p>
                <p style={{ marginBottom: '0.5em' }}>
                    <Text>
                        {'Last updated ' + this.props.lastUpdated}
                    </Text>
                </p>
            </div>
        )
    }
}
