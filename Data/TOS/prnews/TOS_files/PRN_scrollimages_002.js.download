/* Sprint 4 Regression Issue - PRN-310*/
/* Increased the maximum slide count value */
/* Changed the left pos to move constantly */
var activeImage = false;
var imageGalleryLeftPos = false;
var imageGalleryWidth = false;
var imageGalleryObj = false;
var maxGalleryXPos = false;
var slideSpeed = 2;
var imageGalleryCaptions = new Array();
var slideSpeed1 = 0;
var currentSlide = 1;
var minSlideCount = 1;
var maxSlideCount = 16;
var perPageSlides = 3;
var blockLeft = true;
var blockRight = false;
function startSlide(e){
    if (document.all) 
        e = event;
    var id = this.id;
    var imagescount=0;
    this.getElementsByTagName('IMG')[0].src = 'http://content.prnewswire.com/designimages/' + this.id + '_over.gif';
    var anchor_tags=document.getElementById('theImages').getElementsByTagName('a');
    // the following code added to handle the dynamic image count
    for (i=0; i<anchor_tags.length; i++) {
      if (anchor_tags[i].getAttributeNode('class')!=null && anchor_tags[i].getAttributeNode('class').nodeValue=='clip') {
	imagescount++;
      }
    }
    
    if(imagescount!=0) {
        maxSlideCount=imagescount+1; // Adding one because the next slide should not be allowed 
                                      // and the current one has to be allowed
    }	
    if (this.id == 'arrow_left' && blockLeft == false) {
        //			slideSpeedMultiply = Math.floor((e.clientX - this.offsetLeft) / 5);
        //			slideSpeed = -1*slideSpeedMultiply;
        slideSpeed1 = -1;
        currentSlide = currentSlide - 1;
        if (currentSlide != maxSlideCount - perPageSlides) {
            //    document.getElementById("imgRight").src = "http://content.prnewswire.com/designimages/arrow_right_over_greyed_PRN.gif";
            blockRight = false;
        }
        else {
            //  document.getElementById("imgRight").src = "http://content.prnewswire.com/designimages/arrow_right_PRN.gif";
            blockRight = right;
        }
        if (currentSlide != minSlideCount) {
            document.getElementById("imgLeft").src = "http://content.prnewswire.com/designimages/arrow_left_over_greyed_PRN.gif";
            document.getElementById("imgLeft").title = "View previous";
            blockLeft = false;
        }
        else {
            document.getElementById("imgLeft").src = "http://content.prnewswire.com/designimages/arrow_left_PRN.gif";
            document.getElementById("imgLeft").title = "";
            blockLeft = true;
        }
        gallerySlide();
    }
    else 
        if (this.id == 'arrow_right' && blockRight == false) {
            //			slideSpeedMultiply = 10 - Math.floor((e.clientX - this.offsetLeft) / 5);
            //			slideSpeed = 1*slideSpeedMultiply;
            //			slideSpeed = Math.min(2,slideSpeed);
            //			if(slideSpeed<0)slideSpeed=2;
            slideSpeed1 = 1;
            currentSlide = currentSlide - (-1);
            if (currentSlide != maxSlideCount - perPageSlides) {
                document.getElementById("imgRight").src = "http://content.prnewswire.com/designimages/arrow_right_over_greyed_PRN.gif";
                document.getElementById("imgRight").title = "View more";
                blockRight = false;
            }
            else {
                document.getElementById("imgRight").src = "http://content.prnewswire.com/designimages/arrow_right_PRN.gif";
                document.getElementById("imgRight").title = "";
                blockRight = true;
            }
            if (currentSlide != minSlideCount) {
                //document.getElementById("imgLeft").src = "http://content.prnewswire.com/designimages/arrow_left_over_greyed_PRN.gif";
                blockLeft = false;
            }
            else {
                //document.getElementById("imgLeft").src = "http://content.prnewswire.com/designimages/arrow_left_PRN.gif";
                blockLeft = true;
            }
            gallerySlide();
        }
    
    
}

function releaseSlide(){
    var id = this.id;
    this.getElementsByTagName('IMG')[0].src = 'http://content.prnewswire.com/designimages/' + this.id + '.gif';
    slideSpeed = 0;
}

function gallerySlide(){
    if (slideSpeed != 0) {//debugger;
        var leftPos = imageGalleryObj.offsetLeft;
        
        {
            var leftPos1 = leftPos - slideSpeed1 * (285);
            imageGalleryObj.style.left = leftPos1 + 'px';
        }
    }
    //setTimeout('gallerySlide()',20);

}

function showImage(){
    if (activeImage) {
        activeImage.style.filter = 'alpha(opacity=50)';
        activeImage.style.opacity = 0.5;
    }
    this.style.filter = 'alpha(opacity=100)';
    this.style.opacity = 1;
    activeImage = this;
}

function showLeftHighLight(){
    var id = this.id;
    if (currentSlide > minSlideCount) {
        this.getElementsByTagName('IMG')[0].src = 'http://content.prnewswire.com/designimages/arrow_left_over_greyed_PRN.gif';
        this.getElementsByTagName('IMG')[0].title = 'View previous';
    }
    
}

function showRightHighLight(){
    var id = this.id;
    if (currentSlide < maxSlideCount - perPageSlides) {
        this.getElementsByTagName('IMG')[0].src = 'http://content.prnewswire.com/designimages/arrow_right_over_greyed_PRN.gif';
        this.getElementsByTagName('IMG')[0].title = "View more";
    }
    
}

function removeLeftHighLight(){
    this.getElementsByTagName('IMG')[0].src = 'http://content.prnewswire.com/designimages/arrow_left_over_PRN.gif';
    this.getElementsByTagName('IMG')[0].title ="";
}

function removeRightHighLight(){
    this.getElementsByTagName('IMG')[0].src = 'http://content.prnewswire.com/designimages/arrow_right_over_PRN.gif';
    this.getElementsByTagName('IMG')[0].title = "";
}

function initSlideShow(){
if(document.getElementById('arrow_left') != null)
{
    document.getElementById('arrow_left').onclick = startSlide;
    //		document.getElementById('arrow_left').onmouseout = releaseSlide;
    document.getElementById('arrow_right').onclick = startSlide;
    //		document.getElementById('arrow_right').onmouseout = releaseSlide;
    document.getElementById('arrow_left').onmouseover = showLeftHighLight;
    document.getElementById('arrow_right').onmouseover = showRightHighLight;
    
    document.getElementById('arrow_left').onmouseout = removeLeftHighLight;
    document.getElementById('arrow_right').onmouseout = removeRightHighLight;
    
    imageGalleryObj = document.getElementById('theImages');
    imageGalleryLeftPos = imageGalleryObj.offsetLeft;
    imageGalleryWidth = document.getElementById('galleryContainer').offsetWidth - 80;
    maxGalleryXPos = imageGalleryObj.offsetLeft;
    minGalleryXPos = imageGalleryWidth - document.getElementById('slideEnd').offsetLeft;
    var slideshowImages = imageGalleryObj.getElementsByTagName('IMG');
    //		for(var no=0;no<slideshowImages.length;no++){
    //			slideshowImages[no].onmouseover = showImage;
    //		}
	var anchor_tags=document.getElementById('theImages').getElementsByTagName('a');
    var imagescount = 0;
	for (i=0; i<anchor_tags.length; i++) {
      if (anchor_tags[i].getAttributeNode('class')!=null && anchor_tags[i].getAttributeNode('class').nodeValue=='clip') {
	imagescount++;
      }
    }
	if(imagescount <= perPageSlides)
	{
		document.getElementById("imgRight").src = "http://content.prnewswire.com/designimages/arrow_right_PRN.gif";
                document.getElementById("imgRight").title = "";
                blockRight = true;
	}
    var divs = imageGalleryObj.getElementsByTagName('DIV');
    for (var no = 0; no < divs.length; no++) {
        if (divs[no].className == 'imageCaption') 
            imageGalleryCaptions[imageGalleryCaptions.length] = divs[no].innerHTML;
    }
    //gallerySlide();
  }
}

window.onload = initSlideShow;
