import { Box, Image, Text, VStack } from "@chakra-ui/react";
import Posts from "./Posts";

const Profile = () => {
  return (
    <Box>
      <VStack p={7} m="auto" width="fit-content" borderRadius={6} bg="gray.700">
        <Image
          borderRadius="full"
          boxSize="80px"
          src="https://thumbs.dreamstime.com/b/flat-male-avatar-image-beard-hairstyle-businessman-profile-icon-vector-179285629.jpg"
          alt="Profile"
        />
        <Text>AWS S3 Image Uploader App</Text>
        <Text fontSize="lg" color="gray.400">
          Carlito Pedida Jr <br />
          <Text fontSize="sm" color="gray.400">
            Application Developer
          </Text>
        </Text>
      </VStack>

      <Posts />
    </Box>
  );
};
export default Profile;
