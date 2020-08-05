import React, { Component } from 'react'
import { Anchor, Menu, Affix, Tooltip } from 'antd';
import '../../stylesheets/FixedSideNav.css';
import {
    StockOutlined,
    BarChartOutlined,
    FundOutlined,
    PieChartOutlined,
} from '@ant-design/icons';


const { Link } = Anchor;
const { Item } = Menu;


export default class FixedSideNav extends Component {

    constructor(props) {
        super(props);
        this.state = {
            offSetTop: 0,
            collapsed: true,
            financialStatements: 'side-nav-item',
            metrics: 'side-nav-item',
            shares: 'side-nav-item',
            historicStockPrice: 'side-nav-item',
            sideNavClasses: [
                {
                    name: 'historicStockPrice'
                },
                {
                    name: 'financialStatements'
                },
                {
                    name: 'metrics'
                },
                {
                    name: 'shares'
                },
            ]


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
        return (currentWindowHeight - 100) / 2;
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

    onMenuItemClick(e) {
        let el = document.querySelector("#" + e.key); 
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    }

    setMenuItemActive(menuItemKey) {
        for (let menuItems of this.state.sideNavClasses) {
            if ('#' + menuItems['name'] === menuItemKey) {
                this.setState({ [menuItems['name']]: 'side-nav-item-active ant-menu-item-active ant-tooltip-open' });
            } else {
                this.setState({ [menuItems['name']]: '' });
            }
        }
    }

    anchorChange(currentActiveLink) {
        this.setMenuItemActive(currentActiveLink);
    }

    render() {
        return (
            <div > 

                <Affix
                    offsetTop={250}

                >
                    <Menu
                        mode='inline'
                        inlineCollapsed={this.state.collapsed}
                        onClick={this.onMenuItemClick}
                        onSelect={this.onMenuItemSelect}
                        selectable={false}
                    >
                        <Item
                            key="historicStockPrice"
                            icon={<StockOutlined style={{ fontSize: '24px' }} />}
                            className={this.state.historicStockPrice}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            <Tooltip title='Historic Stock Prices' color={'purple'} />
                            Historic Stock Prices
                        </Item>
                        <div className='menu-item-padding' />
                        <Item
                            key="financialStatements"
                            icon={<BarChartOutlined style={{ fontSize: '24px' }} />}
                            className={this.state.financialStatements}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            Financial Statements
                        </Item>
                        <div className='menu-item-padding' />
                        <Item
                            key="metrics"
                            icon={<FundOutlined style={{ fontSize: '24px' }} />}
                            className={this.state.metrics}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            Metrics
                        </Item>
                        <div className='menu-item-padding' />
                        <Item
                            key="shares"
                            icon={<PieChartOutlined style={{ fontSize: '24px' }} />}
                            className={this.state.shares}
                            style={{ backgroundColor: 'transparent' }}
                        >
                            Shares Outstanding
                        </Item>
                    </Menu>
                </Affix>
                <Anchor
                    className="fixed-side-nav_anchor"
                    onClick={this.handleClick}
                    offsetTop={this.state.offSetTop}
                    bounds={2}
                    className='side-nav-anchor'
                    onChange={this.anchorChange}
                >
                    <Link href="#historicStockPrice" />
                    <Link href="#financialStatements" />
                    <Link href="#metrics" />
                    <Link href="#shares" />
                </Anchor>
            </div>
        )
    }
}