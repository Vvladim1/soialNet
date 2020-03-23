import React from 'react';
import preLoader from '../../../assets/images/preLoader.svg'

const Preloader = (props) => {
    return (
        <div>
          <img src={preLoader}/>
        </div>
    );
}

export default Preloader;