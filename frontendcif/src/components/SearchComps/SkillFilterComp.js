import skillAPI from '../../api/SkillAPI'
import DisplayFilters from './DisplayFiltersComp'
import { Form } from 'react-bootstrap'

// hooks
import { useEffect, useState } from 'react'

const SkillFilterComp = (props) => {

    // User Auth
    const token = localStorage.getItem("auth-user");    
    
    // This state is only for displaying the checkbox items it does NOT tracked checked, unchecked states.  
    const [skillList, setSkillList] = useState([])
    
    /**
     The below useEffect should be called when the "search page" first renders. Its purpose is to fill the list with the names of avialable from our database. This is for display purposes only.
     */
    useEffect(() => {
        const getSkills = async () => {
            const data = await skillAPI.getAllSkills(token)
            if(data) {
                setSkillList(data)
            }
        }
        getSkills()
    }, [])

        // Create the filter checkboxes
        const items = skillList.map((item,idx) => 
        
        <DisplayFilters 
            key={idx}
            item={item}
            filterList={props.skillFilter} 
            setFilter={props.setSkillFilter}
        />
    )

    return (
        <Form>      
            {items}  
        </Form> 
    )
}

export default SkillFilterComp
