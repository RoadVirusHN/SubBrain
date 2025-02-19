---
title: OSSU PL-B Section 2
date: 2023-04-15 02:21:44 +0900
tags: HIDE CRUDE 
layout: obsidian
is_Finished: false
last_Reviewed: 2023-04-15 02:21:44 +0900
use_Mathjax: true
---

```toc
style: number
min_depth: 2
max_depth: 3
varied_style: true
```

```ad-quote
출처 강의 [Programming Languages, Part A, 워싱턴 대학교](https://www.coursera.org/learn/programming-languages/home/welcome)
```
# OSSU PL-B Section 2

## Struct
`Racket`에는 `ML`과 같은 `Datatype`이 존재하지 않지만, 대신 `struct`라는 구조가 존재.
```racket
(struct foo (bar baz quux) #:transparent)
(*#:transparent : struct print 시 출력을 명시적으로 이해할 수 있게 바꿈*)
(*#:mutable : 변경가능한 struct 생성, `set-foo-baz!` 등의 함수 추가*)
```

SML의 데이터 타입과 달리 라켓의 구조체는 동적 타입이므로 타입을 설정해주지 않지만 다음과 같은 함수들이 자동으로 생성된다.
- `foo`: 해당 `struct`를 생성하는데 사용하는 함수
- `foo?`: `foo` 타입에 해당하는지 확인(이를 통해 함수의 타입을 제한)
- `foo-bar`: 해당 `foo` 객체의 `bar` 값을 가져옴, 이외에 `baz`, `quux`도 존재
이를 통해 함수로 구현한 `Datatype` 보다 여러 이점을 가질 수 있다.
- 자동으로 생성되는 함수, 에러 탐지들을 이용 가능
- 함수와 리스트 등을 통해 구현 시, `list?` 같은 함수나 `car, cdr` 같은 함수로 데이터 접근이 가능하며 이는 원하지 않는 오류를 낼 수 있다.
- 이외에 Racket에서는 특정 필드에 특정 타입만 강요하거나 모듈 시스템을 통해 특정 필드만 노출 하는 방법을 이용할 수 있다.

## 프로그래밍 언어 구현
1. 문자열을 문법에 맞게 적었는지 분석 
	- 이 부분은 이번 학습에서 오류가 없다생각하고 구현하지 않는다.
2. 해당 문자열을 AST(abstract-syntax tree, 요약문법 트리)로 변경
	- 전체 코드를 하나의 표현으로 바꾸는 트리 모양의 과정
	- 라켓 함수 내의 타입 체크를 통해 구현 
1. 해당 AST가 올바르게 표현되었는가 체크
### 구현 방식
#### 인터프리터
언어 B를 만들 시, 언어 A로 만든 인터프리터를 통하여 언어 B의 문법을 AST로 바꾼다.  즉, 표현한다.
- 언어 B에 대한 표현 생성기, 실행기가 좀더 가까운 표현이다.

#### 컴파일러
원본 언어 B를 언어 A로 만든 컴파일러를 이용해 대상 언어인 B'로 만든다. (보통 C언어나 어셈블리), 그 이후에 표현한다.
- 언어 B에 대한 언어 B'로의 번역기가 좀더 가까운 표현이다.

위 두 경우 같이 특정 언어를 생성하는데 사용하는 언어 A를 메타언어라고 한다.

최근에는 이 두 가지를 모두 섞은 언어가 많다.
- 자바의 경우:
	1. 자바 시스템이 자바 코드를 중간코드(바이트코드)로 컴파일한다.
	 2-1. JVM이 각 하드웨어에 맞는 코드로 번역(인터프리트)하여 실행
	 2-2. 혹은 각 하드웨어가 더 좋은 성능을 위해 기계어로 컴파일한다.
	 3. 각 하드웨어는 일종의 트랜지스터로 이루어진 인터프리터이다.
		 - 최근 프로세서는 이진 지시를 더 작은 지시로 바꾸는 트랜지스터가 존재

즉, 엄밀히 말하면 인터프리터 언어나 컴파일 언어는 존재하지 않는다. 서로를 이용해 새로 동작을 구현할 수 있고, 이를 이용해 섞어서 생성된다.

### 환경, 클로저 구현
변수명과 변수값 쌍으로 이루어진 리스트를 통해 환경을 구현할 수 있다.
- 지역 범위의 지역 변수의 경우 재귀를 통해 특정 쌍을 추가하는 방식으로 구현 가능
- 성능을 높이기 위해, 함수 내에 사용하는 값들(free variable)만 저장하는 방식도 가능
함수가 정의 될시의 환경이 필요한 클로저의 경우, 함수를 실행하는 `call e1 e2`를 이용한다.
- `e1`은 함수 코드와 함수 정의 시의 환경이 포함되는 표현
- `e2`는 함수 실행 시 전달된 인자가 포함되는 표현
각 표현을 실행하기 위해 각각마다 현재 환경을 이용한 뒤, call 내부에서 `e1, e2`의 표현 결과를 이용하며, 이때는 클로저 내의 환경을 이용.

### 메타 언어를 이용한 매크로 구현
메타 언어의 함수 정의를 통해 새로운 언어의 매크로 기능을 구현할 수 있다.
다만, 라켓 매크로의 특유의 hygine한 기능들(지역 변수사용, 변수 이름 유일화) 등은 구현이 복잡할 것이다.