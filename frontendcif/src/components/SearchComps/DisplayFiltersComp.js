import { Form } from "react-bootstrap"
import { useState } from "react"


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
      /**
      IMPORTANT NOTE
      The line below is what determines what gets added to the Filter,
      We can send any property of the item by a simple change.
      The corrsponding line in the else statment below must be changed as well
      */
      updatedFilterList.push(props.item.id)
      
      console.log("DisplayFilters--handleSetFilter | updatedFilterList", updatedFilterList)
      props.setFilter(updatedFilterList)
      setIsChecked(true)

    } else {
      
      /**
       * The line below is the corresponding change that must take place
       */
      const index = updatedFilterList.indexOf(props.item.id)
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