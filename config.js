/**
 * Pastel Dream Wedding Invitation Configuration
 *
 * 이 파일에서 청첩장의 모든 정보를 수정할 수 있습니다.
 * 이미지는 설정이 필요 없습니다. 아래 폴더에 순번 파일명으로 넣으면 자동 감지됩니다.
 *
 * 이미지 폴더 구조 (파일명 규칙):
 *   images/hero/1.jpg      - 메인 사진 (1장, 필수)
 *   images/story/1.jpg, 2.jpg, ...  - 스토리 사진들 (순번, 자동 감지)
 *   images/location/1.jpg  - 약도/지도 이미지 (1장)
 *   images/og/1.jpg        - 카카오톡 공유 썸네일 (1장)
 */

const CONFIG = {
  // ── 초대장 열기 ──
  useCurtain: false,  // 초대장 열기 화면 사용 여부 (true: 사용, false: 바로 본문 표시)

  // ── 메인 (히어로) ──
  groom: {
    name: "송찬",
    nameEn: "Groom",
    father: "송을호",
    mother: "박경란",
    fatherDeceased: false,
    motherDeceased: false
  },

  bride: {
    name: "소은영",
    nameEn: "Bride",
    father: "소진덕",
    mother: "이경자",
    fatherDeceased: false,
    motherDeceased: false
  },

  wedding: {
    date: "2027-02-14",
    time: "12:00",
    venue: "DMC타워웨딩",
    hall: "펠리체홀 4층",
    address: "서울특별시 마포구 성암로 189 4층",
    tel: "0507-1318-9308"
  },

  // ── 인사말 ──
  greeting: {
    title: "소중한 분들을 초대합니다",
    content: "서로 다른 길을 걷던 두사람이\n이제 같은 길을 함께 걸어가려 합니다.\n\n저희의 새로운 시작을\n축복해 주시면 감사하겠습니다."
  },

  // ── 우리의 이야기 ──
  story: {
    title: "우리의 이야기",
    content: "처음? 회사동기로 만나서\n언제부터? 동기들과 함께 간 야구장에서부터\n언제라고? 27년 발렌타인데이"
  },

  // ── 오시는 길 ──
  mapLinks: {
    kakao: "https://kko.to/jU6DpfiDVS",
    naver: "https://naver.me/5CW7vgsq"
  },

  // ── 마음 전하실 곳 ──
  accounts: {
    groom: [
      { role: "신랑", name: "송찬", bank: "국민은행", number: "848602-04-138231" },
      { role: "아버지", name: "송을호", bank: "국민은행", number: "055-21-0737-388" },
      { role: "어머니", name: "박경란", bank: "국민은행", number: "457001-01-147488" }
    ],
    bride: [
      { role: "신부", name: "소은영", bank: "카카오뱅크", number: "3333-02-8002328" },
      { role: "아버지", name: "소진덕", bank: "기업은행", number: "230-072510-01-020" },
      { role: "어머니", name: "이경자", bank: "국민은행", number: "822-24-0142053" }
    ]
  },

  // ── 링크 공유 시 나타나는 문구 ──
  meta: {
    title: "찬 ♥ 은영 결혼합니다",
    description: "2027년 2월 14일, 소중한 분들을 초대합니다."
  }
};
