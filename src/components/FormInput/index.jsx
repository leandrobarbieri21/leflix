import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  position: relative;

  textarea {
    min-height: 150px;
  }

  input[type="color"] {
    padding-left: 56px;
  }
`;

const Label = styled.label``;
Label.Text = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;
   
  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: .1s ease-in-out;
`;

const Input = styled.input`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color .3s;

  &:focus {
    border-bottom-color: var(--primary);
  }

  &:focus:not([type="color"]) + span {
    transform: scale(.6) translateY(-10px);
  }

  ${({ value }) => value && css`
      &:not([type="color"]) + span {
        transform: scale(.6) translateY(-10px);
      }
    `}
`;

function FormInput({
  label, type, name, value, onChange, suggestions,
}) {
  const formInputId = `id_${name}`;
  const isTextAreaTag = type === 'textarea';
  const tag = isTextAreaTag ? type : 'input';

  const hasValue = Boolean(value.length);
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <Wrapper>
      <Label htmlFor={formInputId}>
        <Input
          as={tag}
          id={formInputId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          hasValue={hasValue}
          autocomplete="off"
          list={`suggestionFor_${formInputId}`}
        />
        <Label.Text>
          {label}
        </Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${formInputId}`}>
            {suggestions.map((suggestion) => (
              <option key={suggestion} value={suggestion}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </Wrapper>
  );
}

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

FormInput.defaultProps = {
  type: 'text',
  value: '',
  suggestions: [],
};

export default FormInput;
