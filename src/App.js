import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      contentDisplay: []
    };
  }
  UserClick = () => {
    console.log('用户相关')
    fetch(`http://localhost:3002/getuserlist?title=${this.state.inputValue}&is_click=0`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log('res', res)
        this.setState({contentDisplay: res.data})
      })
  }
  AddClick = () => {
    console.log("广告相关")
    fetch(`http://localhost:3002/getuserlist?title=${this.state.inputValue}&is_click=1`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log('res', res)
        this.setState({contentDisplay: res.data})
      })
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
            <button className="search-button" onClick={this.UserClick}>用户相关</button>
            <button className="search-button" onClick={this.AddClick}>广告相关</button>
          </div>
        </div>
        <div className="content-display-area">
          {this.state.contentDisplay.map(e => {
            return <div className="title-neights-list" key={e._id}>
              {e.title_neights_list}
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
