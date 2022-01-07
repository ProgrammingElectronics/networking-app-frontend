import { Dropdown } from "react-bootstrap"


const DisplayFilters = (props) => {


  // handlers
  const handleSetFilter = (e) => {
    console.log("DisplayFilters--handleSetFilter")
    props.setFilter(e.target.name)
  }

  const items = props.filterList.map((item) => 
       <Dropdown.Item onClick={handleSetFilter} key={item.id} name={item.name} href="#/action-1">{item.name}</Dropdown.Item>
  )
  
  return (
      <div>{items}</div>
  )
}


export default DisplayFilters