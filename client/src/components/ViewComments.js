import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router';
import axios from 'axios'

const getEventName = () => {
    return sessionStorage.getItem("event")
}

function ViewComments() {
    const history = useHistory();

    const containerStyle = {
        width: '500px',
        height: '500px'
    };

    const [admin, setAdmin] = useState({AdminEmail: ""})
        

    const getUser = {
        AdminEmail: sessionStorage.getItem("username")
    }

    const getCommentName = {
        CommentEventName: getEventName()
    }


    const [university, setUniversity] = useState({university: ""})

    const [comment1, setDetails1] = useState({CommentEventName: "", CommentText: "", CommentTime: "", CommentStudent: ""});
     
    const [comment2, setDetails2] = useState({CommentEventName: "", CommentText: "", CommentTime: "", CommentStudent: ""});

    const [comment3, setDetails3] = useState({CommentEventName: "", CommentText: "", CommentTime: "", CommentStudent: ""});
                                   
    const [comment4, setDetails4] = useState({CommentEventName: "", CommentText: "", CommentTime: "", CommentStudent: ""});

    const [comment5, setDetails5] = useState({CommentEventName: "", CommentText: "", CommentTime: "", CommentStudent: ""});

    const sampleEvents = {
        EventName: "Sample Event",
        EventType: "Public",
        EventPhone: "3214543298",
        EventCategory: "Free",
        EventDate: "2021-05-21",
        EventTime: "23:40",
        EventUniversity: "UCF",
        EventDesc: "This is a test event",
        EventLat: "-8.3432543534",
        EventLon: "23.664565476"
    }

    useEffect(() => {        
        axios.post("Comments/getComments", getCommentName).then(response => {
            if (response.data == null) {
                // routeChange();
                console.log("ERROR")
            }else {
                console.log(response.data)
                setDetails1({...comment1, 
                    CommentEventName: response.data[0].commentEvent, CommentText: response.data[0].text, 
                    CommentTime: response.data[0].time, CommentStudent: response.data[0].student})
                setDetails2({...comment2, 
                    CommentEventName: response.data[1].commentEvent, CommentText: response.data[1].text, 
                    CommentTime: response.data[1].time, CommentStudent: response.data[1].student})
                // setDetails3({...comment3, 
                //     CommentEventName: response.data[2].commentEvent, CommentText: response.data[1].text, 
                //     CommentTime: response.data[2].time, CommentStudent: response.data[1].student})
            }
        });

        console.log(comment1)
    }, [])

    const routeChange  = () => {
        history.push("./viewEvents")
    }

    return (
        <form className="ViewEvents">
            <div className="form-inner">    
                <h2> Viewing Comments from <span>{getEventName()}</span></h2>
                {/* {(error != "") ? ( <div className="error">{error}</div> ) : ""} */}
                <div className="box">
                    <div className="form-group">
                        <h4>Comment 1: </h4>
                        <h5>Event Name: <span>{comment1.CommentEventName}</span></h5>
                        <h5>Comment Text: <span>{comment1.CommentText}</span></h5>
                        <h5>Comment Time: <span>{comment1.CommentTime}</span></h5>
                        <h5>Comment Student: <span>{comment1.CommentStudent}</span></h5>
                    </div>

                    <div className="form-group">
                        <h4>Comment 2: </h4>
                        <h5>Event Name: <span>{comment2.CommentEventName}</span></h5>
                        <h5>Comment Text: <span>{comment2.CommentText}</span></h5>
                        <h5>Comment Time: <span>{comment2.CommentTime}</span></h5>
                        <h5>Comment Student: <span>{comment2.CommentStudent}</span></h5>
                    </div>

                    {/* <div className="form-group">
                        <h4>Comment 3: </h4>
                        <h5>Event Name: <span>{event3.EventName}</span></h5>
                        <h5>Event Type: <span>{event3.EventType}</span></h5>
                        <h5>Event Phone: <span>{event3.EventPhone}</span></h5>
                        <h5>Event Category: <span>{event3.EventCategory}</span></h5>
                        <h5>Event Date: <span>{event3.EventDate}</span></h5>
                        <h5>Event University: <span>{event3.EventUniversity}</span></h5>
                        <h5>Event Description: <span>{event3.EventDesc}</span></h5>
                        <h5>Lat: <span>{event3.EventLat}</span></h5>
                        <h5>Long: <span>{event3.EventLon}</span></h5>                        
                        <h5>Event Time: <span>{event3.EventTime}</span></h5>
                    </div> */}

                </div>

                <input type="button" value="RETURN" onClick={routeChange}/>
            </div>
        </form>
    )

}

export default ViewComments