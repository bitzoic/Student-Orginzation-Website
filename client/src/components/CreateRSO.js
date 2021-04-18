import React, {useState} from 'react';
import { useHistory } from 'react-router';
import './../index.css'

function CreateRSO() {
    const history = useHistory();
    const [details, setDetails] = useState({email1: "", email2: "", email3: "", email4: "", email5: "",});
    
    const [error, setError] = useState("");

    // Temporary check before checkjing if user is in database 
    const createRSO = details => {
        console.log(details);

        // 5 emails will be sent to database
        // The first one will be the admin of the group

        window.alert("RSO created");
    }
  
    const sumbitHandler = e => {
        e.preventDefault();

        // Put RSO in database
        createRSO(details)
    }

    const routeChange  = () => {
        history.push("./mainPage")
    }
  
      return (
        <form className="CreateRSO" onSubmit={sumbitHandler}>
            <div className="form-inner">    
                <h2> Create RSO </h2>
                <h3> Fill in 5 emails with the same domain</h3>
                <h4> The first email will be the administrator of the group </h4>
                {(error != "") ? ( <div className="error">{error}</div> ) : ""}
                <div className="box">
                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="login-input"
                        placeholder="Email"
                        id="email"
                        onChange={e => setDetails({...details, email1: e.target.value})} value={details.email1} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="login-input"
                        placeholder="Email"
                        id="email"
                        onChange={e => setDetails({...details, email2: e.target.value})} value={details.email2} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="login-input"
                        placeholder="Email"
                        id="email"
                        onChange={e => setDetails({...details, email3: e.target.value})} value={details.email3} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="login-input"
                        placeholder="Email"
                        id="email"
                        onChange={e => setDetails({...details, email4: e.target.value})} value={details.email4} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email: </label>
                        <input
                        type="email"
                        name="email"
                        className="login-input"
                        placeholder="Email"
                        id="email"
                        onChange={e => setDetails({...details, email5: e.target.value})} value={details.email5} />
                    </div>

                    <input type="submit" value="SUBMIT"/>
                    <input type="button" value="RETURN" onClick={routeChange}/>
                </div>
            </div>
        </form>
      );
}

export default CreateRSO