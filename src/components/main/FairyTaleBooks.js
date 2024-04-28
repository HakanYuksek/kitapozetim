import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap'
import BookList from './BookList'

class FairyTaleBooks extends Component {

    render() {
        return (
            <div>
                <h4 className='header-title mb-4 mb-4'>Çocuk Kitapları</h4>
                <BookList bookList={this.props.childBookList}></BookList>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        childBookList: state.childBookListReducer
    }
}

export default connect(mapStateToProps)(FairyTaleBooks);