
// $(document).ready(function () {
//
//   $(".btn_info ").on('click',function(e){
//     e.preventDefault();
//
//     id = $(this).data("id")
//
//
//       $.get("/products/" + id +  "/description", function(data){
//             $("#product-" + id).html(data);
//           });
//        $.get( "/products/" + id + "/inventory", function(data){
//               // Need to render only for this html
//               if (data === "true") {
//                 $("#product-" + id).append("Available")
//               } else {
//                 $("#product-" + id).appen("Sold Out")
//               }
//             });
//
//     })
//  });
