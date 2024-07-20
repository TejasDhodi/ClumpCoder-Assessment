import React from 'react'
import SearchComponent from '../Components/SearchComponent'
import { contactFormInputsData, surveyFormData } from '../Service/Service'

const Forms = () => {
  return (
    <section className='FormsSection'>
      <SearchComponent />

      <div className="sectionTitle">
        <div className="sectionHead">
          <h1>Pro Form Layout</h1>
        </div>
        <div className="sectionPath">
          <h3>Dashboard / <span>Pro Form Layout</span></h3>
        </div>
      </div>
      <section className="formsContainer">
        <form className="forms contactForm">
          <div className="formhead">
            <h3>Contact Form 2</h3>
          </div>

          <div className="formBody">
            <div className="inputContainer">
              {
                contactFormInputsData.map((currElem, index) => {
                  const { label, type, placeholder } = currElem;
                  return <div className="inputs" key={index}>
                    <label htmlFor={label}>{label}</label>
                    <input type={type} placeholder={placeholder} />
                  </div>
                })
              }
            </div>

            <div className="optionsContainer">
              <div className="optionHead">
                <label htmlFor="">Select Option</label>
              </div>

              <div className="optionsField flex">
                {
                  ['Graphics Design', 'Web Development', 'Logo Design', 'Others'].map((currElem, index) => {
                    return <div className="options flex" key={index}>
                      <input type="radio" name="option" id={currElem} />
                      <label htmlFor={currElem}>{currElem}</label>
                    </div>
                  })
                }
              </div>
            </div>

            <div className="message">
              <label htmlFor="">Message</label>
              <textarea name="" id="" rows={6} placeholder='Type your message'></textarea>
            </div>
          </div>

          <div className="formControl">
            <button type="button">Send Message</button>
          </div>
        </form>

        <form className='forms surveyForm'>
          <div className="formhead">
            <h3>Survey Form</h3>
          </div>

          <div className="inputContainer">
            {
              surveyFormData.map((currElem, index) => {
                const { label, type, placeholder } = currElem;
                return (
                  <div className="inputs" key={index}>
                    <label htmlFor={label}>{label}</label>
                    <input type={type} placeholder={placeholder} id={label} />
                  </div>
                )
              })
            }
          </div>

          <div className="aboutOption">
            <label htmlFor="">Which option best describes you?</label>
            <select name="" id="">
              <option value="#">Select Your Subject</option>
              {
                ['Beginner', 'Intermediate', 'Advance'].map((currElem, index) => {
                  return <option value={currElem} key={index}>{currElem}</option>
                })
              }
            </select>
          </div>

          <div className="recommendations">
            <label htmlFor="">Would you recommend our site to a friend?</label>
            {
              ['Yes', 'No', 'Maybe'].map((currElem, index) => {
                return (
                  <div className="options flex" key={index}>
                    <input type="radio" name='recommendations' id={currElem} />
                    <label htmlFor={currElem}>{currElem}</label>
                  </div>
                )
              })
            }
          </div>

          <div className="formControl">
            <button type="button">Send Message</button>
          </div>  
        </form>
      </section>
    </section>

    
  )
}

export default Forms
