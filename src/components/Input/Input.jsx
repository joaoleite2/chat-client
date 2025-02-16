import "./input.css";

const Input = ({ message, setMessage, sendMessage }) => {
  return(
    <>
      <form className="form">
        <input 
          type="text" 
          className="input"
          placeholder="Type a message"
          onKeyPress={(event)=> event.key === 'Enter' ? sendMessage(event) : null}
          value={message}
          onChange={(event) => setMessage(event.target.value)} 
        />
        <button className="sendButton" onClick={(event) => sendMessage(event)}>Send</button>
      </form>
    </>
  );
}

export default Input;