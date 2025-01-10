const CompaniesSelector = ({ companies, formData, handleChange }) => {
  return (
    <select
      onChange={handleChange}
      className="form-select"
      id="companyId"
      name="companyId"
      defaultValue={formData.companyId}
      required
    >
      <option value="0">-- Select Company --</option>
      {companies
        ? companies.map((company, index) => (
            <option key={company._id} value={company._id}>
              {company.name}
            </option>
          ))
        : null}
    </select>
  )
}

export default CompaniesSelector
