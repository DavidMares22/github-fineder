import React, { useContext, useState } from 'react';
import GithubContext from '../../context/github/githubContext';

const Search  = (props) => {
    const githubContext = useContext(GithubContext);
    const [text,setText] = useState('');

    const onChange = (e) =>{
        setText(e.target.value);
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        if(text === ''){
            props.setAlert('Please enter something','light')
        }else{
            githubContext.searchUsers(text);
            setText('')
        }
    }

    
        return (
            <div>
                <form onSubmit={onSubmit} className="form">
                    <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange} />
                    <input type="submit" value="Seach" className="btn btn-dark btn-block" />
                </form>
                {githubContext.users.length>0 && <button className="btn btn-light btn-block" onClick={githubContext.clearUsers}>Clear</button>}
                
            </div>
        );
    
}

export default Search;
