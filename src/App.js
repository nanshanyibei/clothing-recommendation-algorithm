import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      contentDisplay: ['ajksdfjkasdfjksa','萨科技发数据开发开始']
    };
  }
  render(){
    return (
      <div className="App">
        <div className="search-area">
          <div className="searchs-input">
            <input className="sarch-input" value={this.state.inputValue} placeholder="请输入内容" onChange={e => {
              this.setState({
                inputValue: e.currentTarget.value
              })
            }}/>
          </div>
          <div className="searches-buttons">
            <button className="search-button" onClick={()=>{
              console.log("用户相关")
            }}>用户相关</button>
            <button className="search-button" onClick={()=>{
              console.log("广告相关")
            }}>广告相关</button>
          </div>
        </div>
        <div className="content-display-area">
          {this.state.contentDisplay.map(e => {
            return <div key={e}>{e}</div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
