import industryAPI from '../../api/IndustryAPI'
import DisplayFilters from './DisplayFiltersComp'

//componets
import { DropdownButton } from 'react-bootstrap'

// hooks
import { useEffect, useState, useContext } from 'react'

// context
import UserContext from "../../contexts/UserContext";


const IndustryFilterComp = (props) => {

    // context
    const userContext = useContext(UserContext);
    const { user } = userContext;
    
    console.log("IndustryFilterComp | User ---> ", user)
    //console.log("IndustryFilterComp | User.token ---> ", user.token ? user.token : "no token yo" )
    const [industryList, setIndustryList] = useState([])
    /*
    TODO This will change to a getting token from useContext, or as prop
    */ 
    const token = localStorage.getItem("auth-user");    
    console.log("IndustryFilterComp | Token ---> ", token)    
    
    /**
        The below useEffect should be called when the "search page" first renders. Its purpose is to fill the industryList with the names of avialable industries from our database.
    */
    useEffect(() => {

        const getIndustries = async () => {
            console.log("IndustryFilterComp | useEffect | getIndustries")
            const data = await industryAPI.getAllIndustries(token)

            console.log(data)

            if(data) {
                setIndustryList(data)
            }
        }
        getIndustries()
    }, [])


    return (
        <div>
            <h1>Select Industry</h1>
            <DropdownButton 
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                className="mt-2"
                title={props.industryFilter}
            >
                <DisplayFilters filterList={industryList} setFilter={props.setIndustryFilter}></DisplayFilters>
            </DropdownButton>
        </div>
    )
}

export default IndustryFilterComp
