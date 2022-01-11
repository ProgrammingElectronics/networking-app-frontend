import React from 'react'
import SkillFilterComp from "../components/SearchComps/FilterControlComps/SkillFilterComp"
import IndustryFilterComp from '../components/SearchComps/FilterControlComps/IndustryFilterComp'
import './SearchPage.css'
import BootcampFilterComp from '../components/SearchComps/FilterControlComps/BootcampFilterComp'
import ProfileCardListComp from '../components/SearchComps/ProfileCardComps/ProfileCardListComp'
import NavbarComp from '../components/Navbar/NavbarComp'
import { MDBAccordion, MDBAccordionItem } from 'mdb-react-ui-kit';

import { useState, useEffect } from 'react'

const SearchPage = () => {

    /*
      TODO This page need to import context for the user token,
      or read the token from local storage on the browser. 
    */


    


    /**
     These "filter" states will be used to make the API call
     that will filter profiles. The profiles will get passed into the component that will display all the relevant profiles for the filter states.
     */ 
    
    
    // states
    const [industryFilter, setIndustryFilter] = useState([])
    const [skillFilter, setSkillFilter] = useState([])
    const [bootcampFilter, setBootcampFilter] = useState([])
    
    const setIndustryFilterHandler = (state) => {
        setIndustryFilter(state)
    }

    useEffect(() => {
       console.log("ProfileCardListComp | useEffect | I EXIST")
     }, [industryFilter, skillFilter, bootcampFilter])

    return (
        <div id="search-page">
            <NavbarComp/>
            <div id="search-page-content-area">
                <div id="filter-controls">
                    <MDBAccordion>
                        <MDBAccordionItem collapseId='panelsStayOpen-collapse1' headerTitle='Filter by Industries'>
                            <IndustryFilterComp industryFilter={industryFilter} setIndustryFilter={setIndustryFilterHandler} />
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId='panelsStayOpen-collapse2' headerTitle='Filter by Skills'>
                            <SkillFilterComp skillFilter={skillFilter} setSkillFilter={setSkillFilter}/>
                        </MDBAccordionItem>
                        <MDBAccordionItem collapseId='panelsStayOpen-collapse3' headerTitle='Filter by Bootcamps'>
                            <BootcampFilterComp bootcampFilter={bootcampFilter} setBootcampFilter={setBootcampFilter}/>
                        </MDBAccordionItem>
                    </MDBAccordion>
                </div>
                <div id="profile-card-list">
                    <ProfileCardListComp industryFilter={industryFilter} skillFilter={skillFilter} bootcampFilter={bootcampFilter}/>
                </div>
            </div>
        </div>
    )
}

export default SearchPage
