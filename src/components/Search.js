import React, { Component } from 'react'

export default class Search extends Component {
    state = {
        value: '',
    }
    onSearchChange = e => {
        const newvalue = e.target.value;
        this.setState({ value: newvalue });
    }

    onSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.state.value)
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <form onSubmit={this.onSubmit}>
                        <div className="input-group mb-4">
                            <input className='form-control' value={this.state.value}
                                onChange={this.onSearchChange} type="text" placeholder="Enter Search Keyword" />
                            <div className="input-group-append">
                                <button type="submit" className="form-control btn btn-danger">Search</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
