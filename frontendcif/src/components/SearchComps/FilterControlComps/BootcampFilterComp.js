import bootcampAPI from '../../../api/BootcampAPI'
import DisplayFilters from './DisplayFiltersComp'
import { Form } from 'react-bootstrap'

// hooks
import { useEffect, useState } from 'react'

const BootcampFilterComp = (props) => {

    // User Auth
    const token = localStorage.getItem("auth-user");    

    // This state is only for displaying the checkbox items it does NOT tracked checked, unchecked states.  
    const [bootcampList, setBootcampList] = useState([])
    
    /**
     The below useEffect should be called when the "search page" first renders. Its purpose is to fill the list with the names of avialable from our database. This is for display purposes only.
     */
    useEffect(() => {
        const getBootcamps = async () => {
            const data = await bootcampAPI.getAllBootcamps(token)
            if(data) {
                setBootcampList(data)
            }
        }
        getBootcamps()
    }, [])

    // Create the filter checkboxes
    const items = bootcampList.map((item,idx) => 
        
        <DisplayFilters 
            key={idx}
            item={item}
            filterList={props.bootcampFilter} 
            setFilter={props.setBootcampFilter}
        />
    )

    return (
        <Form>      
            {items}  
        </Form> 
    )
}

export default BootcampFilterComp
