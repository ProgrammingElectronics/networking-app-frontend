import PropertyDisplayComp from "./PropertyDisplayComp"
import "./ProfileCardComp.css"

const ProfileCardComp = (props) => {


  return (
    <div id="profileCard" className="card">
      <div id="profileCard-left-column">
          <img src={props.profile.img_url} width="150"
          className="img-fluid" alt="profile"/>
          <button type="button" className="btn btn-info btn-rounded">Connect</button>
      </div>
      <div id="profileCard-right-column" className="card-body">
        <div id="profileCard-right-column-top">
          {/* had to add this logic to see search results because some profiles had no bootcamp */}
          {props.profile.enrollment[0] && <h3 className="card-title">
            {props.profile.user.first_name} {props.profile.user.last_name}, {props.profile.enrollment[0].bootcamp.name} 
          </h3> }
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