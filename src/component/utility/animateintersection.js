export const  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
  
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-little');
  
      }
    });
  },{
    threshold:0
  });
  export const  resumeboserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-blackanimi');
      }
    });
  },{
    threshold:0
  });
  export const  blogobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    
    if(entry.isIntersecting){
        entry.target.classList.toggle('animate-bloganimi');
        entry.target.classList.remove('opacity-0');
    }
    });
  },{
    threshold:0
  });