import React, { Component } from 'react'
import PropTypes from 'prop-types'
import  Container  from "react-bootstrap/Container";




export default class Layout extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div>
                <Container>
                    {this.props.children}
                </Container>
                
            </div>
        )
    }
}
