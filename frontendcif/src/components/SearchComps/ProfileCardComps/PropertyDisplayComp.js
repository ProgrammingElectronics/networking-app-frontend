const PropertyDisplayComp = (props) => {

  const items = props.data.map((item) => 
  <span className={props.colorClass}>{item.name}</span>
  )

  return (
    <div id="property-display-component">
      <h2>{props.name}</h2>
      {items}
    </div>
  )
}

export default PropertyDisplayComp