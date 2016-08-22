import reqwest from 'reqwest';

export function fetch(obj){
	reqwest({
	    url: rootURL + obj.url,
	    data: obj.data,
	    method: obj.method,
	    type: 'json',
	}).then(result =>{
	    obj.success(result);
	},function(){
	    obj.error();
	})
}

