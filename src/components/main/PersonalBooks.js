import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap'
import BookList from './BookList'

class PersonalBooks extends Component {
    render() {
        return (
            <div>
                <h4 className='header-title mb-4 mb-4'>Kişisel Gelişim Kitapları</h4>
                <BookList bookList={this.props.personalBookList}></BookList>

            </div>
        )
    }
}


function mapStateToProps(state) {
    return {
        personalBookList: state.personalBookListReducer
    }
}

export default connect(mapStateToProps)(PersonalBooks);