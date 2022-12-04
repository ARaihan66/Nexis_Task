import { useState } from 'react'
import styled from 'styled-components'
import { mobile } from './Responsive'

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
const Link = styled.a`
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


const Login = () => {
    const [data, setData] = useState({ email: '', password: '' });
    const { email, password } = data;
    const handleOnClick = (event) => {
        if (event.target.name === "email") {
            setData({ email: event.target.value, password })
        }

        if (event.target.name === "password") {
            setData({ email, password: event.target.value })
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const user = {
            email: email,
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
                    <Title>Log In Form</Title>
                </Heading>
                <Form onSubmit={handleSubmit}>
                    <Input type="email" placeholder="Write Email Address" value={email} name="email" onChange={handleOnClick} />
                    <Input type="text" placeholder="Write Password" value={password} name="password" onChange={handleOnClick} />
                    <Button type='submit'>Log In</Button>
                </Form>
                <FooterSection>
                    <text>Don't have an account?</text>
                    <Link>SIGNUP HERE?</Link>
                </FooterSection>
            </RightWrapper>
        </Container>
    )
}

export default Login
