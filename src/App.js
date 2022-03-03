import DaysButton from "./components/DaysButton";

function App() {
  const objectFunction = (values) => {
    return {
      ...values,
    };
  };

  console.log({
    ...objectFunction({ firstName: "Pavan", lastName: "Pattinson" }),
    dob: "13-01-1996",
    fatherName: "Randas Naik",
    motherName: "Manjula",
  });

  return (
    <div>
      <DaysButton />
    </div>
  );
}

export default App;
