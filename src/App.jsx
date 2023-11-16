import { useState } from 'react'
import styled from 'styled-components'
import './App.css'

function App() {
  const TitleField = styled.div`
    color: #F00078;
    p {
      font-size: 5rem;
      font-weight: 700;
      letter-spacing: 0.5rem;
    }
  `;
  const Description = styled.div`
    width: 80%;
    margin: 3rem auto 2rem;
    p {
      font-size: 2rem;
    }
  `;
  const EventInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 3rem 0;
  `;
  const EventCard = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    border: 5px solid #FFB5B5;
    margin-bottom: 3rem;

    .card_title {
      position: absolute;
      top: -22px;
      left: -57px;
      background: #FFFFFF;

      p {
        font-weight: 500;
        font-size: 3rem;
        color: #F00078;
      }
    }

    .card_body {
      position: absolute;
      background: #FFFFFF;
      white-space: nowrap;

      p {
        font-weight: 500;
        font-size: 2rem;
      }
    }

    .card_body.time {
      bottom: -15px;
      right: -70px;
    }
    .card_body.place {
      bottom: -15px;
      right: -90px;
    }
    .card_body.rule {
      width: 290px;
      white-space: normal;
      bottom: -60px;
      right: -232px;
    }
  `;
  const Hint = styled.div`
    p {
      font-size: 2rem;
    }
  `;

  return (
    <>
      <TitleField>
        <p>關於那些足跡</p>
      </TitleField>
      <Description>
        <p>故事，藉由人們觀察並且流傳，透過時間的堆積下成為大家共同的回憶。如同這一路走來，在某個時間回頭望去發現自已已經留下些許足跡。在團隊中新添了一年經歷的成員們，這一年是怎麼樣的故事呢？你是否也會對其他人留下的足跡感到好奇並想要一探究竟呢？</p>
      </Description>
      <EventInfo>
        <EventCard>
          <div className="card_title">
            <p>時間</p>
          </div>
          <div className="card_body time">
            <p>12月開始</p>
          </div>
        </EventCard>
        <EventCard>
          <div className="card_title">
            <p>地點</p>
          </div>
          <div className="card_body place">
            <p>禾多辦公室5F</p>
          </div>
        </EventCard>
        <EventCard>
          <div className="card_title">
            <p>規則</p>
          </div>
          <div className="card_body rule">
            <p>去找出隱藏在辦公室內的QR Code吧！</p>
          </div>
        </EventCard>
      </EventInfo>
      <Hint>
        <p>歡迎大家積極參與，還有可能拿到小獎品喔～</p>
      </Hint>
    </>
  )
}

export default App
