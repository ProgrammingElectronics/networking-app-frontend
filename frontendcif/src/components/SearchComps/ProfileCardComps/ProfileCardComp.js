import PropertyDisplayComp from "./PropertyDisplayComp"
import "./ProfileCardComp.css"
import UserContext from "../../../contexts/UserContext"
import { useContext } from "react"
import ConnectionRequestAPI from "../../../api/ConnectionRequestAPI"

const ProfileCardComp = (props) => {

  const { user } = useContext(UserContext)
  const userInfo = user

  const connectionHandler = async () => {
    
    console.log("ProfileCardComp | connectionHandler | e.target", props.profile.id)
    const userToken = localStorage['auth-user']

    const connectionObj = {
      "from_profile": userInfo.profile,
      "to_profile": props.profile.id,
      "status": "pending"
    }

    await ConnectionRequestAPI.createConnection(userToken, connectionObj)

  }

  return (
    <div id="profileCard" className="card">
      <div id="profileCard-left-column">
          <img src={props.profile.img_url} width="150"
          className="img-fluid" alt="profile"/>
          <button onClick={connectionHandler} type="button" className="btn btn-info btn-rounded">Connect</button>
      </div>
      <div id="profileCard-right-column" className="card-body">
        <div id="profileCard-right-column-top">
          <h3 className="card-title">
            {props.profile.user.first_name} {props.profile.user.last_name}, {props.profile.enrollment[0].bootcamp.name} 
          </h3>
          <p className="card-text">
            {props.profile.about_me}
          </p>
        </div>
        <div id="profileCard-right-column-bottom">
          <PropertyDisplayComp name="Skills" data={props.profile.skills} colorClass="badge bg-info"/>
          <PropertyDisplayComp name="Industries" data={props.profile.industries} colorClass="badge bg-secondary"/>
        </div>
      </div>
    </div>
  )
}

export default ProfileCardComp