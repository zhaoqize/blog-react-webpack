import {Modal, Form, Input, Button} from 'antd';

//这里引入一定要用{}括起来
import {fetch} from '../untils/fetch';

const createForm = Form.create;
const FormItem = Form.Item;

var Reg = React.createClass({
	handleReg:function(){
		const _this = this;

		//e.preventDefault();
	    this.props.form.validateFields((errors, values) => {
	      if (!!errors) {
	        console.log('Errors in form!!!');
	        return;
	      }
	      
	      //成功提交
	      fetch({
	      	url: '/server/reg.php',
	      	data: values,
	      	method: 'post',
	      	success:function(results){
	      		console.log("请求成功！");

	      		_this.props.form.resetFields();
	      		_this.props.hideModal(values.userName);
	      	},
	      	error:function(){
	      		console.log("请求失败！");
	      	}
	      })
	      
	    });
	},
	handleCancel:function(){
		this.props.hideModal();
	},
	noop:function(){
		return false;
	},
	checkPass:function(rule, value, callback){
		const { validateFields } = this.props.form;
	    if (value) {
	      validateFields(['passwordRel'], { force: true });
	    }
	    callback();
	},
	checkPass2:function(rule, value, callback){
		const { getFieldValue } = this.props.form;
	    if (value && value !== getFieldValue('password')) {
	      callback('两次输入密码不一致！');
	    } else {
	      callback();
	    }
	},
    render() {
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

	    const pswrelProps = getFieldProps('passwordRel', {
	      rules: [
	          {
		        required: true,
		        whitespace: true,
		        message: '请再次输入密码',
		      }, {
		        validator: this.checkPass2,
		      }
	      ],
	    });

        return (
        	
	        <Modal title="注册" visible={this.props.visible}
	          onOk={this.handleReg} onCancel={this.handleCancel}
	          okText="注册" cancelText="取消"
	        >
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
		        <FormItem
		          hasFeedback
		          label="确认密码"
		        >
		          <Input {...pswrelProps} type="password" placeholder="两次输入密码保持一致"/>
		        </FormItem>
		      </Form>
        	</Modal>

        );
    }
});

Reg = createForm()(Reg);

export default Reg