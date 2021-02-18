import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import Enzyme, { mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ReactTestUtils from "react-dom/test-utils";
import UserForm from "./UserForm";

Enzyme.configure({ adapter: new Adapter() });

it("form is found", () => {
  const projectForm = mount(<UserForm />);
  expect(projectForm.find("form").length).toBe(1);
});

it("form is rendered", () => {
  const { getByTestId } = render(<UserForm />);
  expect(getByTestId("projects-form")).toBeTruthy();
});

it("no submitted message if form is not filled in", () => {
  const wrapper = mount(<UserForm />);
  const form = wrapper.find("form");

  form.simulate("submit");
  expect(form.find(".submitted-message").exists()).toBeFalsy();
});

it("project names are added on enter", () => {
  const wrapper = document.createElement("div");
  ReactDOM.render(<UserForm />, wrapper);
  const tagInput = wrapper.querySelector("#project-name-input");

  ReactTestUtils.Simulate.change(tagInput, { target: { value: "Test" } });

  expect(tagInput.value).toEqual("Test");

  expect(wrapper.querySelector("#project-name-tag")).toBeFalsy();

  ReactTestUtils.Simulate.change(tagInput, { target: { value: "Test" } });
  ReactTestUtils.Simulate.keyDown(tagInput, { key: "Enter" });

  expect(wrapper.querySelector("#project-name-tag")).toBeTruthy();
});

it("add project detail section on click", () => {
  const wrapper = document.createElement("div");
  ReactDOM.render(<UserForm />, wrapper);
  const addSectionIcon = wrapper.querySelector(".add-section-icon");
  expect(addSectionIcon).toBeTruthy();
  expect(wrapper.querySelector(".project-details-sections")).toBeFalsy();
  ReactTestUtils.Simulate.click(addSectionIcon);
  expect(wrapper.querySelector(".project-details-sections")).toBeTruthy();
});

describe("User Projects form Testing", () => {
  it("form submitted with success", () => {
    const wrapper = document.createElement("div");
    ReactDOM.render(<UserForm />, wrapper);

    const nameInput = wrapper.querySelector("#user-name-input");
    nameInput.value = "Mark Edison";
    ReactTestUtils.Simulate.change(nameInput);
    expect(nameInput.value).toEqual("Mark Edison");

    const tagInput = wrapper.querySelector("#project-name-input");
    ReactTestUtils.Simulate.change(tagInput, {
      target: { value: "Real world" },
    });
    expect(tagInput.value).toEqual("Real world");

    expect(wrapper.querySelector("#project-name-tag")).toBeFalsy();
    ReactTestUtils.Simulate.keyDown(tagInput, { key: "Enter" });
    expect(wrapper.querySelector("#project-name-tag")).toBeTruthy();

    const addSectionIcon = wrapper.querySelector(".add-section-icon");
    expect(addSectionIcon).toBeTruthy();
    expect(wrapper.querySelector(".project-details-sections")).toBeFalsy();
    ReactTestUtils.Simulate.click(addSectionIcon);
    expect(wrapper.querySelector(".project-details-sections")).toBeTruthy();

    const projectSelector = wrapper.querySelector(".select-project");
    expect(projectSelector).toBeTruthy();
    projectSelector.value = "Real world";
    ReactTestUtils.Simulate.change(projectSelector);
    expect(projectSelector.value).toEqual("Real world");

    const details = wrapper.querySelector(".textarea-details-field");
    expect(details).toBeTruthy();
    details.value = "Some details";
    ReactTestUtils.Simulate.change(details);
    expect(details.value).toEqual("Some details");

    const units = wrapper.querySelector(".select-duration");
    expect(units).toBeTruthy();
    units.value = "days";
    ReactTestUtils.Simulate.change(units);
    expect(units.value).toEqual("days");

    const duration = wrapper.querySelector("#duration-input");
    expect(duration).toBeTruthy();
    duration.value = "10";
    ReactTestUtils.Simulate.change(duration);
    expect(duration.value).toEqual("10");

    const unitsSelector = wrapper.querySelector(".select-duration");
    expect(unitsSelector).toBeTruthy();
    unitsSelector.value = "days";
    ReactTestUtils.Simulate.change(unitsSelector);
    expect(unitsSelector.value).toEqual("days");

    expect(wrapper.querySelector(".submitted-message")).toBeFalsy();
    const buttonSubmit = wrapper.querySelector(".submit");
    ReactTestUtils.Simulate.click(buttonSubmit);
    expect(wrapper.querySelector(".submitted-message")).toBeTruthy();
  });
});
