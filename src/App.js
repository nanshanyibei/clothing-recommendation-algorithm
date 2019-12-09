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
    fetch(`http://39.97.184.70:3002/getuserlist?uid=${this.state.inputValue}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log('res', res)
        let temp = []
        res.data.map(e => {
          const element = {}
          element.uid_neights_list = e.uid_neights_list.split('|')[Math.ceil(Math.random()*(e.uid_neights_list.split('|').length - 3))]
          element.title_neights_list = e.title_neights_list.split('|')[Math.ceil(Math.random()*(e.title_neights_list.split("|").length - 3))]
          element._id = e._id
          temp.push(element)
        })
        this.setState({contentDisplay: temp})
      })
  }
  AddClick = () => {
    console.log("广告相关")
    fetch(`http://39.97.184.70:3002/getuserlist?title=${this.state.inputValue}`)
      .then(res => {
        return res.json()
      })
      .then(res => {
        console.log('res', res)
        let temp = []
        res.data.map(e => {
          const element = {}
          element.uid_neights_list = e.uid_neights_list.split('|')[Math.ceil(Math.random()*(e.uid_neights_list.split('|').length - 3))]
          element.title_neights_list = e.title_neights_list.split('|')[Math.ceil(Math.random()*(e.title_neights_list.split("|").length - 3))]
          element._id = e._id
          temp.push(element)
        })
        this.setState({contentDisplay: temp})
      })
  }
  render(){
    return (
      <div className="App">
        <div className="search-area">
          <p className="adverse-demo">广告推荐系统demo</p>
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
          <div className="contextual-information">抽取的上下文信息</div>
          <span className="top-content">用户相关</span>
          <span className="top-content" style={{borderLeft: 0}}>title相关</span>
          {this.state.contentDisplay.map(e => {
            return <div className="content-search-element" key={e._id}>
              <div className="top-title-content">{e.uid_neights_list}</div>
              <div className="top-title-search">{e.title_neights_list}</div>
            </div>
          })}
        </div>
      </div>
    )
  }
}

export default App;
