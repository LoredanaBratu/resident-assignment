import React, { useState, useEffect } from "react";
import StyledUserForm from "./StyledUserForm";
import ClearIcon from "../../assets/close.png";
import Footer from "../../components/Footer/Footer";
import ProjectDetails from "../ProjectDetails/ProjectDetails";
import InputComponent from "../../components/InputComponent/InputComponent";
import ErrorComponent from "../../components/ErrorComponent/ErrorComponent";

const UserForm = () => {
  const [projectsInput, setProjectsInput] = useState("");
  const [currentProjId, setCurrentProjId] = useState(0);
  const [projectNameError, setProjectNameError] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showJSON, setShowJSON] = useState(false);
  const [formData, setFormData] = useState({
    userName: "",
    projects: [],
    currentProjects: [],
  });
  const [errors, setErrors] = useState({ projects: [], currentProjects: [] });
  const [touched, setTouched] = useState({
    userName: false,
    projects: [],
    currentProjects: [],
  });

  useEffect(() => {
    validateForm();
  }, [touched, formData]);

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
    if (target?.value.trim()) {
      setFormData((prevState) => ({
        ...prevState,
        [target?.name]: target?.value,
      }));
    }
  }
  function handleInputProjectsChange({ target }) {
    setProjectsInput(target?.value);
  }
  function addProjectName(e) {
    const { target } = e;
    if (e?.key !== "Enter" || !target?.value?.trim()) {
      return;
    }

    if (formData.projects.indexOf(projectsInput) > -1) {
      setProjectNameError("Project already exists");
      setTimeout(() => {
        setProjectNameError("");
      }, 3000);

      return;
    }
    setFormData((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, projectsInput],
    }));
    setProjectsInput("");
    setTouched((prevState) => ({
      ...prevState,
      projects: [...prevState.projects, false],
    }));
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
    setCurrentProjId((prevState) => prevState + 1);
    setTouched((prevState) => ({
      ...prevState,
      currentProjects: [
        ...prevState.currentProjects,
        {
          selectedProject: false,
          details: false,
          duration: false,
          units: false,
        },
      ],
    }));
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
  }

  function toggleJSON() {
    setShowJSON((state) => !state);
  }

  function validateForm() {
    const newErrors = { projects: [], currentProjects: [] };
    if (!formData.userName) {
      newErrors.userName = true;
    }
    if (!formData.projects.length) {
      newErrors.projects = [...newErrors.projects, true];
    }

    if (!formData.currentProjects.length) {
      newErrors.currentProjects = [
        ...newErrors.currentProjects,
        { selectedProject: true },
      ];
    }
    formData.projects.forEach((project) => {
      if (!project) {
        newErrors.projects = [...newErrors.projects, true];
      }
    });

    formData.currentProjects.forEach((project) => {
      const projectErrors = {};
      Object.keys(project).forEach((key) => {
        if (!project[key] && key !== "projectId") {
          projectErrors[key] = true;
        }
      });
      newErrors.currentProjects = [...newErrors.currentProjects, projectErrors];
    });
    setErrors(newErrors);
  }

  function updateTouchedInputs() {
    const newTouched = { projects: [], currentProjects: [] };
    if (!formData.userName) {
      newTouched.userName = true;
    }
    formData.projects.forEach((project) => {
      if (!project) {
        newTouched.projects = [...newTouched.projects, true];
      }
    });
    formData.currentProjects.forEach((project) => {
      const projectTouched = {};
      Object.keys(project).forEach((key) => {
        if (!project[key] && key !== "projectId") {
          projectTouched[key] = true;
        }
      });
      newTouched.currentProjects = [
        ...newTouched.currentProjects,
        projectTouched,
      ];
    });
    setTouched(newTouched);
  }

  function isValidForm() {
    let isValid = true;
    if (errors.userName) {
      isValid = false;
    }
    errors.projects.forEach((project) => {
      if (project) {
        isValid = false;
      }
    });
    errors.currentProjects.forEach((project) => {
      Object.keys(project).forEach((key) => {
        if (project[key]) {
          isValid = false;
        }
      });
    });
    return isValid;
  }

  function submitForm() {
    validateForm();
    updateTouchedInputs();

    if (isValidForm()) {
      console.log("Success: ", formData);
      setFormSubmitted(true);
    } else {
      console.log("Error: empty fields");
    }
  }
  function resetForm() {
    setFormData({ userName: "", projects: [], currentProjects: [] });
  }

  function handleTouch({ index, name, category }) {
    if (!category) {
      setTouched((state) => ({ ...state, [name]: true }));
    } else {
      const newCategory = [...touched[category]];
      if (category === "projects") {
        newCategory.splice(index, 1, true);
      } else {
        const item = newCategory[index];
        newCategory.splice(index, 1, { ...item, [name]: true });
      }
      setTouched((state) => ({ ...state, [category]: newCategory }));
    }
  }

  const { userName, projects, currentProjects } = formData;
  return (
    <StyledUserForm>
      {showJSON ? (
        <div className="json-string"> {JSON.stringify(formData)}</div>
      ) : (
        <form className="user-form-container" data-testid="projects-form">
          {formSubmitted && <p className="submitted-message">Submitted!</p>}
          <InputComponent
            size="large"
            label="Name"
            name="userName"
            value={userName}
            id="user-name-input"
            onChange={handleInputChange}
            error={errors.userName && touched.userName}
            onBlur={() => handleTouch({ name: "userName" })}
          />
          <p>Projects</p>
          <div className="projects-tags">
            {(projects || []).map((project, index) => (
              <InputComponent
                key={index + "-project"}
                size="small"
                name="projects"
                value={project}
                id="project-name-tag"
                RightIcon={ClearIcon}
                onRightIconClick={handleRemoveTag}
                onChange={({ target }) =>
                  onProjectNameUpdate(target.value, index)
                }
                error={errors.projects[index] && touched.projects[index]}
                onBlur={() => handleTouch({ category: "projects" })}
              />
            ))}
            <InputComponent
              size="small"
              name="projects"
              value={projectsInput}
              onKeyDown={addProjectName}
              id="project-name-input"
              onChange={handleInputProjectsChange}
            />
            {projectNameError && <ErrorComponent message={projectNameError} />}
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
                data={formData}
                errors={errors}
                touched={touched}
                project={project}
                setFormData={setFormData}
                projectId={project.projectId}
                handleTouch={handleTouch}
                handleRemoveProject={handleRemoveProject}
              />
            ))}
          </div>
        </form>
      )}
      <Footer
        showJSON={showJSON}
        onCancel={resetForm}
        onSubmit={submitForm}
        toggleJSON={toggleJSON}
      />
    </StyledUserForm>
  );
};
export default UserForm;
