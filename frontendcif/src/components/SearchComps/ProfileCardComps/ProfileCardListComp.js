import ProfileCardComp from "./ProfileCardComp"
import NoResultsProfileCardComp from "./NoResultsProfileCardComp"
import profileAPI from '../../../api/ProfileAPI'
import { useEffect, useState, useContext } from "react"
import UserContext from "../../../contexts/UserContext"
import ConnectionRequestAPI from "../../../api/ConnectionRequestAPI"

const ProfileCardListComp = (props) => {
  
  // User Auth
  const token = localStorage.getItem("auth-user");    
  
  // get user context
  const  { user } = useContext(UserContext)
  const userInfo = user

  // states
  const [ profiles, setProfiles ] = useState([])
  const [ connections, setConnections ] = useState(null)

  /**
   * This functions composes the URL for hitting the API and
   * getting filtered results. 
   * */
  const buildFilters = () => {
    
    let filters = "?"
    
    if(props.industryFilter){
      filters += "industry=" + props.industryFilter.join(",") + "&"
    }
    
    if(props.skillFilter){
      filters += "skill=" + props.skillFilter.join(",") + "&"
    }
    
    if(props.bootcampFilter){
      filters += "bootcamp=" + props.bootcampFilter.join(",") + "&"
    }

    return filters
  }
  
  useEffect(() => {
    const getConnections = async () => {
      let data = await ConnectionRequestAPI.fetchConnections(token);
      setConnections(data)
      console.log('ProfileCardComp | useEffect | allConnections', data)
    }
    getConnections()
  }, [])

  /**
   * This useEffect updates the profile list based on the selected filters.
   */
  useEffect(() => {
    
    const getProfiles = async () => {
        const filter = buildFilters()
        const data = await profileAPI.getFilteredProfiles(token, filter)
        console.log("ProfileCardListComp | useEffect | getProfiles | data ", data)
        
        // filter out the logged in user from results
        if(data && userInfo) {
          const filteredData = data.filter(obj => { return obj.id !== userInfo.profile})
          setProfiles(filteredData)
        } else if (data) {
          setProfiles(data)
        }
    }
    getProfiles()
  }, [props.industryFilter, props.skillFilter, props.bootcampFilter, userInfo])


  const profileCards = profiles.map((profile, idx) =>
      <ProfileCardComp
        connections={connections}
        key={idx}
        profile={profile}
      />
  )
   
  
  return (
    <div>
      {/* show no results card if no profiles meet match */}
      { profiles.length > 0 ?
       profileCards :
       <NoResultsProfileCardComp></NoResultsProfileCardComp>
      }
    </div>
  )
}

export default ProfileCardListComp
