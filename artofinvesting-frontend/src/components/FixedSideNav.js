import React, { Component } from 'react'
import { Anchor } from 'antd';
const { Link } = Anchor;

export default class FixedSideNav extends Component {

    handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    }

  render() {
    return (
        <div className="fixedSideNav-container" style={{width: 200}}>
            <Anchor className="fixed-side-nav_anchor" onClick={this.handleClick} offsetTop={300} bounds={2} style={{justifyContent: "start", display: "flex"}}>
                <Link href="#first-paragraph" title="First Paragraph"/>
                <Link href="#financial-statements" title="Financial Statements"/>
                <Link href="#metrics" title="Metrics"/>
                <Link href="#growth" title="Growth"/>
                <Link href="#margin" title="Margin"/>
                <Link href="#profitability" title="Profitability"/>
                <Link href="#key-holders" title="Key Holders"/>
            </Anchor>
        </div>
    )
  }
}