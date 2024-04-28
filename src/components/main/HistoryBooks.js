import React, { Component } from 'react'
import { historyBookList } from '../../redux/initialStates';
import { connect } from 'react-redux'
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap'
import BookList from './BookList';

class HistoryBooks extends Component {
  render() {
    return (
      <div>
        <h4 className='header-title mb-4 mb-4'>Tarih Kitapları</h4>
        <BookList bookList={this.props.historyBookList}></BookList>
      </div>
    )
  }
}

function mapStateToProps(state)
{
    return {
        historyBookList : state.historyBookListReducer
    };
}

export default connect(mapStateToProps)(HistoryBooks);
