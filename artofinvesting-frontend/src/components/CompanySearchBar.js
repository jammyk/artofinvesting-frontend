import React, { Component } from 'react'
import { Input, AutoComplete} from 'antd';
import { SearchOutlined } from '@ant-design/icons';

export default class CompanySearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            searchValue: '',
            options: [],
        }
    }

    mockVal(str, repeat=1) {
        return { value: str.repeat(repeat) };
    }

    onSelect = (selected) => {
       console.log('onSelect', selected); 
    }  

    onSearch = (searchValue) => {
        this.setOptions(
            !searchValue ? [] : [this.mockVal(searchValue), this.mockVal(searchValue, 2), this.mockVal(searchValue, 3)]
        )
    }

    onChange = (newSearchValue) => {
        this.setState(() => ({
            searchValue: newSearchValue
        }));
    }

    setOptions = (newOptions) => {
        this.setState(() => ({
            options: newOptions
        }));
    }

    setSearchValue = (searchVal) => {
        this.setState(() => ({
            searchValue: searchVal
        }));
    } 


    render() {
        return (
            <div>
                <AutoComplete
                    options={this.state.options}
                    onSelect={this.onSelect}
                    onSearch={this.onSearch}
                    onChange={this.onChange}
                    style={{
                        width: "100%"
                    }}>
                    <Input addonBefore={<SearchOutlined />} placeholder={this.props.message} />
                </AutoComplete>
            </div>
        )
    }
}
