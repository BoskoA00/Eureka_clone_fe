import { useContext, useEffect, useState } from "react";
import { MyContext } from "../HomeComponents/Context";
import "../../CSS/Shared/ChatComponent.css";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
import axios from "axios";
import SendIcon from "@mui/icons-material/Send";
import RefreshIcon from "@mui/icons-material/Refresh";
const ChatComponent = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(MyContext);
  const [unreadMessages, setUnreadMessages] = useState(0);
  const [profileSelected, setProfileSelected] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState({});
  const [messagesShown, setMessagesShown] = useState([]);
  const [messageSelected, setMessageSelected] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState({});
  const [newMessage, setNewMessage] = useState(false);
  const [users, setUsers] = useState([]);
  const [userToSend, setUsersToSend] = useState("");
  const [messageToSend, setMessageToSend] = useState("");
  const [messageToSendError, setMessageToSendError] = useState(false);
  const [userToSendError, setUserToSendError] = useState(false);
  const [messages, setMessages] = useState([]);
  const [uniqueEmails, setUniqueEmails] = useState([]);

  useEffect(() => {
    getUsers();
    getMessages();
  }, []);

  const userToSendHandler = (e) => {
    setUserToSendError(false);
    setUsersToSend(e.target.value);
  };

  const getUsers = async () => {
    try {
      let r = await axios.get(process.env.REACT_APP_API_URL + "api/User");
      setUsers(r.data);
    } catch (error) {
      console.log(error);
    }
  };
  const messageToSendHandler = (e) => {
    setMessageToSendError(false);
    setMessageToSend(e.target.value);
  };

  const sendMessage = async () => {
    let rId = 0;
    setUserToSendError(false);
    setMessageToSendError(false);
    setUsersToSend(userToSend.trim());
    if (userToSend === user.email) {
      setUserToSendError(true);
      setUsersToSend("You can't send message to yourself");
      return;
    }
    if (
      userToSend !== null &&
      userToSend.length > 0 &&
      userToSend !== undefined
    ) {
      try {
        let r = await axios.get(
          process.env.REACT_APP_API_URL + `api/User/${userToSend}`
        );
        if (r.data === null || r.data === undefined || r.data === "") {
          setUserToSendError(true);
          setUsersToSend("You must pick existing user");
          return;
        }
        rId = r.data.id;
      } catch (error) {
        console.log(error);
      }
    }
    setMessageToSend(messageToSend.trim());
    if (
      messageToSend.length === 0 ||
      messageToSend === undefined ||
      messageToSend === null ||
      messageToSend === "Messages have to have content"
    ) {
      setMessageToSendError(true);
      setMessageToSend("Messages have to have content");
      return;
    }
    try {
      const token = localStorage.getItem("token");

      const headers = {
        Authorization: `Bearer ${token}`,
      };
      await axios.post(
        process.env.REACT_APP_API_URL + "api/ChatMessages",
        {
          senderId: user.id,
          senderEmail: user.email,
          receiverId: rId,
          receiverEmail: userToSend,
          content: messageToSend,
        },
        { headers }
      );
      setMessageToSend("");
      setUsersToSend("");
      setNewMessage(false);
    } catch (error) {
      console.log(error);
    }
    getMessages();
    setSelectedProfile({});
    setProfileSelected(false);
    setMessagesShown([]);
    setSelectedMessage({});
  };

  const getMessages = async () => {
    try {
      const response = await axios.get(
        process.env.REACT_APP_API_URL + `api/ChatMessages/byUserId/${user.id}`
      );
      const messages = response.data;
      setMessages(messages);

      const emailMap = new Map();
      let unreadCount = 0;

      messages.forEach((m) => {
        if (!emailMap.has(m.receiverEmail)) {
          emailMap.set(m.receiverEmail, {
            id: m.receiverId,
            email: m.receiverEmail,
          });
        }

        if (m.status === 0 && m.receiverId === user.id) {
          unreadCount++;
        }
      });

      const uniqueEmails = Array.from(emailMap.values());
      setUniqueEmails(uniqueEmails);
      setUnreadMessages(unreadCount);
    } catch (error) {
      console.log(error);
    }
  };

  const openChat = () => {
    setSelectedMessage({});
    setMessageSelected(false);
    setSelectedProfile({});
    setProfileSelected(false);
    setOpen(!open);
  };

  const selectProfile = (email, id) => {
    setSelectedProfile({ email, id });
    setProfileSelected(true);
    let ms = [];
    messages.forEach((m) => {
      if (m.senderId === id || m.receiverId === id) {
        ms.push(m);
      }
    });
    setMessagesShown(ms.reverse());
  };

  const RefreshMessages = () => {
    getMessages();
  };

  const selectMessage = async (content, sender, id, status) => {
    setSelectedMessage({ content, sender, id, status });
    setMessageSelected(true);
    if (status === 0 && sender !== user.email) {
      try {
        await axios.put(
          process.env.REACT_APP_API_URL + `api/ChatMessages/${id}`
        );
        setUnreadMessages((prev) => prev + 1);
      } catch (error) {
        console.log(error);
      } finally {
        getMessages();
        let msgs = [];
        messagesShown.forEach((msg) => {
          if (msg.id === id) {
            msg.status = 1;
            msgs.push(msg);
          }
        });
        setMessagesShown(msgs);
      }
    }
  };

  const deselectMessage = () => {
    setSelectedMessage({});
    setMessageSelected(false);
    selectProfile(selectedProfile.email, selectedProfile.id);
  };

  return open === false ? (
    <div className="chat-closed" onClick={openChat}>
      <div>
        <h3>Messages</h3>
      </div>
      {unreadMessages > 0 && (
        <div className="chat-unread">{unreadMessages}</div>
      )}
    </div>
  ) : (
    <div className="chat-opened">
      <div className="chat-header">
        <div style={{ paddingLeft: "5px" }}>
          <h3>Messages</h3>
        </div>
        <div>
          <RefreshIcon
            sx={{ marginTop: "5px", "&:hover": { cursor: "pointer" } }}
            onClick={RefreshMessages}
          />
          {!newMessage && (
            <AddIcon
              sx={{ marginTop: "5px", "&:hover": { cursor: "pointer" } }}
              onClick={() => setNewMessage(true)}
            />
          )}
          <CloseIcon
            sx={{ marginTop: "5px", "&:hover": { cursor: "pointer" } }}
            onClick={openChat}
          />
        </div>
      </div>
      <div className="chat-container">
        {!newMessage ? (
          <>
            <div className="chat-profiles">
              {uniqueEmails.map(
                (ue) =>
                  ue.email !== user.email && (
                    <div
                      className="chat-profile"
                      onClick={() => selectProfile(ue.email, ue.id)}
                    >
                      <div className="chat-profile-f-letter">
                        <h1>{ue.email.charAt(0).toUpperCase()}</h1>
                      </div>
                      <div className="chat-profile-name">
                        <p>{ue.email}</p>
                      </div>
                    </div>
                  )
              )}
            </div>
            <div className="chat-box">
              {profileSelected && (
                <>
                  {!messageSelected ? (
                    messagesShown.map((ms) => (
                      <div
                        className="chat-box-message"
                        onClick={() =>
                          selectMessage(
                            ms.content,
                            ms.senderEmail,
                            ms.id,
                            ms.status
                          )
                        }
                      >
                        <div className="chat-box-message-header">
                          <div
                            className={
                              ms.status === 0 && ms.senderEmail !== user.email
                                ? "chat-box-message-sender unread"
                                : "chat-box-message-sender"
                            }
                          >
                            <h5>
                              {ms.senderEmail === user.email
                                ? "You"
                                : ms.senderEmail}
                            </h5>
                          </div>

                          <div
                            className={
                              ms.status === 0 && ms.senderEmail !== user.email
                                ? "chat-box-message-text unread"
                                : "chat-box-message-text "
                            }
                          >
                            <p>{ms.content.substring(0, 10) + "..."}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="chat-box-message-display">
                      <div className="chat-box-message-display-sender">
                        <div className="    ">
                          <ArrowBackIosIcon
                            sx={{
                              width: "20px",
                              height: "20px",
                              alignContent: "center",
                              display: "flex",
                              justifyContent: "center",
                              "&:hover": {
                                backgroundColor: "gray",
                                fill: "white",
                                cursor: "pointer",
                              },
                            }}
                            onClick={deselectMessage}
                          />
                        </div>
                        <div>{selectedMessage.sender}</div>
                      </div>
                      <div className="chat-box-message-display-text">
                        <p>{selectedMessage.content}</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
          </>
        ) : (
          <div className="new-message-container">
            <div className="new-message-header">
              <ArrowBackIosIcon
                fontSize="20px"
                sx={{
                  width: "20px",
                  height: "20px",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  "&:hover": {
                    backgroundColor: "gray",
                    fill: "white",
                    cursor: "pointer",
                  },
                }}
                onClick={() => setNewMessage(false)}
              />
              <input
                type="text"
                id="userToSend"
                placeholder="Please enter the receiver of the message"
                value={userToSend}
                onChange={userToSendHandler}
                list="usersEmail"
                className={userToSendError ? "error" : ""}
              />
              <datalist id="usersEmail">
                {users.map(
                  (u) =>
                    u.email !== user.email && (
                      <option key={u.id} value={u.email} />
                    )
                )}
              </datalist>
              <SendIcon
                fontSize="20px"
                sx={{
                  width: "20px",
                  height: "20px",
                  alignContent: "center",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "10px",
                  "&:hover": {
                    fill: "gray",
                    cursor: "pointer",
                  },
                }}
                onClick={sendMessage}
              />
            </div>
            <div className="textarea-div">
              <textarea
                className={messageToSendError ? "error" : ""}
                value={messageToSend}
                onChange={messageToSendHandler}
              ></textarea>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatComponent;
