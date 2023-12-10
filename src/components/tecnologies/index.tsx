import { Box, Flex, Text } from "@chakra-ui/react"
import Tecnology from './../tecnology'

const tecnologies = [
    {
        name: "JavaScript",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Javascript.png?alt=media&token=b1a634b7-2a8a-422a-a52b-3fb1f86a0115",
    },
    {
        name: "TypeScript",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Typescript.png?alt=media&token=0a50efb7-0f66-400e-a854-8aefe0fd4620",
    },
    {
        name: "React",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/React.png?alt=media&token=a6490f8d-582a-48c3-a7e4-9692212e5419",
    },
    {
        name: "Vue",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Vue.png?alt=media&token=41d93180-10c4-4078-ae67-314376449ef8",
    },
    {
        name: "NextJs",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Next.png?alt=media&token=ab5839ff-5238-483b-ad0d-b09809e52e90",
    },
    {
        name: "NodeJs",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Node.png?alt=media&token=d194f0ef-22ca-4017-8806-3e01916237ec",
    },
    {
        name: "MongoDB",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/MongoDb.png?alt=media&token=70824664-e04f-48e3-92a8-ec7400d361e5",
    },
    {
        name: "Git",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Git.png?alt=media&token=da31331c-7458-4fa6-87af-5f9f5ecf1669",
    },
    {
        name: "Vercel",
        image: "https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/Vercel.png?alt=media&token=c6a9f6b2-37ab-4c0c-bc58-b463efc8fde7",
    },
]

const Index = () => {
    return (
        <Flex color={'white'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'80%'} maxW={'80%'}>
                <Text textAlign={'center'} my={'50px'} color={'white'} fontSize={'32px'} fontWeight={'bold'}>
                    Tecnologias
                </Text>
                <Flex justifyContent={'space-between'} gap={8}>
                    {
                        tecnologies &&
                        tecnologies.map((tecno, index) => {
                            return (
                                <Tecnology key={index} project={tecno} />
                            )
                        })
                    }
                </Flex>
            </Box>
        </Flex>
    )
}

export default Index