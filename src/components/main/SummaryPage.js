import React, { Component } from 'react'
import { Card, CardBody, CardGroup, CardHeader, CardImg, CardTitle } from 'reactstrap'
import classicImage from "../../static/img/classics.jpg"
import historyImage from "../../static/img/history2.jpg"
import fairyTaleImage from "../../static/img/fairyTale2.jpeg"

export default class SummaryPage extends Component {
    render() {
        return (
            <div>
                <h2 className="header-title center-align mb-4 mb-4">--Aradığınız Bir Dünya Kitap Özeti Burada--</h2>
                <hr></hr>
                <CardGroup>
                    <Card className='summary-card'>
                        <CardImg
                            className='me-2 ms-2'
                            alt="Klasik Kitaplar"
                            src={classicImage}
                            height="65%"
                            top
                        />
                        <CardBody>
                            <CardTitle tag="h3">
                                Klasikler
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='summary-card'>
                        <CardImg
                            className='me-2 ms-2'
                            alt="Tarih Kitapları"
                            src={historyImage}
                            height="65%"
                            top
                        />
                        <CardBody>
                            <CardTitle tag="h3">
                                Tarih
                            </CardTitle>
                        </CardBody>
                    </Card>
                    <Card className='summary-card'>
                        <CardImg
                            className='me-2 ms-2'
                            alt="Çocuk Kitapları"
                            src={fairyTaleImage}
                            height="65%"
                            top
                        />
                        <CardBody>
                            <CardTitle tag="h3">
                                Çocuk Kitapları
                            </CardTitle>
                        </CardBody>
                    </Card>


                </CardGroup>


            </div>
        )
    }
}
