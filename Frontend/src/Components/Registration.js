import { useState } from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'
import { Link } from 'react-router-dom'

const Container = styled.div`
display: flex;
height: 100vh;
width: 100vw;
justify-content: space-between;

${mobile({
    display: 'flex',
    flexDirection: 'column'
})}
`
const LeftWrapper = styled.div`
flex: 1;
display:flex;
flex-direction: column;
background-repeat: no-repeat;
`
const LogoImage = styled.img`
height: 10%;
width: 30%;
`
const Image = styled.img`
display:flex;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
`
const RightWrapper = styled.div`
flex: 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
background-color: #eee;
height: 100%;
width: 100%;
`
const Heading = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`
const Title = styled.h1`
margin: 20px;
${mobile({
    fontSize: '20px'
})}
`

const Form = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Input = styled.input`
margin: 5px;
padding: 15px;
border-radius: 5px;
border: none;
width:400px;
${mobile({
    width: '300px'
})}
`
const Button = styled.button`
margin: 10px;
padding: 15px 30px;
font-weight: 600;
border: none;
border-radius: 5px;
color: white;
background-color: blue;
border-radius: 8px;

&:hover{
    background-color: white;
    color: blue;
    border: 1px solid blue;
}
`
const FooterLink = styled.a`
font-weight: 600;
margin: 5px;
color: blue;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`
const FooterSection = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`


const Registration = () => {
    const [data, setData] = useState({ firstname: '', lastname: '', email: '', phoneNo: '', password: '' });
    const { firstname, lastname, email, phoneNo, password } = data;
    const handleOnClick = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const handleChange = (event) => {
        event.preventDefault();
        const user = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            phoneNo: phoneNo,
            password: password
        }
        console.log(user)
    }

    return (
        <Container>
            <LeftWrapper>
                <LogoImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK9j3f8AIQH8gl6jXgjOTKDZNiyHdpKuxL8Q&usqp=CAU" />
                <Image src="https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Title>SignUp Form</Title>
                </Heading>
                <Form >
                    <Input type="text" placeholder="Write First Name" value={firstname} name="firstname" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Last Name" value={lastname} name="lastname" onChange={handleOnClick} />
                    <Input type="email" placeholder="Write Email" value={email} name="email" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Phone No." value={phoneNo} name="phoneNo" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Password" value={password} name="password" onChange={handleOnClick} />
                    <Button type='submit' onClick={handleChange}>Next step</Button>
                </Form>
                <FooterSection>
                    <text>Already have an account?</text>
                    <FooterLink><Link to='/login'>LOGIN HERE!</Link></FooterLink>
                </FooterSection>
            </RightWrapper>
        </Container>
    )
}

export default Registration;