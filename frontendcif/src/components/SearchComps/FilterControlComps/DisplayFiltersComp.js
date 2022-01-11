import { Form } from "react-bootstrap"
import { useState } from "react"
import "./DisplayFiltersComp.css"

const DisplayFilters = (props) => {

  // states
  const [isChecked, setIsChecked ] = useState(false)

  // handlers
  /**
   * This handler changes the click state of the filter item
   * and adds or removes the filter from the filter array.
   * @param {*} e 
   */
  const handleSetFilter = (e) => {
    
    const updatedFilterList = props.filterList
    
    if(!isChecked) {  
      
      // Add the item to the filter
      updatedFilterList.push(props.item.name)
      console.log("DisplayFilters--handleSetFilter | updatedFilterList", updatedFilterList)
      props.setFilter(updatedFilterList)
      setIsChecked(true)

    } else {
      
      // Remove the item to the filter
      const index = updatedFilterList.indexOf(props.item.name)
      if(index !== -1) {
        updatedFilterList.splice(index,1)
        console.log("DisplayFilters--handleSetFilter | updatedFilterList", updatedFilterList)
        props.setFilter(updatedFilterList)
      }
      setIsChecked(false)
    }
  }

  
  return (
    <Form.Check
      className="filter-checkboxes"
      onChange={handleSetFilter} 
      key={props.item.id}
      label={props.item.name}
      name={props.item.name}
      checked={isChecked}
      value={props.item.name}
      type='checkbox'
      id={`default-${props.item.name}-1`}
    />
  )
}


export default DisplayFilters