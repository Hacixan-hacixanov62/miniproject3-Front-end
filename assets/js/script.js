// const footer = document.querySelector('footer')
// const header = document.querySelector('header');

// header.innerHTML = `
// <div class="row col-12">
// <div class="col-3 logo-menu ">
//   <div class="col-6 mt-4">
//     <img src="./assets/images/logo.png" alt="">
//   </div>
//   <div class="col-6 mt-4" class="category">
//     <!-- <div class="icon"></div>
//           <span class="mx-5">Category</span> -->
//     <i class="fa-solid fa-bars mt-2 mx-3"></i>Category
//   <ul class="list-category">
//     <li class="list-category-item"><a href="#">English Learning</a></li>
//     <li class="list-category-item"><a href="#">Web Development</a></li>
//     <li class="list-category-item"><a href="#">Logo Design</a></li>
//     <li class="list-category-item"><a href="#">Motion Graphics</a></li>
//     <li class="list-category-item"><a href="#">Video Edition</a></li>
//   </ul>
//   </div>
// </div>
// <div class="col-5 pages">
//   <ul class="pagesul" style="gap: 20px;margin-top: 30px">
//     <li>
//       <a href="index.html" class="">Home</a>
//       <ul class="list-group">
//         <li class="list-group-item"><a href="#">Home style 1</a></li>
//         <li class="list-group-item"><a href="#">Home style 2</a></li>
//         <li class="list-group-item"><a href="#">Home style 3</a></li>

//       </ul>
//     </li>
//     <li><a href="#">Courses</a></li>
//     <li><a href="blog.html">Blog</a></li>
//     <li><a href="#">Pages</a></li>
//     <li><a href="Contact.html">Contact</a></li>
//   </ul>
// </div>
// <div class="col-4 shbtn mt-3 d-flex">
//   <div class="search d-flex align-items-center ">
//   <div class='posRelative d-flex align-items-center'>    
//     <i class="fa-solid fa-magnifying-glass mx-3" style=""></i>
//     <input type="text" placeholder="Search..">
//     <img src="./assets/images/cart[1].svg" alt="" class='posAbs'>
//     </div>
//     <a class="basket-count">2</a>
//   </div>
//   <button class="btn btn-primary mx-3">Try for free</button>
// </div>
// </div>`


//footer.innerHTML = `
// <div class="container">
// <footer class="py-5">
//     <div class="row">
//         <div class="col-6 col-md-3 mb-3">
//             <ul class="nav">
//                 <img src="https://ng-educal-by.netlify.app/assets/img/logo/logo-2.png" alt=""
//                     style="object-fit: contain;" class="mb-4">
//                 <p style="padding:0 ;margin: 0;color:  #a1a2ab;">
//                     Great lesson ideas and lesson plans for ESL teachers! Educators can customize lesson
//                     plans to best.
//                 </p>
//             </ul>

//             <div class="mt-3">
//                 <button class="social-media-icon-facebook"><i class="fa-brands fa-facebook-f"></i></button>
//                 <button class="social-media-icon-twitter mx-1"><i class="fa-brands fa-twitter"></i></button>
//                 <button class="social-media-icon-pinterest"><i
//                         class="fa-brands fa-pinterest-p"></i></button>
//             </div>
//         </div>

//         <div class="col-6 col-md-2 offset-md-1  mb-3">
//             <h5>Company</h5>
//             <ul class="nav flex-column">
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">About</a></li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Courses</a>
//                 </li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Events</a>
//                 </li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Instructor</a></li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Career</a>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Become a Teacher</a>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Contact
//                 </a>
//                 </li>
//             </ul>
//         </div>

//         <div class="col-6 col-md-3 mb-3">
//             <h5>Platform</h5>
//             <ul class="nav flex-column">
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Browse Library</a></li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Library</a>
//                 </li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Partners</a>
//                 </li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">News & Blogs</a></li>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">FAQs</a>
//                 <li class="nav-item mb-2"><a href="#" class="nav-link p-0">Tutorials</a>
//                 </li>
//             </ul>
//         </div>

//         <div class="col-md-3 mb-3">
//             <form>
//                 <h5>Subscribe to our newsletter</h5>
//                 <p>Monthly digest of what's new and exciting from us.</p>
//                 <div class="d-flex form-elemets">
//                     <input id="newsletter1" type="text" class="form-control"
//                         placeholder="Your email address">
//                     <button class="btn btn-primary footer-button" type="button"><i
//                             class="fa-solid fa-arrow-right"></i>
//                     </button>
//                 </div>
//             </form>
//             <div>
//                 <p style="margin: 0;padding: 0;color: white;">Get the latest news and updates right at your
//                     inbox.</p>
//             </div>
//         </div>
//     </div>

//     <div class="d-flex flex-column  justify-content-between py-4 my-4 border-top">
//         <p class="text-center" style="color: white;">© 2024 Company, Inc. All rights reserved. Design By Theme Pure</p>
//         <ul class="list-unstyled d-flex">
//             <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
//                         <use xlink:href="#twitter"></use>
//                     </svg></a></li>
//             <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
//                         <use xlink:href="#instagram"></use>
//                     </svg></a></li>
//             <li class="ms-3"><a class="link-body-emphasis" href="#"><svg class="bi" width="24" height="24">
//                         <use xlink:href="#facebook"></use>
//                     </svg></a></li>
//         </ul>
//     </div>
// </footer>
// </div> `