import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import { Card, CardBody, CardGroup, CardImg, CardTitle, Col } from 'reactstrap'
import {bindActionCreators} from "redux";
import { connect } from 'react-redux';
import * as action from "../../redux/actions/bookListActions"

class BookList extends Component {

    constructor(props)
    {
        super(props);

        this.state = {
            openDetails : false
        }
    }

    openBookDetails(book)
    {
        this.state.openDetails = true;
        this.props.dispatch(this.props.showBookDetails(book));

        localStorage.setItem("name", book.name);
        localStorage.setItem("img", book.img);
        localStorage.setItem("summary", book.summary);

        console.log(book.name);

        this.forceUpdate();

    }

    render() {
        return (
            <CardGroup>
                {this.props.bookList.map((book, index) => (
                    <Col className='card-col'>
                        <Card key={index} className='summary-card me-1 ms-1' onClick={() => this.openBookDetails(book)}>
                            <CardImg
                                src={process.env.PUBLIC_URL + book.img}
                                height="200px"
                            />
                            <CardBody>
                                <CardTitle tag="h4">
                                    {book.name}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                ))}
                {this.state.openDetails && <Navigate to = "/book-details" replace = {true}></Navigate>}
            </CardGroup>
        )
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        dispatch,
        showBookDetails : bindActionCreators(action.showBookDetails, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(BookList);