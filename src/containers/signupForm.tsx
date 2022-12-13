import {
  FC,
  useState,
} from 'react';

import { ReactComponent as Email } from 'assets/email.svg';
import { ReactComponent as Password } from 'assets/padlock.svg';
import { ReactComponent as LoginSVG } from 'assets/signin.svg';
import { ReactComponent as User } from 'assets/user.svg';
import {
  Button,
  Container,
  Field,
  Form,
  FormContainer,
  Heading1,
  Heading2,
  Icon,
  Input,
  Label,
  List,
} from 'components';

export const SignupForm: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = () => {
    console.log({ name, email, password, confirmPassword });
  };

  return (
    <Container row>
      <Container light small>
        <Heading1>
          Create an account
        </Heading1>
        <LoginSVG />
      </Container>
      <Container small>
        <FormContainer>
          <Heading2>Sign up</Heading2>
          <Form>
            <Field>
              <Icon>
                <User />
              </Icon>
              <Label htmlFor="name">
                Name
              </Label>
              <Input
                name="name"
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Icon>
                <Email />
              </Icon>
              <Label htmlFor="email">
                Email
              </Label>
              <Input
                name="Email"
                type="email"
                id="email"
                value={email}
                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                onInvalid={(e) => {
                  (e.target as HTMLInputElement).setCustomValidity("");
                  if (!(e.target as HTMLInputElement).validity.valid) {
                    (e.target as HTMLInputElement).setCustomValidity("Must be a valid email address");
                  }
                }}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Field>
            <Field>
              <Icon>
                <Password />
              </Icon>
              <Label htmlFor="password">Password</Label>

              <Input
                name="password"
                type="password"
                id="password"
                minLength={8}
                pattern="^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
                onInput={(e) => (e.target as HTMLInputElement).setCustomValidity("")}
                onInvalid={(e) => {
                  (e.target as HTMLInputElement).setCustomValidity("");
                  if (!(e.target as HTMLInputElement).validity.valid) {
                    (e.target as HTMLInputElement).setCustomValidity(
                      "Must contain at least one upper case letter, at least one lower case letter, at least one number, at least one special character, minimum eight in length"
                    );
                  }
                }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Field>

            <Field>
              <Icon>
                <Password />
              </Icon>
              <Label htmlFor="confirmPassword">Confirm password</Label>
              <Input
                name="confirmPassword"
                type="password"
                id="confirmPassword"
                value={confirmPassword}
                minLength={8}
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
                onKeyUp={(e) => {
                  if (
                    password &&
                    confirmPassword &&
                    password !== confirmPassword
                  ) {
                    (e.target as HTMLInputElement).setCustomValidity("Passwords must match");
                  } else {
                    (e.target as HTMLInputElement).setCustomValidity("");
                  }
                }}
              />
            </Field>
            <br />
            <p>Password Must Contain:</p>
            <List>
              <li>At least 1 uppercase and lowercase letter</li>
              <li>At least 1 number</li>
              <li>At least 1 special characer</li>
              <li>At least 8 characers</li>
            </List>
            <Button onClick={handleSubmit}>
              Submit
            </Button>
          </Form>
        </FormContainer>
      </Container>
    </Container>
  );
};
