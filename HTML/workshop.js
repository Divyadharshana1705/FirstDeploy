function goToUpload() {
    document.getElementById("home").style.display = "none";
    document.getElementById("upload").style.display = "block";
}

function predictDisease() {
    let image = document.getElementById("imageUpload").files[0];
    let resultDiv = document.getElementById("result");

    if (!image) {
        resultDiv.innerHTML = "<p style='color: red;'>Please upload an image.</p>";
        return;
    }

    // Simulated disease detection
    let diseases = {
        "Leaf Rot": "Use copper-based fungicides and trim infected leaves.",
        "Bud Rot": "Apply Bordeaux mixture and ensure proper drainage.",
        "No Disease": "Your tree is healthy!"
    };

    let diseaseKeys = Object.keys(diseases);
    let randomDisease = diseaseKeys[Math.floor(Math.random() * diseaseKeys.length)];

    resultDiv.innerHTML = `<h3>Detected Disease: ${randomDisease}</h3>
                           <p>Precautionary Measure: ${diseases[randomDisease]}</p>`;
}
