import React from "react";

export default function Maps(props) {
  return (
    <iframe
      title="gMaps"
      src={props.maps}
      width="640"
      height="480"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
}
