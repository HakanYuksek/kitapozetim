import React, { Component } from 'react'
import { bindActionCreators } from "redux"
import * as action from "../../redux/actions/bookListActions"
import { connect } from 'react-redux'
import bookListForCategoryReducer from '../../redux/reducers/bookListForCategoryReducer'
import * as initial from "../../redux/initialStates"
import { Card, CardBody, CardGroup, CardImg, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

class ClassicBooks extends Component {

    render() {
        return (
            <div>
                <h4 className='header-title mb-4 mb-4'>Klasik Kitaplar</h4>

                <CardGroup>
                    {this.props.classicBookList.map((book, index) => (
                            <Card key={index} className='summary-card me-1 ms-1' hidden = {this.props.maxLimit && this.props.maxLimit <= index}>
                                <CardImg
                                    className=''
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

function mapStateToProps(state) {
    return {
        classicBookList: state.classicBookListReducer
    }
}


export default connect(mapStateToProps)(ClassicBooks);