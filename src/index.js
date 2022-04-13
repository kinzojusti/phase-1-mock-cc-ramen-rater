// write your code here
document.addEventListener("DOMContentLoaded", function() {
    
    fetch('http://localhost:3000/ramens')
    .then(response => response.json() )
    .then( ramens => ramens.forEach( ramen => renderRamen(ramen))) 
    
    function renderRamen(ramen){
        //getting Ramen Menu:
        const ramenMenu = document.querySelector('#ramen-menu')
       //creating image:
        const image = document.createElement("img")
        image.setAttribute("src", ramen.image )
        image.setAttribute("alt", ramen.name)
        
        //adding Images to ramen menu 
        ramenMenu.appendChild(image)
        //adding a eventListner on "click" to feature image:
        image.addEventListener("click", () => featureRamen(ramen))
    }

    function featureRamen(ramen){
        //get detailed image
        const detailedImage = document.querySelector('.detail-image')
        detailedImage.setAttribute("src", ramen.image)
        detailedImage.setAttribute("alt", ramen.name)
        //adding ramens name to .textcontent holder :
        const detailedname = document.querySelector('.name')
        detailedname.textContent = ramen.name
        const detailRestaurant = document.querySelector('.restaurant')
        detailRestaurant.textContent = ramen.restaurant
        const detailrating = document.querySelector('#rating-display')
        detailrating.textContent = ramen.rating
        const detailComment = document.querySelector('#comment-display')
        detailComment.textContent = ramen.comment
        //console.log()
    
    }
    document.addEventListener("submit", (e) => newFormRamen(e))
        function newFormRamen(e){
            e.preventDefault()
            //submitting event into detailed variables:
            //calling textContent to take the information to store to ramen-menu:
            const detailedname = e.target.name.value
            const detailedRestaurant = e.target.restaurant.value
            const detailedImage = e.target.image.value
            const detailedRating = e.target.rating.value
            const detailedComment = e.target['new-comment'].value
            
            //New Added Form: 

            let addedRamen = {
                "id": 7,
                "name": detailedname,
                "resturant": detailedRestaurant,
                "Image": detailedImage,
                "rating": detailedRating,
                "comment": detailedComment
            }
renderRamen(addedRamen)
        }
    })