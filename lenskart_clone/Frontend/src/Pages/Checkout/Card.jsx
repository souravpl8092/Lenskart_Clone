import { Box, Button, Flex, Image, Input } from '@chakra-ui/react';
import React from 'react';
import CartNavbar from "../Cart/CartNavbar"
import CartItem from './CartItem';
import '../Payment/Pay.css'
import { Navigate, useNavigate } from 'react-router-dom';
const Card = () => {

    let Navigate=useNavigate();
  return (
<>
<CartNavbar/>


    <div className='card'>
    <div>
        
   

    <Box  w="700px" ml="180px" h="600px" boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}>
        <Box bg="#00bac6" color={"white"} fontWeight="650" p="8px 0px 8px 8px " >
            PAYMENT OPTION
        </Box>
        <Box display={"flex"} >
            <Box  w="200px">
                <Box p="16px 0px 16px 16px" fontWeight={"500"}    >
                    Credit/Debit Card
                </Box>
                <Box p="16px 0px 16px 16px"  fontWeight={"500"}    >
                    BHIM/UPI Phone Pe
                </Box>
                <Box p="16px 0px 16px 16px"  fontWeight={"500"}    >
                    Net Banking
                </Box>
                <Box p="16px 0px 16px 16px"  fontWeight={"500"}    >
                    UPI qr Code
                </Box>
                <Box p="16px 0px 16px 16px"  fontWeight={"500"}    >
                   Paytm
                </Box>


            </Box>
            <Box m="10px 10px 10px 10px ">
                <Flex justifyContent={"space-between"}>
                    <Box>100% Secure</Box>
                    <Image  ml="140px" h="22px" src='https://static5.lenskart.com/images/cust_mailer/Mar-03/CheckoutStrip.png'/>
                </Flex>
                <Input placeholder='Enter Card Number' h="30px"  m="20px 10px 10px 10px "/>

                <Flex  m="20px 0px ">
                    <Input placeholder='MM/YYYY' h="30px " mr="10px" ml="10px"/>
                    <Input h="30px" placeholder='CVV'/>
                </Flex>
                <Input placeholder='Cardholder Name' h="30px" m="20px 10px 20px 10px" w="490px"/>

                <Box display={"flex"} fontSize="11px" ml="20px" bg="#fdf6ed" w="180px" p="5px 5px">
                    <Image w="15px" h="15px" mt="2px" src="https://static5.lenskart.com/images/cust_mailer/Mar-03/Info_SubmitPowerAlert.png"/>
                    (Submit Power in the Next Step)
                </Box>
                <Button fontSize={"13px"}
                ml="20px "
                mt="20px "
                mb="30px"
          bg="#3bb3a9"
          color={"white"}
          borderRadius="4px"
          p="12px 23px 12px 23px "
          _hover={{ backgroundColor: "#3bb3a9" }} onClick={()=>{

alert("Order succesfully placed")
Navigate("/")

          }}>PLACE ORDER</Button>

            </Box>

        </Box>
        <Box p="10px">
        Lenskart Assurance
        </Box>
        <Image  p="10px"src='https://static1.lenskart.com/media/desktop/img/all-assurance-offering.png'/>

    </Box>
    </div>


<CartItem/>

    </div>
    </>
  )
}

export default Card;