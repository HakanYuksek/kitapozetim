import React, { Component } from 'react'
import { Card, CardBody, CardGroup, CardImg, CardTitle, Col } from 'reactstrap'

export default class BookList extends Component {
    render() {
        return (
            <CardGroup>
                {this.props.bookList.map((book, index) => (
                    <Col className='card-col'>
                        <Card key={index} className='summary-card me-1 ms-1'>
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

            </CardGroup>
        )
    }
}
