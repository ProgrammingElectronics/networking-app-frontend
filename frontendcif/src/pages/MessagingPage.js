import React, { useContext, useState, useEffect, useRef } from 'react';
import Talk from 'talkjs';
import UserContext from '../contexts/UserContext';
import Container from 'react-bootstrap/Container'



const MessagingPage = (props) => {

  const talkjsContainer = useRef();

  // context
  const userContext = useContext(UserContext);
  const { user } = userContext;

    
    useEffect(() => {
        // Promise can be `then`ed multiple times
        // console.log("User ID:", this.props.user.id)
        if (user) {
        Talk.ready
            .then(() => {
                const me = new Talk.User({
                    id: user.id,
                    name: user.username,
                    email: user.email,
                    photoUrl: props.profile.img_url,
                });

                if (!window.talkSession) {
                    window.talkSession = new Talk.Session({
                        appId: "tr2F9i6l",
                        me: me
                    });
                }
                if (props.userToMessage) {
                const other = new Talk.User({
                    id: props.userToMessage.user.id,
                    name: props.userToMessage.user.username,
                    email: props.userToMessage.user.email,
                    photoUrl: props.userToMessage.img_url
                });

                // You control the ID of a conversation. oneOnOneId is a helper method that generates
                // a unique conversation ID for a given pair of users. 
                const conversationId = Talk.oneOnOneId(me, other);
            
                const conversation = window.talkSession.getOrCreateConversation(conversationId);
                
                conversation.setParticipant(me);
                conversation.setParticipant(other);
                
            
                let inbox = window.talkSession.createInbox({
                    selected: conversation

                    
                });

                inbox.mount(talkjsContainer.current);


              } else {
                let inbox = window.talkSession.createInbox();

                inbox.mount(talkjsContainer.current);
              }

            })
              .catch(e => console.error(e));}
    }, [user, props.userToMessage]);


    
        return (
        <>
      
        
        <span>{ user &&
            <div style={{height: '500px', width: '100%'}} ref={talkjsContainer}></div>
        }
        </span>
    </>
        );
      }

export default MessagingPage; 