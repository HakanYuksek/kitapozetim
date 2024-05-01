import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Card, CardBody, CardGroup, CardImg, CardText, CardTitle, Col } from 'reactstrap'
import { selectedBook } from '../../redux/initialStates';

class BookDetails extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedBook: ""
        }
    }

    componentDidMount() {
        var book = this.props.book;

        book.name = localStorage.getItem("name");
        book.img = localStorage.getItem("img");
        book.summary = localStorage.getItem("summary");

        this.state.selectedBook = book;

        this.readSummary();

        this.forceUpdate();
    }

    readSummary = () => {
        fetch(process.env.PUBLIC_URL + this.state.selectedBook.summary)
            .then((r) => r.text())
            .then(text => {
                this.state.selectedBook.summary = text;
                this.forceUpdate();
            });

        return;
    }

    render() {
        return (
            <div>

                <h4 className='header-title mb-4 mb-4'>Kitap Özeti</h4>

                <CardGroup>
                    <Col className='card-col'>
                        <Card className='summary-card me-1 ms-1'>
                            <CardImg
                                src={process.env.PUBLIC_URL + this.state.selectedBook.img}
                                height="200px"
                            />
                            <CardBody>
                                <CardTitle tag="h4">
                                    {this.state.selectedBook.name}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Col>

                    <Card className='summary-card-text me-1 ms-1'>
                        <CardBody>
                            <CardText>
                                {this.state.selectedBook.summary}
                            </CardText>
                        </CardBody>
                    </Card>
                </CardGroup>

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        book: state.openBookDetailsReducer
    }
}

export default connect(mapStateToProps)(BookDetails);