

const PropertyDisplayComp = (props) => {

  const items = props.data.map((item, idx) => 
  <span key={idx} className={props.colorClass}>{item.name}</span>
  )

  return (
    <div id="property-display-component">
      <h2>{props.name}</h2>
      <div id="property-display-items">
        {items}
      </div>
    </div>
  )
}

export default PropertyDisplayComp