import React, { useState } from "react";
import "./bank.css";
import { Formik, Form } from "formik";
import uploadfile from "../../../../../Assets/uploadfile.svg";
import {
  // StyledContainer,
  // StyledFormArea,
  // StyledLabel,
  // StyledTextInput,
  // StyledFormButton,
  // StyledTitle,
  // ButtonGroup,
  StyledBankTransferFormButton,
  // SubTitle,
  // ExtraText,
  // TextLink,
  // colors,
} from "../../../../../Syles/styles";
import { apiPost } from "../../../../../../helpers";

const BankTranferVerify = ({ setStage }) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const changeHandler = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const changeStage = () => {
    setStage(4);
  };
  const handleSubmission = (e) => {
    e.preventDefault();
    console.log(selectedFile);
    const formData = new FormData();

    formData.append("File", selectedFile);
    var pop = formData.get("File").name;
    var new_pop = [pop];
    console.log(new_pop);

    apiPost(`wallet/bank/update/pop`, new_pop, {
      "content-type": undefined,
      Accept: "application/json",
    })
      // fetch("https://ovest.paym.com.ng/api/user/wallet/bank/update/pop", {
      //   method: "POST",
      //   body: formData,
      // })
      .then((data) => {
        console.log(data);

        if (data.status === "success") {
          changeStage();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="banktransferverify">
      <div
        style={{
          marginTop: "40px",
          marginBottom: "23px",
          width: "90%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <div
          style={{
            marginTop: "40px",
            marginBottom: "23px",
            width: "100%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          className="w3-blue"
        >
          <div
            className="w3-blue"
            style={{
              height: "2px",
              width: "100%",
            }}
          ></div>
        </div>
        <br></br>

        <div className="verify-payment-header">
          <h5>Verify Payment</h5>
          <p>Upload the following document to complete your verification</p>
        </div>

        <form onSubmit={handleSubmission}>
          <div className="verify-payment-card">
            <label for="upload" className="custom-file-upload">
              <img src={uploadfile} alt="Upload file" />
            </label>
            <input
              type="file"
              id="upload"
              name="upload"
              className="inputfile"
              onChange={changeHandler}
              required
            />

            <p>
              Upload a scanned copy or photo of your details to verify your
              payment.
            </p>
          </div>

          <div className="verify-payment-footer">
            <p>
              *Please note that if additional informational is needed, Nebbix
              will inform you via email.
            </p>
          </div>
          <StyledBankTransferFormButton type="submit">
            Verify
          </StyledBankTransferFormButton>
        </form>
      </div>
    </div>
  );
};

export default BankTranferVerify;
