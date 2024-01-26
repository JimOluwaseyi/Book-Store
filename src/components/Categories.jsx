import { useSelector} from "react-redux";
const Categories =()=>{
    const { status}= useSelector((state)=>state.categories)
    return (
        <>
        <h1>{status}</h1>
        
        </>
    )
}
export default Categories;