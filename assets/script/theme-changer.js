function setProperty(prop, value) {
    if (value) {
        document.documentElement.style.setProperty(prop, value);
    }
}

function changeHighlighterColorscheme(json) {
    setProperty('--base00', json.base00);
    setProperty('--base01', json.base01);
    setProperty('--base02', json.base02);
    setProperty('--base03', json.base03);
    setProperty('--base04', json.base04);
    setProperty('--base05', json.base05);
    setProperty('--base06', json.base06);
    setProperty('--base07', json.base07);
    setProperty('--base08', json.base08);
    setProperty('--base09', json.base09);
    setProperty('--base0A', json.base0A);
    setProperty('--base0B', json.base0B);
    setProperty('--base0C', json.base0C);
    setProperty('--base0D', json.base0D);
    setProperty('--base0E', json.base0E);
    setProperty('--base0F', json.base0F);
}
let json = {'base00':'#333'}
changeHighlighterColorscheme(json)