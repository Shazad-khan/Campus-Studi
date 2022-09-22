import React from 'react';

import './Message-List.css';

function MessageList() {
    return (
        <div id="chat-message-list">
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">Haan bhai</div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/sagar.png")} alt="Sagar sarkar" />
                    <div className="message-text">
                        Sunna kal aaj kaise bhi hum log ko apna application live karna hai.
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Thik hai!!.
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/sagar.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        Haan bhai ho jya ga tm tension mat le aur haan wo login section ready ho gya hai all is set.
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Well we need to finish our project as we have deadline next just after few days.
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/sagar.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        I'm just in the process of finishing off the
                        last pieces of material for the project.
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        How's it going?
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row other-message">
                <div className="message-content">
                    <img src={require("../../images/profiles/sagar.png")} alt="Daryl Duckmanton" />
                    <div className="message-text">
                        Hey mate what's up?
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
            <div className="message-row you-message">
                <div className="message-content">
                    <div className="message-text">
                        Hey Sagar?
                    </div>
                    <div className="message-time">Sept 19</div>
                </div>
            </div>
        </div>
    );
}

export default MessageList;