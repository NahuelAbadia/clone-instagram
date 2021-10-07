import React from 'react'
import { Container, Box, Icon, Input, Image, Stack, Text, StackDivider, } from '@chakra-ui/react'
import { AiFillHome, AiOutlineSearch } from 'react-icons/ai'
import logo from '../assets/logo.png'
import { MdHomeFilled, MdOutlineExplore } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsHeart } from 'react-icons/bs'
import { FaRegUserCircle } from 'react-icons/fa'

const Navbar = () => {
    return (
        <Stack>
            <Container alignSelf="center" maxWidth="container.lg" spacing={0} paddingX={10}>
                <Stack direction="row" paddingY={3} alignItems="center" justify="space-between" boxShadow="xs" maxWidth="975px" width="100%" height="54px">
                    <Image src={logo} />
                    <Stack alignItems="center" direction="row" height="28px" maxWidth="220px" width="100%"
                        backgroundColor="white" padding={2} borderRadius="xs" boxShadow="xs">
                        <Icon as={AiOutlineSearch} height={4} width={4} color="gray.400" cursor="pointer"></Icon>
                        <Input placeholder="Buscar" paddingX={2} variant="unstyled" textAlign="center"/>
                    </Stack>
                    <Stack direction="row" alignItems="flex-start" spacing={4}>
                        <Icon as={MdHomeFilled} height={7} width={7}></Icon>
                        <Icon as={RiMessengerLine} height={7} width={7}></Icon>
                        <Icon as={MdOutlineExplore} height={7} width={7}></Icon>
                        <Icon as={BsHeart} height={6} width={6}></Icon>
                        <Icon as={FaRegUserCircle} height={7} width={7}></Icon>
                    </Stack>
                </Stack>
            </Container>
        </Stack>
    )
}

export default Navbar
