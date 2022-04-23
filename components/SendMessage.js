import { useState } from "react";
import { useMoralis } from "react-moralis";

const SendMessage = ({ endOfMessages }) => {
  const { Moralis, user } = useMoralis();
  const [message, setMessage] = useState("");

  const send = (e) => {
    e.preventDefault();

    if (!message) return;

    const Messages = Moralis.Object.extend("Messages");
    const messages = new Messages();
    messages
      .save({
        message: message,
        username: user.getUsername(),
        eth: user.get("ethAddress"),
      })
      .then(
        (message) => {},
        (error) => {
          console.log(error);
        }
      );

    endOfMessages.current.scrollIntoView({ behavior: "smooth" });

    setMessage("");
  };
  return (
    <form className="z-50 border-4 border-cyan-400 max-w-2xl fixed bottom-10 bg-black/70 px-6 md:py-3 lg:py-4 py-2 w-11/12 flex rounded-full">
      <input
        className="outline-none flex-grow bg-transparent pr-5 placeholder:text-white/70 "
        placeholder="Type you message!"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit" onClick={send} className="font-bold text-cyan-400">
        Send
      </button>
    </form>
  );
};

export default SendMessage;
