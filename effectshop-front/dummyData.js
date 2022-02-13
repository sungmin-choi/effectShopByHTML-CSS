const item1={
    id:'1',
    title:'Button Effect',
    html:`
    <div class="Button_box">
    <button class="button" id="button1">Hover me</button>
    <button class="button" id="button2">Hover me</button>
    </div>
    `,
    css:`  
    .Button_box {
      text-align: center;
      margin-top: 20%;
    }
    
    .button {
      width: 100px;
      height: 60px;
      border: 1px solid #63cdda;
      color: #63cdda;
      background-color: transparent;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transition: 0.8s;
      position: relative;
      overflow: hidden;
      margin: 10px;
    }
    #button1:hover,
    #button2:hover {
      color: white;
    }
    
    #button1::before,
    #button2::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0%;
      left: 0px;
      z-index: -1;
      background-color: #63cdda;
      transition: 0.8s;
    }
    #button1::before {
      top: 0;
      border-radius: 0 0 50% 50%;
    }
    #button2::before {
      bottom: 0;
      border-radius: 50% 50% 0 0;
    }
    #button1:hover::before,
    #button2:hover::before {
      height: 180%;
    }
  
    `
}

const item2={
    id:'2',
    title:'Heart Beat Animations',
    html:`
    <div class="body">
    <div class="container">
    <h3 class="text">Heart Beat</h3>
    <div class="box"></div>
    </div>
    </div>
    `,
    css:`
  .body{
    background-color: #574b90;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .text {
    color: aliceblue;
    font-size: 90px;
    font-weight: 700;
    cursor: pointer;
  }
  .box {
    background-color: #e66767;
    width: 200px;
    height: 100px;
    margin: 50px auto;
    cursor: pointer;
  }
  .text:hover,
  .box:hover {
    animation: heartbeat 1.5s infinite;
  }
  
  @keyframes heartbeat {
    from {
      transform: scale(1);
    }
    20% {
      transform: scale(1.3);
    }
    40% {
      transform: scale(1);
    }
    60% {
      transform: scale(1.3);
    }
    80% {
      transform: scale(1);
    }
  }
  
    `

}

const dummyData = [item1,item2];



export default dummyData