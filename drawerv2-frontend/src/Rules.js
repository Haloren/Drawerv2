class Rules {
    showRules = () => {
        // console.log("Show Rules")
        let hide = document.getElementById("showRules");
        if (hide.style.display === "none") {
            hide.style.display = "";
        } else {
            hide.style.display = "none"
        }
    }
}