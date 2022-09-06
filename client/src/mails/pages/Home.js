import { useEffect, useState } from 'react';
import { useMails } from '../hooks';

 
export const Home = () => {

  const {mails, loadMails} = useMails();

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setWordEntered(searchWord);
    const newFilter = mails.filter((mail) => {
      return mail.user.toLowerCase().includes(searchWord.toLowerCase());
    });

    if (searchWord === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const clearInput = () => {
    setFilteredData([]);
    setWordEntered("");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        
        loadMails();

    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="search">
      <div className="searchInputs">
        <input
          type="text"
          placeholder="Result mails"
          value={wordEntered}
          onChange={handleFilter}
        />
        <div className="searchIcon">
          {filteredData.length === 0 ? (
            <button>Buscar</button>
          ) : (
            <button id="clearBtn" onClick={clearInput} > RC</button>
          )}
        </div>
      </div>
      {filteredData.length !== 0 && (
        <div className="dataResult">
          {filteredData.slice(0, 15).map((mail, key) => {
            return (
              <p className="dataItem" target="_blank">
                <p>{mail.user} </p>
              </p>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Home;