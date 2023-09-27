import { useState } from 'react';
import { Stepper, Button, Group, TextInput, PasswordInput, Code } from '@mantine/core';
import { useForm } from '@mantine/form';
import { DateInput } from '@mantine/dates';

function AddEmployee() {
  const [active, setActive] = useState(0);

  const form = useForm({
    initialValues: {
      empid: '',
      password: '',
      name: '',
      email: '',
      website: '',
      github: '',
    },
    validate: (values) => {
      if (active === 0) {
        return {
          empid:
            values.empid.trim().length < 5
              ? 'Employee Id must be 5 numbers'
              : null,
          password:
            values.password.length < 6 ? 'Password must include at least 6 characters' : null,
        };
      }

      if (active === 1) {
        return {
          name: values.name.trim().length < 2 ? 'Name must include at least 2 characters' : null,
          email: /^\S+@\S+$/.test(values.email) ? null : 'Invalid email',
        };
      }

      return {};
    },
  });
  const nextStep = () =>
  setActive((current) => {
    if (form.validate().hasErrors) {
      return current;
    }
    return current < 3 ? current + 1 : current;
  });

const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

return (
  <>
    <Stepper active={active}>
      <Stepper.Step label="First step" description="Personal Information">
        <TextInput label="Employee ID" placeholder="Employee Id" {...form.getInputProps('empid')} />
        <PasswordInput
          mt="md"
          label="Password"
          placeholder="Password"
          {...form.getInputProps('password')}
        />
        <TextInput label="First Name" description="Enter First Name"{...form.getInputProps('fname')}/>
        <TextInput label="Last Name" description="Enter Last Name" {...form.getInputProps('lname')}/>
        
      </Stepper.Step>

      <Stepper.Step label="Second step" description="Office Information">
        <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />
      </Stepper.Step>

      <Stepper.Step label="Final step" description="Social media">
        <TextInput label="Website" placeholder="Website" {...form.getInputProps('website')} />
        <TextInput
          mt="md"
          label="GitHub"
          placeholder="GitHub"
          {...form.getInputProps('github')}
        />
      </Stepper.Step>
      <Stepper.Completed>
        Completed! Form values:
        <Code block mt="xl">
          {JSON.stringify(form.values, null, 2)}
        </Code>
      </Stepper.Completed>
    </Stepper>

    <Group style={{ justifyContent: 'flex-end'}} mt="xl">
      {active !== 0 && (
        <Button variant="default" onClick={prevStep}>
          Back
        </Button>
      )}
      {active !== 3 && <Button variant='default' onClick={nextStep}>Next step</Button>}
    </Group>
  </>
);
}

export default AddEmployee
