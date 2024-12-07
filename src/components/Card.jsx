import { IoEllipsisHorizontal } from "react-icons/io5";

//put curly brackets for multiple arguments
export default function Card({backgroundColor = "#FF8B64", topic="Work", icon="/icon-work.svg", timeFrame, data}){
    
    
    return(

        // Coloured Div
        <div style={{backgroundColor: backgroundColor}} className="colored-part">

            {/* Weird Icon - ALL PICTURES ARE IN PUBLIC SRC HERE AUTOMATICALLY SEARCHED IN PUBLIC FOR IMAGES,
            MENTION THE PATH WITHIN PUBLIC ONLY. ELSE YOU HAVE TO MENTION THE ENTIRE PATH WHICH IS NOT RECOMMENDED*/}
            <img src={icon} width={"50px"} style={{position:"absolute", right:"12px", top:"-5px"}}/>
            {/*mentioning} width only, automatically scales the height*/}
            
            {/* Information div */}
            <div className="info-part">
                
                {/* Topics div */}
                <div style={{display:"flex", justifyContent:"space-between", padding:"17px", fontSize:"small", fontWeight:"400"}}>
                    {topic}
                    {/* all  arguments used are enclosed in curly braces */}
                    <IoEllipsisHorizontal />
                </div>
                
                {/* Div for previous information */}
                <div className="prev-info">
                    {/* Current Value */}
                    <div style={{padding:"0px 17px", fontSize:"xxx-large"}}>
                        {data.timeframes[timeFrame].current}hrs
                    </div>

                    {/* Previous Value */}
                    <div style={{padding:"0px 17px 17px 17px", fontSize:"x-small", color:"#B7BBEC"}}>
                        {timeFrame==='daily'?"Yesterday": timeFrame==='weekly'?"Last Week" : "Last Month"} - {data.timeframes[timeFrame].previous}hrs
                    </div>
                </div>
            </div>
        </div>
    )
}