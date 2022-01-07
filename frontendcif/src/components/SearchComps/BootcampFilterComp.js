import bootcampAPI from '../../api/BootcampAPI'
import DisplayFilters from './DisplayFiltersComp'
import { DropdownButton } from 'react-bootstrap'
import { useEffect, useState } from 'react'



const BootcampFilterComp = (props) => {

    const [bootcampList, setBootcampList] = useState([])
    /*
    TODO This will change to a getting token from useContext, or as prop
    */ 
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InN1cGVyIiwiZXhwIjoxNjQxNjU4NDQ4LCJlbWFpbCI6IiJ9.-EZZzOdYXPktL-Hnr7yoVanC-VUrg61Ukss8Ps1OTsQ"

    useEffect(() => {

        const getBootcamps = async () => {
            console.log("BootcampFilterComp | useEffect | getIndustries")
            const data = await bootcampAPI.getAllBootcamps(token)

            console.log(data)

            if(data) {
                setBootcampList(data)
            }
        }
        getBootcamps()
    }, [])

    return (
        <div>
            <h1>Select Bootcamp</h1>
            <DropdownButton 
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                className="mt-2"
                title={props.bootcampFilter}
            >
                <DisplayFilters filterList={bootcampList} setFilter={props.setBootcampFilter}></DisplayFilters>
            </DropdownButton>
        </div>
    )
}

export default BootcampFilterComp
