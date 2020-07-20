import React, { Component } from 'react';
import { Input, Button, Row, Col, AutoComplete } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import logo from './aoi_logo.png';

class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            searchValue: '',
            options: []
        };

        this.onSearch = this.onSearch.bind(this);
        this.onChange = this.onChange.bind(this);
        this.setOptions = this.setOptions.bind(this);
        this.setSearchValue = this.setSearchValue.bind(this);
    }

    mockVal(str, repeat=1) {
        return { value: str.repeat(repeat) };
    }

    onSelect(data) {
        console.log('onSelect', data);
    }

    onSearch(data) {
        this.setOptions(
            !data ? [] : [this.mockVal(data), this.mockVal(data, 2), this.mockVal(data, 3)]
        )
        console.log("Crashed not!");
    }

    onChange(data) {
        this.setSearchValue(data);
    }

    setOptions(newOptions) {
        console.log(newOptions);
        console.log("CRASHED!")
        this.setState((state, props) => ({
            options: newOptions
        }));
    }

    setSearchValue(value) {
        this.setState((state, props) => ({
            searchValue: value
        }));
    }



    render() {
        return (
            <div>
                <Row style={{ "paddingTop": "20px" }} type="flex" justify="end" align="bottom">
                    <Col pull={1}>
                        <Button type="primary">Sign in</Button>
                    </Col>
                </Row>
                <Row justify="center" align="top" style={{ "paddingTop": "100px" }}>
                    <img src={logo} className="AOI-logo" alt="logo" />
                </Row>
                <Row justify="center" align="top" style={{ "paddingTop": "20px" }}>
                    <Col span={10}>
                        <AutoComplete 
                            options={this.state.options} 
                            onSelect={this.onSelect} 
                            onSearch={this.onSearch}
                            onChange={this.onChange}
                            style={{
                                width: "100%"
                            }}>
                        <Input addonBefore={<SearchOutlined />} placeholder="Search for companies using their ticker " />
                        </AutoComplete>
                    </Col>
                </Row>
                <div style={{ "paddingTop": "20px" }}>
                    <Button type="default">Screeners</Button>
                </div>
            </div>
        );
    }
}

export default HomePage;