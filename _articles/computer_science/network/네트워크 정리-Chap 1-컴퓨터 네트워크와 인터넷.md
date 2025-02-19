---
tags: CS NETWORK 요약
date: 2022-08-21 09:34:16 +0900
title: 네트워크 정리-Chap 1-컴퓨터 네트워크와 인터넷
use_Mathjax: true
layout: obsidian
is_Finished: true
last_Reviewed: 2022-10-28 10:27:21 +0900
---
# Chapter 1. 컴퓨터 네트워크와 인터넷 (Computer network and Internet)

```toc
style: number
min_depth: 2
max_depth: 3
varied_style: true
```
```ad-quote
title: 출처 

> Computer Networking: A Top-Down Approach(Jim Kurose, Keith Ross)의 강의를 정리한 내용입니다.
> ([Jim Kurose Homepage](http://gaia.cs.umass.edu/kurose_ross/index.html)) 
> 
> student resources : [Companion Website, Computer Networking: a Top-Down Approach, 8/e](https://media.pearsoncmg.com/ph/esm/ecs_kurose_compnetwork_8/cw/)
```

## 1.1 인터넷이란?

![[image-20221005112227296.png]]
### 1.1.1 Component 관점

#### Hardware 관점

**수 많은 연산 장치가 통신선과 패킷 스위치를 통해 연결된 네트워크**

- **통신선(communicatioin link)**: 전선, 광섬유, 라디오 전파, 위성 등을 통해 비트 데이터를 보내는 선

- **연산 장치**: 호스트(host) 혹은 종단 장치(end system)라고 부르며, 컴퓨터, 서버, 스마트폰, 인터넷 어플리케이션 등이 존재
  
  - 호스트는 추가로 PC 같은 **서비스 이용자들의 호스트인 클라이언트(client)**와 데이터 서버 같은 **데이터를 저장하고 클라이언트에게 서비스를 제공하는 서버(server)**로 나뉨

- **패킷(packet)** : 데이터가 담긴 페이로드(payload) + 프로토콜에 따른 헤더(header)가 포함된 정보

- **패킷 스위치(switch)**: 패킷을 적절한 방향의 링크로 연결하며, 라우터와 연결 계층 스위치 등이 존재한다.

- **경로(route, path)** : 패킷이 목적지로 도달하기 위해 지나가는 통신선과 패킷 스위치들의 나열

- **ISP(Internet Service Providers)**: 모뎀, DSL, 무선, 랜 등 여러 네트워크 서비스를 제공하는 인터넷회사, 각 호스트 간 연결을 위한 인터넷망을 제공함.
  
[[#1.3.3 네트워크들의 네트워크(A Network of Network)]] 참조

#### Software 관점

##### 프로토콜(Protocol)

![[image-20221005112244761.png|인간 의사소통과 TCP protocol GET 요청의 비교]]


**둘 이상의 통신 객체 간에 전달되야할 메시지들의 형식과 순서, 전송 간에 벌어질 행동, 규정 등을 정의한 것**.

인간이 대화하기 전에 대화 가능 여부를 살피고 질의응답을 받는 것과 비슷.

- **프로토콜 3 요소**  
  - **구문(syntax)**: 데이터 형식, 부호화, 신호레벨의 규정  
  - **의미(semantic)**: 전송의 조작이나 오류 제어를 위한 제어 정보에 대한 규정   
  - **타이밍(timing)**: 접속되어 있는 개체 간의 통신 속도 조정이나 메시지 순서 제어 규정

두 통신 객체(호스트, 스위치 등)가 통신하려면 같은 프로토콜을 사용해야 하며, 이를 통해 인터넷 시스템을 구축 

대표적으로 TCP와 IP 프로토콜이 널리 사용, IETF에서 만든 **[RFCs(Requets for comments)](https://www.ietf.org/standards/rfcs/)**, IEEE 802 등에 여러 프로토콜이 적혀있다.

#### 서비스 관점

**종단 장치의 웹, e-mail 등의 인터넷 어플리케이션에게 연결이 가능하게 끔 서비스를 제공하는 기반**

종단 장치간에는 규칙과 서비스의 집합체인 소켓 인터페이스를 통해 데이터를 주고받는다.

## 1.2 네트워크 말단(Network Edge)

### 1.2.1 접속망(Access Network)

![[image-20221005112352044.png|Access Network]]

접속망은 상단 그림의 파란 부분처럼 **호스트와 첫 라우터를 연결하여 다른 망과 연결해주는 망**이다.

#### 거주지 연결(Home Access, Broadband residential acess): DSL, 유선, FTTH, 5G 고정 무선

##### DSL(Digital subscriber line)
![[image-20221005112541975.png|DSL의 구조]]
**DSL Modem과 ISP의 전화선을 통해 DSLAM(Digital subscriber line acess multiplexer)가 위치한 지역 중앙 사무소(Local Central Office)에 연결되는 방식**

최신 DSL 기준으로 새로운 기준은 전송속도의 합(다운+업)이 1Gbps 이상.

**🟠 CONS**
ISP 가격 정책, 사무소와의 거리, 연선의 상태와 전자기파 간섭 등에 의해 거리가 멀수록 속도가 많이 떨어짐.

- **DSL Modem** : 디지털 데이터를 고주파로 변환해 전화선을 통해 통신할 수 있게 만듬.
- **DSLAM** : 받아온 아날로그 수신 데이터를 디지털 데이터로 바꾸어 돌려줌
- **전화선(telephone line)**: 3가지 다른 주파수 영역으로 동시에 전달

| 채널                                                | 속도                     |
| --------------------------------------------------- | ------------------------ |
| 고속 다운스트림 채널(high-speed downstream channel) | 50 kHz ~ 1MHz, 24~52Mbps |
|  중속 업스트림 채널(medium-speed upstream channel)   |4kHz ~ 50kHz, 3.5~16Mbps|  
|  기존 양방향 전화 채널(ordinary two-way telephone channel)|0 ~ 4kHz, 전화용    |                            

- 보통 다운로드가 여러 사람을 대상으로 하므로 더 빠른 채널을 사용하며, 속도가 다른 연결을 **비대칭 접속(asymmetric access)**라고 함

##### 유선(cable) 연결, HFC(hybrid fiber coax)

![[image-20221005112721811.png|hybrid fiber-coaxial acess network 방식]]

**각 사용자간 방송회사의 동축 케이블(Coaxial cable) 회선을 이용해 트리 형태로 연결 뒤, Fiber node를 통해 Cable head end와 연결하는 방식**
- **Cable Head End**:  **CMTS**가 존재하는 사무소
	- CMTS(Cable Modem Termitnation System): 아날로그 수신 데이터를 디지털 데이터로 변환, DSLAM 역할
- Cable modem: 장치의 Ethernet Port와 케이블을 연결
- **공유 전파 매질(shared broadcast medium)** 속성 - 회선을 여러사람이 사용(업, 다운)하면 그만큼 속도가 느려짐 
	- 이를 보완하기 위해 Distributed Multiple Access Protocol 필요
	
##### FTTH(fiber to the home)
![[image-20221005112827722.png|FTTH의 구조:PONS]]
**중앙 사무소에서 각각 사용자에게 직접 광섬유로 잇는 최신 기술**

연결 방법 종류: **AONs**(Active Optical Networks)와 **PONs**(Passive Optical Networks)
- 상단 그림은 PONs 
- **Optical Splitter**: 각 가정에 배치된 ONT(optical network terminator)의 정보를 규합해서 OLT로 보냄
- **OLT(Optical line terminator)**: 광섬유 정보를 디지털 신호로 변경, Packet을 나누어 각기 Splitter로 보내는 역할도 겸

##### 5G 고정 무선(5G fixed wireless)
**선없이 무선으로 모뎀을 사무소와 연결해 통신**, [[#무선 랜(Wireless LAN), WiFi|WiFi]] 비슷

속도가 빠르고 유선 설치가 필요 없음.

#### 기업망: Ethernet and WiFi
여러 장치와 라우터 등의 장비를 효율적으로 통제하고 연결하기 위해 **LAN(Local Area Network)** 주로 이용

시간이 지나며 가정 내에서도 라우터를 통해 여러 장치와 연결하여 구현함.

##### 이터넷(Ethernet)
![[image-20221005122619965.png|Ethernet 접근 구조]]
**구리 연선(twisted-pair copper wire)으로 장치와 스위치를 연결**
각 스위치는 해당 집단 대표 라우터(router)에 연결, 인터넷과 통신
장치의 경우 100M~10GBps, 서버의 경우 1~10Gbps 속도

##### 무선 랜(Wireless LAN), WiFi
![[image-20221005123230261.png|가정에 구현한 무선 랜]]
**특정 접근 지점(Access Point)에 무선으로 송수신하는 이터넷**
IEEE 802.11 기술로 몇십미터 내에 100Mbps이상의 속도를 제공

#### 광역 무선 연결(Wide-Area Wireless Access): 3G, LTE 4G, 5G

라디오 대역을 매개로 수십 킬로 미터 내의 기지국을 통해 휴대전화 통신 기반 연결

4G망 기준으로 60Mbps 속도이며, 5G는 더욱 빠르다. [[네트워크 정리-Chap 7-무선과 모바일 네트워크|7장]] 참조

### 1.2.2 물리적 매체(Physical Media)

**송수신자 간에 비트 정보가 지나가는 통로**로, 전자기, 빛 등 여러 형태로 변형되며 지나간다.

#### 유도 매체(guided media)

파장이 물질을 통해 특정 방향으로 퍼짐

##### 연선(Twisted-pair Copper wire)

**2개의 1mm 절연 구리선을 나선형으로 꼬은 유선**, 전화선에서 시작되었으며 값싸고 적절한 속도로 LAN, UTP(Unshielded twststed pair) 등에 사용됨.

나선형 모양을 통해 다른 가까운 전선의 전자기 간섭을 줄이고 추가로 여러 겹의 나선선을 감싸 부도체로 만든다.

6a cable 등 선의 두께와 거리에 따라 종류가 다양하면 10Mbps ~ 10Gbps 정도

##### 동축 케이블(Coaxial Cable)

**두개의 절연된 관 모양의 구리선이 같은 방향으로 붙어있음.**

유선 TV 시스템과 [[#유선(cable) 연결, HFC(hybrid fiber coax)|HFC]]를 구현하는데 사용되며, 대역을 여러 장치와 공유 가능

###### 광섬유(Fiber Optics)

**빛의 파동을 이용해 비트를 전달하는 얇고 유연한 선**

수백 Gbps 수준의 빠른 속도, 전자기 간섭과 손실 없음, 도청이 힘듬 대신 관련 장비(transmiter, receiver, switch)등이 아주 비쌈.
```ad-seealso
title: Optical Carrier(OC) standard

광섬유의 속도는 OC 기준에 따라 51.8 Mbps ~ 39.8 Gbps가 존재하며, $OC-n$ 형태로 광섬유 등급이 표현되며,  $n \times 61.8Mbps$ 속도 전후이다.
```

#### 비유도 매체(unguided media)

파장이 대기 중에 파장의 형태로 퍼짐

##### 지상파 라디오 채널(Terrestrial Radio Channels)

**지상의 기지국이 주사하는 전자기파 스펙트럼을 통해 신호 전달** 

**🟢 PROS**: 전선 등의 설치 불필요, 벽, 건물 등을 통과, 장거리 전달.
**🟠 CONS**: 전파 환경과 거리에 따라 다음과 같은 문제 발생
	- 경로 손실
	- Shadow fading : 신호 강도가 점점 줄어듬
	- Multipath fading : 간섭 물체에 의해 신호 난반사
	- Inference: 다른 신호에 의해 간섭

다음과 같은 그룹으로 채널을 나눔

| 거리   | 용도                                  |
| ------ | ------------------------------------- |
| 1 ~ 2m | 무선 헤드셋, 키보드, 이어폰(블로투스) |
| 수백m  | 무선랜, WIFI                          |
| 수십km | 휴대폰 통신                                      |

##### 위성 라디오 채널(Satelite Radio Channels)

위성과 지상의 기지국(Ground stations)이 극초단파(microwave)를 이용해 통신, 이후 여러 대역폭으로 전환되 이용됨.

**정지궤도 위성(geostationary satelite)**
- 지구 궤도 36000Km의 한 지점에 언제나 머물러 있음
🟢 **PROS**: 시간에 구애 받지 않고 수백 Mbps의 전송을 별도 장치 없이 가능
🟠 **CONS**: 먼 거리에 의한 280ms 정도의 지연

**저궤도 위성(Low-earth orbiting(LEO) satelite)**
- 비교적 가까운 궤도에서 공전함
- 정지궤도 위성의 정 반대의 장단점
	- 빠른 지연, 일부 시간에만 통신 가능 하거나 이를 보완하기 위해 여러 위성을 올려야 함 

## 1.3 네트워크 핵심(The Network Core)

![[image-20210729004919183.png|네트워크 핵심]]

### 1.3.1 패킷 스위칭(Packet Switching)

**패킷은 장치들이 주고 받는 데이터 단위**로, 네트워크 내 패킷 스위치 장치(스위치, 라우터 등)를 통해 전달된다.

연결의 전송 속도(transmission rate)를 $R\ bit/sec$, 보낼 정보의 양을 $L\ bits$라고 할때, 전송에 필요한 시간은 $L/R$이다.

#### 축적 교환 (Store-and-Forward Transmission)

![[image-20210809080754331.png|Store-and-Forward Transmission]]

**패킷 하나를 완전히 전송 받은 뒤(적재 과정) 전송(포워딩)하는 방법**, 대부분의 장치에서 사용한다.

이로 인해 적재 시간($L/R$)이 추가로 필요하므로 실제 전송에 필요힌 시간 $L/R$ 만큼 지연 된다.(기타 지연 시간 무시)
- 예를 들어 패킷 한개는 $2L/R$, 패킷 3개는 $4L/R$이 걸림

또한 중간에 적재되어야할 장치가 늘어나면 그만큼 배로 적재 지연이 늘어난다.
- 예를 들어 중간에 스위치 장치가 3개라면 패킷 한개는 $4L/R$, 패킷 3개는 $6L/R$이 걸린다.
$$
d_{end-to-end}= N\frac{L}{R}
$$

#### 큐 지연과 패킷 손실(Queuing Delays and Packet Loss)

![[image-20210917231053312.png|패킷 스위칭]]
- 두 컴퓨터가 너무 빠른 속도로 한 스위치에 보내면 큐 지연이 생기다가 패킷 손실이 일어난다.

**큐 지연(queuing delay)** 
- 앞선 패킷이 적재 중, 이후 패킷이 기다리기 위한 출력 버퍼(output buffer, output queue)에서의 지연

**패킷 손실(packet loss)**
- 만약 이러한 큐가 가득차게 되면 패킷을 저장할 수 없어 손실되며 이를 패킷 손실이라고 함.

자세한 내용은 [[#큐 지연(Queuing Delay)|이곳]] 참조

#### 포워딩 테이블과 라우팅 프로토콜(Forwarding Tables and Routing Protocols)

**패킷 포워딩(packet forwarding)** 
- 스위치에 도착한 패킷을 올바른 링크로 지정해주는 것

**포워딩 테이블(forwarding table)**
- 패킷 포워딩을 구현하기 위한 방법
- 각 스위치에서 패킷의 목적지와 보낼 링크를 포워딩 테이블에서 대조하여 보낼 방향을 결정
- 각 포워딩 테이블은 라우팅 프로토콜(Routing protocol)에 의해 자동으로 결정 [[네트워크 정리-Chap 5-네트워크 계층-컨트롤 측면|5장]] 참조

### 1.3.2 서킷 스위칭(Circuit Switching)

![[image-20210918140008983.png|fig 1.13. circuit switching]]

**송수신 장치 간의 연결의 전송 대역을 미리 선점하여 뒤, 지속적인 연결을 보장하는 통신 방법**, 전화 연결 등이 존재

패킷 스위칭 : 예약 안하고 가도 되는 분식집
서킷 스위칭: 예약 필수 레스토랑


| 비교                           | 패킷 스위칭                      | 서킷 스위칭                            |
| ------------------------------ | -------------------------------- | -------------------------------------- |
| 구현                           | 비교적 쉬움                      | 비교적 힘듬                            |
| 전송 효율성                    | 3배 이상 좋음                    | 나쁨                                   |
| 일정한 품질(지연시간, 보장 등) | 불가                             | 가능                                       |
| 사용                           | 이메일, 문서 교환, 현재는 대부분 | 라이브 스트리밍, 게임, 최근에는 전화만 |


- 최근에는 성능과 비용의 효율 문제로 왠만한 것은 전부 패킷 스위칭으로 해결
```ad-note
title: 효율성 예시

전체 전송 속도가 1 Mbps, 한 유저가 사용하는 전송 속도가 100 kbps, 전체 연결 시간의 10%만 사용한다고 가정 시,
- 서킷 스위치의 경우, 10명의 유저만 사용 가능(100kbps * 10 = 1Mbps)
- 패킷 스위치의 경우, 35명의 유저 사용 중 11명의 유저가 동시에 사용해 전송 속도를 오버하는 일이 생길 확률은 다음과 같다.

$$
1-\sum_{n=0}^{10}{(\frac{1}{10})^n(\frac{9}{10})^{35-n}=\frac{35!}{{n!}(35-n)!}}=

\frac{2121487977254128602547305755957}{5000000000000000000000000000000000}
\approx 0.000424298
$$

즉, 아주 적은 확률의 패킷 손실을 감수한다면 대략 3배 이상 효율적임
```

#### 서킷 스위칭에서의 멀티플렉싱(다중화)(Multiplexing in Circuit-Switched Networks)

![[image-20210918142141376.png|fig 1.14. FDM vs TDM]]

**주파수 분할 다중화(FDM, Frequency-Division Multiplexing)**
- 각 연결의 주파수 대역(spectrum)을 대역폭(bandwidth)로 나누는 방법
	- 전화 연결의 경우 보통 한 연결당 4kHz
	- FM 라디오파의 경우 88MHz ~ 108MHz 사이를 여러 라디오가 나누어 가짐

**시간 분할 다중화(TDM, Time-Division Multiplexing)**
- 각 연결의 일정 프레임을 일정 슬롯으로 나누는 방법
	- 즉, 아주 빠르게 사용자를 전환하는 방법

### 1.3.3 네트워크들의 네트워크(A Network of Network)

![[image-20210918173319788.png|fig 1.15.Interconnection of ISPs]]

**ISP(Internet Service Provider, 인터넷 서비스 제공자)**
- 각 사용자간의 연결, 다른 ISP와의 연결을 통해 인터넷을 제공하는 회사들 
- 지역 소비자를 위한 접근(access) ISP, 이들과 Tier 1 ISP를 연결하기 위한 지역적(Regional, Tier 2) ISP, 국가 간 혹은 거대 통신 회사 간의 연결을 위한 Tier 1 ISP 등 다양하다.

**Points of Presence (PoPs)**
- 고객과 ISP를 연결하는 라우터들의 모임
- 고객 서비스 차별화를 위해 속도를 구별하기도 함

**Multi-home**
- 개인 소비자나 ISP가 연결 실패나 혼잡 등을 대비하기 위해 여러 ISP와 연결하는 것

**Peering**
- 같은 계층의 ISP끼리 상호 연결하여 하위 계층 ISP나 소비자에게 빠르고 추가 비용 없이 연결가능하게 함.
- 보통 상위 ISP와 연결 시, 비용이 필요한데 Peering은 상호 연결을 조건으로 보통 비용을 안냄

**Internet eXchange Point(IXPs)**
- 여러 ISP들이 서로 Peering 할 수 있도록 중간 지점 역할을 하는 스위치 장치

**Content-Provider-Networks**
- 구글 등 거대한 회사의 데이터센터를 ISP를 통하지 않고 직접 저티어 ISP와 연결해 통신하여 비용을 아끼고 성능은 높인다.

## 1.4 패킷 교환 네트워크의 지연, 손실과 처리율(Delay, Loss, and Throughput in Packet-Switched Networks)

### 1.4.1. 패킷 교환 네트워크 지연(Delay)

![[image-20210918190329344.png|fig 1.16.The nodal dealy at router A]]

#### 처리 지연(Processing Delay)

에러 검사, 헤더참조, 포워딩 등에 걸리는 시간
수 마이크로초 이하

#### 큐 지연(Queuing Delay)

버퍼에 들어간 패킷이 전송을 기다리는 시간
보통 수 마이크로초 ~ 수 밀리초

#### 전송 지연(Transmission Delay)

![[image-20210918193903933.png]]
패킷이 라우터에서 연결로 적재되는데 걸리는 시간
```ad-example
title: 라우터를 톨게이트, 패킷을 자동차 행렬로 비유하면 모든 자동차가 톨게이트를 완전히 빠져나가는데 걸리는 시간
```
보통 수 마이크로초 ~ 수 밀리초

#### 전파 지연(Propagation Delay)

패킷이 연결을 통해 다음 라우터로 도착할때 걸리는 물리적 전달 시간
```ad-example
title: 자동차 행렬이 다음 톨게이트로 도착하는데 걸리는 시간
```

연결 매개 종류에 따라 다르며 보통 수 밀리초이다.

#### 기타 지연

매질, 응용 프로그램에 의해 추가적인 지연이 존재할 수 있다.
WiFi, 동축 케이블은 다른 장치와 대역폭이 공유되므로 지연될 수 있다.
VOIP 응용 프로그램은 음성 데이터를 패킷으로 인코딩하는 시간만큼 지연된다.

### 1.4.2 큐 지연과 패킷 손실(queuing Delay and Pacekt Loss)

큐 지연은 다른 지연과 달리 도착 순서나 시간 간격 등에 따라 다르게 측정된다.
```ad-example
- 100개의 패킷 중 가장 첫번째 패킷은 큐지연이 없고, 마지막 패킷은 큐지연이 클 것이다.
- 100개의 패킷이 충분한 시간 간격을 두고 천천히 도착하면 모두 없을 수 있다.
```
패킷 하나의 크기를 $L$, 패킷의 도착 빈도를 $a$, 전송 처리율을 $R$일 때,
![[image-20210918230408653.png|fig 1.18.Dependence of average queuing delay on traffic intensity]]
- $La/R$이 1 초과일 경우 점점 큐 지연이 무한대로 수렴
- $La/R$이 1 이하일 경우, 패킷의 도착 간격 등에 따라 큐 지연이 달라짐

다만, 실제로는 큐 지연이 무한대로 커지지 않고, 버퍼가 넘쳐나 패킷 손실이 점점 증가한다.

### 1.4.3 단말간 지연(End-to-End Delay)

출발 호스트에서 도착 호스타까지 동일한 성능의 라우터 N-1개를 지나치는 N개의 혼잡하지 않은 링크의 단말간 지연은 다음과 같다.
$$
d_{end-end}=N(d_{proc}+d_{trans}+d_{prop})
$$
```ad-seealso
title: `traceroute`
`traceroute`는 현재 장치에서 입력된 목적 호스트까지의 패킷의 경로와 왕복 지연 등을 측정해주는 프로그램이다.

![[image-20210918233052268.png]]

목적 호스트로 패킷을 라우터 갯수만큼의 패킷을 보낸 후 각 라우터마다 하나씩 패킷을 되돌아오게 하여 측정한다.
```

### 1.4.4 처리율(Throughput in Computer Network)

![[image-20210918235948028.png]]
시간 당 비트 데이터가 처리되는 양

- 순간 처리율: 일정 시간 당 비트데이터가 처리된 양, 예시: 다운로드 속도
	- 두 장치 간의 경로 중 가장 성능이 낮은 구간에 구애받게 됨( 병목(bottleneck) 연결 지점)
	- 좋지 않은 장치, 너무 많은 장치가 공유하는 지점 등이 해당
![[image-20210919005800618.png]]
- 평균 처리율 : $F/\min\{R_1,\dots,R_N\}$

## 1.5 프로토콜 계층과 서비스 모델(Protocol Layers and Their Service Models)

![[image-20210919010100383.png]]

![[image-20210919010239923.png]]
네트워크는 마치 해외여행 시 공항의 수속 처럼 여러 구조에서 처리한 뒤 다음으로 넘기는 계층 구조를 가지고 있다.

**서비스 모델**
- 각 계층에서 다음 계층에 제공할 수 있는 행동을 서비스라고 하며, 이러한 방식을 서비스 모델이라고 한다.
- 예를 들어, n 계층에서 자신보다 낮은 계층이 암호화 전달 기능을 제공한다면, 자신은 그 서비스를 이용해 암호화를 보장받을 수 있다.

### 1.5.1 계층 구조(Layered Architecture)

각 계층의 프로토콜은 소프트웨어, 혹은 하드웨어를 통해 구현되어 제공되며, 서비스를 다대다 구조로 제공하기도 한다.

```ad-example
- 응용 계층의 HTTP는 소프트웨어, 물리 계층의 통신은 네트워크 카드 형식의 하드웨어로 구현
- 1개의 랜카드로 다수의 웹 어플리케이션이 서비스를 제공 받을 수 있음
```

#### 응용 계층(Application Layer)
**웹 어플리케이션과 end system 간의 통신을 담당하는 프로토콜들이 존재하는 계층**

```ad-example
title: 응용 계층 프로토콜 예시
HTTP(웹 문서), SMTP(e-mail), FTP(파일 전송), Domain Name System(DNS)
```
패킷을 message라고 부름

#### 전달 계층(Transport Layer)

**어플리케이션 layer의 message들을 application endpoint를 통해서 전송하는 계층**

[[네트워크 정리-Chap 3-전달 계층#3.5 Connection-Oriented Transport :TCP|TCP]]와 [[네트워크 정리-Chap 3-전달 계층#3.3 Connectionless Transport: UDP|UDP]]가 존재

패킷을 segment라고 부름

#### 네트워크 계층(Network Layer)

**IP 프로토콜의 주소를 통해 다른 곳에 위치한 호스트의 Network Layer 간의 datagram을 전송하는 계층**

포워드 테이블을 생성하는 라우팅 프로토콜 등이 존재

패킷을 datagram이라고 부름

#### 연결 계층(Link Layer)

**한 노드(지점, host, router)에서 다른 노드간의 datagram 통신을 담당하는 계층**

노드 간의 신뢰성 통신 보장, 여러 프로토콜들 간의 호환성을 제공하는 프로토콜들이 존재
```ad-example
title: 연결 계층 프로토콜들
WiFi, Ethernet, DOCSIS(cable access network용), PPP
```

패킷을 frame이라고 부름

#### 물리 계층(Physical Layer)

**각 1개의 bit를 노드 간에 통신하는 것을 담당하는 계층**

매질(medium)에 따라 구별되는 프로토콜이 존재
여기서는 패킷이 아닌 비트(bit)를 이용한다.

### 1.5.2 캡슐화(Encapsulation)

![[image-20210919091641885.png|fig 1.24. Hosts, routers, and link-layer switches; each contains a different set of layers, reflecting their differences in functionality]]
모든 장치에서 5개 계층 전부 구현하진 않는다.

**캡슐화**
- 계층 간에 패킷을 주고 받으면서 이전 계층의 패킷을 페이로드 필드에 집어넣고 새로운 헤더를 붙여 현재의 새로운 패킷을 빠구는 과정

수신 받은 계층은 반대로 페이로드에서 자신의 프로토콜에 맞도록  꺼내어 사용한다.

이 과정 중에 용량상, 프로토콜 상 이유로 패킷이 여러개로 나뉘거나 합쳐지기도 한다.

```ad-example
마치, 사장에게 보낼 것을 지시받은 메모를 비서에게 보내고, 해당 비서는 해당 메모를 봉투에 넣어, 우편함에 넣는 등의 과정
```

## 1.6 네트워크 공격(Networks Under Attack)
기본적인 네트워크는 초창기에 신뢰할 수 있는 사용자 간의 통신을 전제로 하였기 때문에 보안상 취약하다.

#### 멀웨어(malware) 공격

네트워크르 통해 멀웨어를 받도록 함.
**피해**
개인정보 탈취, 시스템 무력화, DDOS 공격, botnet화 등이 가능하며, 자가 복제를 통해 다른 호스트에게 전염되게함.

#### DoS 공격(denial-of-service attacks)

적법한 사용자가 시스템을 사용하기 힘들게 다음과 같은 종류의 공격을 함

- **취약점 공격 (vulnerability attack)**
	- 위장된 메시지를 보내 중단, 충돌, 무력화
- **대역 범람 (bandwidth flooding)**
	- 수 많은 패킷을 목표 호스트에 보내 자원 낭비
- **연결 범람 (Connection flooding)**
	- 쓸모 없는 가짜 TCP 연결들을 보내 정상적인 연결 방해

단일 호스트가 보내는 공격은 해당 호스트를 차단하면 되지만, 
멀웨어에 감염된 수많은 PC를 botnet화 하여 DOS 공격하면 특정 host 차단이 힘들고, 공격이 쉽고 효율적이다.(**DDOS, Distrbuted denial of service**)

#### 패킷 스니핑(packet sniffing)

네트워크 장치(스위치, 라우터, 리시버 등)에 패킷 스니퍼를 심어 중요 정보를 탈취하고 정보를 뺏어갈 수 있다.

탐지가 어렵고, 손쉬운 공격이며, 이를 막기 위해 암호화를 이용한다.

#### 패킷 위장

패킷의 헤더 정보를 조작하여 특정 호스트가 보낸 패킷으로 위장할 수 있다.

가짜 패킷에 가짜 출발 아이피 주소를 이용한 공격을 IP 스푸핑(IP spoofing)이라고 한다.

이를 막기위해 엔드 포인트 인증(end-point authentication)을 이용할 수 있다.

```ad-warning
title: 인터넷의 역사 부분은 생략했음
정리하지 않은 정리를 보고 싶다면 [[|이곳]]을 참조
```
