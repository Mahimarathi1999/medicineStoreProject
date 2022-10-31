import React from 'react';
const AboutUs = () => {
    const med ="med.jpg"
    const med2 ="med2.jpg"
    return ( 
        <>
 <div className="site-blocks-cover inner-page">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 mx-auto align-self-center">
            <div class=" text-center">
              <h1>About Us</h1>
              <h4>Delivering for good health .<br></br>
			  Your health is important </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-section custom-border-bottom" data-aos="fade">
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6">
            <div class="block-16">
              <figure>
                <img  src={med} alt="Image placeholder" class="img-fluid rounded"/>
                
    
              </figure>
            </div>
          </div>
          <div class="col-md-1"></div>
          <div class="col-md-5">
    
    
            <div class="site-section-heading pt-3 mb-4">
              <h1 class="text-black">How We Started</h1>
            </div>
            <p style={{fontSize:20 , fontFamily:'cursive'}} class="text-black">We are established in Jan 2021'. To bring convenince to people in this pandemic  
			we decided to serve health equipments right at their place ,with proper safety and sanitization .</p>
            <p class="text-black">"You believe We grow"</p>
    
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row mb-5">
          <div class="col-md-6 order-md-2">
            <div class="block-16">
              <figure>
                <img  src={med2} alt="Image placeholder" class="img-fluid rounded" />
                <a href="https://vimeo.com/channels/staffpicks/93951774" class="play-button popup-vimeo"><span
                    class="icon-play"></span></a>
    
              </figure>
            </div>
          </div>
          <div class="col-md-5 mr-auto">
    
    
            <div class="site-section-heading pt-3 mb-4">
              <h1 class="text-black">We Are Trusted Company</h1>
            </div>
            <p style={{fontSize:20 , fontFamily:'cursive'}} class="text-black">We care for your health .We build trust among people.
			Deliver best quality of medicines and health equipments to you .
              </p>
            <p class="text-black">"Your satisfaction is our priority." </p>
    
          </div>
        </div>
      </div>
      <div class="site-section site-section-sm site-blocks-1 border-0" data-aos="fade" >
      <div class="container" style={{backgroundColor:'lightgrey' , paddingTop:20 , paddingBottom:20}}>
        <div class="row">
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="">
            <div class="icon mr-4 align-self-start">
              <span class="icon-truck text-primary"></span>
            </div>
            <div class="text">
              <h2>Shipping</h2>
              <p style={{fontSize:20 , fontFamily:'cursive'}}> No shipping charges </p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="100">
            <div class="icon mr-4 align-self-start">
              <span class="icon-refresh2 text-primary"></span>
            </div>
            <div class="text">
              <h2>Returns</h2>
              <p style={{fontSize:20 , fontFamily:'cursive'}}>Easy return with no deduction.</p>
            </div>
          </div>
          <div class="col-md-6 col-lg-4 d-lg-flex mb-4 mb-lg-0 pl-4" data-aos="fade-up" data-aos-delay="200">
            <div class="icon mr-4 align-self-start">
              <span class="icon-help text-primary"></span>
            </div>
            <div class="text">
              <h2>Customer Support</h2>
              <p style={{fontSize:20 , fontFamily:'cursive'}}>Available 24*7 </p>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
        {/* <div>
          <footer />
        </div> */}
        </>
     );
}
 
export default AboutUs;