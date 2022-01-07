import skillAPI from '../../api/SkillAPI'
import DisplayFilters from './DisplayFiltersComp'
import { DropdownButton } from 'react-bootstrap'
import { useEffect, useState } from 'react'



const SkillFilterComp = (props) => {

    const [skillList, setSkillList] = useState([])
    /*
    TODO This will change to a getting token from useContext, or as prop
    */ 
    const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InN1cGVyIiwiZXhwIjoxNjQxNjcxNzUyLCJlbWFpbCI6IiJ9.Qv_nda-qjmyEGikYsuUDd8AojjdR0qMQGtCK2Ne81E8"

    useEffect(() => {

        const getSkills = async () => {
            console.log("SkillFilterComp | useEffect | getIndustries")
            const data = await skillAPI.getAllSkills(token)

            console.log(data)

            if(data) {
                setSkillList(data)
            }
        }
        getSkills()
    }, [])

    return (
        <div>
            <h1>Skill Filter</h1>
            <DropdownButton 
                id="dropdown-button-dark-example2"
                variant="secondary"
                menuVariant="dark"
                className="mt-2"
                title={props.skillFilter}
            >
                <DisplayFilters filterList={skillList} setFilter={props.setSkillFilter}></DisplayFilters>
            </DropdownButton>
        </div>
    )
}

export default SkillFilterComp
