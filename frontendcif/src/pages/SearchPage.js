import React from 'react'
import SkillFilterComp from '../components/SearchComps/SkillFilterComp'
import IndustryFilterComp from '../components/SearchComps/IndustryFilterComp'
import BusinessSizeFilterComp from '../components/SearchComps/BusinessSizeFilterComp'
import BootcampFilterComp from '../components/SearchComps/BootcampFilterComp'
import ProfileCardListComp from '../components/SearchComps/ProfileCardComps/ProfileCardListComp'
import NavbarComp from '../components/Navbar/NavbarComp'

import { useState } from 'react'

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
    const [industryFilter, setIndustryFilter] = useState("All")
    const [skillFilter, setSkillFilter] = useState("All")
    const [bootcampFilter, setBootcampFilter] = useState("All")

    return (
        <div>
            <NavbarComp/>
            <div id="filter-controls">
                <IndustryFilterComp industryFilter={industryFilter} setIndustryFilter={setIndustryFilter} />
                <SkillFilterComp skillFilter={skillFilter} setSkillFilter={setSkillFilter}/>
                <BootcampFilterComp bootcampFilter={bootcampFilter} setBootcampFilter={setBootcampFilter}/>
                <BusinessSizeFilterComp/>
            </div>
            <div id="profile-card-list">
                <ProfileCardListComp/>
            </div>
        </div>
    )
}

export default SearchPage
