import { Box, Flex, Text } from "@chakra-ui/react"
import Project from './../project'

const Index = () => {

    const projects = [
        {
            image: "https://imgur.com/G6W5wI6.png",
            link: "#",
            name: "Portfólio",
            color: "#d72448",
            desc_pt_br: "Este é o meu portfólio, você está aqui agora 🤘!",
            desc_eng: "This is my portfolio, you are here now 🤘!",
            stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            github_link: "https://github.com/AlehSouza/Portfolio",
        },
        {
            image: "https://imgur.com/NcE5Vgv.png",
            link: "https://fisioadapt.com.br/",
            name: "Fisioadapt",
            color: "#00a89b",
            desc_pt_br:
                "Site de contato para a empresa Fisioadapt onde você pode saber mais sobre os serviços e falar com os profissionais da empresa.",
            desc_eng:
                "Contact site for the company Fisioadapt where you can learn more about the services and speak with the professionals of the company.",
            stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            github_link: "",
        },
        // {
        //   image: "https://imgur.com/O8Y0M7E.png",
        //   link: "http://kimochism.com/",
        //   name: "Kimochism",
        //   color: "#000000",
        //   desc_pt_br:
        //     "E-commerce desenvolvido em react para a empresa Kimochism.",
        //   desc_eng: "E-commerce developed in react for the company Kimochism.",
        //   stack:
        //     "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
        //   github_link: "https://github.com/AlehSouza/Kimo-web",
        // },
        {
            image: "https://imgur.com/klPVDct.png",
            link: "https://valorant-web.vercel.app/",
            name: "Valorant Web",
            color: "#e34b33",
            desc_pt_br:
                "Site sobre jogo Valorant, um FPS tático, com muita diversão e competitividade. (desktop)",
            desc_eng:
                "Site about Valorant game, a tactical FPS, with lots of fun and competitiveness. (desktop)",
            stack:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
            github_link: "https://github.com/AlehSouza/Valorant-Web",
        },
        {
            image: "https://imgur.com/mlPDb7C.png",
            link: "https://genshin-impact-app.vercel.app/",
            name: "Genshin Impact",
            color: "#e34b33",
            desc_pt_br:
                "Site sobre Genshin Impact, um jogo RPG. Feito em VueJS, treinando alguns conhecimentos na stack. (Desktop)",
            desc_eng:
                "Site about Genshin Impact, an RPG game. Made in VueJS, training some knowledge on the stack. (desktop)",
            stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            github_link: "https://github.com/AlehSouza/Genshin-Impact",
        },
        {
            image: "https://imgur.com/WuUw80w.png",
            link: "https://chronno-game.vercel.app/",
            name: "Chronno Trigger - Game",
            color: "#c95c11",
            desc_pt_br:
                "Uma simulação simbólica de uma das lutas de um jogo que fez parte da minha infância.",
            desc_eng:
                "A symbolic simulation of one of the fights in a game that was part of my childhood.",
            stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            github_link: "https://github.com/AlehSouza/Chronno-Game",
        },
        {
            image: "https://i.imgur.com/ZKd7NdC.png",
            link: "https://pokedex-six-delta.vercel.app/",
            name: "Pokedex",
            color: "#f74b16",
            desc_pt_br:
                "Uma pokedex feita em VueJs apenas para Desktop, quando estava iniciando meus estudos nessa stack.",
            desc_eng:
                "A pokedex made in VueJs just for Desktop, when I was starting my studies on this stack.",
            stack: "https://cdn.worldvectorlogo.com/logos/vue-9.svg",
            github_link: "https://github.com/AlehSouza/Pokedex",
        },
        {
            image: "https://imgur.com/IrWgMDb.png",
            link: "https://cade-alehsouza.vercel.app/",
            name: "Cadê?",
            color: "#000000",
            desc_pt_br:
                "Um jogo feito em HTML, CSS, JS para uma matéria da faculdade.",
            desc_eng: "A game made in HTML, CSS, JS for a college subject.",
            stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            github_link: "https://github.com/AlehSouza/Cade",
        },
        {
            image: "https://i.imgur.com/3il5N8B.png",
            link: "https://youtu.be/1eeQ0NzDASE",
            name: "Culture",
            color: "#2d9c47",
            desc_pt_br:
                "Culture é um aplicativo desenvolvido para meu TCC do ensino técnico. Atualmente não possui um site, mas um vídeo pitch explicativo.",
            desc_eng:
                "Culture is an application developed for my technical education TCC. It currently does not have a website, but an explanatory video pitch.",
            stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
            github_link: "",
        },
        // {
        //   image: "https://imgur.com/euoNAnL.png",
        //   link: "",
        //   name: "Async Project",
        //   color: "#000000",
        //   desc_pt_br: "Site ainda em desenvolvimento.",
        //   desc_eng: "Website still under development.",
        //   stack: "https://cdn-icons-png.flaticon.com/512/5968/5968292.png",
        //   github_link: ""
        // },
        // {
        //   image: "https://imgur.com/tG1RHqN.png",
        //   link: "",
        //   name: "Qual será o próximo?",
        //   color: "#000000",
        //   desc_pt_br: "Vamos esperar pra ver o que vem por ai... 👨‍🔧",
        //   desc_eng: "",
        // },
    ]

    return (
        <Flex color={'white'} justifyContent={'center'} alignItems={'center'}>
            <Box width={'80%'} maxW={'80%'}>
                <Text textAlign={'center'} my={'50px'} color={'white'} fontSize={'32px'} fontWeight={'bold'}>
                    Meus Projetos
                </Text>
                <Flex flexWrap={'wrap'} gap={8} justifyContent={'center'} alignItems={'center'}>
                    {
                        projects &&
                        projects.map((project, index) => {
                            return (
                                <Project item={project} key={index} />
                            )
                        })
                    }
                </Flex>
            </Box>
        </Flex>
    )
}

export default Index