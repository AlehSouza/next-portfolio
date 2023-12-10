import { Box, Flex, Text } from "@chakra-ui/react"

const Index = () => {
    return (
        <Flex color={'white'} justifyContent={'center'} alignItems={'center'}>
            <Flex width={'80%'} maxW={'80%'} justifyContent={'space-between'} gap={4}>
                <Box
                    // border={'1px solid rgba(255, 255, 255, 0.3)'}
                    // boxShadow={' 0 4px 30px rgba(0, 0, 0, 0.1)'}
                    // background={' rgba(255, 255, 255, 0.18)'}
                    // backdropFilter={' blur(5px)'}
                    borderRadius={'0.375rem'}
                    width={'60%'}
                    px={'24px'}
                    py={'24px'}
                >
                    <Text textAlign={'left'} my={'25px'} mt={'11px'} color={'white'} fontSize={'32px'} fontWeight={'bold'}>
                        Sobre mim
                    </Text>
                    <Text>
                        Me chamo Alexandre, atualmente tenho 22 anos🎉, estudo e trabalho na área de tecnologia voltado para o Front-End, pois foi o segmento que escolhi para minha carreira profissional desde que compreendi a separação dessas áreas.👨‍💻
                        <br /><br />
                        Tenho uma grande facilidade com o desenvolvimento de telas e comunicação visual com o usuário. Sou um estusiasta na area de Design, possuo um curso de Design Ui/Ux que fiz ao longo do meu curso técnico em Desenvolvimento de Sistemas na Etec de Guaianazes.🎨
                        <br /><br />
                        Abaixo você pode conferir mais sobre minha trajetória profissional e alguns dos meus projetos que realizei ao longo dessa jornada.
                        <br /><br />
                        Obrigado pela atenção, aproveite 😊
                        <br /><br />
                    </Text>
                </Box>
                <Box
                    justifyContent={'center'}
                    alignItems={'center'}
                    display={'flex'}
                    border={'1px solid rgba(255, 255, 255, 0.3)'}
                    boxShadow={' 0 4px 30px rgba(103, 34, 34, 0.1)'}
                    background={' rgba(255, 255, 255, 0.18)'}
                    backdropFilter={' blur(5px)'}
                    borderRadius={'100%'}
                    width={'500px'}
                    height={'500px'}
                    px={'12px'}
                    py={'12px'}
                >
                    <img src={'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/apresentation_culture.jpg?alt=media&token=b2d63f55-981e-4305-8d09-53edb822cba4'} style={{
                        width: '100%',
                        height: '100%',
                        borderRadius: '100%'
                    }} />
                </Box>
            </Flex>
        </Flex>
    )
}

export default Index