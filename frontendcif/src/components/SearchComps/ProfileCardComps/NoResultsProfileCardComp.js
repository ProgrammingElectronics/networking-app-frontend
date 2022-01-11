import "./ProfileCardComp.css"
import noResultsImg from "../../../static/images/noResultsImg.png"

const NoResultsProfileCardComp = () => {

  return (
    <div id="profileCard" className="card">
      <div id="profileCard-left-column">
          <img src={noResultsImg} width="150"
          className="img-fluid" alt="profile"/>
      </div>
      <div id="profileCard-right-column" className="card-body">
        <div id="profileCard-right-column-top">
          <h3 className="card-title">
            We're Sorry! No results match your query. Please adjust your filters.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default NoResultsProfileCardComp