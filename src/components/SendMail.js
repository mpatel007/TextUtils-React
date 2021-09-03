import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function SendMail(props) {
    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: '',
        message: '',
        from_email: '',
        subject : '',
    });
    const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };
    function sendEmailSubmit(e) {
        e.preventDefault();
        console.log(toSend);
        emailjs.send(
          'service_4jcie4q',
          'template_y8yz9ul',
          toSend,
          'user_5koUwNxYgDLQprSHu1Tl9'
        )
          .then((response) => {
                props.showAlert(response.text + ' !!! Mail send Sucessfully ', "success");
          })
          .catch((error) => {
                props.showAlert(error, "danger");
          });
    }
    return (
        <div>
            <form onSubmit={sendEmailSubmit}>
                <div className="form-group mb-2">
                    <label  style={{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="name">From Name :- </label>
                    <input type="text"style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="from_name" name="from_name" value={toSend.reply_to} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-2">
                    <label  style={{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="name">To Name :- </label>
                    <input type="text"style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="to_name" name="to_name" value={toSend.to_name} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group mb-2">
                    <label  style={{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="Email address">Email address :-</label>
                    <input type="email" style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" value={toSend.from_email} onChange={handleChange} id="from_email" name="from_email" placeholder="Email address" />
                </div>
                <div className="form-group mb-2">
                    <label  style={{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="subject">Subject :- </label>
                    <input type="text"style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="subject" name="subject" value={toSend.subject} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter subject" />
                </div>
                {/* <div className="form-group mb-2">
                    <label  style={{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="subject">message :- </label>
                    <input type="text"style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="message" name="message" value={toSend.message} onChange={handleChange} aria-describedby="emailHelp" placeholder="Enter subject" />
                </div> */}
                <div className="form-group mb-2">
                    <label  style={{color: props.mode ==='dark'?'white':'#042743'}} htmlFor="html_message">Message :-</label>
                    <textarea style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode==='dark'?'white':'#042743'}} className="form-control" id="message" value={toSend.message} onChange={handleChange} name="message" rows="6"></textarea>
                    <small id="emailHelp" className="form-text text-muted" value={toSend.message} onChange={handleChange}>We'll never share your email with anyone else.</small>
                </div>
                <button type="submit" className="btn btn-primary">Send</button>
            </form>
        </div>
    )
}
