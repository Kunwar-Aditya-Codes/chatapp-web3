import { useRef } from "react";
import { ByMoralis, useMoralis, useMoralisQuery } from "react-moralis";
import Message from "./Message";
import SendMessage from "./SendMessage";

const MINS_DURATION = 15;

const Messages = () => {
  const { user } = useMoralis();
  const endOfMessages = useRef(null);
  const { data, loading, error } = useMoralisQuery(
    "Messages",
    (query) =>
      query
        .ascending("createdAt")
        .greaterThan(
          "createdAt",
          new Date(Date.now() - 1000 * 60 * MINS_DURATION)
        ),
    [],
    {
      live: true,
    }
  );

  return (
    <div className="text-white pb-56">
      <div className="my-5">
        <ByMoralis
          variant="light"
          style={{
            marginLeft: "auto",
            marginRight: "auto",
            width: "12rem",
          }}
        />
      </div>
      <div className="space-y-8 p-4">
        {data.map((message) => (
          <Message key={message.id} message={message} />
        ))}
      </div>
      <div className="flex justify-center">
        <SendMessage endOfMessages={endOfMessages} />
      </div>
      <div
        ref={endOfMessages}
        className="text-center border bg-white text-black w-[20rem] mt-5 rounded-full p-1 font-medium mx-auto"
      >
        <p className="">You are up-to-date {user.getUsername()}!</p>
      </div>
    </div>
  );
};

export default Messages;
