import React, { Component } from 'react'
import { Card, CardBody, CardGroup, CardHeader, CardImg, CardTitle, CarouselItem } from 'reactstrap'
import classicImage from "../../static/img/classics.jpg"
import historyImage from "../../static/img/history2.jpg"
import fairyTaleImage from "../../static/img/fairyTale2.jpeg"
import HistoryBooks from './HistoryBooks'
import ClassicBooks from './ClassicBooks'
import PersonalBooks from './PersonalBooks'
import FairyTaleBooks from './FairyTaleBooks'
import MangaBooks from './MangaBooks'
import NovelBooks from './NovelBooks'
import { Link } from 'react-router-dom'
import * as initialState from "../../redux/initialStates"

export default class SummaryPage extends Component {
    render() {
        return (
            <div>
                <h2 className="header-title center-align mb-4 mb-4">--Aradığınız Bir Dünya Kitap Özeti Burada--</h2>
                <hr></hr>
                <CardGroup>
                    <Link to="classic" className='ms-4 link'>

                        <Card className='summary-card'>
                            <CardImg
                                alt={initialState.ClassicBooks}
                                src={classicImage}
                                height="64%"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h3">
                                    {initialState.ClassicBooks}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                    <Link to="history" className='ms-2 link'>
                        <Card className='summary-card'>
                            <CardImg
                                className=''
                                alt={initialState.HistoryBooks}
                                src={historyImage}
                                height="65%"
                                top
                            />
                            <CardBody>
                                <CardTitle tag="h3">
                                    {initialState.HistoryBooks}
                                </CardTitle>
                            </CardBody>
                        </Card>
                    </Link>
                    <Link to="child" className='ms-2 link' >
                        <Card className='summary-card'>
                            <CardImg
                                alt={initialState.ChildBooks}
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
                    </Link>
                </CardGroup>

                <FairyTaleBooks maxLimit = "5"></FairyTaleBooks>
                <ClassicBooks maxLimit = "5"></ClassicBooks>
                <PersonalBooks maxLimit = "5"></PersonalBooks>
                <MangaBooks maxLimit = "5"></MangaBooks>
                <NovelBooks maxLimit = "5"></NovelBooks>
                <HistoryBooks maxLimit = "5"></HistoryBooks>
            </div>
        )
    }
}
