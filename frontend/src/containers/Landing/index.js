import React, { Component } from 'react';
import {connect} from 'react-redux';

import './style.css';
import { getUsers, getProductsTypes, getProducts, buyProduct } from '../../redux/actions';
import { CircularProgress, Button } from '@material-ui/core';

class Home extends Component {
    state = {
        search: ''
    }
    componentDidMount(){
        this.props.dispatch(getUsers())
        this.props.dispatch(getProductsTypes())
        this.props.dispatch(getProducts())
    }

    render(){
        console.log('====================================');
        console.log(this.props);
        console.log('====================================');
        return (
            <div className="container">
                <input type="text" palceholder="SEARCH" value={this.state.search} onChange={(e) => this.setState({ search: e.target.value })} />
                {this.props.status === 'FETCHING' && <CircularProgress /> }

                {this.props.status !== 'FETCHING' && this.props.products.map((product, key) => {
                    if (this.state.search.length > 0 && product.name.toLowerCase().search(this.state.search) === -1) {
                        return null
                    }
                    return (
                        <div key={key} style={{display:'flex', border: '1px solid #cecece', justifyContent:'space-between', padding: 5}}>
                            <p>{product.name}</p>
                            <p>{product.price}$</p>
                            <Button onClick={()=> this.props.dispatch(buyProduct(product))}>Comprar</Button>
                        </div>
                    )
                }
                )}
            </div>    
        )
    }
}

const mapStateToProps = (state) => ({
    ...state,
    users: state.users
})

export default connect(mapStateToProps)(Home);
