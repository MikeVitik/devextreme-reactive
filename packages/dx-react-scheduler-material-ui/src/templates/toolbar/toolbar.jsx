import * as React from 'react';
import { styled } from '@mui/material/styles';
import * as PropTypes from 'prop-types';
import classNames from 'clsx';
import ToolbarMUI from '@mui/material/Toolbar';
import { getBorder } from '../utils';

const PREFIX = 'Toolbar';

export const classes = {
  toolbar: `${PREFIX}-toolbar`,
};

const StyledToolbarMUI = styled(ToolbarMUI)(({ theme }) => ({
  [`&.${classes.toolbar}`]: {
    borderBottom: getBorder(theme),
  },
}));

export const Toolbar = ({
  children, className, ...restProps
}) => (
  <StyledToolbarMUI
    className={classNames(classes.toolbar, className)}
    {...restProps}
  >
    {children}
  </StyledToolbarMUI>
);

Toolbar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Toolbar.defaultProps = {
  className: undefined,
};
