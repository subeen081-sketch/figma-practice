// Figma의 이미지 자르기 값(sx, sy, tx, ty)으로 위치와 잘리는 영역을 계산합니다.
const rem = (px) => `${px / 16}rem`

export function cropBox(w, h, x, y, sx, sy, tx, ty) {
  const fullWidth = w / sx
  const fullHeight = h / sy
  const left = tx * fullWidth
  const top = ty * fullHeight

  return {
    width: rem(fullWidth),
    height: rem(fullHeight),
    left: rem(x - left),
    top: rem(y - top),
    objectFit: 'fill',
    clipPath: `inset(${rem(top)} ${rem(fullWidth - left - w)} ${rem(fullHeight - top - h)} ${rem(left)})`,
  }
}
