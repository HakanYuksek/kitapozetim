import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button, Col, Input, InputGroup, Nav, NavItem, NavLink, Navbar, NavbarBrand, Row } from 'reactstrap'
import bookCategoryReducer from '../../redux/reducers/bookCategoryReducer'
import * as actionTypes from "../../redux/actions/actionTypes"
import { connect } from 'react-redux'
import searchIcon from "../../static/img/search-icon.png"
import { FaSearch } from 'react-icons/fa'

class NavigationBar extends Component {
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

export default connect(mapStateToProps)(NavigationBar);