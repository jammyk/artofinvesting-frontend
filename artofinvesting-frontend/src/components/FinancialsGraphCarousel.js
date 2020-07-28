import React, { Component } from 'react'
import { Carousel, Row, Col } from 'antd'
import ComposedGraph from './ComposedGraph'
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import '../stylesheets/GraphCarousel.css';

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
                            <div>
                                <ComposedGraph data={this.props.graphMockData} xLabel="year" stackedUpperBarKey="revenue" stackedLowerBarKey="netIncome" lineKey="operatingIncome"></ComposedGraph>
                            </div>
                            <div>
                                <ComposedGraph data={this.props.graphMockData} xLabel="year" stackedUpperBarKey="netIncome" stackedLowerBarKey="revenue" lineKey="operatingIncome"></ComposedGraph>
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
