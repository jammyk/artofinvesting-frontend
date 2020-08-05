import React, { Component } from 'react';
import { Table, Pagination } from 'antd';

function sortTicker(a, b) {
    var cmp = a.length > b.length ? b.length : a.length;
    var res = 0;
    for (var i = 0; i < cmp; i++) {
        if (a.charCodeAt(i) === b.charCodeAt(i)) continue;
        else {
            res = a.charCodeAt(i) - b.charCodeAt(i);
            break;
        }
    }
    if (res === 0) {
        if (a.length > b.length) return 1;
        else if (a.length < b.length) return -1;
        else return 0;
    }
    return res;
};

function sortQuarter(a, b) {
    var year_a = Number(a.substring(3));
    var year_b = Number(b.substring(3));
    if (year_a < year_b) return -1;
    if (year_a > year_b) return 1;
    if (a.charCodeAt(1) - b.charCodeAt(1) === 0) return 0;
    var res = a.charCodeAt(1) - b.charCodeAt(1) < 0 ? -1 : 1;
    return res;
};

function sortReport(a, b) {
    var num_a = Number(a.replaceAll("-", ""));
    var num_b = Number(b.replaceAll("-", ""));
    if (num_a < num_b) {
        return -1;
    } else if (num_a > num_b) {
        return 1;
    } else return 0;
};

function sortSource(a, b) {
    if (a === b) return 0;
    else return 1;
}

const columns = [
    {
      title: 'Stock',
      dataIndex: 'ticker',
      // specify the condition of filtering result
      // here is that finding the ticker started with `value`
      //onFilter: (value, record) => record.ticker.indexOf(value) === 0,
      sorter: (a, b) => sortTicker(a.ticker, b.ticker),
      //sortDirections: ['descend', 'ascend', 'descend'],
    },
    {
      title: 'Amnt of Shares Held',
      dataIndex: 'shares',
      sorter: (a, b) => a.shares - b.shares,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Market Val',
      dataIndex: 'marketValue',
      sorter: (a, b) => a.marketValue - b.marketValue,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: '% of Portfolio',
      dataIndex: 'portfolio',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.portfolio - b.portfolio,
      sortDirections: ['descend', 'ascend'],
    },
    {
        title: '% Ownership',
        dataIndex: 'ownership',
        sorter: (a, b) => a.ownership - b.ownership,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: '1st Qtr',
        dataIndex: 'first_quarter',
        sorter: (a, b) => sortQuarter(a.first_quarter, b.first_quarter),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Estimated Price',
        dataIndex: 'est_price',
        sorter: (a, b) => a.est_price - b.est_price,
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Reported',
        dataIndex: 'reported',
        sorter: (a, b) => sortReport(a.reported, b.reported),
        sortDirections: ['descend', 'ascend'],
    },
    {
        title: 'Source Data',
        dataIndex: 'source',
        sorter: (a, b) => sortSource(a.source, b.source),
        sortDirections: ['descend', 'ascend'],
    },
];
  
const data = [
    {
        key: '1',
        ticker: 'APPL',
        shares: 32,
        marketValue: 1000,
        portfolio: 10,
        ownership: 0.0005,
        first_quarter: 'Q3 2016',
        est_price: 500,
        reported: '2020-07-02',
        source: '13F',
    },
    {
        key: '2',
        ticker: 'TSLA',
        shares: 42,
        marketValue: 5000,
        portfolio: 0.2,
        ownership: 0.5,
        first_quarter: 'Q2 2016',
        est_price: 3400,
        reported: '2020-07-05',
        source: '13F',
    },
    {
        key: '3',
        ticker: 'FB',
        shares: 15,
        marketValue: 6000,
        portfolio: 20,
        ownership: 0.0001,
        first_quarter: 'Q1 2018',
        est_price: 200,
        reported: '2020-06-30',
        source: '13F',
    },
    {
        key: '4',
        ticker: 'AMZN',
        shares: 90,
        marketValue: 3000,
        portfolio: 0.5,
        ownership: 0.5,
        first_quarter: 'Q4 2012',
        est_price: 900,
        reported: '2020-03-02',
        source: '13F',
    },
];
  
  function onChange(pagination, filters, sorter, extra) {
    console.log('params', pagination, filters, sorter, extra);
}

class ArtistHoldings extends Component {
    render() {
        return (
            <Table columns={columns} dataSource={data} onChange={onChange} pagination={{defaultCurrent:6, total:500}} 
                scroll={{x:true}}
            />
        );
    }
}

export default ArtistHoldings;