//next provide hooks for using params
import { useRouter } from 'next/router'

export default function UserIdPage(){
    //open an instance of useRouter
    const router = useRouter()
    //pull the path param (called query) from the router object
    const { userId } = router.query
    return(
        <div>
            <h3>hello to {userId}</h3>
        </div>
    )
}