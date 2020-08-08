import React, { Component } from 'react';
import { Row, Col } from 'antd';
import CompanySearchBar from './CompanySearchBar';
import { Select } from 'antd';
import NavBar from './navigation/NavBar';


const { Option } = Select;

class ArtistSearch extends Component {

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div>
                <Row>
                    <Col span={24}>
                        <NavBar />
                    </Col>
                </Row>
                <Row justify="center" align="bottom" style={{ paddingTop: "200px" }}>
                    <h1>Artist Search</h1>
                </Row>
                <Row justify="center" align="top" style={{ paddingTop: "20px"}}>
                    <Col span={10}>
                        <CompanySearchBar message="Name of an artist to search"/>
                    </Col>
                    {/* <Col>
                        <Select defaultValue="13F" style={{ width: 100 }} onChange={this.handleChange}>
                            <Option value="jack">13F</Option>
                            <Option value="lucy">2</Option>
                            <Option value="disabled">3</Option>
                            <Option value="Yiminghe">4</Option>
                        </Select>
                    </Col> */}
                    
                </Row>
            </div>
        );
    }
}

export default ArtistSearch;