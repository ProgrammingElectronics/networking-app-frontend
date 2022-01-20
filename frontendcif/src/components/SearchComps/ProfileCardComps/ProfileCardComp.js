import PropertyDisplayComp from "./PropertyDisplayComp"
import "./ProfileCardComp.css"
import ConnectionRequestAPI from "../../../api/ConnectionRequestAPI"
import { useContext, useState, useEffect } from "react"
import UserContext from "../../../contexts/UserContext"
import { MDBBadge } from 'mdb-react-ui-kit';


const ProfileCardComp = (props) => {

  // User Auth
  const token = localStorage.getItem("auth-user");
  
  // localStorage
  const userProfileID = localStorage.getItem('user_profile')

  const { user } = useContext(UserContext)
  const userInfo = user
  const [status, setStatus] = useState(false)
  const [color, setColor] = useState("warning")
  const [update, setUpdate] = useState(false)

  
  // useEffect(() => {
  //   setStatus(() => (false))

  // },[])

  // const [connections, setConnections] = useState([])  


  useEffect(() => {
  
    const getConnections = async () => {
      let data = await ConnectionRequestAPI.fetchConnections(token);
      
      console.log("all connections", data)

      if(data) {
        const connectStatus = data.filter((connection) => connection.to_profile === props.profile.id)
        setStatus(connectStatus[0].status)

        if(connectStatus[0].status === "accepted"){
          setColor("success")
        } else if (connectStatus[0].status === "rejected") {
          setColor("danger")
        }

      }
    }
    getConnections()
  },[props.industryFilter, props.skillFilter, props.bootcampFilter ])


  // useEffect(() => {

  //   setStatus(false)
  //   if(props.connections){
      
  //     //const connectStatus = props.connections.filter((connection) => connection.to_profile === props.profile.id)
  //     // console.log("all connections coming down as props", props.connections)
  //     // const connectStatus = props.connections.filter((connection) => {
  //     //   console.log("connection.from_profile",connection.from_profile)
  //     //   console.log("connection.to_profile",connection.to_profile)
  //     //   console.log("props.profile.id",props.profile.id)
  //     //   return connection.to_profile === props.profile.id
  //     // })
  //     // console.log("connectStatus", connectStatus)
  //     console.log("connectStatus", props.connections)

  //     // console.log('connection status', connectStatus)
      
  //     console.log('ProfileCardComp | useEffect | connectStatus', props.connections[0].status)
  //     setStatus(props.connections[0].status)
      
  //     if(props.connections[0].status === "accepted"){
  //       setColor("success")
  //     } else if (props.connections[0].status === "rejected") {
  //       setColor("danger")
  //     }
      
  //   }
  // }, [])

  const connectionHandler = async () => {
    setUpdate((val) => !val)
    console.log("ProfileCardComp | connectionHandler | e.target", props.profile.id)
    const userToken = localStorage['auth-user']

    const connectionObj = {
      "from_profile": userInfo.profile,
      "to_profile": props.profile.id,
      "status": "pending"
    }

    await ConnectionRequestAPI.createConnection(userToken, connectionObj)
    
  }

  const getStatus = () => {
    
    if(status) {
      return status
    } else {
      return false
    }
    
  }

//   <button onClick={connectionHandler} type="button" className="btn btn-info btn-rounded">
//   Connect
// </button>


  return (
    userInfo.profile !== props.profile.id ?
    <div id="profileCard" className="card">
      <div id="profileCard-left-column">
          <img src={props.profile.img_url} width="150" className="img-fluid" alt="profile"/>
          { getStatus() ?
          <MDBBadge id="status" color={color} className='ms-2' >{getStatus()}</MDBBadge>
          :
          <button onClick={connectionHandler} type="button" className="btn btn-info btn-rounded">Connect</button>
          }
      </div>
      <div id="profileCard-right-column" className="card-body">
        <div id="profileCard-right-column-top">
          {/* had to add this logic to see search results because some profiles had no bootcamp */}
          <h3 className="card-title">
            {props.profile.user.first_name} {props.profile.user.last_name} 
          </h3> 
          {props.profile.enrollment[0] && <h4 className='bootcamp-text'>{props.profile.enrollment[0].bootcamp.name}</h4>}
            <div className="card-text">
              <p >
                {props.profile.about_me}
              </p>
            </div>
            
        </div>
        <div id="profileCard-right-column-bottom">
          <PropertyDisplayComp name="Skills" data={props.profile.skills} colorClass="badge bg-secondary"/>
          <PropertyDisplayComp name="Industries" data={props.profile.industries} colorClass="badge bg-info text-dark"/>
        </div>
      </div>
    </div>:
    <></> 
  )
}

export default ProfileCardComp