import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { VIEW_MODE } from './App';

const Setting = ({ openTimeSetting, mode, setMode }) => {
  const handleModeChange = (newMode) => {
    setMode(newMode);
    document.body.style.background = "rgb(255, 255, 180)";
  }

  return (
    <div className='setting-icon'>
      <div className='study_break'>
        <button
          onClick={() => handleModeChange('study')}
          className={mode === VIEW_MODE.study ? 'active' : ''}
        >
          Study
        </button>

        <button
          onClick={() => handleModeChange('break')}
          className={mode === VIEW_MODE.break ? 'active' : ''}
        >
          Break
        </button>
      </div>

      <FontAwesomeIcon 
        onClick={openTimeSetting} 
        icon={faGear} 
        style={{cursor: 'pointer', fontSize: '24px'}} 
      />
    </div>
  )
}

export default Setting