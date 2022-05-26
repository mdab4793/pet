/* global kakao */


import React, { useEffect } from 'react';
import KakaoMapScript from "./KakaoMapScript.js";
import "./styles/Map.css"
import Appcalendar from './Appcalendar.js';
import Weather from "./Weather.js";
import Layout from './Layouts/Layout.js';

 function Map() {
    useEffect(() => {
        KakaoMapScript();
    }, []);

    return (
        <div>
            <Layout/>
      <table className='mapTable'>
       <tr id='myMap'></tr>
        </table>
        </div>
        
    );
}


export default Map;