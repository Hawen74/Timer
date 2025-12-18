const SettingBox = ({ 
  timeSetting, 
  closeTimeSetting, 
  studyMinute,
  setStudyMinute,
  breakMinute,
  setBreakMinute,
  applyTimeSetting
}) => {
  const handleStudyChange = (e) => {
    const value = e.target.value;
    setStudyMinute(value === '' ? '' : Number(value));
  };

  const handleBreakChange = (e) => {
    const value = e.target.value;
    setBreakMinute(value === '' ? '' : Number(value));
  };

  return (
    <div className={`setting_box ${!timeSetting ? 'hidden' : ''}`}>
      <div className='timeline'>
        <p>Minutes</p>

        <div>
          <p>Study</p>
          <input 
            type='number' 
            value={studyMinute}
            onChange={handleStudyChange}
            placeholder='Focus Time'
            min="1"
          />
        </div>

        <div>
          <p>Break</p>
          <input 
            type='number' 
            value={breakMinute}
            onChange={handleBreakChange}
            placeholder='Break Time'
            min="1" 
          />
        </div>
      </div>

      <div className='button-function'>
        <button 
          className='stop-button' 
          onClick={closeTimeSetting}
        >
          Quit
        </button>

        <button 
          className='start-button' 
          onClick={applyTimeSetting}
        >
          Apply
        </button>
      </div>
    </div>
  );
};

export default SettingBox;
