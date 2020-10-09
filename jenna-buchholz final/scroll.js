const pixelsTag = document.querySelector("div.pixels")
const bodyTag = document.querySelector("body")
const progressTag = document.querySelector("div.progress")
const sections = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")
// when we scroll the page, update the pixels tag to be how far we've scrolled
 document.addEventListener("scroll", function () {
   const pixels = window.pageYOffset
   
   pixelsTag.innerHTML = pixels
   
 })

document.addEventListener("scroll", function (){
  const pixels = window.pageYOffset
  const pageHeight = bodyTag.getBoundingClientRect().height
  const totalScrollableDistance = pageHeight - window.innerHeight
  
  const percentage = pixels/totalScrollableDistance
  progressTag.style.width = `${100 * percentage}%`
})

// when we scroll the page, see how far down the page
// we've scrolled. Then, for each section, check whether
// we've passed it

document.addEventListener("scroll", function () {
  const pixels = window.pageYOffset 
  
  sections.forEach(section => {
    if (section.offSetTop - 50 <= pixels) {
      clientTag.innerHTML = section.getAttribute("data-client")
      pageTag.innerHMTL = section.getAttribute("data-page")
    if (section.hasAttribute("data-is-dark")) {
      headerTag.classList.add("white")
      progressTag.classList.add("white")
    } else {
      headerTag.classList.remove("white")
      progressTag.classList.remove("white")
       }
     }
  })
})

// when we scroll the page, make things parallax
// we want to move certain tags, based on how far they are from
// an anchor point. The anchor is center of the section
// distance is ratio of the distance scrolled to the middle point 
// of the anchor

document.addEventListener("scroll", function () {
  const topViewport = window.pageYOffset
  const midViewport = topViewport + (window.innerHeight / 2)
  
  sections.forEach(section => {
    const topSection = section.OffsetTop
    const midSection = topSection + (section.offsetHeight / 2)
    
    const distanceToSection = midViewport - midSection
    
    const parallaxTags = section.querySelectorAll(`[data-parallax]`)
    
    // loop over each parallaxed tag
    parallaxTags.forEach(tag => {
       const speed = parseFloat(tag.getAttribute("data-parallax"))
       tag.style.transform = `translate(0, ${distanceToSection * speed}px)`
    })
  })
})