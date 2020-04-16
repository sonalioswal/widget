/* eslint react/prop-types: 0 */
import React, {useState} from 'react';

import '../widget/Widget.scss';
import WidgetWindow from '../../components/widget-window/WidgetWindow';

const Widget = () => {
  const [isOpenDialog, setOpenDialog] = useState(false);

  const handleToggleButton = () => {
    setOpenDialog(!isOpenDialog);
  }

  return (
    <>
      {!isOpenDialog && <button className="icon-button" onClick={handleToggleButton}>
        Need Help ?
      </button>}
      {isOpenDialog && (
        <WidgetWindow 
          title="Header"
          handleToggleButton={handleToggleButton}
        />
      )}
    </>
  )
}

export default Widget;
