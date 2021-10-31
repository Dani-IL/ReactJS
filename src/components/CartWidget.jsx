import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function CartWidget() {
  return (
    <div className="CartWidget">
      <IconButton size="large" aria-label="show 4 items" color="inherit">
        <Badge badgeContent={4} color="error">
          < ShoppingCartOutlinedIcon />
        </Badge>
      </IconButton>

    </div>
  );
}

export default CartWidget;
