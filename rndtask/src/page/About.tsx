import React from 'react';

function About() {
  const headerStyled = 'text-lg';
  const listStyle = 'py-2 text-sm';

  return (
    <div>
      <ul>
        <li className={listStyle}>
          <h3 className={headerStyled}>○목적 및 배경</h3>
          <p>데이터 사이언스를 공부하면서, 공공 데이터 수집 및 정제 그리고 예측모델을 만드는 것을 경험하기 위해서 이 주제를 선정하였다. 그리고 예측결과에 가장 영향을 많이 주는 feature를 딥러닝을 통해 알수 있는지 이번 기회를 통해 공부해보자 한다.</p>
        </li>
        <li className={listStyle}>
          <h3 className={headerStyled}>○연구 개발 내용</h3>
          <p>웹페이지에서 지역, 평수, 건물 등의 feature를 입력받으면, 가격을 예측하여 보여주는 모델을 만들어, 어떤 feature가 가장 큰 영향을 주는지 찾아본다. 모델 학습 방법으로는 xg부스트, ada부스트 등의 머신러닝 알고리즘과 Deep Neural Network를 이용하며, 예측 결과를 각각 확인하여 더 좋은 학습 결과가 나온 학습 방법을 사용한다.</p>
        </li>
        <li className={listStyle}>
          <h3 className={headerStyled}>○일정 계획</h3>
          <ul>
            <li>1주차 - 모델을 학습시키기 위해 국토교통부 실거래가 공개 시스템에서 데이터 수집.</li>
            <li>2주차 – 수집한 데이터를 정제</li>
            <li>3주차 – 최적화된 학습을 하기 위한 모델 설계 및 구현</li>
            <li>4주차 – 여러 알고리즘을 비교하여 가장 학습이 잘 되는 알고리즘으로 모델 학습</li>
            <li>5주차 – 학습된 모델의 입출력을 보여줄 수 있는 웹페이지 개발</li>
            <li>6주차 – 오류 점검 및 웹페이지 최종 점검</li>
          </ul>
        </li>
        <li className={listStyle}>
          <h3 className={headerStyled}>○결과 및 기대효과</h3>
          <p>머신러닝 알고리즘과 인공지능 알고리즘을 비교하며, 각각의 장단점에 대해 배울 수 있고, 데이터 수집 및 정제를 하며, 데이터 전처리에 대해 학습한다</p>
        </li>
        <li className={listStyle}>
          <h3 className={headerStyled}>○코딩/오픈소스 SW 활용 계획</h3>
          <ul>
            <li>Python scikit learn을 이용하여 모델 학습</li>
            <li>pandas를 이용하며 모델을 학습 시키기 위한 데이터 정제</li>
            <li>Fast API를 이용하여 웹에 빌드</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}

export default About;
