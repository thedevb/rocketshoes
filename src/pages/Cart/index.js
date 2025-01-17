import React from 'react';

import { MdRemoveCircleOutline, MdAddCircleOutline, MdDelete } from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg"/>
            </td>
            <td>
              <strong>Tenis muito massa</strong>
              <span>R$383,33</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159C1" />
                </button>
                <input type="number" readOnly value={1} />
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7159C1" />
                </button>
              </div>
            </td>
            <td>
              <strong>R$32,43</strong>
            </td>
            <td>
              <button type="button" >
                <MdDelete size={20} color="#7159C1" />

              </button>
            </td>
          </tr>
        </tbody>
      </ProductTable>

      <footer>
        <button type="button">Finalizar pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$131832,232</strong>
        </Total>
      </footer>
    </Container>
  )
}
