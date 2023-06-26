const button = document.querySelector('.random-btn');
const img = document.querySelector('.profile-image');
const infoTitle = document.querySelector('.info-title');
const infoContent = document.querySelector('.info-content');
const iconContainer = document.querySelector('.icon-container')
 

button.addEventListener("click", async() => {
   const res = await fetch("https://randomuser.me/api/?gender=female")
   const data = await res.json()
  
   const users = data.results[0]
   console.log(users)
   img.src = users.picture.large;
   infoContent.innerText = users.name.first
   let content = `
        <div class="icon name active" data-title="Hi, my name is" data-value="${users.name.first}">
                    <img src="https://img.icons8.com/ios/50/000000/user--v1.png" alt="">
         </div>
         <div class="icon email" data-title="Hi, my email is" data-value="${users.email}">
                    <img src="https://img.icons8.com/ios/50/000000/email-open.png" alt="">
         </div>
         <div class="icon dob" data-title="Hi, my date of birth is" data-value="${users.dob.date}">
                    <img src="https://img.icons8.com/ios/50/000000/calendar--v1.png" alt="">
         </div>
         <div class="icon location" data-title="Hi, my address is" data-value="${users.location.country},${users.location.city}">
                    <img src="https://img.icons8.com/ios/50/000000/map-marker--v1.png" alt="">
         </div>
         <div class="icon phone" data-title="Hi, my phone is" data-value="${users.phone}">
                    <img src="https://img.icons8.com/ios/50/000000/phone.png" alt="">
          </div>
          <div class="icon password" data-title="Hi, my address is" data-value="${users.location.street.name},${users.location.street.number}">
                    <img src="https://img.icons8.com/ios/50/000000/password-window.png" alt="">
         </div>`
         iconContainer.innerHTML = content;
         const icons = document.querySelectorAll(".icon");
         icons.forEach(icon => {
            icon.addEventListener("click", () => {
              infoTitle.innerText = icon.getAttribute("data-title")
              infoContent.innerText = icon.getAttribute("data-value")

              icons.forEach((icon) => {
                icon.classList.remove("active")
              })
              icon.classList.add("active")
            })
         })
});






















