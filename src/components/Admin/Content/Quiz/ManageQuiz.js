import React, { useState } from "react";
import "./ManageQuiz.scss";
import Select from "react-select";
import { IoCloudUploadOutline } from "react-icons/io5";
import { postCreateNewQuiz } from "../../../../services/apiService";
import { toast } from "react-toastify";
import TableQuiz from "./TableQuiz";
import { Accordion } from "react-bootstrap";
import ManageUpdateQuiz from "./ManageUpdateQuiz";
import AssignQuiz from "./AssignQuiz";

const options = [
  { value: "EASY", label: "EASY" },
  { value: "MEDIUM", label: "MEDIUM" },
  { value: "HARD", label: "HARD" },
];
const ManageQuiz = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [image, setImage] = useState(null);
  const [previewImage, setPreviewImage] = useState("");

  const handleChangeFile = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      setPreviewImage(URL.createObjectURL(event.target.files[0]));
      setImage(event.target.files[0]);
    }
  };

  const handleSubmitQuiz = async () => {
    if (!name || !description) {
      toast.error("Name or Description is required");
      return;
    }
    let res = await postCreateNewQuiz(description, name, type?.value, image);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      setName("");
      setDescription("");
      setImage(null);
      setPreviewImage("");
    } else {
      toast.error(res.EM);
    }
  };
  return (
      <div className="quiz-container">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="quiz-upload"><div>Add New Quizzes</div></Accordion.Header>
            <Accordion.Body>
              <div className="add-new">
              <fieldset className="border rounded-3 p-3">
                <legend className="float-none w-auto px-3">Add new quiz</legend>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="name@example.com"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                  <label>Name</label>
                </div>
                <div className="form-floating">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Password"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                  <label>Description</label>
                </div>
                <div className="my-3">
                  <Select
                    defaultValue={type}
                    onChange={setType}
                    options={options}
                    placeholder={"Quiz type..."}
                  />
                </div>
                <div>
                  <label
                    className="form-label label-upload"
                    htmlFor="uploadImage"
                  >
                    <IoCloudUploadOutline />
                    Upload Image
                  </label>
                  <input
                    type="file"
                    hidden
                    id="uploadImage"
                    onChange={(event) => handleChangeFile(event)}
                  />
                </div>
                <div className="col-md-12 img-preview">
                  {previewImage ? (
                    <img src={previewImage} />
                  ) : (
                    <span>Preview Image</span>
                  )}
                </div>
                <div className="btn-original">
                  <button className="btn btn-primary" onClick={() => handleSubmitQuiz()}>
                    Save
                  </button>
                </div>
              </fieldset>
              <div className="list-quiz">
        <TableQuiz />
      </div></div>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header className="quiz-upload" ><div>Update Quizzes</div></Accordion.Header>
            <Accordion.Body>
              <ManageUpdateQuiz/>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header className="quiz-upload" ><div>Assign to users</div></Accordion.Header>
            <Accordion.Body>
              <AssignQuiz/>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      
  );
};

export default ManageQuiz;
