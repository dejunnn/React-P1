import React from 'react'; // To run JSX, must always import React

const SearchBox = (prop) => {
	return(
		<div className="pa2"> 
            <input 
                className="pa3 ba b--green bg-lightest-blue"
                type="search" 
                placeholder="Search Place"
                onChange = {prop.onSearchChange} 
                />
		</div>
)
} 
export default SearchBox;
