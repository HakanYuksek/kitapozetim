import React, { Component } from 'react'
import { novelBookList } from '../../redux/initialStates'
import { connect } from 'react-redux'
import { Card, CardGroup, CardBody, CardTitle, CardImg } from 'reactstrap';
import BookList from './BookList';

class NovelBooks extends Component {
    render() {
        return (
            <div>
                <h4 className='header-title mb-4 mb-4'>Romanlar</h4>
                <BookList bookList={this.props.novelBookList}></BookList>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        novelBookList: state.novelBookListReducer
    };
}

export default connect(mapStateToProps)(NovelBooks);
