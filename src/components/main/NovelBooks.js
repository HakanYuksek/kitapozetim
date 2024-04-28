import React, { Component } from 'react'
import { novelBookList } from '../../redux/initialStates'
import { connect } from 'react-redux'
import { Card, CardGroup, CardBody, CardTitle, CardImg } from 'reactstrap';

class NovelBooks extends Component {
  render() {
    return (
      <div>
                <h4 className='header-title mb-4 mb-4'>Romanlar</h4>

                <CardGroup>
                    {this.props.novelBookList.map((book, index) => (
                        <Card key={index} className='summary-card me-1 ms-1' hidden={this.props.maxLimit && this.props.maxLimit <= index}>
                            <CardImg
                                src={process.env.PUBLIC_URL + book.img}
                                height="55%"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h4">
                                    {book.name}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    ))}

                </CardGroup>

      </div>
    )
  }
}

function mapStateToProps(state)
{
    return {
        novelBookList : state.novelBookListReducer
    };
}

export default connect(mapStateToProps)(NovelBooks);
