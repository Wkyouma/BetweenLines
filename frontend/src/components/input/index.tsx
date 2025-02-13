import styled from "styled-components"

interface InputProps {
    placeholder: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, onBlur }: InputProps) => {
    return <StyledInput placeholder={placeholder} onBlur={onBlur} />
}

export default Input

const StyledInput = styled.input`
    border: 1px solid #FFF;
    background: transparent;
    padding: 10px 20px;
    border-radius: 50px;
    width: 250px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 10px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`
