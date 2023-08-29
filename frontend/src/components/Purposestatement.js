import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { createItem } from "../redux/actions/purposeActions";

function Purposestatement() {
  const dispatch = useDispatch();
  const purpose = useSelector((state) => state.purpose);
  const { loading, error, success } = purpose;
  const form = useSelector((state) => state.form);
  const { you, what, love, serve, beneficiaries, transform, income } = form;
  const navigate = useNavigate();

  const [purposeData, setPurposeData] = useState({
    purposestatement: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const details = {
      identity: you,
      strengths: what,
      passions: love,
      target_audience: serve,
      beneficiary_needs: beneficiaries,
      impact: transform,
      revenue_sources: income,
      purpose_statement: purposeData.purposestatement,
    };
    dispatch(createItem(details));
  };

  useEffect(() => {
    if (success) {
      navigate("/purpose-clarity-item/download");
    }
  }, [success, navigate]);

  return (
    <div className='container'>
      <div className='row final-cont purpose-desc-cont'>
        <h6 className='h6 form-title'>
          <span>
            <img src='/purpose-icon.png' alt='...' />
          </span>
          The Purpose Statement
        </h6>
        <p className='purpose-guide-p'>
          Turn your responses to the 7 questions above into a purpose statement
          using the structure below.
        </p>
        <p>
          The purpose statement must be a concise, memorable and inspiring
          declaration. I will use my purpose;{" "}
          <i>
            I inspire individuals and organisations to live meaningful lives,{" "}
          </i>
          to provide a structure for the purpose
          <br /> statement.
        </p>
        <p>
          Purpose has <strong>three</strong> main dimensions;
          <ul>
            <li>
              <strong>Directional;</strong>
              <p>
                The directional dimension includes two aspects;
                <ol>
                  <li>
                    The inspired actions you take or the path you follow, and
                  </li>
                  <li>For whom you do it.</li>
                </ol>
                For example, based on my purpose, the directional dimension is
                <i> I inspire individuals and organisations.</i>
              </p>
            </li>
            <li>
              <strong>Transformational;</strong>
              <p>
                The transformational dimension includes the benefits your
                beneficiaries accrue from your actions.
              </p>
              <p>
                This dimension captures the intended impact on the recipients.
              </p>
              <p>
                It focuses on the difference one makes in people's lives and
                society; the impact.
              </p>
              <p>
                For example, the transformational dimension of my purpose is{" "}
                <i>to live meaningful lives</i>.
              </p>
            </li>
            <li>
              <strong>Motivational;</strong>
              <p>
                The motivational dimension is derived from the language and
                worthiness of the cause as captured through the directional and
                transformational dimensions.
              </p>
            </li>
          </ul>
        </p>
        <p>
          Both <i>directional</i> and <i>transformational</i> dimensions should
          be inspiring to awaken <i>motivation.</i>
        </p>
        <p>
          The directional and transformational aspects must be noble, compelling
          and inspirational. It should enlist or awaken the energies and
          enthusiasm you need to make your purpose a reality.
        </p>
        <p className='mb-1'>
          <i>Purpose comes with its energy. It is self-energising.</i>
        </p>
        <div class='mb-3'>
          <textarea
            class='form-control'
            placeholder='Write your purpose statement here...'
            rows='8'
            value={purposeData.purposestatement}
            onChange={(e) => {
              setPurposeData({
                ...purposeData,
                purposestatement: e.target.value,
              });
            }}
          ></textarea>
          {loading ? (
            <span className='text-warning'>Loading...</span>
          ) : (
            error && <span className='text-danger'>{error}</span>
          )}
          <button
            type='button'
            class='btn btn-secondary mt-4'
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Purposestatement;
