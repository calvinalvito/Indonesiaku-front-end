import data from "../data/destinasi.json";
import React from "react";
import { v4 as uuid } from "uuid";


class itemDestination extends React.Component {
  render() {
    return (
      <div>
        <CardComp arrydata={data.destination} />
      </div>
    );
  }
}

let CardComp = function (props) {
  //ALl data Array
  var destinationId = uuid().slice(1, 16);

  const listData = props.arrydata.map(function (data) {
    return (
      <div className="card-label" key={destinationId}>
        {data.name}
      </div>
    );
  });
  return <div> {listData} </div>;
};

export default itemDestination;
