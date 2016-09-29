$(document).ready(function(){
	console.log("ready hammy");
	if($('.drop-target').hasClass('pep-dpa')){
		console.log('hello')
	};
	$('.pulse').pep({
		useCSSTranslation: false,
		constrainTo: 'parent',
		droppable:   '.drop-target',
  		drag: function(ev, obj){
    		console.log(
      		[ "There is ",
         	obj,
       		" active drop region(s)." ].join('')
    		)
		},
	});

});