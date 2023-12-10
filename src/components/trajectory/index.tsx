import { Flex, Box, Text } from "@chakra-ui/react"
import Etapa from './../traject'

const Index = () => {

    const steps = [
        {
            title: 'ConferenciaCorp',
            description: 'Atuei como desenvolvedor FullStack com as linguagens PHP, Node, Mysql, JS e HTML & CSS.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/conferenciacorp_logo.jpg?alt=media&token=bba7a578-1cfd-4dce-b0bc-a96636461940',
            date: '03/02/2020'
        },
        {
            title: 'Keycash',
            description: 'Atuei como Quality Assurance(QA), escrevendo testes e fazendo fluxos no sistema.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/keycash_logo.jpg?alt=media&token=77c8c107-3308-41cc-bdbc-8741cfc12b0c',
            date: '30/04/2021'
        },
        {
            title: 'Fisioadapt',
            description: 'Fullstack',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/fisioadapt_logo.png?alt=media&token=f11680e0-fd2a-4ad7-a9b1-f8db0c68e91e',
            date: '14/04/2021'
        },
        {
            title: 'Keycash',
            description: 'Atuei como desenvolvedor Front-End, com as tecnologias, JavaScript, HTML, CSS e Vue.',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/keycash_logo.jpg?alt=media&token=77c8c107-3308-41cc-bdbc-8741cfc12b0c',
            date: '16/02/2022'
        },
        {
            title: 'Money Money Invest',
            description: 'Atuo como desenvolvedor Front-End, com as tecnologias, JavaScript, HTML, CSS, com o framework NextJs(React).',
            image: 'https://firebasestorage.googleapis.com/v0/b/portfolio-38127.appspot.com/o/money_money_invest_logo.jpg?alt=media&token=c42ad2f9-7296-431b-b9f1-a44448c1cbd2',
            date: 'Hoje'
        },
    ]

    return (
        <Flex color={'white'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'80%'} maxW={'80%'}>
                <Text textAlign={'center'} my={'50px'} color={'white'} fontSize={'32px'} fontWeight={'bold'}>
                    Trajetória Profissional
                </Text>
                <Flex gap={8}>
                    {
                        steps &&
                        steps.map((item, index) => {
                            return (
                                <Etapa key={index} item={item} />
                            )
                        })
                    }
                </Flex>
            </Box >
        </Flex>
    )
}


export default Index