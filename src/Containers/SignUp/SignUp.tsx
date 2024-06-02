import { useState } from "react";
import { useNavigate } from "react-router";
import Button from "../../Components/Button/Button";
import DropdownMain from "../../Components/DropdownMain/DropdownMain";
import FormLayout from "../../Components/FormLayout/FormLayout";
import Input from "../../Components/Input/Input";
import { cities } from "../HomepageStates/HomepageStates";

const SignUp = () => {
  // States
  const [city, setCity] = useState("");

  //   Router
  const navigate = useNavigate();

  return (
    <FormLayout>
      <form>
        <h4>SIGN UP HERE</h4>
        <Input label="Fullname (Surname first)" placeholder="Type here" />
        <Input label="Email address" placeholder="Type here" type="email" />
        <Input label="Phone number" placeholder="Type here" type="phone" />
        <DropdownMain
          options={["Male", "Female", "Prefer not to say", "Others"]}
          title="Select"
          label="Gender"
        />
        <DropdownMain
          options={["16 -18", "19 - 21", "21-27", "Above 27"]}
          title="Select"
          label="Age"
        />
        <DropdownMain
          options={["Yes", "No"]}
          title="Select"
          label="Do you have any previous volunteering experience?"
        />
        <DropdownMain
          options={["Yes", "No"]}
          title="Select"
          label="Are you a member of AIESEC?"
        />
        <DropdownMain
          options={[...cities]}
          title="Select"
          label="Where are you travelling from?"
        />

        <DropdownMain
          options={[...cities]}
          title="Select"
          label="Location of your preferred project"
          selected={city}
          setSelected={setCity}
        />

        <Button
          noRadius
          onClick={() => {
            if (city) {
              navigate(`/sign-up/${city?.replace(" ", "-")?.toLowerCase()}`);
            }
          }}
          disabled={!city}
        >
          Next
        </Button>
      </form>
    </FormLayout>
  );
};

export default SignUp;
