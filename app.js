const colors = ["red", "blue", "green", "yellow", "purple", "pink", "orange"];
const btn = document.getElementById('flip-btn');
const colorCode = document.getElementById('color-code');
const toggleBtn = document.getElementById('toggle-mode');

let useRandomHex = false; // Default mode is predefined colors

toggleBtn.addEventListener('click', function () {x``
    useRandomHex = !useRandomHex;
    toggleBtn.textContent = useRandomHex ? "Mode: Random Hex" : "Mode: Predefined Colors";
});

btn.addEventListener('click', function () {
    let newColor;

    if (useRandomHex) {
        newColor = "#" + Math.floor(Math.random() * 16777215).toString(16); // Generate Random hex color
    } else {
        let randomIndex = Math.floor(Math.random() * colors.length);
        newColor = colors[randomIndex]; // Pick a color from the predefined list
    }

    document.body.style.backgroundColor = newColor;
    colorCode.textContent = newColor;

    // Change font color based on background brightness
    const brightness = getBrightness(newColor);
    document.body.style.color = brightness < 128 ? 'white' : 'black';
});

// Function to calculate brightness of a color
function getBrightness(hex) {
    hex = hex.replace("#", "");
    let r, g, b;

    if (hex.length === 3) {
        r = parseInt(hex[0] + hex[0], 16)
        g = parseInt(hex[1] + hex[1], 16)
        b = parseInt(hex[2] + hex[2], 16)
    } else {
        r = parseInt(hex.substring(0, 2), 16);
        g = parseInt(hex.substring(2, 4), 16);
        b = parseInt(hex.substring(4, 6), 16);
    }

    return (r * 299 + g * 587 + b * 114) / 1000; // Formula for perceived brightness
}
