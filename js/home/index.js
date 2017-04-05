define(['jquery'], function($) {
	$.ajax({
		type: 'post',
		url: '/v6/login',
		data: {
			tc_name: '前端学院',
			tc_pass: '123456'
		},
		success: function(data) {
			console.log(data);
		}
	});
});
