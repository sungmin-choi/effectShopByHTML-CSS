const item1={
    id:'1',
    userId:'1',
    title:'Button Effect',
    html:`
    <div class="body">
    <div class="Button_box">
    <button class="button" id="button1">Hover me</button>
    <button class="button" id="button2">Hover me</button>
    </div>
    </div>
    `,
    css:`  
    .Button_box {
      text-align: center;
      margin-top: 20%;
    }.button {width: 100px;height: 60px;border: 1px solid #63cdda;
      color: #63cdda;
      background-color: transparent;
      text-transform: uppercase;
      font-weight: 600;
      cursor: pointer;
      transition: 0.8s;
      position: relative;
      overflow: hidden;
      margin: 10px;
    }#button1:hover,#button2:hover {
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
    userId:'1',
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
    height: 100%;
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

const item3 = {
  id:'3',
  userId:'1',
  title:'taskList',
  html:`
  <div class="body">
  <div class="task-list middle">
  <h2>My Tasks</h2>
  <label class="task">
      <input type="checkbox">
      <i class="fas fa-check"></i>
      <span>Work out</span>
  </label>

  <label class="task">
      <input type="checkbox">
      <i class="fas fa-check"></i>
      <span>Read a book</span>
  </label>

  <label class="task">
      <input type="checkbox">
      <i class="fas fa-check"></i>
      <span>take a shower</span>
  </label>

  <label class="task">
      <input type="checkbox">
      <i class="fas fa-check"></i>
      <span>recording Youtube</span>
  </label>
</div>
</div>
  `,
  css:`
  .body{
    background-color: #f3a683;
    display:flex;
    justify-content: center;
  }
  .middle {
    width: 400px;
    padding: 20px;
    background-color: #596275;
  }
  .task {
    display: flex;
    padding: 10px 0;
    align-items: center;
    cursor: pointer;
  }
  
  .task input {
    position: absolute;
    visibility: hidden;
  }
  
  .task i {
    display: inline-block;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    text-align: center;
    line-height: 48px;
    border: 1px solid white;
    font-size: 20px;
    margin-right: 14px;
    color: transparent;
  }
  
  .middle h2 {
    text-transform: uppercase;
    color: white;
    font-size: 30px;
  }
  .task-list span {
    font-size: 20px;
    color: white;
  }
  
  .task input:checked ~ i {
    color: #e74c3c;
  }
  .task input:checked ~ span {
    text-decoration: line-through;
    color: #e74c3c;
  }
  `
}

const item4 ={
  id:'4',
  userId:'1',
  title:'Button Effect2',
  html:`
  <div class="body">
  <div class="Button_box">
  <button class="button" id="button1">Hover me</button>
  <button class="button" id="button2">Hover me</button>
  <button class="button" id="button3">Hover me</button>
  <button class="button" id="button4">Hover me</button>
  </div>
  </div>
  `,
  css:`
  .body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: #596275;
  }
  .Button_box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 350px;
    height: 200px;
  }
  .button {
    position: relative;
    display: block;
    width: 150px;
    height: 60px;
    margin: 10px 10px;
    cursor: pointer;
    outline: none;
    background-color: transparent;
    border: 4px solid black;
    font-size: 15px;
    text-transform: uppercase;
    color: aliceblue;
  }
  #button1 {
    border: 4px solid #f7d794;
    color: #f7d794;
  }
  
  #button2 {
    border: 4px solid #63cdda;
    color: #63cdda;
  }
  
  #button3 {
    border: 4px solid #e15f41;
    color: #e15f41;
  }
  
  #button4 {
    border: 4px solid #574b90;
    color: #574b90;
  }
  .button::before,
  .button::after {
    content: " ";
    position: absolute;
    width: 20px;
    height: 4px;
    background-color: #596275;
    transform: skewX(50deg);
    transition: 0.3s linear;
  }
  .button::before {
    left: 10%;
    top: -4px;
  }
  .button::after {
    right: 10%;
    bottom: -4px;
  }
  .button:hover::before {
    left: 65%;
  }
  .button:hover::after {
    right: 65%;
  }
  
  `
}

const dummyData = [item1,item2,item3,item4];



export default dummyData