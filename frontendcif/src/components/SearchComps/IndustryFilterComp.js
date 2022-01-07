import industryAPI from '../../api/IndustryAPI'
import DisplayFilters from './DisplayFiltersComp'

import { DropdownButton } from 'react-bootstrap'

import { useEffect, useState } from 'react'


const IndustryFilterComp = (props) => {


    const [industryList, setIndustryList] = useState([])
    /*
    TODO This will change to a getting token from useContext, or as prop
    */ 
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InN1cGVyIiwiZXhwIjoxNjQxNjU4NDQ4LCJlbWFpbCI6IiJ9.-EZZzOdYXPktL-Hnr7yoVanC-VUrg61Ukss8Ps1OTsQ"

        
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
