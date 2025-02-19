---
title: 알고리즘 수학 기본-Counting
date: 2021-07-06 16:53:58 +0900
tags: 알고리즘 CS MATH 요약
layout: obsidian
is_Finished: false
last_Reviewed: 2022-09-20 17:19:23 +0900
use_Mathjax: true
---
```toc
style: number
min_depth: 2
max_depth: 3
varied_style: true
```

# 알고리즘을 위한 수학 - 셈(Counting)

_Introduction to Algorithm, 3rd, Cormen을 토대로 정리한 내용입니다._

일부 표기나 개념이 기존의 수학과 다를 수도 있으므로, 여기서 배운 내용은 단순 해당 책(Introduction to Algorithm, 3rd, Cormen)의 부록으로 취급해야한다.

이 장에서는 조합론의 표기법, 정의, 속성 같은 기본적인 것만 배운다.

들어가기에 앞서 집합에 대한 기본적인 이해가 필요하므로 알고리즘을 위한 수학 -집합 편을 보고 오는 것을 추천한다.

----

## 셈(Counting)

**셈 이론**은 예를 들어, "n 개의 원소를 다른 순서대로 나열하는 방법" 같은 "수가 얼마나 되는가?"에 대한 물음을 전부 세보지 않고 알기 위한 이론이다. 

### 합과 곱 규칙(Rules of sum and product)

**조합론(combinatorics)**에서 셈하고 싶은 원소들의 집합을 서로소 집합의 합이나 집합들의 곱집합으로 나타낼 수 있다는 규칙이 합 규칙과 곱 규칙이다.

#### 합 규칙(Rules of sum)

합 규칙은 **두 서로소 집합에서 원소를 하나 고르는 경우의 수는 각 집합의 카디널리티의 합이라는 규칙**이다.

쉽게 말해 여러 원소를 가지고 있는 집합들에서 원소를 집합 전체에서 하나 고르는 경우의 수는, 각 집합에서 원소를 하나 고르는 경우의 수를 모두 더한 값, 즉 각 집합의 원소의 수를 모두 더한 값과 같다는 규칙이다.

수학적으로 집합 A, B를 공통되는 원소가 없는 두 유한 집합이라고 가정하면 $|A \cup B|=|A|+|B|$가 되며, 예를 들자면 듣고 싶은 과목의 인강이 A 사이트에 7개, B 사이트에 5개 있다면, 내가 고를 수 있는 인강은 총 8+5 = 12개가 될 것이다.

#### 곱 규칙(Rules of product)

곱 규칙은 **순서쌍을 고르는 경우의 수가 첫번째 원소의 경우의 수와 두번째 원소의 경우의 수의 곱이라는 규칙**이다.

즉, 여러 원소를 가지고 있는 집합들에서 원소를 집합 마다 하나씩 고르는 경우의 수는, 각 집합에서 원소를 하나 고르는 경우의 수를 모두 곱한 값, 즉 각 집합의 원소의 수를 모두 곱한 값과 같다는 규칙이다.

수학적으로 $|A\times B|=|A|\cdot |B|$ 로 나타내며, 예를 들자면, 아이스크림 종류가 4개, 토핑 종류가 3개라면, 총 12개 종류의 색다른 아이스크림을 즐 길 수 있다.



### 문자열(Strings)

유한 집합 S에 대한 **문자열은 S의 원소들의 수열을 의미**한다. 예를 들어, 길이가 3인 이진 문자열(binary string)은 000,001,010,011,100,110,111 총 8개가 존재 가능하다. 이때 n 만큼의 길이를 가진 문자열을 n-문자열이라고도 말한다.

문자열 s의 **부분문자열(substring)** s'은 s의 연속된 원소로 이루어진 순차 수열이다. 예를 들어, 010은 01011110의 부분 문자열일 수 있다.

집합 S에 대한 k-문자열을 k-튜플의 곱집합 $S^k$의 원소로 볼 수 있다. 즉, $|S|^k$개 만큼의 k 길이 문자열이 존재한다. 에를 들어 이진 k-문자열의 수는 $2^k$이며, 직관적으로, 생각하자면, 선택지 n개를 총 k번 선택하는 가지수를 의미하므로 $n\cdot n\cdots n = n^k$를 통해 경우의 수를 구한다.

### 순열(Permutations)

유한 집합 S의 순열(Permutations)은 **중복이 존재하지 않는 S의 원소들의 순서있는 수열**을 의미한다.

예를 들어 $S=\{a,b,c\}$의 순열은 abc, acb, bac, bca ,cab, cba 총 6개의 순열을 가지고 있다.

순열의 경우의 수는 총 $|S|!$만큼 가지고 있는데, 각각 순서의 경우의 수를 알아보자면, 첫번째 원소의 경우의 수가 $|S|$개, 두번째는 중복을 허용하지 않으므로 첫번째에 고른 원소를 제외한 $|S|-1$개, 세번째의 경우의 수는 $|S|-2$개로, 최종적으로 마지막 순서의 원소가 1개 남을때 까지 점점 줄어드는 방식이기 때문이다.

집합 S에 대한 k-순열은 S의 k개의 원소들의 중복이 존재하지 않는 순서있는 수열인데, 예를 들어 $S=\{a,b,c\}$의 2-순열은 ab, ac, ba, bc, ca, cb 총 6개이다.

 n개의 원소를 가진 집합에 대한 k-순열은 다음과 같은 방법으로 구한다.
$$
n(n-1)(n-2)\cdots(n-k+1)=\frac{n!}{(n-k)!}
\label{eq:kPermuNSet}
\tag{1}
$$
기본적인 순열과 달리, 1부터 k번째 까지 경우의 수를 구하기 때문이다. 

### 조합(Combinations)

**n개의 조합 S에 대한 k-조합은 집합 S의 k-부분 집합**을 의미한다. 예를 들어 $\{a,b,c,d\}$의 2-조합은 $ab, ac, ad, bc, bd, cd$, 총 6개이다.

k-조합은 집합 내에서 k개의 구분되는 원소를 고름으로 생성할 수 있으며, n-집합의 k-조합의 경우의 수는 k-수열을 구하는 식으로 표현할 수 있다. 

모든 k-조합은 k-순열에, 순서가 다르지만 원소가 동일한 순열은 제외하는 것과 같으므로, 이를 이용해 아래와 같은 식으로 조합의 경우의 수를 나타낼 수 있다.
$$
\frac{n!}{k!(n-k)!}
\label{eq:kCombNSet}
\tag{2}
$$
k=0일 때는, 조합의 경우의 수가 1인데, 이를 통해 0!=1임을 알 수 있다.

### 이항 계수(Binomial coefficients)

$\begin{pmatrix}
 n\\k
\end{pmatrix}$ 표기는  $x^ay^b$ 같은 이항식을 전개했을 때 각 항의 계수이며, 조합론에서는 n-집합에 대한 k-조합의 경우의 수를 의미한다. 

우리가 앞서 배웠던 조합의 식을 이용해 아래와 같은 식이 성립한다.
$$
\begin{pmatrix}
 n\\k
\end{pmatrix} = \frac{n!}{k!(n-k)!}
$$
또한, n-k와 k값에 대하여 아래처럼 서로 동일한 값을 가진다.
$$
\begin{pmatrix}
 n\\k
\end{pmatrix} = 
\begin{pmatrix}
 n\\n-k
\end{pmatrix}
\label{eq:symmetericK}
\tag{3}
$$
이를 **이항 계수(Binomial coefficients)**라고도 부르는데, 이는 이항식을 전개했을 때의 전체 식을 알 수있는 이항 정리(binomial expansion)에서 유래되었다.

- 이항 정리는 아래와 같이 두 개의 항으로 되어있는 식이 전개되었을 때 나오는 항들의 계수를 알 수 있는 정리이다. 즉 이항 계수는 여러 항 중에 하나만, 이항 정리는 전체 전개식을 표현한다.

$$
(x+y)^n=\sum^n_{k=0}\begin{pmatrix}
 n\\k
\end{pmatrix}x^ky^{n-k}
\label{eq:binomialExpansion}
\tag{4}
$$

이항 정리는 x=y=1일때 특별한 성질을 가지는데, 다음과 같은 꼴로 변한다.
$$
2^n=\sum^n_{k=0}\begin{pmatrix}
 n\\k
\end{pmatrix}
$$

이 공식은 이진 n-문자열의 경우의 수를 구하는 방법과 같다.

예시로, n=1, 즉 길이 1의 이진 문자열은 0 또는 1 두개이며, n=2일때는 00, 01, 10, 11 총 4개 이다. 이 경우의 수는 위 이항정리에 넣어 구할 수 있음을 알 수 있다.

 $\begin{pmatrix}
 n\\k
\end{pmatrix}$ 이진 n-문자열은 정확히 k개의 1을 포함한다. 왜냐하면 $\begin{pmatrix}
 n\\k
\end{pmatrix}$가 n개의 위치가 존재할 때 k개를 선택하는 방법(=1의 자리)의 경우의 수이기 때문이다. 

예시로, n=3, k=1일때는 1을 한개만 사용하여 만들 수 있는 이진 3-문자열의 경우의 수이다. (001, 010, 100, 총 3개)

이런식으로 이항 계수는 여러 곳에서 사용될 수 있다.

### 이항 한계(Binomial bounds)

유한합의 범위 제한처럼(알고리즘을 위한 수학 유한합편 참조) 이항 계수의 범위를 제한할 때, 하한값의 경우 아래와 같이 구할 수 있다.
$$
\begin{pmatrix}
 n\\k
\end{pmatrix}=\frac{n(n-1)\cdots(n-k+1)}{k(k-1)\cdots 1}
\\=(\frac{n}{k})(\frac{n-1}{k-1})\cdots(\frac{n-k+1}{1})
\\\geq (\frac{n}{k})^k
$$



스털링 근사를 이용해 얻은 $k! \geq (k/e)^k$을 통해 아래와 같은 상한값을 얻을 수 있다. 

- 스털링 근사는 수학에서 팩토리얼 값을 추정하는 방법이다. $n! \sim \sqrt{2\pi n}(n/e)^n$ 자세한 내용은 추가 예정


$$
\begin{pmatrix}
 n\\k
\end{pmatrix}=\frac{n(n-1)\cdots(n-k+1)}{k(k-1)\cdots 1} \leq \frac{n^k}{k!} \leq (\frac{en}{k})^k
\label{eq:upperBound}
\tag{5}
$$

모든 n보다 작은 양의 정수 k에 대해 귀납적 방법으로 다음과 같은 상한 값도 얻을 수 있다.

$$
\begin{pmatrix}
 n\\k
\end{pmatrix} \leq (\frac{n^n}{k^k(n-k)^{n-k}})
\label{eq:BinomialBoundByInduction}
\tag{6}
$$

$0^0=1$로 가정하고, $k=\lambda n,\ 0\leq \lambda \leq 1$일때, 다음과 같은 상한값을 얻을 수 있다.
$$
\begin{pmatrix}
 n\\k
\end{pmatrix} \leq (\frac{n^n}{(\lambda n)^{\lambda n}((1-\lambda)n)^{(1-\lambda)n}})\\
=((\frac{1}{\lambda})^\lambda(\frac{1}{1-\lambda})^{1-\lambda})^n=2^{nH(\lambda)}
$$

이를 통해 아래와 같은 식을 얻을 수 있는데

$$
H(\lambda)=-\lambda \lg \lambda -(1-\lambda)\lg(1-\lambda)
\label{eq:binaryEntropyFunction}
\tag{7}
$$
이는 (이진) 엔트로피 함수(bianary entropy function)이라고 하며, $0\log0 = 0$으로 가정하면 $H(0)=H(1)=0$이 된다.

- 이진 엔트로피 함수에 대한 내용 추가 예정

