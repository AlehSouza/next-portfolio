import React from "react"
import Image from "next/image"
import { Box, Flex, Card, CardBody, Heading } from "@chakra-ui/react"

type IProps = {
    project: any
}

const Index = ({ project }: IProps) => {
    return (
        <Card
            width={'150px'}
            border={'1px solid rgba(255, 255, 255, 0.3)'}
            boxShadow={' 0 4px 30px rgba(0, 0, 0, 0.1)'}
            background={' rgba(255, 255, 255, 0.18)'}
            backdropFilter={' blur(5px)'}
        >
            <CardBody>
                <Box>
                    <Flex height={'100'} justifyContent={'center'} alignItems={'center'}>
                        <Image src={project.image} width={100} height={100} alt={project.name} />
                    </Flex>
                    <Heading size='xs' textTransform='uppercase' pt={'2'} color={'white'}>
                        {project.name}
                    </Heading>
                </Box>
            </CardBody>
        </Card>
    )
}

export default Index