import React from 'react';

var watchValues = {"w": "Watched", 'tw': "To Watch"};
// so default style:
// var btnColor = {
//   backgroundColor: 'grey'
  
// }
//props.clicked if true, color green
//props.clicked if false, color biege
class WatchList extends React.Component {

  constructor(props) {
    super(props);
    // this.state = ({clicked: props.clicked, backColor: 'wheat'}); //initial state for status comes from app
    this.handleClick = this.handleClick.bind(this);
    this.watchValues = watchValues;
  }
  // componentWillMount(){
  //   console.log('In componetMount', this.props.backColor);
  //   if (this.state.clicked) {
  //     this.setState({backColor:'green'});
  //   }
  // }

  handleClick() {
    console.log('In watchlist ', this.props.buttonName);
    this.props.toggleWatchList(this.props.buttonName);
  }  

  render() {
    const buttonName = this.watchValues[this.props.buttonName];
    // const buttonClicked = this.state.clicked;
    // console.log('in watchlist, ', buttonClicked, this.props.buttonName);
    
    return (
      <button style={{backgroundColor:this.props.backColor}} className="watch" onClick={this.handleClick}>{buttonName}</button>
    );
  }
}

export default WatchList;
