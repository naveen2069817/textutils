import React from "react"
export default function About(props) {



  return (
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>About us</h1>
      <div className="accordion" id="accordionExample"style={{color:props.mode==='dark'?'white':'#042743'}}>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingOne">
      <button className="accordion-button" type="button"style={{color:props.mode==='dark'?'white':'#042743',backgroundColor:props.mode==='dark'?'#353b4f':'#cad9fa'}} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        Welcome to Textutils
      </button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
      At TextUtil, we understand the power of words and their impact on communication. We are a versatile online platform designed to enhance your text-based content and elevate your writing experience. Whether you're a student, professional, or creative writer, our tools and resources are tailored to meet your diverse needs.

With our comprehensive suite of text utilities, we empower you to unleash your creativity, improve your productivity, and refine your writing skills. From simple word count and character analysis to advanced text formatting and linguistic analysis, TextUtil offers a range of features that make crafting and editing text a breeze.

Our mission is to simplify the process of working with text, saving you valuable time and effort. We've created a user-friendly interface that ensures a seamless experience, whether you're a tech-savvy enthusiast or just starting your writing journey. Our tools are accessible and intuitive, making them suitable for all skill levels.<code>.TextUtils</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" style={{color:props.mode==='dark'?'white':'#042743',backgroundColor:props.mode==='dark'?'#353b4f':'#cad9fa'}} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Key Features
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
      1. Word Count and Analysis: Easily determine the number of words, characters, paragraphs, and sentences in your text. Gain insights into your writing patterns and improve readability.

2. Text Formatting: Format your text to match different styles and requirements. Convert between uppercase and lowercase, copy text to clipboard, remove extra space between words and more.

3. Grammar and Spell Check: Ensure your writing is polished and error-free. Our grammar and spell check feature helps you identify and correct mistakes, improving the overall quality of your content. <code>.Textutils</code>
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" style={{color:props.mode==='dark'?'white':'#042743',backgroundColor:props.mode==='dark'?'#353b4f':'#cad9fa'}} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Summary
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body"style={{backgroundColor:props.mode==='dark'?'#042743':'white',color:props.mode==='dark'?'white':'#042743'}}>
      At TextUtil, we prioritize data privacy and security. Your texts are processed securely, and we do not store any personal information. Your work is your own, and we ensure it remains confidential throughout your entire experience with our platform.

Start utilizing the power of words today with TextUtil. Enhance your writing, streamline your editing process, and make your text shine. Join our community of writers, educators, and professionals who trust TextUtil for their textual needs.

Unlock the potential of your words. Try TextUtil now<code>.Textutils</code>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}
