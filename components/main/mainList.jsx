import {Card} from 'antd';

var MainList= React.createClass({
	
    render() {
    	const { title, post, time, author } = this.props;

        return (
        	
	        <Card title={title} extra={author + '--' + time} className="card_width" >
			   <div className="pageContent">{ post }</div>
			</Card>

        );
    }
});

export default MainList