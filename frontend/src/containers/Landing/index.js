import React, { Component } from 'react';
import {connect} from 'react-redux';

import './style.css';
import { getUsers, getProductsTypes, getProducts, buyProduct } from '../../redux/actions';
import { CircularProgress, Button, Container, GridList, Chip } from '@material-ui/core';

import ProductCard from '../../components/ProductCard'

class Home extends Component {
    state = {
        search: '', 
        filters: []
    }
    componentDidMount(){
        this.props.dispatch(getUsers())
        this.props.dispatch(getProductsTypes())
        this.props.dispatch(getProducts())
    }

    render(){
        const {status, products, productTypes, dispatch} = this.props;
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        console.log('==================asds==================');
        console.log(this.state.filters);
        console.log('====================================');
        return (
            <Container maxWidth="lg">
                <input type="text" palceholder="SEARCH" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} />
                {productTypes && productTypes.map((item) => {
                    let enabled = this.state.filters.indexOf(item.id) !== -1
                    let filters = this.state.filters.filter(i => i !== item.id)
                    console.log('====================================');
                    console.log(enabled);
                    console.log('====================================');
                    return(
                        <Chip label={item.name} color={enabled ? 'primary' : 'secondary'} onClick={()=> this.setState({ filters: enabled ? filters : [...this.state.filters, ...[item.id]] })} />
                    )
                })}
                <div className="list">
                    {status === 'FETCHING' && <CircularProgress /> }
                    {status !== 'FETCHING' && products.map((product, key) => {
                        if (this.state.search.length > 0 && product.name.toLowerCase().search(this.state.search) === -1) {
                            return null
                        }
                        if(this.state.filters.length > 0 && !this.state.filters.includes(product.rubro_id)) {
                            return null
                        }
                        return (
                            <ProductCard 
                                {...product} 
                                action={()=> dispatch(buyProduct(product))}
                                image={product.pictures ? product.pictures[0].src : null} 
                            />
                        )}
                    )}
                </div>
            </Container>
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
    users: state.users
})

export default connect(mapStateToProps)(Home);
