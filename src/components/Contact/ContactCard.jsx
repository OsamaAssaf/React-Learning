import Avatar from "../Avatar";
import Phone from "./Phone";
import Email from "./Email";

function ContactCard(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>

      <div className="bottom">
        <Phone tel={props.tel}></Phone>
        <Email email={props.email}></Email>
      </div>
    </div>
  );
}

export default ContactCard;
