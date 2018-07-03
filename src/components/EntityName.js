import React, { Component } from 'react';

class EntityName extends Component {
  render(){

    /* CSS */
    let entityNameH1 = {
      fontSize: '1.3em',
    }

    let entityNameSpan = {
      fontSize: '.7em',
      fontWeight: 'normal',
      textAlign: 'center',
      display: 'block',
    }

    /* JS */
    var entityName = this.props.entityName; //entity name or item name sent from TooltipScreen component
    let parent = this.props.parent;
    let heading = "";

    if(parent === 'ranking-entity') {
      heading = <span style={entityNameSpan}>{entityName}</span>;
    } else {
      heading = <h1 style={entityNameH1}>{entityName}</h1>;
    }


    return (
     <div className="entity-name">
        {heading}
     </div>
   );
 }}

export default EntityName;
