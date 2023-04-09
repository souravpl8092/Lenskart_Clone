import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "../../Components/Pagination";
import Navbar from "./Navbar";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Heading,
  Button,
  useToast,
  Text,
  Grid,
  GridItem,
  Input,
  Select
} from "@chakra-ui/react";

const Productlist = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");
  const [gender, setGender] = useState("");
  const [page, setPage] = useState(0);
  const [shape, setShape] = useState("");
  const [style, setStyle] = useState("");
  const [productref, setProductref] = useState("");
  const toast = useToast();

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(
        `https://harlequin-fawn-tutu.cyclic.app/product?sort=${sort}&productRefLink=${productref}&gender=${gender}&productType=${filter}&shape=${shape}&style=${style}&page=${page}`
      );
      const postData = await response.json();
      setData(postData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [sort, filter, page, gender, shape, style, productref]);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `https://harlequin-fawn-tutu.cyclic.app/product/${id}`,
        {
          method: "DELETE"
        }
      );
      if (response.status === 200) {
        fetchData();

        toast({
          title: "Product Deleted",
          description: "Product Deleted Successfully.",
          status: "success",
          duration: 2000,
          isClosable: true
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box bg="gray.200" minH="710px">
      <Navbar />
      <br />
      <Grid
        templateColumns={{
          lg: "30% 10% 10% 10% 15% 15%",
          md: "30% 10% 10% 10% 15% 15%",
          sm: "repeat(1, 1fr)",
          base: "repeat(1, 1fr)"
        }}
        justifyContent="space-between"
        w="95%"
        m="auto"
        gap="2"
      >
        <GridItem>
          <Input
            size="lg"
            type="search"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
            borderRadius="3xl"
            placeholder="Search by name"
            value={productref}
            onChange={(e) => setProductref(e.target.value)}
          />
        </GridItem>
        <GridItem>
          <Select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            size="lg"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
          >
            <option value="">All Glasses</option>
            <option value="sunglasses">Sun Glasses</option>
            <option value="eyeglasses">Eye Glasses</option>
          </Select>
        </GridItem>
        <GridItem>
          <Select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            size="lg"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
          >
            <option value="">For all Gender</option>
            <option value="Men">Men</option>
            <option value="Women">Women</option>
            <option value="Kid">Kid</option>
          </Select>
        </GridItem>
        <GridItem>
          <Select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            size="lg"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
          >
            <option value="">Sort By Price</option>
            <option value="lowtohigh">Low to High</option>
            <option value="hightolow">High to Low</option>
          </Select>
        </GridItem>
        <GridItem>
          <Select
            placeholder="Choose Frame Shape"
            onChange={(e) => setShape(e.target.value)}
            value={shape}
            size="lg"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
          >
            <option value="Rectangle">Rectangle</option>
            <option value="Round">Round</option>
            <option value="Wayfarer">Wayfarer</option>
            <option value="Butterfly">Butterfly</option>
            <option value="Aviator">Aviator</option>
            <option value="Wrapround">Wrap Round</option>
            <option value="Cateye">Cateye</option>
            <option value="Hexagon">Hexagon</option>
            <option value="Square">Square</option>
          </Select>
        </GridItem>
        <GridItem>
          <Select
            placeholder="Choose Frame Types"
            onChange={(e) => setStyle(e.target.value)}
            value={style}
            size="lg"
            fontSize="16px"
            h="40px"
            bg="whiteAlpha.900"
          >
            <option value="Tinted">Tinted</option>
            <option value="FullFrame">FullFrame</option>
            <option value="Mirror">Mirror</option>
          </Select>
        </GridItem>
      </Grid>
      <br />
      <br />
      {isLoading ? (
        <Heading
          as="h1"
          fontSize="4xl"
          fontFamily="cursive"
          textAlign="center"
          minH="500px"
        >
          Loading...
        </Heading>
      ) : data.length === 0 ? (
        <Heading
          as="h1"
          fontSize="4xl"
          color="gray"
          textAlign="center"
          minH="540px"
        >
          No Data found
        </Heading>
      ) : (
        <Box>
          <Text
            w="95%"
            m="auto"
            fontSize={{ lg: "2xl", sm: "xl", base: "xl" }}
            fontWeight="bold"
            color="whiteAlpha.900"
            bg="#329c92"
            p="2"
          >
            Product List
          </Text>
          <TableContainer w="95%" m="auto" bg="whiteAlpha.900">
            <Table variant="striped" colorScheme="teal">
              <Thead>
                <Tr>
                  <Th fontSize="15px">Edit</Th>
                  <Th fontSize="15px">Delete</Th>

                  <Th fontSize="15px">Name</Th>
                  <Th fontSize="15px">Shape</Th>
                  <Th fontSize="15px">Colors</Th>
                  <Th fontSize="15px">Gender</Th>
                  <Th fontSize="15px">Style</Th>
                  <Th fontSize="15px">Dimension</Th>
                  <Th fontSize="15px">Product Type</Th>
                  <Th fontSize="15px">Orginal Price</Th>
                  <Th fontSize="15px">Discounted Price</Th>
                  <Th fontSize="15px">Rating</Th>
                  <Th fontSize="15px">image Url</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.map((el, i) => (
                  <Tr key={i}>
                    <Td>
                      <Button
                        colorScheme="blue"
                        fontSize="15px"
                        onClick={() => navigate(`/editproduct/${el._id}`)}
                      >
                        Edit
                      </Button>
                    </Td>
                    <Td>
                      <Button
                        fontSize="15px"
                        colorScheme="red"
                        onClick={() => handleDelete(el._id)}
                      >
                        Delete
                      </Button>
                    </Td>

                    <Td fontSize="15px" textTransform="capitalize">
                      {el.productRefLink}
                    </Td>
                    <Td fontSize="15px">{el.shape}</Td>
                    <Td fontSize="15px">{el.colors}</Td>
                    <Td fontSize="15px">{el.gender}</Td>
                    <Td fontSize="15px">{el.style}</Td>
                    <Td fontSize="15px">{el.dimension}</Td>
                    <Td fontSize="15px" textTransform="capitalize">
                      {el.productType}
                    </Td>
                    <Td fontSize="15px">₹ {el.mPrice}</Td>
                    <Td fontSize="15px">₹ {el.price}</Td>
                    <Td fontSize="15px">{el.rating}</Td>
                    <Td fontSize="15px">{el.imageTsrc}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Box>
      )}
      <br />
      {data.length !== 0 && (
        <Pagination
          current={page}
          onChange={(value) => setPage(value)}
          totalPage={data.length < 0 ? true : false}
        />
      )}
      <br />
      <br />
    </Box>
  );
};

export default Productlist;
