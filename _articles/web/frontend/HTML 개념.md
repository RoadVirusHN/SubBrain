---
title: HTML 개념
date: 2019-11-02 17:21:08 +0900
tags: HTML FE
layout: obsidian
is_Finished: false
last_Reviewed: 2022-10-30 17:21:08 +0900
use_Mathjax: false
---
# 웹과 HTML

월드 와이드 웹(WWW)은 인터넷에 연결된 컴퓨터들을 통해 사람들이 정보를 공유할 수 있는 전 세계적인 정보 공간을 말한다.



웹서비스(WEB service)란? : 

https://www.fasdjflksd/index.html

https://서버주소/파일이름



크롬 브라우저 : html 문서를 읽어 보여주는 역할도 함



IP(Internet Protocol) (172.217.27.78)

8비트(0 ~ 255)까지의 숫자로 구성된 숫자의 집합, 각자가 가지고 있는 주소와 동일하다.

V4, V6 , 컴퓨터가 너무 많아지면 할당값이 조금씩 늘어나서 V6를 쓰게 될것임 



도메인(Domain) (google.com)

네트워크상의 컴퓨터를 식별하는 호스트명

URL(Uniform Resuorce Locator)

https://www.google.co.kr/search?q=구글

도메인 + 경로, 실제로 해당 서버에 저장된 자료의 우치



static web :미리 만들어놓은 HTML 파일을 찾아서 줌<-> dynamic web : 서버 사용자가 요청하면 템플릿으로 HTML 파일 생성

W3C : 웹표준 규약 , HTML CSS JS

WHATWG : 다른 웹표준 규약 최근 승리함



HTML : Hyper Text Markup Language : 하이퍼 링크를 통해 문서간의 연결 뼈대를 만듬, 웹페이지를 작성하기 위한 역할 표시 언어

HTML 파일 : HTML 로 작성된 문서파일

- doctype 요소
- HTML 요소
  - head 요소
  - body 요소
    - 브라우저 화면에 나타나는 정보로 실제 내용에 해당

HTTPS(Hyper Text Transfer Protocol) : Hyper Text를 주고 받는 규 칙

Cascading Style Sheet (CSS): 모양이나 위치를 바꾸는 역할, 꾸며줌

JavaScript : 

> HTML 문서의 기본 구조

```HTML
<!DOCTYPE html> <!--DOCTYPE 선언부 사용하는 문서의 종류를 선언, 보통 html을 사용한다.-->
<html lang="ko"> <!--html 요소, html 문서의 최상위 요소로 문서의 root를 뜻한다. head와 body 부분으로 구분된다.-->
<head> <!--head 요소 문서 제목, 문자코드(인코딩)와 같이 해당 문서 정보를 담고 있으며, 브라우저에 나타나지 않는다. CSS 선언 혹은 외부 로딩 파일 지정 등을 작성합니다. og와 같은 메타태그 선언이 이뤄집니다.-->
	<meta charset="UTF-8">
	<title>Document</title>
</head>
<body><!--body 요소 브라우저 화면에 나타나는 정보로 실제 내용에 해당한다.-->

</body>
</html>
```


> html 문서 예시 (intro.html)

```html
<!-- 주석 내용 ctrl+/로 자동 생성 가능-->
<!-- 요소(Element) : 태그와 내용으로 구성되어 있으며, 대소문자 구별안하지만,
    보통 소문자로 작성, 요소간의 중첩도 가능하다 -->
<!-- 여는태그-> <h1>contents</h1><- 닫는 태그 -->
<!-- self-closing element <img src="url"/> 닫는 태그가 없는 태그, 
    이미지, 다른 스크립트 불러오는 태그 등이 있다.-->
    <!-- 속성(Attribute) 태그에는 속성이 지정될수 있다. href = 속성명, "google.com" = 속성값 <a href="google.com"/> 이건 하이퍼 텍스트 예시 속성명="속성값"은 띄어쓰지 않는다.
        속성값은""(큰 따옴표) 안에 사용!, id : 유일한 식별자, class: 스타일 시트에  -->
<!-- DOM트리 : body태그와 h1태그는 부모와 자식 관계 (내부에 속해 있음)
h1태그와 ul태그(순서없는 리스트용)는 형제 관계(같은 곳에 속해 있음) -->
<body>
	<h1>웹문서</h1>
	<ul>
		<li>HTML</li>
		<li>CSS</li>
	</ul>
</body>
<!-- 시맨틱태그 : ex) div 태그 : 영역을 나누는 태그 <div> </div> 공간 분할 의미 외에는 없지만, 컴퓨터에게 의도한 바를 알려줄 수 있다.
개발자가 의도한 요소의 의미가 보임, 유지보수가 쉬워짐, SEO : 검색 엔진 최적화 에 쓰임 article, footer, header 등이 추가로 있음-->
<!-- h1태그는 왠만하면 한페이지에 1개만 쓰자 글자 크기를 바꾸고싶으면 CSS를 활용하자-->
<h1>여기는 h1 중요한 제목입니다.</h1>
<p>상세한 본문은 <b>여기에 굵게</b> 표시 됩니다</p> <!--p : 본문용 태그 b(시멘틱 태그 의미 없음, 단순 강조), strong(시멘틱 태그 의미 추가, SEO가 분석함): 굵은 글씨로-->
<ol>순서가 있는 ol 태그 <!--ol>li*3 하면 자동으로 3개가 속해있는 태그가 생성됨, ol + li*3라고 하면 ol과 li*3가 병렬적으로 생성됨 Emmet.io 참조-->
    <li>원소1</li><!--ol 태그 내에 요소를 적음-->
    <li>원소2</li>
</ol>
<ul>순서가 없는 ul 태그 
    <li style="border-style: dotted">원소1</li> <!-- 내부 속성 태그로 스타일 등을 바꿀 수 있음 주로 CSS가 해주는 역할임-->
    <li>원소2</li>
</ul>
<h2>222</h2>
<h3>3333</h3>
<a href="https://naver.com"><img src="http://imgnews.naver.net/image/5002/2017/09/03/0000977925_001_20170903211801431.jpg" alt=""></a><!--a : 하이퍼 링크 태그href=연결될 경로를 적어야함 닫는 태그 있어야함-->
<!--미디어 태그들-->
<!-- 이미지 태그는 src 경로의 이미지를 불러옮-->
<!-- <video src=""></video> <iframe>     등-->
```
> 시맨틱태그의 종류

| 태그    | 설명                                                         |
| ------- | ------------------------------------------------------------ |
| header  | 헤더 (문서 전체나 섹션의 헤더)                               |
| nav     | 내비게이션                                                   |
| aside   | 사이드에 위치한 공간으로, 메인 콘텐츠와 관련성이 적은 콘텐츠에 사용 |
| section | 문서의 일반적인 구분으로 컨텐츠의 그룹을 표현하며, 일반적으로 h1~h6 요소를 가짐. |
| article | 문서, 페이지, 사이트 안에서 독립적으로 구분되는 영역(포럼/신문 등의 글 또는 기사) |
| footer  | 푸터 (문서 전체나 섹션의 푸터)                               |



> HTML 예시 2 (index.html)

```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h1>프로그래밍 교육</h1>
    <a href="#python"><img src="https://cdn.inflearn.com/wp-content/uploads/python-1.png" width="50" height="50"></a> <!--inline 줄바꿈을 안함-->
    <a href="#web"><img src="images/web.png" width="50" height="50"></a> <!--하이퍼링크 태그로 해당 ID 값으로 이동할 수 있음-->
    <a href="intro.html">웹사이트</a><!--다른 문서 경로도 이동 가능-->
    <hr> <!--수평선 긋기 쓰면 안좋음, div로 구별하는것이 좋음-->
    <h2 id="python"><a href="https://docs.python.org/ko/3/tutorial/index.html" target="_blank">파이썬</a></h2><!--태그의 순서는 의미 없음-->

    <h3>Number type</h3>

    <p>파이썬에서 숫자형은 아래와 같이 있다.</p><!--block 한줄을 전부 포함한 범위-->
    <ol>
        <li>int</li>
        <li>float</li>
        <li>complex</li>
        <li><del>str</del></li> <!--삭선 긋기-->
    </ol>

    <h3>Sequence</h3>
    <p>파이썬에서 시퀀스는 아래와 같이 있다.</p>
    <p><strong>시퀀스는 for문을 돌릴 수 있다!!</strong></p>
    <ol>
        <li>str</li>
        <li>list</li>
        <li>tuple</li>
        <li>range</li>
    </ol>
    <hr>
    <h2 id="web"><a href="https://developer.mozilla.org/en-US/">웹</a></h2>
    <h3>기초</h3>
    <ul style="list-style-type: circle"> <!--list의 bullet 모양 바꾸기-->
        <li>HTML</li>
        <li>CSS</li>
</ul>
<iframe width="560" height="315" src="https://www.youtube.com/embed/I_2D8Eo15wE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
<!-- html안에 또다른 html을 넣을때 iframe 씀 유튜브에서 만든 웹페이지를 끌어다가 놓은거임 왠만하면 쓰지말자-->
<!--html 표만들기, table 태그 활용-->
<table>
        <thead>
            <th></th>
            <th>월</th>
            <th>화</th>
            <th>수</th>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td rowspan="2">2</td>
                <td colspan="2">3</td>
            </tr>
            <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
            </tr>
        </tbody>
</table>

<h3>음악페스티벌 타임테이블을 만들어봅시다.</h3>
<h1>2019 타임테이블</h1>

<table>
    <thead>
        <th>TIME</th>
        <th>INDOOR</th>
        <th colspan="2">OUTDOOR</th>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td style="border: 2px solid red">소극장</td>
            <td style="border: 2px solid red">잔디마당</td>
            <td style="border: 2px solid red">대공연장</td>
        </tr>
        <tr>
            <td style="border: 2px solid red">10:00</td>
            <td  style="border: 2px solid red" rowspan="2">안녕하신가영</td>
            <td style="border: 2px solid red"></td>
            <td style="border: 2px solid red">10CM</td>
        </tr>
        <tr>
            <td style="border: 2px solid red">13:00</td>

            <td rowspan="2" style="border: 2px solid red">선우정아</td>
            <td rowspan="2" style="border: 2px solid red">참깨와 솜사탕</td>
        </tr>
        <tr>
            <td style="border: 2px solid red">15:00</td>
            <td> </td>

        </tr>
        <tr>
            <td style="border: 2px solid red">17:00</td>
            <td style="border: 2px solid red">크러쉬</td>
            <td></td>
            <td style="border: 2px solid red">폴킴</td>
        </tr>
    </tbody>    
</table>

</body>
</html>
```
>HTML form 예시(subway.html)
```HTML
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>    
<!--form : 데이터를 넣을 수 있는 형식, 공간-->
    <h1>FORM</h1>
    <p>주문서를 작성해주세요.</p>
    <form action="">
        <label for="name">이름:</label><!--라벨링용 정보 분리하기, for는 해당 id와 연결하는 용도-->
        <input id="name" name="name" type="text" placeholder="이름을 입력해주세요"><!--데이터 인풋용-->
        <label for="when">날짜:</label>
        <input id="when" type="date" value="2019-07-29">
        <hr>

        <h3>1. 샌드위치 선택</h3>
        <input id="option1" type="radio" name="main" value="1"><label for="option1">에그마요</label>
        <input id="option2" type="radio" name="main" value="2"><label for="option2">비엘티</label>
        <input id="option3" type="radio" name="main" value="3"><label for="option3">터키</label>
        <hr>

        <h3>2. 사이즈 선택</h3>
        <input name="size" id="sizeView" size="15" type="number" value="20" step="1" max="30" min="15" onchange="sizeChanger(this)">cm
        <input id="size" type="range" step="1" max="30" min="15" value="20" onchange="sizeviewChanger(this)">

        <script type="text/javascript">        
        function sizeviewChanger(val1) {
            var val2 = document.getElementById('sizeView');
            val2.value = val1.value;
        }
        function sizeChanger(val1) {
            var val2 = document.getElementById('size');
            val2.value = val1.value;
        }
        </script>

        <hr>
        <h3>3. 빵 선택</h3>
        <select name="bread">
            <option value="honeyoat">허니오트</option>
            <option value="flatbread" disabled>플랫 브래드</option>
            <option value="heartyItalian">하티 이탈리안</option>
        </select>
        <hr>

        <h3>4. 야채/소스</h3>
        <input name="extra" id="tomato" value="tomato" type="checkbox">토마토<br>
        <input name="extra" id="cucumber" value="cucumber" type="checkbox">오이<br>
        <input name="extra" id="Jalapeno" value="Jalapeno" type="checkbox">할라피뇨<br>
        <input name="extra" id="hotchilli" value="hotchilli" type="checkbox">핫 칠리<br>
        <input name="extra" id="BBQ" value="BBQ" type="checkbox">바베큐<br>
        <br>
        <input type="submit">
    </form>
</body>
</html>
```