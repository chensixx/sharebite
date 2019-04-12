$(document).ready(function(){
 	
$("#Additem").click(function(){
  var txt = prompt("Add new section:", " ");
  var table = document.getElementById("items");
  var len1 = table.rows.length
  var row = table.rows[len1-1]
  var id = row.id
  for (var i = 0; i < myobj.MenuSection.length; i++){
      if (myobj.MenuSection[i].name == id){
        var items = myobj.MenuSection[i].Items
        var len2 = items.length
        items[len2] = {"title": txt, "price": 12} ;
      }
    }

  var newrow = table.insertRow(-1);

  var cell1 = newrow.insertCell(0);

  cell1.innerHTML = txt;

//    var row = $(this).closest('tr').clone();
//    console.log("hi");
//    row.find('input').val('');
//    $(this).closest('tr').after(row);
//    $('input[type="button"]', row).removeClass('AddNew').addClass('RemoveRow').val('Remove item');
// });

// $('table').on('click', '.RemoveRow', function(){
//   $(this).closest('tr').remove();
 });

  $("#Addmenu").click(function(){
    var txt = prompt("Add new section:", " ");
    if (txt == null || txt == "") {
      txt = "User cancelled the prompt.";
    } else {
    }

    var table = document.getElementById("sections");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);

    cell1.innerHTML = txt;
    var length = myobj.MenuSection.length
    myobj.MenuSection[length] = {"Items": [], "name": txt} ;
    console.log(myobj)
  });
   
$("#sections td").click(function () {
    var color = $(this).css("background-color")
    console.log(document.getElementById("sections").rows.length)
   $("#Additem").attr("disabled",false)

    var txt = this.innerHTML;


   
    for (var i = 0; i < myobj.MenuSection.length; i++){
      if (myobj.MenuSection[i].name == txt){
        var items = myobj.MenuSection[i].Items
      }
    }


    var table = document.getElementById("items")
    var len = (table.rows.length)

    var oldrow = table.rows[len-1]
    oldrow.setAttribute("id",txt)


  for(i = 0; i< items.length; i++){
    table.rows[i+1].cells[0].innerHTML = items[i].title;
  }
  if(len > 2){
  for(i = len; i > items.length+1; i--){
    table.rows[i-1].cells[0].innerHTML = "</br>";
  }
}
});

});

var myobj = {
    "MenuSection": [
        {
            "Items": [
                {
                    "title": "Chicken Over Rice",
                    "price": 12,
                }
            ],
            "name": "Lunch Specials"
        },
    
    
        {
            "Items": [
                {
                    "title": "Beef Over Rice",
                    "price": 12,
                }
            ],
            "name": "Dinner Specials"
        }
    ]
}

function add_menu() {


  var txt = prompt("Add new section:", " ");
  if (txt == null || txt == "") {
    txt = "User cancelled the prompt.";
  } else {
  }

  var table = document.getElementById("sections");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);

  cell1.innerHTML = txt;
  var length = myobj.MenuSection.length
  myobj.MenuSection[length] = {"Items": [], "name": txt} ;


}





