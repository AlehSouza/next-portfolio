import { Box, Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Stack, Image, Text } from "@chakra-ui/react"

type IProps = {
    item: any
}

const Index = ({ item }: IProps) => {
    return (
        <a href={item.link} target="_blank">
            <Box width={'355px'}>
                <Card maxW='sm'
                    background={'rgba(255, 255, 255, 0.18)'}
                    boxShadow={'0 4px 30px rgba(0, 0, 0, 0.1)'}
                    backdropFilter={' blur(5px)'}
                    border={'1px solid rgba(255, 255, 255, 0.3)'}
                    color={'white'}
                >
                    <CardBody>
                        <Box
                            backgroundPosition={'center'}
                            backgroundImage={item.image}
                            backgroundSize={'cover'}
                            borderRadius='lg'
                            height={'200px'}
                        />
                        <Stack mt='6' spacing='3' minHeight={'150px'}>
                            <Heading size='md'>{item.name}</Heading>
                            <Text>
                                {item.desc_pt_br}
                            </Text>
                        </Stack>
                    </CardBody>
                </Card>
            </Box>
        </a>
    )
}

export default Index