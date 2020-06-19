const bodyElement = document.body
  let buttonElement = document.createElement('button')
  bodyElement.append(buttonElement)
  buttonElement.append('button')

  let mainElement = document.createElement('main')
  bodyElement.append(mainElement)
  
  let imageElement = document.createElement('img')
  imageElement.className = "image"
  mainElement.append(imageElement)
  imageElement.src = "https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/Dog-main_gdcdzd.jpg"
 imageElement.width = 750

let linkElement = document.createElement('a') 
linkElement.className = 'link'
mainElement.append(linkElement)
linkElement.href = 'https://www.dkfindout.com/us/animals-and-nature/dogs/domestic-dogs/'

linkElement.target ='_blank'
linkElement.append('Domestic Dogs')

buttonElement.addEventListener('click', function () {
 mainElement.remove()  
console.log('it works');
})
