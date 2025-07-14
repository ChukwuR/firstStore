import { Link } from 'react-router-dom';
import style from '../components/categoryComponents/category.module.css'
import './categoryLink.css'

function CatergoryLink(){
    return(
        <>
            <div className={style.cateLinkContainer} id="liquid">
                <div className="row cateRowWrap">
                    <div className='col-5 col-sm-5 col-md-4 col-lg-3' id='cateLinkTxtWrap'>
                        <div className="card">
                            <Link to='/phoneAndTabList' className={style.cateLinkTxt}><span className={style.neonText}><i className="bi bi-phone"></i> Phone and Tablet</span></Link>
                        </div>
                    </div>
                    <div className='col-5 col-sm-5 col-md-4 col-lg-3' id='cateLinkTxtWrap'>
                        <div className="card">
                            <Link to='/computerList' className={style.cateLinkTxt}><span className={style.neonText}>Computing</span></Link>
                        </div>
                    </div>
                    <div className='col-5 col-sm-5 col-md-4 col-lg-3' id='cateLinkTxtWrap'>
                        <div className="card">
                            <Link to='/gameList' className={style.cateLinkTxt}><span className={style.neonText}>Gaming</span></Link>
                        </div>
                    </div>
                    <div className='col-5 col-sm-5 col-md-4 col-lg-3' id='cateLinkTxtWrap'>
                        <div className="card">
                            <Link to='/homeApplianceList' className={style.cateLinkTxt}><span className={style.neonText}>Home & Appliance</span></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CatergoryLink;