import Link from 'next/link';
import { Box, Flex, MenuItem } from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaTwitter, FaGoogle } from 'react-icons/fa';

const Footer = () => (
  <>
    <Flex justifyContent="space-between" alignItems="center">
      <Box
        textAlign="center"
        p="5"
        color="gray.600"
        borderTop="1px"
        borderColor="gray.100"
      >
        2022 Realtor, Inc.
      </Box>
      <Box paddingRight="4">
        <Flex gap="5">
          <Link href="https://web.facebook.com/ayanlola.timileyin/">
            {<FaFacebookF />}
          </Link>
          <Link href="https://www.instagram.com/timmyproofficial/">
            {<FaInstagram />}
          </Link>
          <Link href="/">{<FaTwitter />}</Link>
          {/* <Link href="/">{<FaGoogle />}</Link> */}
        </Flex>
      </Box>
    </Flex>
  </>
);

export default Footer;
