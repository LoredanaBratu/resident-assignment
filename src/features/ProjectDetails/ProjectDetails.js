import React from "react";
import StyledProjectDetails from "./StyledProjectDetails";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import InputComponent from "../../components/InputComponent/InputComponent";
import ClearIcon from "../../assets/close.png";
import { Constants } from "../../constants/formConstants";

const ProjectDetails = ({
  data,
  projectId,
  setFormData,
  project,
  errors,
  index,
  handleRemoveProject,
}) => {
  const { currentProjects } = data;

  function handleChange({ target }) {
    const updatedProjectList = (currentProjects || []).map((project) =>
      project.projectId !== projectId
        ? project
        : {
            ...project,
            [target.name]: target.value,
          }
    );
    setFormData({ ...data, currentProjects: updatedProjectList });
  }

  return (
    <StyledProjectDetails>
      <SelectComponent
        label="Project"
        name="selectedProject"
        className="select-project"
        options={data.projects}
        onSelect={handleChange}
        error={errors.currentProjects[index]?.selectedProject}
      />
      <div className="details-textarea-section">
        <span className="label-textarea">Details</span>
        <div className="textarea-wrapper">
          <textarea
            className="textarea-details-field"
            id="details-area"
            name="details"
            rows="3"
            value={project.details}
            onChange={handleChange}
          />
          {errors.currentProjects[index]?.details && (
            <span className="error-message">Required</span>
          )}
        </div>
      </div>
      <div className="duration-container">
        <div>Duration </div>
        <div className="duration-section">
          <InputComponent
            name="duration"
            size="extraSmall"
            value={project.duration}
            handleChange={handleChange}
            error={errors.currentProjects[index]?.duration}
          />
          <SelectComponent
            name="units"
            className="select-duration"
            onSelect={handleChange}
            options={Constants.projectDetail.duration}
            error={errors.currentProjects[index]?.units}
          />
        </div>
        <img
          id={projectId}
          src={ClearIcon}
          alt="Remove section"
          className="delete-section-icon"
          onClick={() => handleRemoveProject(projectId)}
        />
      </div>
    </StyledProjectDetails>
  );
};
export default ProjectDetails;
