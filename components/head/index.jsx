import Reg from '../main/reg';
import { Popover, Form, Input, Button, Icon } from 'antd';

//这里引入一定要用{}括起来
import {fetch} from '../untils/fetch';

const createForm = Form.create;
const FormItem = Form.Item;

var Header = React.createClass({
	getInitialState() {
	    return {
	       visible: false,
	       name: '',
	       popVisible: false
	    };
	},
	login:function(){
		const _this = this;
		var formData = _this.props.form.getFieldsValue();
		console.log(formData)

		//成功提交
	      fetch({
	      	url: '/server/login.php',
	      	data: formData,
	      	method: 'post',
	      	success:function(results){
	      		console.log("请求成功！");

	      		_this.setState({
					name: formData.userName,
					popVisible: false 
				},function(){
					ReactDOM.findDOMNode(this.refs.regAndLogin).style.display = 'none';
					ReactDOM.findDOMNode(this.refs.userInfo).style.display = 'flex';
				})
				

	      	},
	      	error:function(){
	      		console.log("请求失败！");
	      	}
	      })
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
			ReactDOM.findDOMNode(this.refs.userInfo).style.display = 'flex';
		}

		this.setState({
			visible:false
		})
		
		
	},
	noop:function(){
		return false;
	},
	loginChange:function(visible){
    	this.props.form.resetFields();
    	this.setState({ popVisible: visible });
	},
	render:function(){

		const { getFieldProps, getFieldError, isFieldValidating } = this.props.form;

    	const nameProps = getFieldProps('userName', {
	      rules: [
	        { required: true, message: '用户名至少为 5 个字符' }
	      ],
	    });

	    const psdProps = getFieldProps('password', {
	      rules: [
	        { required: true, whitespace: true, message: '请填写密码' },
        	{ validator: this.checkPass },
	      ],
	    });

		const content = (
				<Form horizontal >
			        <FormItem
			          hasFeedback
			          label="账户"
			        >
			          <Input {...nameProps} placeholder="请输入用户名"/>
			        </FormItem>
			        <FormItem
			          hasFeedback
			          label="密码"
			        >
			          <Input {...psdProps} 
			          		 onContextMenu={ this.noop } onPaste={ this.noop } onCopy={ this.noop } onCut={ this.noop }
			           		 type="password" 
			          		 placeholder="请输入密码"/>
			        </FormItem>
			        <FormItem>
			        	<Button type="primary" onClick={ this.login }>确定</Button>
			        </FormItem>
		      	</Form>
				);


		return (
			<header>
				 <div className="wrap">
		            <div className="cube">
		                <div className="front">
		                    Zlog
		                </div>
		                <div className="back">
		                    Zlog
		                </div>
		                <div className="top">
		                    Zlog
		                </div>
		                <div className="bottom">
		                    Zlog
		                </div>
		                <div className="left">
		                    Zlog
		                </div>
		                <div className="right">
		                    Zlog
		                </div>
		            </div>
		        </div>
				<h2>ZBlog 个人博客分享平台</h2>
				<div className="header_hover" ref="regAndLogin">
					<Popover 
							 content={content} 
							 trigger="click" 
							 visible={this.state.popVisible} 
							 onVisibleChange={ this.loginChange }>
					    <a>登陆</a>
					</Popover>
					<a onClick={ this.reg } style={{ marginLeft:20 }}>注册</a>
				</div>
				<div ref="userInfo" style={{ display:'none',alignItems: 'center' }}>
					<a><Icon type="edit" />&nbsp;&nbsp;写博客</a>
					<div className="personImg"></div>
					<span style={{ marginLeft:10 }}> {this.state.name} </span>
					<a className="logout">退出</a>
				</div>
				<Reg visible={ this.state.visible } hideModal={ this.hideModal }/>
			</header>
		)
	}
})

Header = createForm()(Header);

export default Header

