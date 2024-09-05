import React, { useContext, useState } from "react";
import "../../CSS/Shared/Calculator.css";
import { MyContext } from "../HomeComponents/Context";

const Calculator = () => {
  const [psCoreSubjects, setPsCoreSubjects] = useState(0);
  const [psOtherSubjects, setPsOtherSubjects] = useState(0);
  const [psContractType, setPsContractType] = useState(0);
  const [psAnnualFees, setPsAnnualFees] = useState(0);
  const [ssCoreSubjects, setSsCoreSubjects] = useState(0);
  const [ssAnnualFees, setSsAnnualFees] = useState(0);
  const [ssContractType, setSsContractType] = useState(0);
  const [alvlContractType, setAlvlContractType] = useState(0);
  const [alvlAnnualFees, setAlvlAnnualFees] = useState(0);
  const [alvlCoreSubjects, setAlvlCoreSubjects] = useState(0);
  const { changeFeeCalculator } = useContext(MyContext);
  const LoadAlvlAnnualFees = (coreSubjects, contractType) => {
    let fees = 0;
    if (contractType === 0) {
      fees = coreSubjects * 1685;
    } else if (contractType === 1) {
      fees = coreSubjects * 1735;
    } else if (contractType === 2) {
      fees = coreSubjects * 1769;
    }
    setAlvlAnnualFees(fees);
  };
  const changeAlvlCoreSubjects = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setAlvlCoreSubjects(value);
    LoadAlvlAnnualFees(value, alvlContractType);
  };
  const changeAlvlContractType = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setAlvlContractType(value);
    LoadAlvlAnnualFees(alvlCoreSubjects, value);
  };
  const LoadAnnualPsFees = (coreSubjects, otherSubjects, contractType) => {
    let fees = 0;
    if (contractType === 0) {
      fees = coreSubjects * 560 + otherSubjects * 280;
    } else if (contractType === 1) {
      fees = coreSubjects * 577 + otherSubjects * 288;
    } else if (contractType === 2) {
      fees = coreSubjects * 588 + otherSubjects * 294;
    }
    setPsAnnualFees(fees);
  };
  const changeSsCoreSubjects = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setSsCoreSubjects(value);
    LoadAnnualSsFees(value, ssContractType);
  };

  const LoadAnnualSsFees = (coreSubjects, contractType) => {
    let fees = 0;
    if (contractType === 0) {
      fees = coreSubjects * 749;
    } else if (contractType === 1) {
      fees = coreSubjects * 771;
    } else if (contractType === 2) {
      fees = coreSubjects * 786;
    }
    setSsAnnualFees(fees);
  };

  const changePsCoreSubject = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setPsCoreSubjects(value);
    LoadAnnualPsFees(value, psOtherSubjects, psContractType);
  };

  const changePsOtherSubjects = (e) => {
    const value = parseInt(e.target.value, 10) || 0;
    setPsOtherSubjects(value);
    LoadAnnualPsFees(psCoreSubjects, value, psContractType);
  };

  const changeContractType = (e) => {
    const value = parseInt(e.target.value, 10);
    setPsContractType(value);
    LoadAnnualPsFees(psCoreSubjects, psOtherSubjects, value);
  };
  const changeSSContractType = (e) => {
    const value = parseInt(e.target.value, 10);
    setSsContractType(value);
    LoadAnnualSsFees(ssCoreSubjects, value);
  };

  return (
    <div className="calculator-main">
      <div className="calculator-container">
        <div className="calculator-title">
          <div className="cc-title">
            <h3>Fee calculator</h3>
          </div>
          <div className="cc-close">
            <svg
              onClick={() => {
                changeFeeCalculator(false);
              }}
              preserveAspectRatio="xMidYMid meet"
              data-bbox="29.6 26 148 148"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="29.6 26 148 148"
              role="presentation"
              aria-hidden="true"
            >
              <g>
                <path d="M177.6 147.3L130.3 100l47.3-47.3L150.9 26l-47.3 47.3L56.3 26 29.6 52.7 76.9 100l-47.3 47.3L56.3 174l47.3-47.3 47.3 47.3 26.7-26.7z"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="calculator-2">
          <div className="ps-fees">
            <div className="ps-fees-1">
              <label>Primary school fees</label>
            </div>
            <div className="ps-fees-2">
              <p>
                Select the number of subjects you would like
                <br /> to study
              </p>
            </div>
            <div className="ps-fees-3">
              <p>No of core subjects</p>
            </div>
            <div className="ps-fees-4">
              <input
                type="text"
                value={psCoreSubjects}
                onChange={changePsCoreSubject}
              />
            </div>
            <div className="ps-fees-5">
              <p>KS1 core subjects: Maths & English</p>
            </div>
            <div className="ps-fees-5">
              <p>KS2 core subjects: Maths, English & Science</p>
            </div>
            <div className="ps-fees-6">
              <p>Other subjects</p>
            </div>
            <div className="ps-fees-7">
              <input
                type="text"
                value={psOtherSubjects}
                onChange={changePsOtherSubjects}
              />
            </div>
            <div className="ps-fees-8">
              <div>
                <p>Contract type</p>
              </div>
              <div className="information-svg">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="info-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
              </div>
            </div>
            <div className="ps-fees-9">
              <select value={psContractType} onChange={changeContractType}>
                <option value={0}>Annual - 1 payment</option>
                <option value={1}>Annual - 8 payments</option>
                <option value={2}>Monthly - up to 11 payments</option>
              </select>
            </div>
            <div className="ps-fees-10">
              <div className="ps-fees-10-t">
                <p>Annual fees</p>
              </div>
              <div className="ps-fees-10-pr">
                <p>
                  <span>£</span>
                  {psAnnualFees}
                </p>
              </div>
            </div>
          </div>
          <div className="ss-fees">
            <div className="ps-fees-1">
              <label>Secondary school fees</label>
            </div>
            <div className="ps-fees-2">
              <p>
                Select the number of subjects you would like
                <br /> to study
              </p>
            </div>
            <div className="ps-fees-3">
              <p>No of core subjects</p>
            </div>
            <div className="ps-fees-4">
              <input
                type="text"
                value={ssCoreSubjects}
                onChange={changeSsCoreSubjects}
              />
            </div>
            <div className="ps-fees-8">
              <div>
                <p>Contract type</p>
              </div>
              <div className="information-svg">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="info-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
              </div>
            </div>
            <div className="ps-fees-9">
              <select value={ssContractType} onChange={changeSSContractType}>
                <option value={0}>Annual - 1 payment</option>
                <option value={1}>Annual - 8 payments</option>
                <option value={2}>Monthly - up to 11 payments</option>
              </select>
            </div>
            <div className="ps-fees-10">
              <div className="ps-fees-10-t">
                <p>Annual fees</p>
              </div>
              <div className="ps-fees-10-pr">
                <p>
                  <span>£</span>
                  {ssAnnualFees}
                </p>
              </div>
            </div>
          </div>
          <div className="alvl-fees">
            <div className="ps-fees-1">
              <label>A-level fees(College)</label>
            </div>
            <div className="ps-fees-2">
              <p>
                Select the number of subjects you would like
                <br /> to study. Usually students study 3, but you
                <br /> can do any number of subjects.
              </p>
            </div>
            <div className="ps-fees-3">
              <p>No of core subjects</p>
            </div>
            <div className="ps-fees-4">
              <input
                type="text"
                value={alvlCoreSubjects}
                onChange={changeAlvlCoreSubjects}
              />
            </div>
            <div className="ps-fees-8">
              <div>
                <p>Contract type</p>
              </div>
              <div className="information-svg">
                <svg
                  viewBox="64 64 896 896"
                  focusable="false"
                  data-icon="info-circle"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z"></path>
                </svg>
              </div>
            </div>
            <div className="ps-fees-9">
              <select
                value={alvlContractType}
                onChange={changeAlvlContractType}
              >
                <option value={0}>Annual - 1 payment</option>
                <option value={1}>Annual - 8 payments</option>
                <option value={2}>Monthly - up to 11 payments</option>
              </select>
            </div>
            <div className="ps-fees-10">
              <div className="ps-fees-10-t">
                <p>Annual fees</p>
              </div>
              <div className="ps-fees-10-pr">
                <p>
                  <span>£</span>
                  {alvlAnnualFees}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="calculator-3">
          <p>
            Prices are indicative and could vary. Fees can be paid in
            instalments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
