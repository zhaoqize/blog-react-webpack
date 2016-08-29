import MainList from './mainList';

//这里引入一定要用{}括起来
import {fetch} from '../untils/fetch';

var MainLists = React.createClass({
	getInitialState() {
	    return {
	        post:[]  
	    };
	},
	componentDidMount() {
		const _this = this;
	    //成功提交
      fetch({
      	url: '/server/getAllPages.php',
      	method: 'get',
      	success:function(results){
      		console.log("请求成功！");
      		_this.setState({
      			post: results
      		})
      		
      	},
      	error:function(){
      		console.log("请求失败！");
      	}
      })  
	},
	render:function(){

		let posts = [],
			data = this.state.post;
		
		data.map(function(da){
			posts.push(<MainList key={ da.id }
								 title={ da.title } 
								 post={ da.post } 
								 time={ da.year+da.month+da.day}  
								 author={ da.author } />)
		})	

		return (
			<div>
				<div className="card_contant">
					{ posts }
				</div>
			</div>
		)
	}
})

export default MainLists






