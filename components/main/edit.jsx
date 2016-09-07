
import RichTextEditor from 'react-rte';

var RT = React.createClass({
  getInitialState() {
      return {
         value: RichTextEditor.createEmptyValue()   
      };
  },
  onChange:function(value){
    value._cache.html = '<p><em>1asdas</em></p>';
    console.log(value);
    this.setState({value});

    if (this.props.onChange) {
      this.props.onChange(
        value.toString('html')
      );
    }
  },
  render () {
    return (
      <RichTextEditor
        value={this.state.value}
        onChange={this.onChange}
      />
    );
  }
})

var Edit = React.createClass({
  doRt:function(value){
    ReactDOM.findDOMNode(this.refs.text).value = value;
  },
  txChange:function(){

  },
  render:function(){
    return (
      <div>
        <div><RT onChange={this.doRt} /></div>
        <textarea onChange={this.txChange} ref='text' style={{ display:'inline-block',width:'45%',height:300 }}></textarea>
      </div>
    )
  }
})



export default Edit
  
