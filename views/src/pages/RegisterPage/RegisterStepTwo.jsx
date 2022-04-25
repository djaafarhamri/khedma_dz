const RegisterStepTwo = ({ goToNext }) => {
    return ( 
        <div>
            <h1>step Two</h1>
            <button onClick={() => goToNext({name: 'djaafar'})}>next</button>
        </div>
     );
}
 
export default RegisterStepTwo;