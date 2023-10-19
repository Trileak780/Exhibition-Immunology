ImSysPar = localStorage.getItem("ImSysPar");
console.log(ImSysPar);
//ImSysSce = localStorage.getItem("ImSysSce");
function sendqp() {
    console.log("User wants to go to the quiz");
    window.location = "indexQP.html";
}
function sendip() {
    console.log("User wants to go to the index page");
    window.location = "indexIP.html";
}
function sendfp() {
    console.log("User wants to go to the first page");
    window.location = "indexFP.html";
}
window.onload = find();
function find() {
    if (ImSysPar = "b_cells") {
        title = "B Cells: The Weapons Factory";
        document.getElementById("head").innerHTML = title;
        row = "<p>B cells start as <i><a src='indexIP.html'>Pre-B cells</a></i>, then get training in the bone marrow. That's how they turn into <i><a src='indexIP.html'>Virgin B cells</a></i>. They then travel the lymphatic system, looking for a protein or a protein chunk, specifically from pathogen. Suppose a Virgin B cell can latch on to a specific protein. In that case, the Virgin B cell will become a proper <i><a src='indexIP.html'>B cell</a></i>, making more of itself and breaking off its receptors and creating new ones. Those receptors are called <i><a src='indexIP.html'>Antibodies</a></i>. Then, the Antibodies go into your blood and kill or maim pathogens. <i><a src='indexIP.html'>T Cells</a></i> keep the B Cells going. While the infection is going on, B Cells tweak the Antibodies by changing their DNA slightly. If the Antibody becomes more potent, the B Cell that made it has a higher chance of becoming a <i><a src='indexIP.html'>Plasma Cell</a></i> and getting revived. The B Cell will probably not get restored or become a Plasma Cell if it doesn't become potent or worsen. Now, the B cell can take two paths. If the infection is not severe and ends, most B cells will die, while some become <i><a src='indexIP.html'>Memory B Cells</a></i>. For the second path, you need to know this. B Cells hold the protein pieces and break them into little pieces to store on their <i><a src='indexIP.html'>MHC class II molecule</a></i>, like a hotdog bun with the protein as the sausage. If a T cell finds that B Cell and activates it (Keep in mind that it is looking for a B Cell with a potent antibody), it will become a Plasma Cell. These cells churn out 2,000 Antibodies per second! As soon as the infection is over, this Plasma cell will become a <i><a src='indexIP.html'>Long-Lived Plasma cell</i>! Wow!</p>";
        document.getElementById("output").innerHTML = row;
        list = "<ol><li><i><a src='indexIP.html'>Pre-B cells</a></i> become <i><a src='indexIP.html'>Virgins</a></i> in the bone marrow</li><li>Virgin latches on to a pathogen's protien piece, becomes a <i><a src='indexIP.html'>B Cell</a></i></li><li>B cell replicates and creates <i><a src='indexIP.html'>Antibodies</a></i>, B Cells start to tweak recipe for antibodies</li><li><i><a src='indexIP.html'>T cell</a></i> creates a <i><a src='indexIP.html'>Plasma Cell</a></i> out of the best cells</li><li>Finally, infection stops and B cells die, while some B cells and most of the Plasma Cells become <i><a src='indexIP.html'>Memory B Cells</a></i> and <i><a src='indexIP.html'>Long-Lived Plasma Cells</a></i> respectively</li></ol>";
        document.getElementById("outputli").innerHTML = list;
    }
}