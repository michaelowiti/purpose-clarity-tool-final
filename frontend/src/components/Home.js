import React from "react-router-dom";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='container'>
        <div className='my-3'>
          <h1 className='h1 text-center title'>Purpose Clarity Tool</h1>
          <div className='title-hr'></div>
        </div>
        <div className='hero-info'>
          <p>
            The purpose clarity tool is meant to guide you on the journey of
            clarifying your purpose.It is possible that you may not clarify your
            purpose on a single sitting.
            <br />
            You must keep refining your responses and your purpose will be
            clearer with time.True purpose is believed to be clarified through
            continuous experimentations with jobs or assignments rather than just
            thinking.<br /><br />   The PCT is grounded for example question 1 and 2 ensure that your purpose is
            entrenched in reality not just
            fancy-desires,imaginations or high-sounding statements.If you
            have already clarified your purpose,there two things you can
            do.(1)you can move straight into writing my purpose story and (2) you can examine your purpose
            against the 7Qs to establish it's completeness
          </p>
        </div>
        <div className='purpose-questions'>
          
        <p>
          Whenever you log in, you can answer questions from number 1, continue where you left off by clicking on the specific question you stopped on, or review or correct an answer.  
          </p>

          <h4 className='h4'>
          Here is the Summary of the 7Qs
          </h4>
          
          <div className='questions-wrapper'>
            <div className='left'>
              <Link to='/form?question=1' className='quiz-item'>
                <h6>Who are you</h6>
                <span>1</span>
              </Link>
              <Link to='/form?question=2' className='quiz-item'>
                <h6>What do you do well</h6>
                <span>2</span>
              </Link>
              <Link to='/form?question=3' className='quiz-item'>
                <h6>What do you love to do?</h6>
                <span>3</span>
              </Link>
              <Link to='/form?question=4' className='quiz-item'>
                <h6>Whom do you intend to serve?</h6>
                <span>4</span>
              </Link>
            </div>
            <div className='center'>
              <img src='/purpose-quiz.png' alt='...' />
            </div>
            <div className='right'>
              <Link to='/form?question=5' className='quiz-item'>
                <h6>What do your beneficiaries need?</h6>
                <span>5</span>
              </Link>
              <Link to='/form?question=6' className='quiz-item'>
                <h6>How do your offerings transform your beneficiaries?</h6>
                <span>6</span>
              </Link>
              <Link to='/form?question=7' className='quiz-item'>
                <h6>What activities can generate income for you?</h6>
                <span>7</span>
              </Link>
              <div className='quiz-item'>
                <h6>The Purpose Statement</h6>
                <span>
                  <img src='/purpose-icon.png' alt='...' />
                </span>
              </div>
            </div>
          </div>
          <div className='hero-btns'>
            <Link
              to='/view/purpose-clarity-item/previous'
              className='btn button'
            >
              See Previous Answers
            </Link>
            <Link to='/form' className='btn button btn-start'>
              Start Here
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
