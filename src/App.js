import React from "react";
import "./App.css";
import TrackerBar from "./components/TrackerBar";
import Iframe from "react-iframe";
import Modal from "react-modal";
import chatBotImg from "./components/images/undraw_Chat_re_re1u-removebg-preview.png";

function App() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <div className="inner_container">
        <div>
          <div id="alert">
            <a
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: "none" }}
              href="https://www.who.int/docs/default-source/coronaviruse/situation-reports/20200225-sitrep-36-covid-19.pdf#:~:text=Although%20for%20most%20people%20COVID,to%20be%20more%20vulnerable."
            >
              <p>COVID-19 Alert</p>
            </a>
          </div>
          <h1>Protect yourself; Save the world.</h1>
          <p>
            Kojo is a Self-Checker bot that'll help you make decisions about
            seeking appropriate medical care with regards to your current
            symptoms.
          </p>
          <button onClick={() => setIsOpen(true)}>Have a chat with Kojo</button>
        </div>
        <div className="imgCtn">
          <img src={chatBotImg} alt="chat bot" className="medCarImg" />
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <button
            onClick={closeModal}
            style={{
              margin: 10,
              background: "teal",
              border: "none",
              color: "#fff",
              height: 30,
              width: 50,
              borderRadius: 10,
            }}
          >
            Close
          </button>
          <Iframe
            url="https://healthcare-bot-et43lo6rl5pic.azurewebsites.net/"
            width="400px"
            height="650px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
          />
        </div>
      </Modal>

      <TrackerBar />
    </div>
  );
}

export default App;
