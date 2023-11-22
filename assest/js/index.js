// Topbar Active-Deactive section start //

  let actvlink=document.querySelector('.leftgroup>ul>li>a')
  actvlink.forEach(a=> {
     a.addEventListener('click',function(){
         actvlink.forEach(anc=> anc.ClassList.remove('active'));
          this.ClassList.add('active');
     });
  });

 // Topbar Active-Deactive section end //

 // Mega menu active on click section start //

  function showhide(){
     let click=document.getElementById("Mega-menu");
     if(click.style.display== "none"){
         click.style.display== "block";
     }
     else{
         click.style.display== "none";
     }
  }
 // Mega menu active on click section end //