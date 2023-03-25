import { useState, useEffect, useContext } from "react";
import {
  Box,
  Button,
  FormControl,
  Heading,
  Input,
  Center,
  VStack,
  Flex,
  useToast,
  Select,
  Avatar,
  FormLabel
} from "@chakra-ui/react";
import { AuthContext } from "../../ContextApi/AuthContext";
import { useParams, useNavigate } from "react-router-dom";

const EditProduct = () => {
  const toast = useToast();
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [imageTsrc, setImageTsrc] = useState("");
  const [price, setPrice] = useState("");
  const [mPrice, setMPrice] = useState("");
  const [shape, setShape] = useState("");
  const [gender, setGender] = useState("");
  const [style, setStyle] = useState("");
  const [dimension, setDimension] = useState("");
  const [productType, setProductType] = useState("");
  const [colors, setColors] = useState("");
  const [rating, setRating] = useState("");
  const [userRated, setUserRated] = useState("");
  const [productId, setProductId] = useState("");
  const [quantity, setQuantity] = useState("");
  const [productRefLink, setProductRefLink] = useState("");
  const [loading, setLoading] = useState(false);
  const { setisAuth } = useContext(AuthContext);

  useEffect(() => {
    fetch(`https://harlequin-fawn-tutu.cyclic.app/product/${id}`, {
      headers: {
        Authorization: localStorage.getItem("token")
      }
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setImageTsrc(res.imageTsrc);
        setPrice(res.position);
        setMPrice(res.price);
        setName(res.name);
        setShape(res.shape);
        setGender(res.gender);
        setStyle(res.style);
        setDimension(res.dimension);
        setProductType(res.productType);
        setColors(res.colors);
        setRating(res.rating);
        setUserRated(res.userRated);
        setProductId(res.productId);
        setQuantity(res.quantity);
        setProductRefLink(res.productRefLink);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleEdit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const payload = {
        imageTsrc: imageTsrc,
        productRefLink: productRefLink,
        rating: rating,
        userRated: userRated,
        price: price,
        mPrice: mPrice,
        name: name,
        shape: shape,
        gender: gender,
        style: style,
        dimension: dimension,
        productType: productType,
        colors: colors,
        productId: productId,
        quantity: quantity,
        id: Math.round(Math.random() * Date.now() * 10000000)
      };

      const response = await fetch(
        `https://harlequin-fawn-tutu.cyclic.app/product/${id}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json"
          },
          body: JSON.stringify(payload)
        }
      );

      if (response.status === 204) {
        setLoading(false);
        console.log(200);
        toast({
          title: "Product Updated Successfully",
          status: "success",
          duration: 2000,
          isClosable: true,
          position: "bottom"
        });
        setTimeout(() => {
          navigate("/productlist");
        }, 1000);
      } else {
        setLoading(false);
        toast({
          title: "Product Updated Successfully",
          status: "success",
          duration: 1000,
          isClosable: true,
          position: "bottom"
        });
        setTimeout(() => {
          navigate(`/productlist`);
        }, 1000);
      }
    } catch (error) {
      setLoading(false);
      console.log("An error occurred. Please try again later.");
      toast({
        title: "An error occurred. Please try again",
        status: "error",
        duration: 1000,
        isClosable: true,
        position: "bottom"
      });
    }
  };

  const handleClick = () => {
    setisAuth(false);
    navigate("/");
    localStorage.removeItem("token");
    toast({
      title: "Success",
      description: "You have been logged out",
      status: "success",
      duration: 1000,
      isClosable: true
    });
  };

  return (
    <Box bg="gray.200" minH="710px">
      <Flex justifyContent="space-between" bg="gray.500" w="100%" p="4">
        <Flex gap="4">
          <Avatar src="https://bit.ly/broken-link" size="lg" mr="2" />
          <Heading color="whiteAlpha.900" fontSize="30px">
            Admin
          </Heading>
        </Flex>
        <Flex gap="5">
          <Button
            colorScheme="blue"
            borderRadius="lg"
            fontSize="18px"
            p="7"
            onClick={() => navigate("/productlist")}
          >
            Product List
          </Button>
          <Button
            colorScheme="red"
            fontWeight="bold"
            fontSize="18px"
            p="7"
            onClick={handleClick}
          >
            Sign out
          </Button>
        </Flex>
      </Flex>
      <br />
      <br />
      <Center>
        <VStack
          w="650px"
          borderRadius="xl"
          boxShadow="dark-lg"
          p="10"
          bg="whiteAlpha.900"
        >
          <Heading>Edit Product</Heading>
          <br />
          <br />

          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Product Name
            </FormLabel>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Image Url
            </FormLabel>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Image Url"
              onChange={(e) => setImageTsrc(e.target.value)}
              value={imageTsrc}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Discounted Price
            </FormLabel>
            <Input
              type="Number"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Discounted Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Original Price
            </FormLabel>
            <Input
              type="Number"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Original Price"
              onChange={(e) => setMPrice(e.target.value)}
              value={mPrice}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Frame Shape
            </FormLabel>
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
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Choose Gender
            </FormLabel>
            <Select
              placeholder="Choose Gender"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Kid">Kid</option>
            </Select>
          </FormControl>
          <br />

          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Frame Types
            </FormLabel>
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
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Frame Dimension
            </FormLabel>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Frame Dimension"
              onChange={(e) => setDimension(e.target.value)}
              value={dimension}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Choose Glass
            </FormLabel>
            <Select
              placeholder="Choose Glass"
              value={productType}
              onChange={(e) => setProductType(e.target.value)}
              size="lg"
              fontSize="16px"
              h="40px"
              bg="whiteAlpha.900"
            >
              <option value="sunglasses">Sun Glass</option>
              <option value="eyeglasses">Eye Glass</option>
            </Select>
          </FormControl>
          <br />
          <FormControl>
            <FormLabel fontSize="16px" h="25px">
              Frame Colour
            </FormLabel>
            <Input
              type="text"
              size="lg"
              fontSize="16px"
              h="40px"
              placeholder="Enter Frame Colour"
              onChange={(e) => setColors(e.target.value)}
              value={colors}
              bg="whiteAlpha.900"
            />
          </FormControl>
          <br />
          <br />
          {loading ? (
            <Button
              isLoading
              loadingText="Submitting"
              colorScheme="blue"
              fontSize="18px"
              py="8"
              w="100%"
              borderRadius="lg"
              variant="outline"
            >
              Submit
            </Button>
          ) : (
            <Button
              colorScheme="blue"
              fontSize="18px"
              py="8"
              w="100%"
              borderRadius="lg"
              onClick={handleEdit}
            >
              Submit
            </Button>
          )}

          <br />
        </VStack>
      </Center>
    </Box>
  );
};

export default EditProduct;