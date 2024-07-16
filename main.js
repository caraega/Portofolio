// function toggleDetail(e){
//  const target =$(e.target)

//  const item =($(target).parents(".about-exp-item"))
//  const detail =($(target).children(".about-exp-item-detail"))

// //  console.log($(target).children(".about-exp-item-detail")) 
// //  console.log($(target).parents(".about-exp-item")) untuk cari parent

// $(detail).slideToggle()
// }


function toggleDetail(e) {
    // Mengambil target elemen yang diklik
    const target = $(e.target);

    // Mengambil elemen .about-exp-item yang merupakan parent dari target
    const item = target.closest(".about-exp-item");

    // Mengambil elemen .about-exp-item-detail yang merupakan anak dari elemen item
    const detail = item.find(".about-exp-item-detail");

    // Menampilkan atau menyembunyikan elemen detail dengan animasi slide
    detail.slideToggle();
}
