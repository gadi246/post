var form = document.querySelector('form');
form.addEventListener('submit', function (e) {
   e.preventDefault();
    var formElm = e.target;
    var formData = new FormData(formElm);
    postItem(formData.get('name'));
});
function postItem(item){
    var newItem = {name:item,lastEntry: new Date(),cash:(Math.floor(Math.random()* 100 - 50))};
    var  str = document.querySelector('#template').innerHTML;
    var result = new EJS({text:str}).render(newItem);
    document.querySelector('.user-data').innerHTML = result;
}