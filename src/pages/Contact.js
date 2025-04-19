import React from 'react';
import styled from '@emotion/styled';

const ContactSection = styled.section`
  font-family: 'Gambarino', serif;
  min-height: auto;
  padding-bottom: 7rem;
  width: 100%;
  padding-left: 2%;
  padding-right: 1%;

  @media (max-width: 768px) {
    padding-left: 5%;
    padding-right: 5%;
  }
`;

const Heading = styled.h2`
  font-size: 3.3rem;
  margin-bottom: 3rem;
  text-align: left;
  padding-top: 8rem;
  padding-left: 9%;
  padding-right: 6.5%;
  font-family: 'Gambarino', serif;
  line-height: 1.2;

  span {
    color: #4b10fe;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
    padding-left: 0;
    padding-right: 0;
    padding-top: 6rem;
  }
`;

const ContactForm = styled.form`
  font-family: 'Gambarino', serif;
  max-width: 100rem;
  margin: 0 auto;
  text-align: left;
  padding: 0 10%;

  @media (max-width: 768px) {
    padding: 0;
  }
`;

const InputBox = styled.div`
  font-family: 'Gambarino', serif;
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const InputField = styled.div`
  font-family: 'Gambarino', serif;
  position: relative;
  width: calc(50% - 1rem);
  margin: 1.4rem 0;

  input {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    color: #999;
    background: white;
    border-radius: none;
    border: .1rem solid lightgrey;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &::placeholder {
      color: #999;
      font-size: 1.2rem;
    }

    &:focus {
      outline: none;
      border-color: #4b10fe;
    }

    &[type="date"] {
      appearance: none;
      -webkit-appearance: none;
      position: relative;
      background: white;
      padding-right: 3rem;
      cursor: pointer;

      &::-webkit-calendar-picker-indicator {
        position: absolute;
        right: 1rem;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        opacity: 0.6;
        transition: opacity 0.3s ease;

        &:hover {
          opacity: 1;
        }
      }
    }
  }

  label {
    display: block;
    margin-bottom: 0.8rem;
    font-family: 'Gambarino', serif;
    font-size: 1.2rem;
    color: #333;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 0.7rem 0;

    input {
      font-size: 1.2rem;
      padding: 1rem;
    }

    label {
      font-size: 1.1rem;
    }
  }
`;

const TextareaField = styled.div`
  font-family: 'Gambarino', serif;
  position: relative;
  margin: 0.8rem 0 2.7rem;
  width: 100%;

  textarea {
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    color: black;
    background: white;
    border-radius: .6rem;
    border: .1rem solid lightgrey;
    resize: none;
    transition: border-color 0.3s ease;
    font-family: inherit;

    &::placeholder {
      color: #999;
      font-size: 1.2rem;
    }

    &:focus {
      outline: none;
      border-color: #4b10fe;
    }
  }

  @media (max-width: 768px) {
    textarea {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
`;

const ButtonBox = styled.div`
  button {
    background: black;
    color: white;
    border: none;
    width: 100%;
    padding: 1.2rem;
    font-size: 1.4rem;
    transition: all 0.3s ease;
    cursor: pointer;
    font-family: 'Gambarino', serif;
    position: relative;
    overflow: hidden;

    &:hover {
      background: #4b10fe;
    }

    &:active {
      transform: translateY(1px);
    }

    @media (max-width: 768px) {
      font-size: 1.2rem;
      padding: 1rem;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <Heading>
        I <span><u>really love</u></span> working on incredible ideas, <u>let's chat to make it happen</u>
        <span role="img" aria-label="unicorn">🦄</span><span>.</span>
      </Heading>
      
      <ContactForm action="https://formsubmit.co/akpanglosamuel@gmail.com" method="POST">
        <InputBox>
          <InputField>
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" placeholder="Samuel Doe" required />
          </InputField>
          <InputField>
            <label htmlFor="email">Email Address</label>
            <input type="email" name="email" placeholder="samueldoe@email.com" required />
          </InputField>
        </InputBox>
        
        <InputBox>
          <InputField>
            <label htmlFor="company">Your Company</label>
            <input type="text" name="company" placeholder="Tesla" required />
          </InputField>
          <InputField>
            <label htmlFor="projectTitle">Project Title</label>
            <input type="text" name="projectTitle" placeholder="Awesome website or just saying hi" required />
          </InputField>
        </InputBox>
        
        <InputBox>
          <InputField>
            <label htmlFor="budget">Budget Range (₵₵₵)</label>
            <input type="text" name="budget" placeholder="your budget" required />
          </InputField>
          <InputField>
            <label htmlFor="startDate">When are you looking forward to start?</label>
            <input 
              type="date" 
              name="startDate" 
              required
              min={new Date().toISOString().split('T')[0]}
            />
          </InputField>
        </InputBox>
        
        <InputBox>
          <InputField style={{ width: '100%' }}>
            <label htmlFor="number">Number</label>
            <input type="tel" name="number" placeholder="+233 000000000" required />
          </InputField>
        </InputBox>
        
        <InputBox>
          <InputField style={{ width: '100%', marginBottom: 0 }}>
            <label htmlFor="projectDescription">Describe your project</label>
          </InputField>
        </InputBox>
        <TextareaField>
          <textarea 
            name="projectDescription" 
            id="projectDescription" 
            cols="30" 
            rows="10" 
            placeholder="Briefly describe what you want to build, this helps me determine how best to help you or simply start a conversation" 
            required
          ></textarea>
        </TextareaField>
        
        <ButtonBox>
          <button type="submit">Submit</button>
        </ButtonBox>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
