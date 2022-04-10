export default function projects(req,res){
    /**
     * Returns all projects in JSON format
     * name, description, links, tech used
     */
    const projects = [
        {
            name: "Newsies Rush",
            description: "Canvas game based on the Paperboy video game",
            links:{
                repo: "https://github.com/snacksident/Newsies-Rush",
                deployed: "https://snacksident.github.io/Newsies-Rush/"
            },
            tech: "html, css, javascript"
        },
        {
            name: "Hallpass Loggr",
            description: "PEN stack app meant to log hallpass usage of school students",
            links:{
                repo: "https://github.com/snacksident/project2",
                deployed: "https://hallpass-loggr.herokuapp.com/"
            },
            tech: "node.js, express, postgres, sequelize, axios, heroku"
        },
        {
            name: "untitled chat app",
            description: "MERN stack app with real-time chatting",
            links:{
                repo: "https://github.com/snacksident/p3-client",
                deployed:""
            },
            tech:"mongo, express, react, node, websockets (via socket.io)"
        }
    ]
    res.status(200).json({projects})
} 