import React, { Component } from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;

export default class FixedSideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            'offSetTop': 0
        };

        this.updateTopOffset = this.updateTopOffset.bind(this);
    }

    handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    }

    computeOffSetTop() {
        let currentWindowHeight = window.innerHeight;
        return currentWindowHeight / 2;
    }

    updateTopOffset() {
        let newTopOffset = this.computeOffSetTop();
        this.setState({ offSetTop: newTopOffset });
    }

    componentDidMount() {
        this.updateTopOffset();
        window.addEventListener('resize', this.updateTopOffset);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateTopOffset);
    }

    render() {
        return (
            <div className="fixedSideNav-container" style={{ display: "flex" , float: "left", }}>
                <Anchor
                    className="fixed-side-nav_anchor"
                    onClick={this.handleClick}
                    offsetTop={this.state.offSetTop}
                    bounds={2}
                    style={{ textAlign: "left", justifyContent: "start", display: "flex", backgroundColor: 'transparent' }}
                >
                    <Link href="#financial-statements" title="Financial Statements" />
                    <Link href="#metrics" title="Metrics" />
                    <Link href="#shares" title="Shares Outstanding" />
                </Anchor>
            </div>
        )
    }
}