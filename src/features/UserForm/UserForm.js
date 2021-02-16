import React, { useState } from "react";
import StyledUserForm from "./StyledUserForm";
import ClearIcon from "../../assets/close.png";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import InputComponent from "../../components/InputComponent/InputComponent";
import Footer from "../../components/Footer/Footer";

const UserForm = () => {
  const [projectsInput, setProjectsInput] = useState("");
  const [currentProjId, setCurrentProjId] = useState(0);
  const [showJSON, setShowJSON] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    projects: [],
    currentProjects: [],
  });
  const [errors, setErrors] = useState({ projects: [], currentProjects: [] });

  function updateCurrentProjects(oldProjectName, newProjectName) {
    return [...formData.currentProjects].map((project) =>
      oldProjectName === project.selectedProject
        ? { ...project, selectedProject: newProjectName }
        : project
    );
  }

  function onProjectNameUpdate(newName, index) {
    const newProjects = [...formData.projects];
    const oldProjectName = newProjects[index];
    newProjects[index] = newName;
    const currentProjects = updateCurrentProjects(oldProjectName, newName);

    setFormData({ ...formData, projects: newProjects, currentProjects });
  }

  function handleInputChange({ target }) {
    setFormData((prevState) => ({
      ...prevState,
      [target?.name]: target?.value,
    }));
  }
  function handleInputProjectsChange({ target }) {
    setProjectsInput(target?.value);
  }
  function addProjectName(e) {
    if (e?.key !== "Enter") {
      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      projects: [...formData.projects, projectsInput],
    }));
    setProjectsInput("");
  }

  function handleAddSection() {
    setFormData({
      ...formData,
      currentProjects: [
        ...formData.currentProjects,
        {
          projectId: currentProjId,
          selectedProject: "",
          details: "",
          duration: "",
          units: "",
        },
      ],
    });
    setCurrentProjId((state) => state + 1);
  }

  function handleRemoveProject(projectId) {
    const updatedProjectsList = (formData.currentProjects || []).filter(
      (project) => {
        return project.projectId !== projectId;
      }
    );

    setFormData({ ...formData, currentProjects: updatedProjectsList });
  }

  function handleRemoveTag(projectName) {
    const updatedProjectsList = (formData.projects || []).filter((project) => {
      return project !== projectName;
    });
    const currentProjects = updateCurrentProjects(projectName, "");

    setFormData({
      ...formData,
      projects: updatedProjectsList,
      currentProjects,
    });
    setTimeout(() => {
      validateForm();
    }, 1000);
  }

  function toggleJSON() {
    setShowJSON((state) => !state);
  }

  function validateForm() {
    const newErrors = { projects: [], currentProjects: [] };
    if (!formData.userName) {
      newErrors.userName = true;
    }
    formData.projects.forEach((project) => {
      if (!project) {
        newErrors.projects = [...newErrors.projects, true];
      }
    });
    formData.currentProjects.forEach((project) => {
      const projectErrors = {};
      Object.keys(project).forEach((key) => {
        if (!project[key]) {
          projectErrors[key] = true;
        }
      });
      newErrors.currentProjects = [...newErrors.currentProjects, projectErrors];
    });
    setErrors(newErrors);
  }
  function submitForm() {
    validateForm();
  }
  function resetForm() {
    setFormData({ userName: "", projects: [], currentProjects: [] });
  }

  const { userName, projects, currentProjects } = formData;
  return (
    <StyledUserForm>
      {showJSON ? (
        <div className="json-string"> {JSON.stringify(formData)}</div>
      ) : (
        <form className="user-form-container">
          <InputComponent
            label="Name"
            name="userName"
            value={userName}
            size="large"
            handleChange={handleInputChange}
            error={errors.userName}
          />
          <p>Projects</p>
          <div className="projects-tags">
            {(projects || []).map((project, index) => (
              <InputComponent
                key={index}
                name="projects"
                RightIcon={ClearIcon}
                value={project}
                size="small"
                handleChange={({ target }) =>
                  onProjectNameUpdate(target.value, index)
                }
                onRightIconClick={handleRemoveTag}
                error={errors.projects[index]}
              />
            ))}
            <InputComponent
              size="small"
              name="projects"
              value={projectsInput}
              addProjectName={addProjectName}
              handleChange={handleInputProjectsChange}
            />
          </div>

          <p className="project-details">
            Project details
            <img
              src={ClearIcon}
              alt="Add section"
              onClick={handleAddSection}
              className="add-section-icon"
            />
          </p>
          <div className="project-details-section">
            {currentProjects?.map((project, index) => (
              <ProjectDetails
                key={index}
                index={index}
                projectId={project.projectId}
                project={project}
                handleRemoveProject={handleRemoveProject}
                data={formData}
                setFormData={setFormData}
                errors={errors}
              />
            ))}
          </div>
        </form>
      )}
      <Footer
        toggleJSON={toggleJSON}
        showJSON={showJSON}
        onSubmit={submitForm}
        onCancel={resetForm}
      />
    </StyledUserForm>
  );
};
export default UserForm;
