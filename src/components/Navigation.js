import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div>
            <div className="Navigation">
                <div>
                    <Link to="/welcome-page"> Welcome Page </Link>
                </div>
                <div>
                    <Link to="/characters"> Characters </Link>
                </div>
            </div>
        </div>
    );
};

export default Navigation;