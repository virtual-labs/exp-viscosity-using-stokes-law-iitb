var act4_table;
var act4_table_headings = [];
function activity4() {
    pp.clearleftpannel();
    pp.clearrightpannel();
    pp.addoffcanvas(3);
    load_act4_table();
    pp.showtitle("To determine viscosity using Stokes law", 3);
    let activity5_formulae = `
        <p>Length of Column (L) = 100 cm</p>

        <p>Density of Steel Balls (pp) = 7.8 gm/cc</p>

        <p>Density of Castor Liquid (pf) = 0.9 gm/cc</p>

        <p>Density of lubricating oil (pf) = 0.9gm/cc</p>

        <p>Ut = L/T</p>

    `;
    show_panel(3);
    pp.showdescription(activity5_formulae, 3);
}
function load_act4_table() {
    act4_table_headings = ["Sr No.", "Length of the column L (cm)", "Diameter of the steel ball Dp (cm)", "Time of travel between tow marks (t)", "Ultimate setting velocity Ut (cm/sec)", "Viscosity &mue; (poise)", "check"];
    let verify_row = [["1", "100", "0.30", "5.52", `<input type="text"  id="inp-1">`, `<input type="text"  id="inp-2">`, `<input type="submit" class="btn btn-primary" onclick="verify_act4();">`]];
    act4_table = new Table(act4_table_headings, verify_row);
    pp.addtoleftpannel(act4_table.template);
    act4_table.draw();
}
function verify_act4() {
    let val1 = document.getElementById(`inp-1`);
    let val2 = document.getElementById(`inp-2`);
    if (!verify_values(parseFloat(val1.value), parseFloat(act4_table_data[0][4]))) {
        alert(`please correct Ut value!!`);
        return;
    }
    if (!verify_values(parseFloat(val2.value), parseFloat(act4_table_data[0][5]))) {
        alert(`please correct the Viscosity of liquid value!!`);
        return;
    }
    alert("Calculation is right!!");
    act4_table_headings.pop();
    act4_table = new Table(act4_table_headings, act4_table_data);
    act4_table.draw();
}
//# sourceMappingURL=activity4.js.map