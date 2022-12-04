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
justify-content: center;
align-items: center;
background-repeat: no-repeat;
`
const Image = styled.img`
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
const Icon = styled.div`
width: 150px;
height: 150px;
border-radius: 50%;
color: blue;
font-size: 40px;
margin: 20px;
display: flex;
align-items: center;
justify-content: center;
`
const IconImage = styled.img`
width:100%;
height: 100%;
border-radius: 50%;
object-fit: cover;
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
padding: 15px 20px;
font-weight: 600;
border: none;
border-radius: 5px;

&:hover{
    background-color: lightgrey;
}
`
const Link = styled.a`
font-weight: 400;
margin: 5px;
cursor: pointer;

&:hover{
    text-decoration: underline;
}
`


const Login = () => {
    return (
        <Container>
            <LeftWrapper>
                <Image src="https://t4.ftcdn.net/jpg/04/28/75/97/360_F_428759715_jsOPITlaytE3QXc2yI1D4U6uwZdVGkRp.jpg" />
            </LeftWrapper>
            <RightWrapper>
                <Heading>
                    <Icon>
                        <IconImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyD3SI8Qdekp6twYtnVVcpKfHw7WVQGy9Yfd32EiXPZI30cEgXJ-XhquB0ObTnutlwQrM&usqp=CAU" />
                    </Icon>
                    <Title>WELCOME</Title>
                </Heading>
                <Form>
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Button>SIGN IN</Button>
                </Form>
                <Link>CREATE ACCOUNT</Link>
            </RightWrapper>
        </Container>
    )
}

export default Login
