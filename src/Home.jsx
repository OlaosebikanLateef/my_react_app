const Home = () => {

    const handleClick = () => {
        console.log('hello, ninjas');
    }

    const handleClickAgain  = (name) => {
        console.log('hello ' + name)
    }
    return ( 
        <div className="home">
             <h1>Homepage</h1>
             <button  onClick={handleClick} className="btn btn-primary">Click Me</button>

             <button  onClick={() => handleClickAgain('mario')} className="btn btn-primary">Click Me</button>
        </div>
     );
}
 
export default Home;