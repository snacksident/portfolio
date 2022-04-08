// when we get data from the server its available as props
import axios from 'axios'
export default function Animals({ data }){
    return(
        <h1>random animal: {data.rando}</h1>
    )
}
//export a function thats called 'getStaticProps'
// whatever is returned from this func becomes the data prop in our component
export async function getStaticProps(){
    // we can do all of our ajax/axios/fetch here
    // we can call external API's, express backend, next backend
    const {data} = await axios.get(`${process.env.SERVER_URL}/api/animals`)
    console.log(data)
    // these props are available to us in the component
    return {
        props: {data}
    }
}