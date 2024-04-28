import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap'
import BookList from './BookList'

class ClassicBooks extends Component {

    render() {
        return (
            <div>
                <h4 className='header-title mb-4 mb-4'>Klasik Kitaplar</h4>
                <BookList bookList={this.props.classicBookList}></BookList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        classicBookList: state.classicBookListReducer
    }
}


export default connect(mapStateToProps)(ClassicBooks);