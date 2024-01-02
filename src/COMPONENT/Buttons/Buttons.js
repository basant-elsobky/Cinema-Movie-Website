import './Button.css'
export const Redbutton = (props) => {
    return (
      <button className='login text-center text-capitalize'>{props.name}</button>
    );
  };
export const Facebookbutton = () => {
    return (
      <button className='facebook'>continue with facebook</button>
      );
  };
export const Googlebutton = () => {
    return (
      <button className='google'>continue with google</button>
      );
  };


