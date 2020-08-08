import React, { Component } from 'react'
import 'antd/dist/antd.css'
import { Steps, Button, message, Popover, Row, Col, Input, Radio } from 'antd'
import { Link } from 'react-router-dom';
import '../stylesheets/Screener.css'
import magicFormula from '../images/magicFormula.png'
import spinoff from '../images/spinoff.png'
import shareCannibal from '../images/shareCannibal.png'
import logo from '../images/aoi_logo.png'

const { Step } = Steps


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

class Screener extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numSteps: 2,
            current: 0,
            selected: "none",
            marketCap: 0,
            numStocks: 30
        }
    }

    next() {
        const current = this.state.current + 1;
        this.setState({ current });
    }

    prev() {
        const current = this.state.current - 1;
        this.setState({ current });
    }

    selectScreener = s => {
        const selected = s.currentTarget.value
        this.toggleHighlight(selected)
        if (this.state.selected !== selected) {
            this.setState({'selected': selected});
        } else { 
            this.setState({'selected': 'none'});
        }
        this.toggleNextButton()
        this.toggleDoneButton()
    }

    selectNumStocks = n => {
        this.setState({
            numStocks: n.target.value
        })
    }

    inputMinMarketCap = m => {
        this.setState({
            marketCap: m.target.value
        })
        document.getElementById("doneButton").style.visibility = "visible"
    }

    onClickDone() {
        if (this.state.current === 1) {
            var marketCap = this.state.marketCap
            if (!marketCap.match(/^[0-9]+([,.][0-9]+)?$/)) {
                message.error("Please input correct Minimum Market Cap")
            }
            else if (typeof this.state.marketCap === 'string') {
                let marketCapFloat = parseFloat(this.state.marketCap);
                this.setState({'marketCap': marketCapFloat});
                message.success('Processing complete!')
            }
        }
    }

    toggleDoneButton() {
        if (this.state.selected === "none" || this.state.selected === "magic_formula")
            document.getElementById("doneButton").style.visibility = "hidden"
        else document.getElementById("doneButton").style.visibility = "visible"
    }

    toggleNextButton() {
        if (this.state.selected === "magic_formula")
            document.getElementById("nextButton").style.visibility = "visible"
        else document.getElementById("nextButton").style.visibility = "hidden"
    }

    toggleHighlight(selected) {
        if (this.state.selected !== selected) {
            if (this.state.selected !== "none")
                document.getElementById(this.state.selected).style.removeProperty("border")
            document.getElementById(selected).style.border = "#23CDF9 thin dotted"
        }
        else document.getElementById(selected).style.removeProperty("border")
    }

    render() {
        const { current } = this.state;

        return (
            <div>
                <Row>
                    <Link to="/"><img src={logo} alt="logo" style={{ width: "100px", height: "100px", paddingTop: "1%", paddingLeft: "1%" }} /></Link>
                </Row>
                <Row style={{ paddingTop: "10%" }} justify="space-around" align="middle">
                    <Col span={4} justify="middle" className="steps-label">
                        <Steps current={current} direction="vertical" progressDot={customDot}>
                            <Step key="1" title="Choose Screener" description="Screener of your choice" />
                            <Step key="2" title="User Input" description="*Only applicable for Magic Formula Screener" />
                        </Steps>
                    </Col>
                    <Col span={16} justify="top" className="steps-content">
                        {current === 0 && (
                            <div>
                                <Button className="screener-btn" type='text' value="spinoff" style={{ paddingRight: "10%", paddingBottom: "10%" }} onClick={this.selectScreener}>
                                    <img src={spinoff} id="spinoff" alt="Spinoff" style={{ width: "200px", height: "200px" }} />
                                    <br />Spinoff
                                </Button>
                                <Button className="screener-btn" type='text' value="magic_formula" style={{ paddingRight: "10%", paddingBottom: "10%" }} onClick={this.selectScreener}>
                                    <img src={magicFormula} id="magic_formula" alt="Magic Formula" style={{ width: "200px", height: "200px" }} />
                                    <br />Magic Formula
                                </Button>
                                <Button className="screener-btn" type='text' value="share_cannibals" style={{ paddingRight: "10%", paddingBottom: "10%" }} onClick={this.selectScreener}>
                                    <img src={shareCannibal} id="share_cannibals" alt="Share Cannibals" style={{ width: "200px", height: "200px" }} />
                                    <br />Share Cannibals
                                </Button>
                            </div>
                        )}
                        {current === 1 && (
                            <div>
                                <Row align="center" >
                                    <Col span={4} style={{ paddingBottom: "5%", paddingTop: "5%" }}>
                                        <h4>Minimum Market Cap</h4>
                                    </Col>
                                    <Col span={6} style={{ paddingBottom: "5%", paddingTop: "5%" }}>
                                        <Input placeholder="Enter Market Cap" justify="top" addonAfter="Million" onChange={this.inputMinMarketCap} style={{ textAlign: "right" }} />
                                    </Col>
                                </Row>
                                <Row align="center">
                                    <Col span={4} >
                                        <h4>Number of Stocks</h4>
                                    </Col>
                                    <Col span={6}>
                                        <Radio.Group onChange={this.selectNumStocks} value={this.state.numStocks}>
                                            <Radio value={30}>30</Radio>
                                            <Radio value={50}>50</Radio>
                                        </Radio.Group>
                                    </Col>
                                </Row>
                            </div>
                        )}
                    </Col>
                </Row>
                <Row>
                    <Col span={14} justify="top" align="end">
                        <div style={{ paddingTop: "10%" }}>
                            {current > 0 && (
                                <Button style={{ margin: '0 8px' }} type="primary" onClick={() => this.prev()}>
                                    Previous
                                </Button>
                            )}
                            {current < this.state.numSteps - 1 && (
                                <Button id="nextButton" style={{ margin: '0 8px', visibility: "hidden" }} type="primary" onClick={() => this.next()}>
                                    Next
                                </Button>
                            )}
                            <Button id="doneButton" style={{ margin: '0 8px', visibility: "hidden" }} type="primary" onClick={() => this.onClickDone()}>
                                Done
                            </Button>

                        </div>
                    </Col>
                </Row>

            </div>
        )
    }
}
export default Screener