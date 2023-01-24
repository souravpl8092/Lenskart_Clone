import { Box, Flex, Text, Image,Divider } from '@chakra-ui/react'
import { useState, useEffect } from 'react';

export default function CartItem() {
    const [paymentItem, setPaymentitem] = useState([])

    const fetchitems = async () => {

        const res = await fetch('https://easy-pink-bull-shoe.cyclic.app/Cart')
        const data = await res.json();

        console.log(data)
        setPaymentitem(data);
    }
    useEffect(() => {
        fetchitems()

    }, [])

    let total=0;


    return (
        <>
            <Flex flexDirection='column' w='350px'  mt='10px'>
                <Box display='flex' flexDirection='row' justifyContent='space-between' 
                bg='#4B4C51' color='#fff'>
                <Text ml='5px'>Popular items :</Text>
                <Text mr='5px'>Item : {paymentItem.length}</Text>
                </Box>
                <Box className='itemPart' border='1px solid #ccc' >

                    {paymentItem.map(el => {
                        {total+=parseInt(el.price)*(el.quntity+1)}
                        return (

                            <Box >
                            
                            <Box className='item_container' display='flex' flexDirection='row' gap={5}
                                alignItems='center' m='auto' mb='20px' p={3}>
                                <Box >
                                    <Image w='150px' src={el.imageTsrc} />
                                </Box>
                                <Box>
                                    <Text  >{"Qty:" + (parseInt(el.quntity) + 1)}</Text>
                                </Box>
                                <Box >
                                    <Text display="flex" gap={6}>
                                        <Text color='#9999b3' fontWeight='500'>
                                            <s>{'₹' + el.mPrice}</s>
                                        </Text>
                                        <Text color='#000042' fontWeight='700'
                                        >{'₹' + el.price}</Text>
                                    </Text>
                                </Box>
                            </Box>
                            <Divider h={2} mb={2}/> 
                            </Box>
                        )
                    })}
                    
                    
                </Box>
                
            </Flex>
        </>
    )
}
