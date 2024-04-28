import React, { Component } from 'react'
import { connect } from 'react-redux'
import BookList from './BookList'


class Search extends Component {

    render() {
        return (
            <div>
                <h4 className='header-title mb-4 mb-4'>Arama Sonuçları</h4>

                <BookList bookList={this.props.bookList}></BookList>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        bookList: state.searchBookReducer
    }
}


export default connect(mapStateToProps)(Search);

