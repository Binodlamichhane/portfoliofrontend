export const  observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('binod intersectiong',entry.isIntersecting)
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-little');
        console.log(entry.target.classList)
      }
    });
  },{
    threshold:0
  });
  export const  resumeboserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log('binod intersectiong',entry.isIntersecting)
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-blackanimi');
      }
    });
  },{
    threshold:0
  });
  export const  blogobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
    console.log(entry.target);
    if(entry.isIntersecting){
        entry.target.classList.toggle('animate-bloganimi');
        entry.target.classList.remove('opacity-0');
    }
    });
  },{
    threshold:0
  });