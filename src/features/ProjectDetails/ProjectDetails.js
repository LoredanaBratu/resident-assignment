import React from "react";
import ClearIcon from "../../assets/close.png";
import StyledProjectDetails from "./StyledProjectDetails";
import { Constants } from "../../constants/formConstants";
import InputComponent from "../../components/InputComponent/InputComponent";
import SelectComponent from "../../components/SelectComponent/SelectComponent";
import TextareaComponent from "../../components/TextareaComponent/TextareaComponent";

const ProjectDetails = ({
  data,
  index,
  errors,
  project,
  touched,
  projectId,
  setFormData,
  handleTouch,
  handleRemoveProject,
}) => {
  const { currentProjects } = data;

  function handleChange({ target }) {
    if (target?.value?.trim()) {
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
  }
  const currentProjectsErr = errors.currentProjects[index];
  const touchedCurrentProjects = touched.currentProjects[index];
  return (
    <StyledProjectDetails>
      <div className="project-details-sections">
        <SelectComponent
          label="Project"
          name="selectedProject"
          onChange={handleChange}
          options={data.projects}
          className="select-project"
          onFocus={() =>
            handleTouch({
              name: "selectedProject",
              category: "currentProjects",
              index,
            })
          }
          value={project.selectedProject}
          error={
            currentProjectsErr?.selectedProject &&
            touchedCurrentProjects?.selectedProject
          }
        />
        <TextareaComponent
          label="Details"
          value={project.details}
          onChange={handleChange}
          onBlur={() =>
            handleTouch({
              name: "details",
              category: "currentProjects",
              index,
            })
          }
          className="textarea-details-field"
          error={currentProjectsErr?.details && touchedCurrentProjects?.details}
        />
        <div className="duration-container">
          <div>Duration </div>
          <div className="duration-section">
            <InputComponent
              type="number"
              name="duration"
              size="extraSmall"
              id="duration-input"
              onChange={handleChange}
              value={project.duration}
              onBlur={() =>
                handleTouch({
                  name: "duration",
                  category: "currentProjects",
                  index,
                })
              }
              error={
                currentProjectsErr?.duration && touchedCurrentProjects?.duration
              }
            />
            <SelectComponent
              name="units"
              value={project.units}
              onChange={handleChange}
              className="select-duration"
              options={Constants.projectDetail.duration}
              onFocus={() =>
                handleTouch({
                  name: "units",
                  category: "currentProjects",
                  index,
                })
              }
              error={currentProjectsErr?.units && touchedCurrentProjects?.units}
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
      </div>
    </StyledProjectDetails>
  );
};
export default ProjectDetails;
