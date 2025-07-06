
function Contact() {
    return (
      <div>
        <h1 style={{fontWeight:'bolder'}}>Contact Us</h1>
        <form>
          <input type="text" placeholder="name" style={{border:'solid 1px black',borderRadius:'3px',padding:"6px",margin:'6px'}}/>
          <input type="text" placeholder="message" style={{border:'solid 1px black',borderRadius:'3px',padding:"6px",margin:'6px'}} />
          <button style={{border:'solid 1px black',borderRadius:'3px',padding:"6px",margin:'6px', backgroundColor:'lightskyblue'}}>Submit</button>
        </form>
      </div>
    );
  }
  
export default Contact;