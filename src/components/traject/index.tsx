
import { Card, Image, Stack, CardBody, Heading, Box, Text } from "@chakra-ui/react"

type IProps = {
    item: any
}

const Index = ({ item }: IProps) => {
    return (
        <Box
            width={'20%'}
            height={'250px'}
        >
            <Card
                border={'1px solid rgba(255, 255, 255, 0.3)'}
                boxShadow={' 0 4px 30px rgba(0, 0, 0, 0.1)'}
                background={' rgba(255, 255, 255, 0.18)'}
                direction={{ base: 'column', sm: 'row' }}
                backdropFilter={' blur(5px)'}
                position={'relative'}
                overflow={'hidden'}
                variant={'outline'}
                color={'white'}
                height={'100%'}
            >
                <Stack width={'100%'}>
                    <CardBody >
                        <Heading size='sm'>
                            {item.title}
                        </Heading>
                        <Text py='2' size={'12px'} >
                            {item.description}
                        </Text>
                        <Text py='2' >
                            {item.date}
                        </Text>
                    </CardBody>
                </Stack>
                <Box
                    border={'1px solid rgba(255, 255, 255, 0.3)'}
                    boxShadow={' 0 4px 30px rgba(0, 0, 0, 0.1)'}
                    background={' rgba(255, 255, 255, 0.18)'}
                    backdropFilter={' blur(5px)'}
                    backgroundImage={item.image}
                    backgroundSize={'cover'}
                    borderRadius={'100px'}
                    position={'absolute'}
                    bgColor={'purple'}
                    height={'50px'}
                    bottom={'20px'}
                    right={'20px'}
                    width={'50px'}
                />
            </Card>
        </Box>
    )
}

export default Index