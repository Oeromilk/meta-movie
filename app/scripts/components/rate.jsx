// Import Dependecies
var React = require('react');

// Import components
var Template = require('./nav-bar.jsx');

function Rating(props){
  return (
    <div className="text-center rating">{props.rating}</div>
  )
}

function Overall(props){
  return (
    <div>
      <div className="input-heading">
        <h4 className="">{props.name}</h4>
        <h4 className="text-right">{props.value}</h4>
      </div>
      <input onChange={props.handleChange} name={props.item} type="range" min="0" max="2" step="0.1" value={props.value}/>
    </div>
  )
}

function Acting(props){
  return (
    <div>
      <div className="input-heading">
        <h4 className="">{props.name}</h4>
        <h4 className="text-right">{props.value}</h4>
      </div>
      <input onChange={props.handleChange} name={props.item} type="range" min="0" max="2" step="0.1" value={props.value}/>
    </div>
  )
}

function Story(props){
  return (
    <div>
      <div className="input-heading">
        <h4 className="">{props.name}</h4>
        <h4 className="text-right">{props.value}</h4>
      </div>
      <input onChange={props.handleChange} name={props.item} type="range" min="0" max="2" step="0.1" value={props.value}/>
    </div>
  )
}

var Rate = React.createClass({
  getInitialState: function(){
    return {
      overall: 1,
      acting: 1,
      story: 1,
      userRating: {}
    }
  },
  handleOverall: function(e){
    this.setState({overall: e.target.value});
  },
  handleActing: function(e){
    this.setState({acting: e.target.value});
  },
  handleStory: function(e){
    this.setState({story: e.target.value});
  },
  render: function(){
    const totalRating = (parseFloat(this.state.overall) + parseFloat(this.state.acting) + parseFloat(this.state.story)).toFixed(1);
    return (
      <Template>
        <div className="well well-lg center-item">
          <Rating rating={totalRating}/>
          <Overall name="Overall Experience" item="overallExperience" handleChange={this.handleOverall} value={this.state.overall}/>
          <Acting name="Acting" item="acting" handleChange={this.handleActing} value={this.state.acting}/>
          <Story name="Story" item="story" handleChange={this.handleStory} value={this.state.story}/>
        </div>
      </Template>
    )
  }
});

module.exports = Rate;
