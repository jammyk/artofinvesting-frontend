import React, { Component } from 'react'
import { Anchor, Affix, Tooltip } from 'antd';
import '../../stylesheets/FixedSideNav.css';
import {
    StockOutlined,
    BarChartOutlined,
    FundOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
import {
    stockPriceSectionHREF,
    financialStatementsSectionHREF,
    metricsSectionHREF,
    sharesSectionHREF,
    financialStatements,
    metrics,
    shares,
    stockPrice,
    getBaseNameFromSectionHREF,
    getSectionHREFFromBaseName,
} from '../../constants/detailsSection';


const { Link } = Anchor;


export default class FixedSideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offSetTop: 0,
            collapsed: true,
            currentActiveAnchor: '',
            [stockPrice]: 'side-nav-item',
            [financialStatements]: 'side-nav-item',
            [metrics]: 'side-nav-item',
            [shares]: 'side-nav-item'
        };

        this.updateTopOffset = this.updateTopOffset.bind(this);
        this.anchorChange = this.anchorChange.bind(this);
    }

    handleClick = (e, link) => {
        e.preventDefault();
        console.log(link);
    }

    computeOffSetTop() {
        let currentWindowHeight = window.innerHeight;
        return (currentWindowHeight - 200) / 2;
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

    onSideNavItemClick(key) {
        let clickedNavId = key.currentTarget.getAttribute('id');
        let clickedSectionHref = getSectionHREFFromBaseName(clickedNavId);
        let el = document.querySelector(clickedSectionHref);
        if (el) {
            el.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            console.error('anchor not found');
        }
    }

    setSideItemActive(sectionHref) {
        let baseName = getBaseNameFromSectionHREF(sectionHref);
        let currentActiveAnchor = this.state.currentActiveAnchor;
        this.setState({
            currentActiveAnchor: baseName,
            [baseName]: 'side-nav-item-container-active',
            [currentActiveAnchor]: '',
        });
    }

    anchorChange(currentActiveLink) {
        this.setSideItemActive(currentActiveLink);
    }

    render() {
        return (
            <div >
                <Affix
                    offsetTop={this.state.offSetTop}
                >
                    <div className='side-nav-container'>
                        <Tooltip className='side-nav-item-description' title='Historic Stock Price' placement='right' trigger={['hover']} >
                            <div className={'side-nav-item-container ' + this.state.historicStockPrice} id={stockPrice} onClick={this.onSideNavItemClick}>
                                <StockOutlined className='side-nav-icons' />
                            </div>
                        </Tooltip>
                        <Tooltip className='side-nav-item-description' title='Financial Statements' placement='right' trigger={['hover', 'focus']}>
                            <div className={'side-nav-item-container ' + this.state.financialStatements} id={financialStatements} onClick={this.onSideNavItemClick}>
                                <BarChartOutlined className='side-nav-icons' />
                            </div>
                        </Tooltip>
                        <Tooltip className='side-nav-item-description' title='Metrics' placement='right' trigger={['hover', 'focus']}>
                            <div className={'side-nav-item-container ' + this.state.metrics} id={metrics} onClick={this.onSideNavItemClick}>
                                <FundOutlined className='side-nav-icons' />
                            </div>
                        </Tooltip>
                        <Tooltip className='side-nav-item-description' title='Share Outstanding' placement='right' trigger={['hover', 'focus']}>
                            <div className={'side-nav-item-container ' + this.state.shares} id={shares} onClick={this.onSideNavItemClick}>
                                <PieChartOutlined className='side-nav-icons' />
                            </div>
                        </Tooltip>
                    </div>
                </Affix>
                <Anchor
                    offsetTop={1000} // not sure why this works.. but it does?
                    onClick={this.handleClick}
                    bounds={5}
                    className='side-nav-anchor'
                    onChange={this.anchorChange}
                >
                    <Link href={stockPriceSectionHREF} />
                    <Link href={financialStatementsSectionHREF} />
                    <Link href={metricsSectionHREF} />
                    <Link href={sharesSectionHREF} />
                </Anchor>
            </div>
        )
    }
}
