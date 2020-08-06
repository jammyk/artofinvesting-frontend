import React, { Component } from 'react';
import logo from '../images/aoi_logo.png';
import { Row, Col } from 'antd';
import CompanySearchBar from './CompanySearchBar';
import { Link } from 'react-router-dom';
import { Select } from 'antd';


const { Option } = Select;

class ArtistSearch extends Component {

    handleChange(value) {
        console.log(`selected ${value}`);
    }

    render() {
        return (
            <div>
                <Row>
                    <Link to="/"><img src={logo} alt="logo" style={{ width: "100px", height: "100px", paddingTop: "1%", paddingLeft: "1%" }} /></Link>
                </Row>
                <Row justify="center" align="top" style={{ paddingTop: "200px"}}>
                    <Col span={8}>
                        <CompanySearchBar message="Name of an artist to search"/>
                    </Col>
                    <Col>
                        <Select defaultValue="13F" style={{ width: 100 }} onChange={this.handleChange}>
                            <Option value="jack">13F</Option>
                            <Option value="lucy">2</Option>
                            <Option value="disabled">3</Option>
                            <Option value="Yiminghe">4</Option>
                        </Select>
                    </Col>
                    
                </Row>
            </div>
        );
    }
}

export default ArtistSearch;