import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="nav-search" id="nav-search">
                <form className="form-search">
                    <span className="input-icon">
                        <input type="text" placeholder="Search ..." className="nav-search-input" id="nav-search-input" />
                        <i className="icon-search nav-search-icon"></i>
                    </span>
                </form>
            </div>
        );
    }
}
export default Search;