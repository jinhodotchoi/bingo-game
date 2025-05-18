let idx = 1;

function cellFactory(title: string) {
  return {
    id: idx++,
    title,
  };
}

export const bingoContents = [
  /* Row 1 */
  cellFactory("탄수화물의 기능은?"),
  cellFactory("단백질의 기능은?"),
  cellFactory("지방의 기능은?"),
  cellFactory("비타민의 기능은?"),
  cellFactory("무기질의 기능은?"),
  cellFactory("물의 기능은?"),
  /* Row 2 */
  cellFactory("탄수화물 1g 당 몇 kcal의 에너지를 내는가?"),
  cellFactory("단백질 1g 당 몇 kcal의 에너지를 내는가?"),
  cellFactory("지방 1g 당 몇 kcal의 에너지를 내는가?"),
  cellFactory("지용성 비타민의 종류는?"),
  cellFactory("무기질의 종류는?"),
  cellFactory("물은 1g당 몇 kcal의 에너지를 내는가?"),
  /* Row 3 */
  cellFactory("뇌와 신경 세포의 에너지원으로 사용하는가?"),
  cellFactory("단백질은 몸속에서 무엇으로 분해되어 소화·흡수되는가?"),
  cellFactory("지방은 몸속에서 무엇으로 분해되어 소화·흡수되는가?"),
  cellFactory("수용성 비타민의 특징은?"),
  cellFactory("칼슘의 결핍증은?"),
  cellFactory("물은 체중의 얼마만큼을 차지하는가?"),
  /* Row 4 */
  cellFactory("소화·흡수되지 않아 에너지를 공급하지 않는 탄수화물은?"),
  cellFactory("생명 유지와 성장에 필요하지만 몸속에서 거의 합성되지 않는 아미노산의 이름은?"),
  cellFactory("몸속에서 합성되지 않아 반드시 식품으로 섭취해야 하는 지방산의 이름은?"),
  cellFactory("비타민 A의 결핍증은?"),
  cellFactory("나트륨의 과잉증은?"),
  cellFactory("체내 수분이 체중의 20% 이상 손실되어도 생명 유지에 문제없다. (O / X)"),
  /* Row 5 */
  cellFactory("탄수화물이 녹말 형태로 들어 있는 식품은?"),
  cellFactory("동물성 단백질 함유 식품은?"),
  cellFactory("포화 지방산 함유 식품은?"),
  cellFactory("비타민 B1(티아민)의 결핍증은?"),
  cellFactory("칼슘 함유 식품은?"),
  cellFactory("물은 OOO을/를 운반한거나 OOO을/를 배출한다."),
  /* Row 6 */
  cellFactory("탄수화물이 당 형태로 들어 있는 식품은?"),
  cellFactory("식물성 단백질 함유 식품은?"),
  cellFactory("불포화 지방산 함유 식품은?"),
  cellFactory("비타민 C 함유 식품은?"),
  cellFactory("철 함유 식품은?"),
  cellFactory("음료보다는 물의 형태로 섭취하는 것이 좋다. (O / X)"),
];
