import ProfileCardComp from "./ProfileCardComp"
import profileAPI from '../../../api/ProfileAPI'
import { useEffect, useState } from "react"

const ProfileCardListComp = () => {

  // User Auth
  const token = localStorage.getItem("auth-user");    
  
  const [profiles, setProfiles] = useState([])

  /**
   * This useEffect updates the profile list based on the selected filters.
   */
  useEffect(() => {
    const getProfiles = async () => {
        const data = await profileAPI.getAllProfiles(token)
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
