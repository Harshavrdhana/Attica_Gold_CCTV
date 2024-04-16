import React, { useState } from 'react';
import './settings.css';
import Draggable from 'react-draggable';

const Settings = ({ closeModal }) => {
  const [recordsPath, setRecordsPath] = useState('');
  const [picturesPath, setPicturesPath] = useState('');
  const [saveLastScene, setSaveLastScene] = useState(true);
  const [eventNotificationSound, setEventNotificationSound] = useState(true);

  const handleRecordsPathChange = (event) => {
    setRecordsPath(event.target.value);
  };

  console.log(recordsPath)
  const handlePicturesPathChange = (event) => {
    setPicturesPath(event.target.value);
  }

  const handleSaveLastSceneChange = (event) => {
    setSaveLastScene(event.target.checked);
  };

  const handleEventNotificationSoundChange = (event) => {
    setEventNotificationSound(event.target.checked);
  };

  return (

    <Draggable bounds='body'>
      <div className='settings-main'>
        <div className='settings-header'
        >Setting </div>
        <div className='settings-content'>
          <div className='settings-records'>
            <label htmlFor="Save records to">Save records to</label>
            <input style={{ width: '25vW', height: '25px', marginLeft: '17px' }} type="text"
              placeholder='C:\Program Files(x86)\Ezviz Studio\record\' value={recordsPath}
              onChange={handleRecordsPathChange} />    <button className='settings-modify-button'>Modify</button>
          </div>
          <div className='settings-browse'>
            Save records to <span className='settings-browse-link'>Browse</span>
          </div>
          <div className='settings-picture'>
            <label htmlFor="">Save pictures to
            </label>
            <input style={{ width: '25vW', height: '25px', marginLeft: '13px' }} type="text"
              placeholder='C:\Program Files(x86)\Ezviz Studio\record\' value={picturesPath}
              onChange={handlePicturesPathChange} />

            <button className='settings-modify-button'>Modify</button>
          </div>
          <div className='settings-browse'>
            Save Pictures to <span className='settings-browse-link'> Browse</span>
          </div>
          <div className='settings-last-scene'>
            <label htmlFor="">Save last Scene</label>
            <span style={{ marginLeft: '6vW' }}></span>
            <input type="checkbox" checked={saveLastScene}
              onChange={handleSaveLastSceneChange} />Enable
          </div>
          <div className='settings-notification'>
            <label htmlFor="">Event Notification Sound</label>
            <span style={{ marginLeft: '28px' }}></span>
            <input type="checkbox"
              checked={eventNotificationSound}
              onChange={handleEventNotificationSoundChange} />Enable
          </div>
        </div>
        <div className='settings-footer'>
          <button
            className="settings-close-button"
            onClick={closeModal}
            style={{ cursor: 'pointer' }}
          >Close</button></div>
      </div>
    </Draggable>
  )
}

export default Settings;