import React from 'react'
import { Link } from 'react-router-dom';

import {MdShoppingBasket} from 'react-icons/md'

import logo from '../../assets/images/logo.svg'
import { Container, Cart } from './styles';


export default function Header(){
  return (
    <Container>
        <Link>
            <img src={logo} alt="rocketshoes" />
        </Link>
        <Cart to="/cart">
            <div>
                <strong>Meu carrinho</strong>
                <span>itens</span>
            </div>
            <MdShoppingBasket size={36} color="#FFF" />
        </Cart>
    </Container>
  )
}
