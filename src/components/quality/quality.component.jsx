import qualityImg from '../../assets/homepage/quality_pic.jpg';

import './quality.styles.scss'

const Quality = () => {
    return (
        <section className='quality'>
            <div className='quality__information'>
                <h3 className='quality__information__title'>
                    Only The 
                    Best Quality 
                    For You
                </h3>
                <p className='quality__information__subtitle'>
                    From Planning to Post-Trip Follow-Up, we have all 
                    the best services special for you. Take a look at 
                    our numbers for our credibility.
                </p>
            </div>
            <div className='quality__image'>
                <img src={qualityImg} alt="quality section" />
            </div>
            <div className='quality__statistics'>
                <div>
                    <h5>20+</h5>
                    <p>years of experience</p>
                </div>
                <div>
                    <h5>100+</h5>
                    <p>destination countries</p>
                </div>
                <div>
                    <h5>10+</h5>
                    <p>tour & travel awards</p>
                </div>
                <div>
                    <h5>2,237,376</h5>
                    <p>delighted clients</p>
                </div>
            </div>
        </section>
    )
}

export default Quality;