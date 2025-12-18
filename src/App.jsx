import React, { useState } from 'react';
import Timer from './Timer';
import Setting from './Setting';
import SettingBox from './Setting_Box';

export const VIEW_MODE = {study:'study', break:'break'}; // constant viet hoa


function App() {
  const [timeSetting, setTimeSetting] = useState(false);
  const [studyMinute, setStudyMinute] = useState(25); // editable input
  const [breakMinute, setBreakMinute] = useState(5);
  const [appliedStudyMinute, setAppliedStudyMinute] = useState(25);
  const [appliedBreakMinute, setAppliedBreakMinute] = useState(5);
  const [mode, setMode] = useState(VIEW_MODE.study);

  const openTimeSetting = () => setTimeSetting(true);
  const closeTimeSetting = () => setTimeSetting(false);

  const applyTimeSetting = () => {
    setAppliedStudyMinute(studyMinute);
    setAppliedBreakMinute(breakMinute);
    setTimeSetting(false);
  };

  const getCurrentMinute = () => {
    return mode === VIEW_MODE.study ? appliedStudyMinute : appliedBreakMinute;
  };

  return (
    <div>
      {!timeSetting && (
        <Setting 
          openTimeSetting={openTimeSetting} 
          mode={mode}
          setMode={setMode}
        />
      )}

      <SettingBox // ko dung dau gach duoi (naming convention)
        timeSetting={timeSetting}
        closeTimeSetting={closeTimeSetting}
        studyMinute={studyMinute}
        setStudyMinute={setStudyMinute}
        breakMinute={breakMinute}
        setBreakMinute={setBreakMinute}
        applyTimeSetting={applyTimeSetting} 
      />

      {!timeSetting && (
          <Timer
            key={mode} // 🔑 force remount when mode changes
            minute={getCurrentMinute()}
            mode={mode}
          />
      )}
    </div>
  );
}

export default App;
