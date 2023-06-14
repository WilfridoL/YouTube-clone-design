const btnMenu = document.querySelector('.setting');
const subMenu = document.querySelector('.submenu')
const body = document.body;

btnMenu.addEventListener('click', () => {
  subMenu.classList.toggle('active');
  if(subMenu.style.display === 'none'){
    subMenuOn()
  }else{
    subMenuOff()
  }
})
// document.getElementById('onSubMenu').addEventListener('click', subMenuOn)
// document.body.addEventListener('click', function(event){
//   const target = event.target;
//   console.log(target);
//   if(target !== subMenu && !subMenu.contains(target)){
//     subMenuOff()
//   }
// });
function subMenuOn() {
  subMenu.style.display = 'block';
    document.body.style.overflow = 'hidden'; 
}
function subMenuOff() {
  subMenu.style.display = 'none';
    document.body.style.overflow = 'auto'
}