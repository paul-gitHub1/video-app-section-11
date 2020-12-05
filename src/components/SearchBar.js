import React from 'react'

class SearchBar extends React.Component {

    state = { searchTerm: "" }

    handleInputChange = (event) => {
    this.setState({ searchTerm: event.target.value })
    }

    handleOnSubmit = (event) => {
    event.preventDefault();

this.props.onFormSubmit(this.state.searchTerm)

    }

    render() {
        return (
            <div className="search-bar ui segment">
                <form onSubmit={this.handleOnSubmit} className="ui form">
                    <div className="field">
                        <label>Video search</label>
                        <input
                            type="text"
                            value={this.state.searchTerm}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;