import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Input, InputGroup, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row } from 'reactstrap'
import { connect } from 'react-redux'
import {bindActionCreators} from "redux";
import * as action from "../redux/actions/bookListActions"

class NavigationBar extends Component {

    searchBook(event){
        var bookName = event.target.value;
        console.log(bookName);
        this.props.dispatch(this.props.searchBook(bookName));
        this.props.navigate("search");
    }


    render() {
        return (
            <Navbar color="black">
                <Nav>

                    <NavbarBrand className='brand-link' href="/">
                        KitapÖzetim
                    </NavbarBrand>


                    {this.props.categories.map(category => (
                        <NavItem>
                            <NavLink>
                                <Link className='link' to={category.link}>{category.name}</Link>
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>

                <Input className='search-bar' style={{ width: "15%" }}
                    id="exampleSearch"
                    name="search"
                    placeholder="Kitap Ara..."
                    type="search"
                    onChange={(event) => this.searchBook(event)}
                />
            </Navbar>
        )
    }
}


function mapStateToProps(state) {
    return {
        categories: state.bookCategoryReducer
    }
}

function mapDispatchToProps(dispatch)
{
    return {
        dispatch,
        searchBook : bindActionCreators(action.searchGivenBook, dispatch) 
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);