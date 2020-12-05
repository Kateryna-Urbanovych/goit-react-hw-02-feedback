import PropTypes from 'prop-types';
import { Fragment } from 'react';

function Section({ title, children }) {
    return (
        <Fragment>
            <h2>{title}</h2>
            {children}
        </Fragment>
    );
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
};

export default Section;
