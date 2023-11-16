// import React, { useState, useEffect } from 'react';
// import { getAllProducts, deleteProductByID } from '../api/httprequest.js';
// import { Button, ButtonGroup } from '@chakra-ui/react'
// import {
//     Table,
//     Thead,
//     Tbody,
//     Tfoot,
//     Tr,
//     Th,
//     Td,
//     TableCaption,
//     TableContainer,
//   } from '@chakra-ui/react'





// function Products() {
//     const [products, setProducts] = useState([]);

//     useEffect(()=>{
//         getAllProducts().then((res)=>{
//             setProducts(res)
//         })
//     },[])


    


//   return (
//     <>
// <TableContainer>
//         <Table variant="striped" colorScheme="teal">
//           <Thead>
//             <Tr>
//               <Th>Id</Th>
//               <Th>Name</Th>
//               <Th>Price</Th>
//               <Th>Stock Quantity</Th>
//             </Tr>
//           </Thead>
//           {products && products.map((products, idx)=>{
//          return <Tbody key={idx}>
//             <Tr>
//               <Td>{products.id}</Td>
//               <Td>{products.name}</Td>
//               <Td>{products.unitPrice}</Td>
//               <Td>{products.unitsInStock}</Td>
//               <Td>
                
//             <Button colorScheme='blue'>Edit</Button>
//               <Button onClick={()=>{
//                 deleteProductByID(products.id)
//                 setProducts()
//               }} colorScheme='red'>Delete</Button>
//               </Td>

//             </Tr>
//           </Tbody>
          

          
//         })}
//         </Table>
//       </TableContainer>

      
//     </>
//   );
// }

// export default Products;
