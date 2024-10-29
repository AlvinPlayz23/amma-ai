import "./Main.css";
import { assets } from "../../assets/assets";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Main = () => {
  // destructuring the object of context
  const {
    input,
    setInput,
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>AMMA AI</p>
          <img src={assets.user_icon} alt="UserIcon" />
        </div>
        <div className="main-container">
          {!showResult ? (
            <>
              <div className="greet">
                <p>
                  <span>Hello, Sir </span>
                </p>
                <p>How can I assist you today?</p>
              </div>
              <div className="cards">
                <div className="card">
                  <p>Generate a To-Do list for me</p>
                  <img src={assets.compass_icon} alt="CompassIcon" />
                </div>
                <div className="card">
                  <p>Suggest me an idea for Science Exhibition</p>
                  <img src={assets.bulb_icon} alt="BulbIcon" />
                </div>
                <div className="card">
                  <p>Why is tekathon soo fun!</p>
                  <img src={assets.message_icon} alt="MessageIcon" />
                </div>
                <div className="card">
                  <p>Write a code for a simple 2D Unity game</p>
                  <img src={assets.code_icon} alt="CompassIcon" />
                </div>
              </div>
            </>
          ) : (
            <div className="result">
              <div className="result-title">
                <img src={assets.user_icon} alt="UserIcon" />
                <p>{recentPrompt}</p>
              </div>
              <div className="result-data">
                <img src={assets.gemini_icon} alt="GeminiIcon" />
                {loading ? (
                  <div className="loader">
                    <hr />
                    <hr />
                    <hr />
                  </div>
                ) : (
                  <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                )}
              </div>
            </div>
          )}

          <div className="main-bottom">
            <div className="search-box">
              <input
                onChange={(event) => setInput(event.target.value)}
                value={input}
                type="text"
                placeholder="Enter your message here"
              />
              <div className="search-box-icon">
                <img src={assets.gallery_icon} alt="GalleryIcon" />
                <img src={assets.mic_icon} alt="MicIcon" />
                {input ? (
                  <img
                    onClick={() => onSent()}
                    src={assets.send_icon}
                    alt="SendIcon"
                  />
                ) : null}
              </div>
            </div>
            <p className="bottom-info">
              An AI Chatbot made by Alvin from Class VIII-F, to present Techathon 24 Computer Science Exhibition.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
