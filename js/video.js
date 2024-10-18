//fetch ,loaf and show html
// create load category

const loadCategory = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/categories')
        .then((res) => res.json())
        .then((data) => displayCategory(data.categories))
        .catch((error) => console.log(error))
}

// for videos
const loadVideos = () => {
    // fetch the data
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
        .then((res) => res.json())
        .then((data) => DisplayVideos(data.videos))
        .catch((error) => console.log(error))

}



const DisplayVideos=(videos)=>{
    const videoContainer=document.getElementById("videos")
videos.forEach(video=>{
   console.log(video)
   const card=document.createElement("div");
   card.classList="card card-compact"
   card.innerHTML=`
     <figure class="h-[200px] relative">
    <img
      src=${video.thumbnail}/>
      ${
        video.others.posted_date?.length==0? "":`   <span class=" text-xs absolute bottom-2 bg-black rounded p-1 text-white right-2">${TimeCal(video.others.posted_date)}</span>`
    }
   
  </figure>
  <div class="px-0 py-3 flex gap-2">
  <div>
     <img class="w-10 h-10 rounded-full object-cover" src=${video.authors[0].profile_picture}/>
  </div>
  <div>
    <h2 class="font-bold">${video.title}</h2>
    <div class="flex items-center gap-2">
     <p class="text-gray-400"> ${
        video.authors[0].profile_name}</p>
    ${video.authors[0].verified=== true ? ` <img class="w-5 h-5" 
        src="https://img.icons8.com/?size=48&id=D9RtvkuOe31p&format=png"/>` :"" 

     }
     </div>
  </div>
  
  </div>
   
   `;
   videoContainer.append(card)
})
}

// 
// category
// : 
// "Music"
// category_id
// : 
// "1001"
const displayCategory = (categories) => {
    const categoryContainer = document.getElementById('categories')

    categories.forEach((item) => {
        console.log(item.category)
        // create a button
        const button = document.createElement('button');
        button.classList = "btn"
        button.innerText = item.category;
        categoryContainer.appendChild(button);
    })
    //    add button to category container


}


// time function
function TimeCal(time){
    const hours=parseInt(time/3600);
    let rem=time%3600;
    const minutes=parseInt(rem/60);
    rem= rem%60;
    return `${hours} hours ${minutes} Minutes and ${rem} ago`
}



loadCategory();
loadVideos();