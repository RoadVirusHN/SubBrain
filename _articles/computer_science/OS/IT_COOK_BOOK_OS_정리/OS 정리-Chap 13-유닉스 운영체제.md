---
title: OS 정리-Chap 13-유닉스 운영체제
date: 2022-08-11 13:34:26 +0900
tags: OS CS 요약 CRUDE HIDE
layout: obsidian
is_Finished: false
last_Reviewed: 2022-11-16 11:51:21 +0900
use_Mathjax: true
---
```toc
style: number
min_depth: 2
max_depth: 3
varied_style: true
```

# 13. 유닉스 운영체제
```ad-quote
title: 출처 

> [IT COOK BOOK 운영체제 (개정 3판, 구현회 저, 한빛 아카데미)](https://www.hanbit.co.kr/store/books/look.php?p_code=B3239422381)를 정리한 내용입니다.
```
## 01 유닉스의 탄생과 구성
### 1 유닉스의 탄생과 발전 과정
![[Pasted image 20220803234803.png]]
### 2 유닉스의 설계 원칙

### 3 유닉스의 특징

### 4 유닉스의 구성 요소
![[Pasted image 20220810220920.png]]


#### 4.1 커널
![[Pasted image 20220803234919.png]]
![[Pasted image 20220803235038.png]]

#### 4.2 셸


#### 4.3 유틸리티와 파일 시스템

## 02 유닉스 프로세스의 관리

### 1 유닉스 프로세스의 종류


### 2 유닉스 프로세스의 상태
![[Pasted image 20220803235057.png]]
![[Pasted image 20220803235117.png]]

### 3 유닉스 프로세스의 구조
![[Pasted image 20220803235141.png]]

### 4 유닉스 프로세스의 스케줄링
![[Pasted image 20220803235202.png]]
![[Pasted image 20220803235219.png]]

## 03 시스템 호출 인터페이스

### 1 파일 조작
![[Pasted image 20220803235237.png]]
### 2 프로세스 제어
![[Pasted image 20220803235246.png]]
### 3 시그널
![[Pasted image 20220803235325.png]]
## 04 유닉스의 메모리 관리

### 1 유닉스의 메모리 관리 개요

### 2 대치
그림 13-13 초기의 대치 맵과 대치 공간의 할당

![[Pasted image 20220803235443.png]]
> (a) :
> (b) :
> (c) :

![[Pasted image 20220803235528.png]]
![[Pasted image 20220803235558.png]]
### 3 페이징
![[Pasted image 20220803235625.png]]
![[Pasted image 20220803235637.png]]
![[Pasted image 20220803235648.png]]
## 05 유닉스의 파일 시스템

### 1 디스크 블록의 구조
![[Pasted image 20220804000933.png]]
![[Pasted image 20220804000925.png]]
### 2 유닉스에서 연속 파일 할당
![[Pasted image 20220804001010.png]]
![[Pasted image 20220804001026.png]]
### 3 i 노드의 할당과 반납
![[Pasted image 20220804001047.png]]

![[Pasted image 20220804001101.png]]

![[Pasted image 20220804001120.png]]
### 4 유닉스의 디렉터리
![[Pasted image 20220804001134.png]]
### 5 유닉스의 시스템 파일 테이블

![[Pasted image 20220804001150.png]]
### 6 유닉스의 디스크 구조

![[Pasted image 20220804001214.png]]