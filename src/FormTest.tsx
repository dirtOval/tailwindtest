import {useState} from 'react';

function FormTest() {
  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = function (e) {
    e.target.checked ? setIsDisabled(true) : setIsDisabled(false);
  }

  return (
    <div className="bg-white outline-1 outline-green-500">
      <form>
        <input className="bg-black text-green-500"
               type="text"
               placeholder="type something?"
               disabled={isDisabled} />
        <input name="disableBox"
               type="checkbox"
               onClick={handleClick.bind(this)} />
        <label htmlFor="disablebox">disable input?</label>
        <input className="bg-black invalid:text-red-500 text-green-500"
               type="email"
               placeholder="deirdre@deirdre.com" />
      </form>
    </div>
  )
};

export default FormTest;