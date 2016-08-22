import Reg from '../main/reg';

var Header = React.createClass({
	getInitialState() {
	    return {
	       visible: false,
	       name: ''
	    };
	},
	login:function(){
		
	},
	reg:function(){
		this.setState({
			visible:true
		})
	},
	hideModal:function(name){
		if(name){
			this.setState({
				name: name
			})
			ReactDOM.findDOMNode(this.refs.regAndLogin).style.display = 'none';
			ReactDOM.findDOMNode(this.refs.userInfo).style.display = 'block';
		}

		this.setState({
			visible:false
		})
		
		
	},
	render:function(){
		return (
			<header>
				<h2>ZBlog 个人博客分享平台</h2>
				<div className="header_hover" ref="regAndLogin">
					<a onClick={ this.login }>登陆</a>
					<a onClick={ this.reg } style={{ marginLeft:20 }}>注册</a>
				</div>
				<div ref="userInfo" style={{ display:'none' }}>
					<a>
						<span> {this.state.name} </span>
					</a>
				</div>
				<Reg visible={ this.state.visible } hideModal={ this.hideModal }/>
			</header>
		)
	}
})

export default Header

