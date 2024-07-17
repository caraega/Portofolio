
// function toggleDetail(e) {
//     // Mengambil target elemen yang diklik
//     const target =$(e.target)

//     $(target).html("less Info").addClass("active")


//     // untuk mencari parents induk
//     const item = ($(target).parents(".about-exp-item"))
//     const detail =($(item).children(".about-exp-item-detail")) 
  
//     $(detail).slideToggle()

//     // untuk mencari dari atas kita mencari ke bawah anak dari parent
//     // lalu kita cari di console.log kita masukan about-exp-item-detail
//     // console.log($(item).children(""))  
// }
   

function toggleDetail (e) {
   const target = $(e.target)
   
   if ($(target).hasClass("active")){
      $(target).html("More Info").removeClass("active")
   }else{
      $(target).html("Less Info").addClass("active")
   }

// // Mengambil elemen .about-exp-item yang merupakan parent dari target
// // Mengambil elemen .about-exp-item-detail yang merupakan anak dari elemen item
   const item = $(target).parents(".about-exp-item")
   const detail =$(item).children(".about-exp-item-detail")
       // // Menampilkan atau menyembunyikan elemen detail dengan animasi slide
   $(detail).slideToggle()
   }
   
   
   
    // // Mengambil elemen .about-exp-item yang merupakan parent dari target
    // const item = target.closest(".about-exp-item");

    
    // const detail = item.find(".about-exp-item-detail");


    // detail.slideToggle();

