import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const BookTripEl = styled.div`
  background-color: #220901;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BookTripRow = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 18px;
  padding: 24px;
  color: #fff;
`;

export const FormHeading = styled.h1`
  margin-bottom: 24px;
  font-size: 36px;
`;

export const Form = styled.form`
  color: #bc3908;
  display: block;
	width: 300px;
  margin: 50px auto;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 22px;
  margin-bottom: 6px;
  color: #fff;
`;

export const Input = styled.input`
	padding: 1em;
	color: #220901;
	background: papayawhip;
	border: none;
	border-radius: 3px;
	width: 100%;
	margin-bottom: 1em;
`;

export const BtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`