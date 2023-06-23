const slides = document.getElementsByClassName('slides');
let presentationState = false;
let last_q = 1;
let toc_default = false

function presentationMode(){
    const slide_controls = document.getElementById("slide-controls")
    const footer = document.getElementsByClassName('footer-article')[0]
    const toc = document.getElementsByClassName('sidebar-toggle')[0]

    toggleFullScreen()

    if (presentationState){
        for (const slide of slides) {
            slide.style.display = 'block';
        }
        footer.style.display = ''
        slide_controls.style.display = ''
        toc.checked = toc_default
        presentationState = false;
    }else{
        for (const slide of slides) {
            slide.style.display = 'none';
        }
        footer.style.display = 'none'
        slide_controls.style.display = 'flex'
        prevNextSlide(last_q)
        toc_default = toc.checked
        toc.checked = true
        presentationState = true;
    }
}

function prevNextSlide(nq){
    const arrow_back = document.getElementById("arrow_back")
    const arrow_forward = document.getElementById("arrow_forward")

    slides[last_q-1].style.display = 'none'
    slides[nq-1].style.display = 'block'

    if (nq == 1) {
        arrow_back.style.display = 'none'
        arrow_forward.style.display = 'block'
        arrow_forward.setAttribute('onclick', 'prevNextSlide(2)')
      } 
    else if (nq == slides.length) {
        arrow_forward.style.display = 'none'
        arrow_back.setAttribute('onclick', 'prevNextSlide('+ (nq - 1) + ')');
    }
    else {
        arrow_back.style.display = 'block'
        arrow_forward.style.display = 'block'
        arrow_back.setAttribute('onclick', 'prevNextSlide(' + (nq - 1) + ')');
        arrow_forward.setAttribute('onclick', 'prevNextSlide(' + (nq + 1)  + ')');
    }

    last_q = nq;
}

