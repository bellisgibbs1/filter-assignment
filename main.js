const select = document.querySelector(".filter");
select.addEventListener("change", function (e) {
    const chosen_food = e.target.value;
    //everything that has the class item
    const currently_visible = document.querySelectorAll(".item.active");
    //this is what you want to see
  
    const make_visible = document.querySelectorAll(`.item.${chosen_mounments}`);
    
    // to remove the active class.
    currently_visible.forEach(function (mounments) {
        food.classList.remove("active")

    });

    make_visible.forEach(function (mounments) {
        food.classList.add("active")

    });


});