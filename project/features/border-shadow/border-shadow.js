const borderRadiusInput = document.getElementById('border-radius');
const borderThicknessInput = document.getElementById('border-thickness');
const borderColorInput = document.getElementById('border-color');
const boxShadowInput = document.getElementById('box-shadow');
const transparencyInput = document.getElementById('transparency');
const blurEffectInput = document.getElementById('blur-effect');
const card = document.querySelector('.card');

const borderRadiusValue = document.getElementById('border-radius-value');
const borderThicknessValue = document.getElementById('border-thickness-value');
const borderColorValue = document.getElementById('border-color-value');
const transparencyValue = document.getElementById('transparency-value');
const blurEffectValue = document.getElementById('blur-effect-value');

function updateBorderStyles() {
    const borderRadius = borderRadiusInput.value + '%';
    const borderThickness = borderThicknessInput.value + 'px';
    const borderColor = borderColorInput.value;
    const boxShadow = boxShadowInput.checked ? '10px 10px 20px rgba(0, 0, 0, 0.2)' : 'none';
    const transparency = transparencyInput.value;
    const blurEffect = blurEffectInput.value + 'px';

    card.style.borderRadius = borderRadius;
    card.style.border = `${borderThickness} solid ${borderColor}`;
    card.style.boxShadow = boxShadow;
    card.style.backgroundColor = `rgba(19, 19, 19, ${transparency})`;
    card.style.filter = `blur(${blurEffect})`;

    borderRadiusValue.textContent = borderRadius;
    borderThicknessValue.textContent = borderThickness;
    borderColorValue.textContent = borderColor;
    transparencyValue.textContent = transparency;
    blurEffectValue.textContent = blurEffect;
}

borderRadiusInput.addEventListener('input', updateBorderStyles);
borderThicknessInput.addEventListener('input', updateBorderStyles);
borderColorInput.addEventListener('input', updateBorderStyles);
boxShadowInput.addEventListener('change', updateBorderStyles);
transparencyInput.addEventListener('input', updateBorderStyles);
blurEffectInput.addEventListener('input', updateBorderStyles);
