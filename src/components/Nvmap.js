import React, { useEffect, useState } from 'react';
import { compose, withProps } from "recompose";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

const Nvmap = (props) => {

    // const { productInfo, imBusy, error } = useSelector(state => state.product, shallowEqual);

    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ 
                lat: parseInt(props.productInfo.company.address.latitude), 
                lng: parseInt(props.productInfo.company.address.longitude) 
            }}
        >
            <Marker position={{ 
                lat: parseInt(props.productInfo.company.address.latitude), 
                lng: parseInt(props.productInfo.company.address.longitude)
            }} />
        </GoogleMap>
    );

}

export default compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyD-d5HUssgMMxPzr5mPUaQpQjX6gNfdVnA&v=3.exp&libraries=geometry,drawing,places",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `400px` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)(Nvmap);