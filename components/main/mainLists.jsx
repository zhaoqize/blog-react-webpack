import MainList from './mainList';
import {Spin} from 'antd';

//这里引入一定要用{}括起来
import {fetch} from '../untils/fetch';

var MainLists = React.createClass({
	getInitialState() {
	    return {
	        post:[]  
	    };
	},
	bindScroll:function(){
		const _this = this;
		let	  count = 1;
		//谷歌浏览器可见区域高度 document.documentElement.clientHeight
		//谷歌浏览器body区域高度 document.body.clientHeight = document.body.clientHeight
		//谷歌浏览器被卷进去的高度 document.body.scrollTop
		//谷歌浏览器被卷高度+可视区域高度 document.body.scrollHeight
		//判断滚动条接近底部 document.body.clientHeight - document.documentElement.clientHeight <= document.body.scrollTop
	    window.onscroll = function(){
	    	if(document.body.clientHeight - document.documentElement.clientHeight <= document.body.scrollTop){
	    		//console.log(document.body.scrollTop);
	    		ReactDOM.findDOMNode(_this.refs.spinLoad).style.display = 'block';
	    		fetch({
			      	url: '/server/getAllPages.php?bid=' + ++count,
			      	method: 'get',
			      	success:function(results){
			      		console.log("请求成功！");
			      		ReactDOM.findDOMNode(_this.refs.spinLoad).style.display = 'none';
			      		_this.setState({
			      			post: results
			      		})
			      		
			      	},
			      	error:function(){
			      		ReactDOM.findDOMNode(_this.refs.spinLoad).style.display = 'none';
			      		console.log("请求失败！");
			      	}
			      })  
	    	}
	    }  
		
	},
	componentDidMount() {
	  	const _this = this;

	  	_this.bindScroll();
	    //成功提交
	      fetch({
	      	url: '/server/getAllPages.php?bid=1',
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
					<div className="spin_load" ref="spinLoad">
						<Spin />
					</div>
				</div>
			</div>
		)
	}
})

export default MainLists






