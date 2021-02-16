import React from 'react';

const UserProfile = ( {labelTitle, } ) => {
    return(
        <>
            <div className="container">
                <form className="form" action="">
                    <div className="form-group">
                        <input className="input"  id="userName"/>
                        <label className="label"  for="userName">email address</label>
                    </div>
                    <div className="form-group">
                        <input className="input"  id="userName"/>
                        <label className="label"  for="userName">username</label>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserProfile;