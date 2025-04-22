import classes from './choose.module.css';





const Research = ({work,heading,cssCls,classesfor_h2,img}) => {
    return (
        <>
            <div className={`${cssCls} ${classes.choose_container}`}>
                <div>
                    <img src={`/images/${img}.png`} alt="" className={`${classes.image_choose}`} />
                </div>
                <h2 className={`${classesfor_h2}`}><span className="highlight">{heading}</span><span className={`${classes.together}`}> {work}</span></h2>
            </div>
        </>
    )
}


export default Research;