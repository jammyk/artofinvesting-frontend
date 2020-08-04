import React, { Component } from 'react'
import 'antd/dist/antd.css';
import '../stylesheets/Calculator.css'
import { CalculatorOutlined } from '@ant-design/icons'
import { Affix, Drawer, Button, Popover, Steps, Row, Col, Typography, InputNumber, Slider, Tooltip } from 'antd'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as ChartTooltip } from 'recharts'


const { Step } = Steps
const { Text } = Typography
const errorText = <span>Please check if all the values are correctly inputted</span>
const resultTooltip = <span>Press to view the result!</span>

const customDot = (dot, { status, index }) => (
    <Popover
        content={
            <span>
                step {index} status: {status}
            </span>
        }
    >
        {dot}
    </Popover>
);

class Calculator extends Component {

    state = {
        visible: false,
        current: 0,
        yrInputs: [],
        initCashFlow: 0,
        discountRate: 0,
        growthInputs: [0, 0, 0],
        rowCount: 3,
        wrongInputs: true,
        chartData: []
    }

    showDrawer = () => {
        this.setState({
            visible: true,
        })
    };

    onClose = () => {
        this.setState({
            visible: false,
        })
    }

    onClickResult = () => {
        this.setState({
            current: 1,
        })
    }

    onClickGoBack = () => {
        this.setState({
            current: 0,
        })
    }

    onInitCashFlowChange(value) {
        this.setState({
            initCashFlow: value
        })
        this.checkCorrectInput()
    }

    onDiscountRateChange(value) {
        this.setState({
            discountRate: value
        })
        this.checkCorrectInput()
    }

    onChangeGrowthRate(value, rowNum) {
        var updatedGrowthArry = this.state.growthInputs
        typeof value === 'number' ? updatedGrowthArry[rowNum] = value : updatedGrowthArry[rowNum] = 0
        this.setState({
            growthInputs: updatedGrowthArry
        })
        console.log(this.state.growthInputs)
        this.checkCorrectInput()
    }

    onChangeYear(value, rowNum) {
        var updatedYearsArry = this.state.yrInputs
        if (typeof value !== 'number') {
            updatedYearsArry[rowNum] = null
        } else
            updatedYearsArry[rowNum] = Math.round(value)
        this.setState({
            yrInputs: updatedYearsArry
        })
        console.log(this.state.yrInputs)

        this.checkCorrectInput()
    }

    checkCorrectInput() {
        var numRows = this.state.yrInputs.length,
            yrInputs = this.state.yrInputs
        if (numRows > 0) {
            for (var i = 0; i < numRows; i++) {
                if (typeof yrInputs[0] !== 'number') {
                    this.setState({
                        wrongInputs: true
                    })
                    return
                }
                if (yrInputs[i] !== null) {
                    if (i !== 0 && yrInputs[i] <= yrInputs[i - 1] && yrInputs[i - 1] !== null) {
                        this.setState({
                            wrongInputs: true
                        })
                        return
                    }
                    if (i !== 2 && yrInputs[i] >= yrInputs[i + 1] && yrInputs[i + 1] !== null) {
                        this.setState({
                            wrongInputs: true
                        })
                        return
                    }
                }
                if (yrInputs[i] == null && yrInputs[i + 1] != null) {
                    this.setState({
                        wrongInputs: true
                    })
                    return
                }
            }
        }
        this.setState({
            wrongInputs: false
        })
        this.renderChartData()
        console.log(this.state.wrongInputs)
    }


    renderChartData() {
        var data = [],
            yrInputs = this.state.yrInputs.filter(function (a) {
                return a != null
            }),
            numYearRows = yrInputs.length,
            growthInputs = this.state.growthInputs

        for (var i = 0; i <= this.state.yrInputs[numYearRows - 1]; i++) {
            if (i === 0) {
                data.push({ year: "year" + i, cashFlow: this.state.initCashFlow })
            }
            if (i > 0 && i <= yrInputs[0]) {
                data.push({
                    year: "year" + i,
                    cashFlow: data[i - 1].cashFlow * (1 + (growthInputs[0] * 0.01))
                })
            }
            if (numYearRows >= 2 && i > yrInputs[0] && i <= yrInputs[1] && yrInputs[1] !== null) {
                data.push({
                    year: "year" + i,
                    cashFlow: data[i - 1].cashFlow * (1 + (growthInputs[1] * 0.01))
                })
            }
            if (numYearRows >= 3 && i > yrInputs[1] && i <= yrInputs[2] && yrInputs[2] !== null) {
                data.push({
                    year: "year" + i,
                    cashFlow: data[i - 1].cashFlow * (1 + (growthInputs[2] * 0.01))
                })
            }
        }
        console.log(data)
        this.setState({
            chartData: data
        })
    }

    calcFCF(){
        var result = 0,
            data = this.state.chartData,
            discountRate = this.state.discountRate
        for (var i=1; i < data.length; i++){
            var fcf = data[i].cashFlow/((1+(discountRate*0.01))**i)
            result += fcf
            console.log("this is " + i + "fcf: " + fcf)
        }
        return Math.round(result)   
    }

    resultBtnTooltip = () => {
        if (this.state.wrongInputs) {
            return errorText
        }
        return resultTooltip
    }

    renderFooter() {
        if (this.state.current === 0) {
            return (
                <div
                    style={{
                        textAlign: 'right',
                    }}
                >
                    <Button></Button>
                    <Tooltip placement="leftTop" title={this.resultBtnTooltip}>
                        <Button className="resultBtn" onClick={this.onClickResult} disabled={this.state.wrongInputs} type="default">
                            Result
                        </Button>
                    </Tooltip>
                </div>
            )
        }
        return (
            <div
                style={{
                    textAlign: 'left',
                }}
            >
                <Button onClick={this.onClickGoBack} type="default">
                    Go Back
                </Button>
                <Button></Button>
            </div>
        )
    }

    render() {
        const { visible, current, yrInputs, growthInputs, chartData } = this.state

        return (
            <div>
            <Affix offsetBottom={10}>
                <Button type="default" onClick={this.showDrawer} style={{border:"none", backgroundColor:"Transparent"}}>
                    <CalculatorOutlined style={{fontSize: "20px"}}/>
                 </Button>
                 </Affix>
                <Drawer
                    title="Calculator"
                    placement="bottom"
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    height="60%"
                    bodyStyle={{ paddingTop: "0" }}
                    footer={this.renderFooter()}
                >
                    <Row justify="center" align="middle">
                        <Col span={4} justify="middle" className="steps-label">
                            <Steps current={current} progressDot={customDot}>
                                <Step key="1" title="User Input" />
                                <Step key="2" title="Result" />
                            </Steps>
                        </Col>
                    </Row>
                    {current === 0 && (
                        <Row>
                            <Col span={2}></Col>
                            <Col span={8}>
                                <Row>
                                    <Col span={12}>
                                        <Row justify="start" align="middle">
                                            <Text>Initial Cash Flow:</Text>
                                        </Row>
                                        <Row justify="start" align="middle">
                                            <InputNumber
                                                defaultValue={0}
                                                formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                                                parser={value => value.replace(/\$\s?|(,*)/g, '')}
                                                className="cashFlowInputBox"
                                                onChange={value => this.onInitCashFlowChange(value)}
                                            />
                                        </Row>
                                    </Col>
                                    <Col span={12}>
                                        <Row justify="start" align="middle">
                                            <Text>Discount Rate:</Text>
                                        </Row>
                                        <Row justify="start" align="middle">
                                            <InputNumber
                                                defaultValue={0}
                                                formatter={value => `${value}%`}
                                                parser={value => value.replace('%', '')}
                                                className="cashFlowInputBox"
                                                onChange={value => this.onDiscountRateChange(value)}
                                            />
                                        </Row>
                                    </Col>
                                </Row>
                                <div id="input0">
                                    <Row justify="start" align="middle">
                                        <Text id="Row0" style={{ marginRight: "5px" }}>0 years to</Text>
                                        <InputNumber className="yearInput" min={1} max={100} onChange={value => this.onChangeYear(value, 0)} />
                                        <Text style={{ marginLeft: "5px" }}> years Growth:</Text>
                                    </Row>
                                    <Row justify="center">
                                        <Col span={18}>
                                            <Slider className="growthSlider"
                                                min={-100} max={1000}
                                                defaultValue={growthInputs[0]}
                                                value={typeof growthInputs[0] === 'number' ? growthInputs[0] : 0}
                                                onChange={value => this.onChangeGrowthRate(value, 0)}
                                                onAfterChange={value => this.onChangeGrowthRate(value, 0)} />
                                        </Col>
                                        <Col span={6}>
                                            <InputNumber
                                                min={-100}
                                                max={1000}
                                                value={growthInputs[0]}
                                                onChange={value => this.onChangeGrowthRate(value, 0)}
                                                formatter={value => `${value}%`}
                                                parser={value => value.replace('%', '')}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <div id="input1">
                                    <Row justify="start" align="middle">
                                        <Text id="Row1" style={{ marginRight: "5px" }}>{yrInputs[0]} years to</Text>
                                        <InputNumber className="yearInput" min={0} max={100} onChange={value => this.onChangeYear(value, 1)} />
                                        <Text style={{ marginLeft: "5px" }}> years Growth:</Text>
                                    </Row>
                                    <Row justify="center">
                                        <Col span={18}>
                                            <Slider className="growthSlider"
                                                min={-100} max={1000}
                                                defaultValue={growthInputs[1]}
                                                value={typeof growthInputs[1] === 'number' ? growthInputs[1] : 0}
                                                onChange={value => this.onChangeGrowthRate(value, 1)}
                                                onAfterChange={value => this.onChangeGrowthRate(value, 1)} />
                                        </Col>
                                        <Col span={6}>
                                            <InputNumber
                                                min={-100}
                                                max={1000}
                                                value={growthInputs[1]}
                                                onChange={value => this.onChangeGrowthRate(value, 1)}
                                                formatter={value => `${value}%`}
                                                parser={value => value.replace('%', '')}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <div id="input2">
                                    <Row justify="start" align="middle">
                                        <Text id="Row2" style={{ marginRight: "5px" }}>{yrInputs[1]} years to</Text>
                                        <InputNumber className="yearInput" min={0} max={100} onChange={value => this.onChangeYear(value, 2)} />
                                        <Text style={{ marginLeft: "5px" }}> years Growth:</Text>
                                    </Row>
                                    <Row justify="center">
                                        <Col span={18}>
                                            <Slider className="growthSlider"
                                                min={-100} max={1000}
                                                defaultValue={growthInputs[2]}
                                                value={typeof growthInputs[2] === 'number' ? growthInputs[2] : 0}
                                                onChange={value => this.onChangeGrowthRate(value, 2)}
                                                onAfterChange={value => this.onChangeGrowthRate(value, 2)} />
                                        </Col>
                                        <Col span={6}>
                                            <InputNumber
                                                min={-100}
                                                max={1000}
                                                value={growthInputs[2]}
                                                onChange={value => this.onChangeGrowthRate(value, 2)}
                                                formatter={value => `${value}%`}
                                                parser={value => value.replace('%', '')}
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </Col>
                            <Col span={14} align="middle" justify="space-around">
                                <ResponsiveContainer width={"80%"} height={250}>
                                    <BarChart
                                        data={chartData}
                                        margin={{ top: 30 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <ChartTooltip />
                                        <Bar dataKey="cashFlow" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                        </Row>
                    )}
                    {current === 1 && (
                        <Row align="middle" >
                            <Col span={14} align="middle">
                                <ResponsiveContainer width={"80%"} height={250}>
                                    <BarChart
                                        data={chartData}
                                        margin={{ top: 30 }}>
                                        <CartesianGrid strokeDasharray="3 3" />
                                        <XAxis dataKey="year" />
                                        <YAxis />
                                        <ChartTooltip />
                                        <Bar dataKey="cashFlow" fill="#82ca9d" />
                                    </BarChart>
                                </ResponsiveContainer>
                            </Col>
                            <Col span={8} align="middle">
                                <Row justify="start">
                                    <Text strong="true">Terminal Free Cash: ${Math.round(chartData[chartData.length-1].cashFlow)}</Text>
                                </Row>
                                <Row justify="start">
                                    <Text strong="true">Discounted Cash Flow (DCF) per share: ${this.calcFCF()}</Text>
                                </Row>
                            </Col>
                        </Row>
                    )}
                </Drawer>
            </div>
        )
    }
}

export default Calculator