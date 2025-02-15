import { useEffect, useState } from "react";
import "./chat.css";
import EmojiPicker from "emoji-picker-react";
import { useRef } from "react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState();

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Jane Doe</span>
            <p>Lorem ipsum dolor sit amet consectetur</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>

      <div className="center">
        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>

        <div className="message own">
          <div className="texts">
            <img
              src="https://t3.ftcdn.net/jpg/05/66/27/56/360_F_566275602_ewJ3sgEV27DQhETyuen8JHrVFM90rBhm.jpg"
              alt=""
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid facilis, ad,
              reiciendis itaque exercitationem molestias magni consectetur nemo aliquam vero facere
              animi corporis delectus amet optio enim tempora eligendi rem!
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>

      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          value={text}
          placeholder="Type a message..."
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img src="./emoji.png" alt="" onClick={() => setOpen((prev) => !prev)} />
          <div className="picker">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="sendButton">Send</button>
      </div>
    </div>
  );
};

export default Chat;
