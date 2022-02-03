import '../../App.css';

const Welcome = () => {

 const pageModel = (
   <div className='welcome container'>
    <h2>Welcome to Online Notes</h2>
    <p>Here you can create online notes that you can access anywhere!</p>
    <br></br>
    <p>Start by <a href='/signup'>creating an account</a> or <a href='/signin'>login</a> if you've already signed up.</p>
   </div>
 )
 return pageModel;
}

export default Welcome;
