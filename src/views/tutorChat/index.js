// import React, { useState } from "react";
// import { Box, Container, makeStyles, Grid, Hidden } from "@material-ui/core";
// import "./main.css";
// import ReactGifted from "./ReactGiftedChat";
// import Websocket from "react-websocket";
// import { post_api } from "src/Api";
// import jwt from "jwt-decode";

// class Chat extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       loaded: false,
//       conversation: this.props.adminchat.conversation,
//       messages: [],
//       chatList: [],
//       avatar: "/static/images/oli-chat.png",
//     };
//   }

//   changeChat = (chat) => {
//     const id = chat.chatID;
//     const avatar = chat.avatar;
//     const name = chat.title;
//     const type = chat.type;

//     this.setState({ loaded: false, conversation: chat }, () => {
//       const chatList = [];
//       this.state.chatList.forEach((chat) => {
//         if (chat.chatID == id) {
//           chat["className"] = "selectedChat";
//         } else {
//           chat["className"] = "";
//         }
//         chatList.push(chat);
//       });
//       console.log(chatList);
//       const payload = {
//         conversation_id: id,
//       };
//       let url =
//         type == "admin"
//           ? "specific-tutor-admin-conversation"
//           : "specific-conversation";
//       let seenUrl =
//         type == "admin" ? "seen-admin-tutor-conversation" : "seen-conversation";
//       post_api(url, payload, (res) => {
//         const messages = [];
//         res["messages"].forEach((message) => {
//           console.log(message);
//           messages.push({
//             id: message["id"],
//             text: message["text"],
//             createdAt: message["time_sent"],
//             user: {
//               id: message["sender"] == "tutor" ? 1 : 3,
//               name: name,
//               avatar: avatar,
//             },
//           });
//         });
//         const lastMessage = messages[0];
//         console.log(lastMessage);
//         post_api(
//           seenUrl,
//           {
//             conversation_id: id,
//             looker: "tutor",
//           },
//           (res) => {}
//         );
//         this.setState({ chatList: chatList, messages: messages, loaded: true });
//       });
//     });
//   };

//   componentDidUpdate(props) {
//     if (this.props != props) {
//       this.changeSubtitles();
//     }
//   }

//   changeSubtitles = () => {
//     let latest_message = this.props.adminchat.latest_message;
//     let subtitle = latest_message.text;
//     let subtitleCut = subtitle.length > 55 ? 55 : subtitle.length;
//     subtitle = subtitle.substring(0, subtitleCut);
//     if (subtitleCut > 55) {
//       subtitle += "...";
//     }
//     if (latest_message.sender == "tutor") {
//       subtitle = "You: " + subtitle;
//     }
//     const chatList = [
//       {
//         avatar: "/static/images/oli-chat.png",
//         alt: "Oli",
//         title: "AKADS Buddy",
//         // subtitle:'',
//         subtitle: subtitle,
//         date: new Date(latest_message.time_sent),
//         // onClick:{changeChat},
//         chatID: this.props.adminchat.conversation.id,
//         type: "admin",
//         // unread: akadsUnread,
//       },
//     ];
//     this.props.activechat.forEach((chat) => {
//       const parent = chat.parent;
//       let latest_message = chat.latest_message;
//       let subtitle = latest_message.text;
//       let subtitleCut = subtitle.length > 55 ? 55 : subtitle.length;
//       subtitle = subtitle.substring(0, subtitleCut);
//       console.log(subtitleCut);
//       if (subtitleCut >= 55) {
//         subtitle += "...";
//       }
//       if (latest_message.sender == "tutor") {
//         subtitle = "You: " + subtitle;
//       }
//       chatList.push({
//         avatar: parent.picture,
//         alt: parent.first_name,
//         title: parent.first_name,
//         subtitle: subtitle,
//         date: new Date(latest_message.time_sent),
//         chatID: chat.conversation.id,
//         type: "parent",
//       });
//     });
//     this.setState({ chatList: chatList });
//   };

//   componentDidMount() {
//     console.log(this.props);
//     let latest_message = this.props.adminchat.latest_message;
//     let subtitle = latest_message.text;
//     let subtitleCut = subtitle.length > 55 ? 55 : subtitle.length;
//     subtitle = subtitle.substring(0, subtitleCut);
//     if (subtitleCut > 55) {
//       subtitle += "...";
//     }
//     if (latest_message.sender == "tutor") {
//       subtitle = "You: " + subtitle;
//     }
//     this.setState(
//       {
//         conversation: {
//           avatar: "/static/images/oli-chat.png",
//           alt: "Oli",
//           title: "AKADS Buddy",
//           // subtitle:'',
//           subtitle: subtitle,
//           date: new Date(latest_message.time_sent),
//           // onClick:{changeChat},
//           chatID: this.props.adminchat.conversation.id,
//           type: "admin",
//           // unread: akadsUnread,
//           // className: 'selectedChat',
//         },
//       },
//       () => {
//         this.changeSubtitles();
//       }
//     );
//     const payload = {
//       conversation_id: this.props.adminchat.conversation.id,
//     };
//     console.log(payload);
//     post_api("specific-tutor-admin-conversation", payload, (res) => {
//       const messages = [];
//       res["messages"].forEach((message) => {
//         console.log(message);
//         messages.push({
//           id: message["id"],
//           text: message["text"],
//           createdAt: message["time_sent"],
//           user: {
//             id: message["sender"] == "tutor" ? 1 : 3,
//             name: "AKADS Buddy",
//             avatar: "/static/images/oli-happy.png",
//           },
//         });
//       });
//       const lastMessage = messages[0];
//       console.log(lastMessage);
//       post_api(
//         "seen-admin-tutor-conversation",
//         {
//           conversation_id: this.props.adminchat.conversation.id,
//           looker: "tutor",
//         },
//         (res) => {}
//       );
//       this.setState({ messages: messages, loaded: true });
//     });
//   }

//   handleData = (data) => {
//     const message = JSON.parse(data);
//     if (message["message"] == "update") {
//       const payload = {
//         conversation_id: this.state.conversation.chatID,
//         receiver: "tutor",
//       };
//       let url =
//         this.state.conversation.type == "admin"
//           ? "get-unseen-specific-tutor-admin-conversation"
//           : "get-unseen-specific-conversation";
//       let seenUrl =
//         this.state.conversation.type == "admin"
//           ? "seen-admin-tutor-conversation"
//           : "seen-conversation";
//       post_api(url, payload, (res) => {
//         const messages = this.state.messages;
//         res["messages"].forEach((message) => {
//           console.log(message);
//           messages.unshift({
//             id: message["id"],
//             text: message["text"],
//             createdAt: message["time_sent"],
//             user: {
//               id: message["sender"] == "tutor" ? 1 : 3,
//               name: this.state.conversation.title,
//               avatar: this.state.conversation.avatar,
//             },
//           });
//         });
//         if (res["messages"].length > 0) {
//           let latest_message = res["messages"][0];
//           this.changeSubtitles(latest_message);
//         }
//         post_api(
//           seenUrl,
//           {
//             conversation_id: this.state.conversation.chatID,
//             looker: "tutor",
//           },
//           (res) => {}
//         );
//         console.log(messages);
//         this.setState({ messages: messages, loaded: true });
//       });
//       // post_api('specific-tutor-admin-conversation', payload, (res) => {
//       //   const messages = []
//       //   res['messages'].forEach(message => {
//       //     console.log(message)
//       //     messages.push(
//       //       {
//       //         id: message['id'],
//       //         text: message['text'],
//       //         createdAt: message['time_sent'],
//       //         user: {
//       //           id: message['sender'] == 'tutor' ? 1 : 3,
//       //           name: 'AKADS Buddy',
//       //           avatar: '/static/images/oli-happy.png',
//       //         }
//       //       }
//       //     )
//       //   })
//       //   post_api('seen-admin-tutor-conversation', {
//       //     'conversation_id': this.props.adminchat.conversation.id,
//       //     'looker': 'tutor'
//       //   } ,(res) => {})
//       //   this.setState({messages:messages, loaded: true})
//       // })
//     }
//   };

//   render() {
//     const styles = {
//       container: {
//         flex: 1,
//         display: "flex",
//         flexDirection: "row",
//         height: "100%",
//         background: "#FFF",
//       },
//       channelList: {
//         display: "flex",
//         flex: 1,
//         flexDirection: "column",
//       },
//       chat: {
//         display: "flex",
//         flex: 3,
//         flexDirection: "column",
//         borderWidth: "1px",
//         borderColor: "#ccc",
//         borderRightStyle: "solid",
//         borderLeftStyle: "solid",
//       },
//       settings: {
//         display: "flex",
//         flex: 1,
//         flexDirection: "column",
//       },
//     };

//     const chatList = this.state.chatList;
//     const loaded = this.state.loaded;
//     const user_id = jwt(localStorage.getItem("session_token")).id;

//     return (
//       <div style={styles.container}>
//         <Websocket
//           url={
//             process.env.REACT_APP_WS_URL +
//             "/ws/" +
//             "tutor" +
//             String(user_id) +
//             "/"
//           }
//           onMessage={this.handleData}
//         />
//         <div style={styles.channelList}>
//           {chatList.map((chat) => (
//             <ChatItem
//               avatar={chat.avatar}
//               alt={chat.alt}
//               title={chat.title}
//               subtitle={chat.subtitle}
//               date={chat.date}
//               unread={chat.unread}
//               className={chat.className}
//               onClick={() => this.changeChat(chat)}
//             />
//           ))}
//         </div>
//         <div style={styles.chat}>
//           <ReactGifted
//             loaded={this.state.loaded}
//             user={"tutor"}
//             conversation={this.state.conversation}
//             messages={this.state.messages}
//           />
//         </div>
//       </div>
//     );
//   }
// }

// export default Chat;
