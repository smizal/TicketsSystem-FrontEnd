const DepartmentsSelector = ({ departments, formData, handleChange }) => {
  return (
    <select
      onChange={handleChange}
      className="form-select"
      id="departmentId"
      name="departmentId"
      defaultValue={formData.departmentId}
      required
    >
      <option value="0">-- Select Department --</option>
      {departments
        ? departments.map((department, index) => (
            <option key={department._id} value={department._id}>
              {department.name}
            </option>
          ))
        : null}
    </select>
  )
}

export default DepartmentsSelector
