import { useState } from 'react';

function useForm(initialValues) {
  const [formData, setFormData] = useState(initialValues);

  function handleInputChange(event) {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  }

  function clearForm() {
    setFormData(initialValues);
  }

  return {
    formData,
    handleInputChange,
    clearForm,
  };
}

export default useForm;
