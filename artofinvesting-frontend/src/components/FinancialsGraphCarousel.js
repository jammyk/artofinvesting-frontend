import React, { Component } from 'react'
import { Carousel, Row, Col, Typography } from 'antd'
import ComposedGraph from './ComposedGraph'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../stylesheets/GraphCarousel.css';

const { Title } = Typography;

export default class FinancialsGraphCarousel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isStart: true,
            isEnd: false,
            numSlides: 2
        }
    }

    next = () => {
        this.carousel.next();
    }

    prev = () => {
        this.carousel.prev();
    }

    onCarouselChange = (currentIdx) => {
        this.setState({ isStart: currentIdx === 0 });
        this.setState({ isEnd: currentIdx === this.state.numSlides - 1 });
    }

    render() {
        return (
            <div>
                <Row align='middle'>
                    {this.state.isStart ?
                        <Col span={1} />
                        :
                        <Col className='slider-btn-container left' span={1} onClick={this.prev} >
                            <LeftOutlined />
                        </Col>
                    }
                    <Col span={22}>
                        <Carousel swipeToSlide={true} ref={c => (this.carousel = c)} afterChange={this.onCarouselChange}>
                            <div className='firstSlide'>
                                <Title level={3}>{this.props.financialStatementName}</Title>
                                <ComposedGraph
                                    data={this.props.financialsData}
                                    xLabel={this.props.reportType}
                                    leftBarKey="revenue"
                                    rightBarKey="netIncome"
                                    lineKey="operatingIncome" />
                            </div>
                            <div>
                                <Title level={3}>{this.props.financialStatementName} Growth</Title>
                                <ComposedGraph
                                    data={this.props.growthData}
                                    xLabel={this.props.reportType}
                                    leftBarKey="netIncome"
                                    rightBarKey="revenue"
                                    lineKey="operatingIncome" />
                            </div>
                        </Carousel>
                    </Col>
                    {this.state.isEnd ?
                        <Col span={1} />
                        :
                        <Col className='slider-btn-container right' span={1} onClick={this.next}>
                            <RightOutlined />
                        </Col>
                    }
                </Row>
            </div>
        )
    }
}
