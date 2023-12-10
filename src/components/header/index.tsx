import {
    Box,
    Flex,
    Text,
    Tooltip,
} from "@chakra-ui/react"

import { BiLogoCodepen, BiLogoGithub, BiLogoLinkedinSquare, BiFileBlank } from "react-icons/bi";
import Link from "next/link";

const roles = [
    'FrontEnd',
    'Quality Assurance',
    'Free Lancer',
]

const socials = [
    {
        icon: <BiLogoGithub fontSize={'20px'} />,
        ref: 'https://github.com/AlehSouza',
        tooltip: 'Github',
    },
    {
        icon: <BiLogoCodepen fontSize={'20px'} />,
        ref: 'https://codepen.io/blezale/',
        tooltip: 'Codepen',
    },
    {
        icon: <BiLogoLinkedinSquare fontSize={'20px'} />,
        ref: 'https://www.linkedin.com/in/alehsouza/',
        tooltip: 'LinkedIn',
    },
    {
        icon: <BiFileBlank fontSize={'20px'} />,
        ref: 'https://drive.google.com/file/d/1sm8Zl5vzos-iRuN1Ll1QAI1Oav2VDZ4O/view',
        tooltip: 'Currículo',
    },
]

const Index = () => {
    return (
        <Flex
            backgroundImage={'https://cdn.mos.cms.futurecdn.net/EzgdmaCQuT84bgDL4fhXZS.jpg'}
            flexDirection={'column'}
            backgroundSize={'cover'}
            minH={'650px'}
        >
            <Flex
                bgColor={'rgba(0,0,0,0.7)'}
                pt={'50px'}
                width={'100%'}
                height={'700px'}
                color={'white'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Flex
                    width={'100%'}
                    height={'100%'}
                    justifyContent={'center'}
                    alignItems={'center'}
                >
                    <Flex
                        px={20}
                        width={'30%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDir={'column'}
                    >
                        {/* Profile Icon */}
                        <Box
                            width={'255px'}
                            height={'255px'}
                            borderRadius={'100%'}
                            backgroundColor={'black'}
                            border={'10px solid white'}
                            backgroundImage={'https://avatars.githubusercontent.com/u/43255955?v=4'}
                            backgroundSize={'cover'}
                        />
                        {/* Profile Icon */}
                        <Text
                            textAlign={'center'}
                            fontSize={'38px'}
                            fontWeight={'bold'}
                            py={5}
                        >
                            Alexandre Souza
                        </Text>
                        <Flex
                            justifyContent={'space-between'}
                        >
                            {
                                roles.map((role, key) => {
                                    return (
                                        <Box
                                            key={key}
                                            backgroundColor={'#773dde'}
                                            border={'1px solid #5b20c2'}
                                            fontSize={'14px'}
                                            fontWeight={'400'}
                                            borderRadius={'50px'}
                                            py={1}
                                            px={3}
                                            mx={2}
                                        >
                                            {role}
                                        </Box>
                                    )
                                })
                            }
                        </Flex>
                        <Flex mt={7}>
                            {
                                socials.map((social, key) => {
                                    return (
                                        <Tooltip
                                            key={key}
                                            label={social.tooltip}
                                        >
                                            <Link href={social.ref} target="_blank">
                                                <Flex
                                                    backgroundColor={'white'}
                                                    borderRadius={'50px'}
                                                    border={'5px solid rbga(255,255,255, 0.5)'}
                                                    color={'black'}
                                                    width={'40px'}
                                                    height={'40px'}
                                                    cursor={'pointer'}
                                                    justifyContent={'center'}
                                                    alignItems={'center'}
                                                    mx={2}
                                                >
                                                    {social.icon}
                                                </Flex>
                                            </Link>
                                        </Tooltip>
                                    )
                                })
                            }
                        </Flex>
                    </Flex>
                    <Flex
                        px={20}
                        width={'30%'}
                        justifyContent={'center'}
                        alignItems={'center'}
                        flexDir={'column'}
                    >
                        <Text textAlign={'center'} fontSize={'32px'} mb={'15px'} fontWeight={'bold'}>
                            Enjoy
                        </Text>
                        <Text textAlign={'center'}>
                            Olá, seja bem vindo ao meu portfólio!
                            <br />
                            Confira em meu Github alguns projetos em que trabalhei! 👽
                        </Text>
                    </Flex>
                </Flex>

                <Box width={'100%'} height={'100px'} backgroundImage={'linear-gradient(to bottom, rgba(0,0,0,0), #0a0013)'} />


            </Flex>

        </Flex>
    )
}

export default Index