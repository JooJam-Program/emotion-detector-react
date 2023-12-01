import React from 'react';
import './mainPage.sass';
import TitleComponent from '../../components/title/titleComponent';
import TextInputComponent from '../../components/textinput/textInputComponent';
import ResultComponent from '../../components/result/resultComponent';

function MainPage() {
  return (
    <div className="main-page">
      <TitleComponent />
      <TextInputComponent />
      <ResultComponent />
    </div>
  );
}

export default MainPage;
