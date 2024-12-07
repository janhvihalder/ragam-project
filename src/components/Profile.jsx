function Profile({setTimeFrame, timeFrame}){
    //DONT FORGET TO RETURN
    return(
        
        // Profile card
        <div className="profile" style={{backgroundColor:"#1D204B"}}>
            
            {/* Image and name */}
            <div className="picture" style={{backgroundColor:"#5746EA"}}>

                {/* Image div */}
                <div className="robson">
                    <img src="/image-jeremy.png" style={{width: "70px", border:"solid 2px white", borderRadius:"999px"}}></img>
                </div>

                <div>
                    {/* Name */}
                    <div style={{fontSize: "small",color:"#8F87F9",fontWeight:"400"}}>
                        Report for
                    </div>
                    <div style={{fontSize: "xx-large",color:"white"}}>
                        Jeremy
                    </div>
                    <div style={{fontSize: "xx-large",color:"white"}}>
                        Robson
                    </div>
                </div>

            </div>

            {/* Toggles */}
            <div className="buttons">
                <div><button onClick={()=>{setTimeFrame('daily')}} className={`states ${timeFrame=='daily'&&" active-states "}`} >Daily</button></div>
                <div><button onClick={()=>{setTimeFrame('weekly')}} className={`states ${timeFrame=='weekly'&&" active-states "}`} >Weekly</button></div>
                <div><button onClick={()=>{setTimeFrame('monthly')}} className={`states ${timeFrame=='monthly'&&" active-states "}`} >Monthly</button></div>
            </div>
        </div>
    )
}

export default Profile
