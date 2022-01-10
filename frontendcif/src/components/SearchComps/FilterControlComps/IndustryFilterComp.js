import industryAPI from '../../../api/IndustryAPI'
import DisplayFilters from './DisplayFiltersComp'
import { Form } from 'react-bootstrap'

// hooks
import { useEffect, useState} from 'react'

const IndustryFilterComp = (props) => {

    // User Auth
    const token = localStorage.getItem("auth-user");    
    
    // This state is only for displaying the checkbox items it does NOT tracked checked, unchecked states.  
    const [industryList, setIndustryList] = useState([])
    
    /**
     The below useEffect should be called when the "search page" first renders. Its purpose is to fill the list with the names of avialable from our database. This is for display purposes only.
     */
    useEffect(() => {
        const getIndustries = async () => {
            const data = await industryAPI.getAllIndustries(token)        
            if(data) {
                setIndustryList(data)
            }
        }
        getIndustries()
    }, [])
    
    // Create the filter checkboxes
    const items = industryList.map((item,idx) => 
        
        <DisplayFilters 
            key={idx}
            item={item}
            filterList={props.industryFilter} 
            setFilter={props.setIndustryFilter}
        />
    )

    return (
        <Form>      
            {items}  
        </Form> 
    )
}

export default IndustryFilterComp
