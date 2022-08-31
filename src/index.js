import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ChildComponent from './ChildComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // 라우터사용을위해추가한다.
import rootReducer from './reducers'; // rootReducer 추가
import { Provider } from 'react-redux'; // Provider 추가
import { legacy_createStore } from 'redux'; // legacy_createStore 추가
const store = legacy_createStore(rootReducer); // 초기 데이터를 불러온다.

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      {/* Provider를 사용해 초기 데이터를 사용할 컴포넌드들을 묶어준다. */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ChildComponent" element={<ChildComponent />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);

reportWebVitals();
