import React, { useState, useEffect } from 'react';
import { getAllProducts, deleteProductByID } from '../api/httprequest.js';
import { Button, ButtonGroup } from '@chakra-ui/react'
import Product from './Product.jsx';
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
  } from '@chakra-ui/react'





function Products() {


  return (
    <>
<TableContainer>
        <Table variant="striped" colorScheme="teal">
          <Thead>
            <Tr>
              <Th>Id</Th>
              <Th>Name</Th>
              <Th>Price</Th>
              <Th>Stock Quantity</Th>
            </Tr>
          </Thead>

          <Product/>

        </Table>
      </TableContainer>

      
    </>
  );
}

export default Products;
