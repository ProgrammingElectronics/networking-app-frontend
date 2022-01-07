import React from 'react'
import SkillFilterComp from '../components/SearchComps/SkillFilterComp'
import IndustryFilterComp from '../components/SearchComps/IndustryFilterComp'
import BusinessSizeFilterComp from '../components/SearchComps/BusinessSizeFilterComp'
import BootcampFilterComp from '../components/SearchComps/BootcampFilterComp'
import MiniCardListComp from '../components/SearchComps/MiniCardComps/MiniCardListComp'
import NavbarComp from '../components/Navbar/NavbarComp'


const SearchPage = () => {
    return (
        <div>
            <NavbarComp/>
            <div id="filter-controls">
                <IndustryFilterComp/>
                <SkillFilterComp/>
                <BusinessSizeFilterComp/>
                <BootcampFilterComp/>
            </div>
            <div id="profile-card-list">
                <MiniCardListComp/>
            </div>
        </div>
    )
}

export default SearchPage
