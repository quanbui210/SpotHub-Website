import React, {useState} from 'react'
import Form from 'react-bootstrap/Form';
import './FooterForm.css'
import ModalShow from '../../Modal/ModalShow'
import Wrapper from '../Helper/Wrapper'


const FooterForm = ({value, onClick, onChange}) => {
    const [enteredEmail, setEnteredEmail] = useState('')
    const [error, setError] = useState(true)
    const [show, setShow] = useState(false);
    const [checked, setChecked] = useState(false)
    const [checkLabel, setCheckLabel] = useState('By submitting this form I give my consent to process my data according to the company privacy policy.*')

    const handleSubmitEmail = (event) => {
        event.preventDefault()
        if(enteredEmail.trim().length === 0) {
          setError({
            title: 'Error',
            body: 'Email can not be empty'
            })
            setShow(true)
            return
        } 
        setEnteredEmail('')
        if(checked === false) {
          setCheckLabel(prevLabel => [prevLabel, <p key={Math.random()*100} style={{color: '#fa4141', fontSize: '12px', marginTop: '3px'}}>You need to select the checkbox!</p>])
          return
        } else {
          setCheckLabel('By submitting this form I give my consent to process my data according to the company privacy policy.*')
        }
          setCheckLabel('By submitting this form I give my consent to process my data according to the company privacy policy.*')
      }
      const handleClose = () => setError(null);
      const handleFormChange = (event) => setEnteredEmail(event.target.value)
      const handleCheckBox = (event) => setChecked(!checked)



  return (
    <Wrapper>
        {error && <ModalShow onShow={show} title={error.title} body={error.body} onHide={handleClose}/>}
        <Form className='form-container'>
        <Form.Group className="form-group" controlId="formBasicEmail">
        <h3 className="form-sub">Subscribe To Our Newsletters</h3>
        <Form.Label className="form-label">Email address</Form.Label>
        <Form.Control onChange={handleFormChange} className="form-control" value={enteredEmail} type="email" placeholder="Enter email" />
        <Form.Text className="form-text">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="form-group" controlId="formBasicCheckbox">
        <Form.Check onChange={handleCheckBox} defaultChecked={checked}   className="form-label-check" type="checkbox" label={checkLabel}/>
        <button onClick={handleSubmitEmail} type="submit" className="btn btn-footer">Subscribe</button>
      </Form.Group>
        </Form>
    </Wrapper>
  )
}

export default FooterForm
