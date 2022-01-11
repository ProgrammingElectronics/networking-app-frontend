import ProfileCardComp from "./ProfileCardComp"
import profileAPI from '../../../api/ProfileAPI'
import { useEffect, useState, useContext } from "react"
import UserContext from "../../../contexts/UserContext"

const ProfileCardListComp = (props) => {

  // User Auth
  const token = localStorage.getItem("auth-user");    
  
  // This does not seem to work
  const { user } = useContext(UserContext)

  const [profiles, setProfiles] = useState([])
  
  
  /**
   * This useEffect updates the profile list based on the selected filters.
   */

  // useEffect(() => {
  //   console.log("ProfileCardListComp | useEffect | I EXIST")
  // }, [props.industryFilter, props.skillFilter, props.bootcampFilter])

  useEffect(() => {
    const getProfiles = async () => {

        console.log("ProfileCardListComp | props.skillFilter ", props.skillFilter)
        const data = await profileAPI.getAllProfiles(token)
        
        // TODO -> Why is user null?  I just pulled it in from useContext, and it just display from app.js
        console.log("ProfileCardListComp | useEffect | getProfiles | user", user)
        console.log("ProfileCardListComp | useEffect | getProfiles | data", data)

        if(data) {
          setProfiles(data)
        }
    }
    getProfiles()
  }, [])


  const profileCards = profiles.map((profile, idx) =>
      <ProfileCardComp
        key={idx}
        profile={profile}
      />
  )
   
  return (
    <div>
      {profileCards}
    </div>
  )
}

export default ProfileCardListComp
