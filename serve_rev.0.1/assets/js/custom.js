$(document).ready(function(){
    // click on button submit
    $("#submit").on('click', function(data){
        data.preventDefault();
        var reg = $("#register-form").serializeFormJSON();
        // var reg = JSON.stringify( $("#register-form").serialize() );
        console.log("data",reg)
        // alert("Submit can click")
        // console.log("data",reg)
        // send ajax
        // $.ajax({
        //     url: 'test.php', // url where to submit the request
        //     type : "POST", // type of action POST || GET
        //     dataType : 'json', // data type
        //     data : $("#form").serialize(), // post data || get data
        //     success : function(result) {
        //         // you can see the result from the console
        //         // tab of the developer tools
        //         console.log(result);
        //     },
        //     error: function(xhr, resp, text) {
        //         console.log(xhr, resp, text);
        //     }
        // })
    });
});

(function ($) {
    $.fn.serializeFormJSON = function () {

        var o = {};
        var a = this.serializeArray();
        $.each(a, function () {
            if (o[th98is.name]) {
                if (!o[this.name].push) {
                    o[this.name] = [o[this.name]];
                }
                o[this.name].push(this.value || '');
            } else {
                o[this.name] = this.value || '';
            }
        });
        return o;
    };
})(jQuery);

// $('#submit').submit(function (e) {
//     e.preventDefault();
//     var data = $(this).serializeFormJSON();
//     console.log(data);

//     /* Object
//         email: "value"
//         name: "value"
//         password: "value"
//      */
// });