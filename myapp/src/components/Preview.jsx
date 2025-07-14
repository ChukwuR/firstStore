import React, {useEffect} from 'react';
import './Preview.css'
import QualityPreview from './QualityPreview';
import TrustPreview from './TrustPreview';
import AboutPreview from './AboutPreview';

function Preview(){

    return(
        <>
            <div className='container' style={{marginTop:'130px'}}>
                <div className="row mt-5" id='cardPreviewWrap'>
                    <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
                        <AboutPreview/>
                    </div>
                    <div className="col-sm-12 col-md-12 col-lg-6 mt-4">
                        <div className="col-sm-12 col-md-12 col-lg-12">
                            <QualityPreview/>
                        </div>
                        <div className="col-sm-12 col-md-12 col-lg-12 mt-1">
                            <TrustPreview/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Preview;