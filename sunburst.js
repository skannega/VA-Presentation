// const width = window.innerWidth,
// height = window.innerHeight,
// maxRadius = (Math.min(width, height) / 2) - 5;
var selection = "";
function SunBurst(){
    const width = document.querySelector("#right").clientWidth,
        height = document.querySelector("#right").clientHeight,
        maxRadius = (Math.min(width,height)/2) - 10;
    const formatNumber = d3.format(',d');

    const x = d3.scaleLinear()
        .range([0, 2 * Math.PI])
        .clamp(true);

    const y = d3.scaleSqrt()
        .range([maxRadius*.1, maxRadius]);

	const color = d3.scaleOrdinal(d3.schemeCategory20b);
    const c = ["#18c61a", "#9817ff", "#d31911", "#24b7f1", "#fa82ce", "#736c31", "#1263e2", "#18c199", "#ed990a", "#f2917f", "#7b637c", "#a8b311", "#a438c0", "#d00d5e", "#1e7b1d", "#05767b", "#aaa1f9", "#a5aea1", "#a75312", "#026eb8", "#94b665", "#91529e", "#caa74f", "#c90392", "#a84e5d", "#6a4cf1", "#1ac463", "#d89ab1", "#3c764d", "#2dbdc5", "#fb78fa", "#a6a9cd", "#c1383d", "#8b614e", "#73be38", "#ff8d52", "#cea37e", "#b53c7e", "#656d61", "#436f90", "#5e7304", "#82b792", "#fb88a3", "#dd8df2", "#6a5cc0", "#d098d5", "#ac15dc", "#a4543b", "#76b4cc", "#6963a4", "#8e620d", "#77adf8", "#c9a918", "#99537d", "#acaf7d", "#7850d5", "#ae3a9f", "#68bd74", "#e09d60", "#1069cd", "#d50438", "#c03d17", "#79b6af", "#517430", "#db9b94", "#095cf8", "#b1b045", "#c0a4a9", "#bc01c1", "#906033", "#e49c3f", "#8e4db9", "#bb3a64", "#cb1478", "#776b09", "#94b743", "#763eff", "#1a7a3e", "#617046", "#915c62", "#ec8dc0", "#ba22ac", "#437461", "#913ddc", "#4bbda8", "#b4482e", "#a9a5e3", "#78b1e2", "#855b91", "#fc902e", "#2cbada", "#64c104", "#8abb0b", "#3cc441", "#68be5c", "#b9ac66", "#11c37b", "#5e6c7c", "#686690", "#f09469", "#66bc8a", "#736a4e", "#776768", "#c43251", "#c1a0c6", "#a2acb7", "#457713", "#f87fe4", "#c1a693", "#b14949", "#487175", "#eb929c", "#e18fdc", "#326ea4", "#147861", "#9b584f", "#dba103", "#cca567", "#5464b9", "#c797f2", "#94b57c", "#d3084b", "#e09b7e", "#cd2729", "#525ae2", "#a04c8a", "#bb308b", "#1d7489", "#a82bce", "#ee9751", "#a94b70", "#9432ea", "#9c5a24", "#9cb193", "#816722", "#826540", "#fb8b8e", "#696f20", "#33b4ff", "#d3a434", "#7b5aab", "#5b5bd4", "#c22c71", "#ca2f01", "#34792f", "#81bb4c", "#3064d4", "#80ba6d", "#4f68ab", "#b6a5bf", "#8a5d76", "#dc9f50", "#935e41", "#a94491", "#147953", "#8cb1be", "#41c183", "#acb05e", "#53c153", "#54c06c", "#7b618a", "#05bfb6", "#fb85b9", "#eb90b1", "#9a5669", "#9f42b3", "#c0ab3c", "#2f56ff", "#d09fa2", "#60b9be", "#b64708", "#8b4ac7", "#bcaa76", "#a905ea", "#bd9fdc", "#dd94c6", "#e786f9", "#6eb9a0", "#5d6a89", "#ca2844", "#93acdb", "#724ee3", "#bc2998", "#2b6abf", "#9e5a01", "#11776e", "#9441ce", "#98b722", "#ff8a78", "#d70123", "#8f2df8", "#a1b26d", "#8cb4a1", "#aead8c", "#0d7396", "#d7a06f", "#467082", "#b93f57", "#5e7138", "#a0b455", "#d0a18c", "#bea885", "#75685b", "#59705b", "#a4b43b", "#a046a5", "#80b983", "#ab5025", "#b5af25", "#91aaea", "#54699d", "#8554b2", "#bc9dea", "#e9958d", "#7456c7", "#04c553", "#e09f2a", "#53c22b", "#f09637", "#ae35ac", "#604aff", "#c62a5e", "#4c753f", "#c3372f", "#706c40", "#e39a70", "#8b5b83", "#856162", "#97a6f8", "#96b0b0", "#86ba5d", "#4d63c6", "#9a5a33", "#b34171", "#94548a", "#cc2737", "#ee87dc", "#e78ece", "#527168", "#a75149", "#b3483c", "#716776", "#666b6f", "#bcac57", "#5ac141", "#78be07", "#4bc401", "#4cb9cc", "#58b6db", "#fd8f11", "#7d5c9e", "#85b0d4", "#b2a4d4", "#b6471e", "#14c0a7", "#8440ea", "#37746e", "#4c7454", "#b426ba", "#38783e", "#b14563", "#926023", "#b50dce", "#b1a9a9", "#54741f", "#61baaf", "#c92f19", "#a54b7d", "#83670b", "#9f2fdc", "#bf2e7e", "#fd8d62", "#6ebe4b", "#85bb39", "#d29abf", "#cb9fb0", "#dd99a2", "#5354f1", "#c40b9f", "#107b2f", "#ce116b", "#81626f", "#4cbe99", "#766b21", "#7f6732", "#9aadc5", "#c81885", "#7f664e", "#bb3e4a", "#78b5be", "#6b6f06", "#56b4f1", "#cf96e3", "#736297", "#9e555c", "#fb9041", "#86b874", "#f87cf2", "#68bb99", "#31775a", "#49bcb6", "#90b855", "#7aba7c", "#fb8d71", "#4f7603", "#d01c3e", "#cca19b", "#676f31", "#696883", "#c59ecd", "#f686c7", "#81645b", "#6c6e38", "#5ab2f8", "#ef8fa3", "#b0ae6e", "#73b2db", "#8d5f5c", "#f78b9c", "#b0ab9a", "#ca2064", "#a84784", "#786a39", "#bf3d28", "#bd3e36", "#527346", "#467637", "#7543f8", "#9050ac", "#516b97", "#bcad15", "#636e54", "#16729d", "#8847d5", "#985d0f", "#9d20f1", "#9744c0", "#b14c14", "#65b7c5", "#c7a933", "#e294b8", "#e793aa", "#f788b2", "#4ac264", "#17c28a", "#4bbf8a", "#a04998", "#b13e8b", "#d5a258", "#d7a247", "#935970", "#5266b2", "#7abb65"]
    //const color = d3.scaleOrdinal().range(c);
    const partition = d3.partition();

    const arc = d3.arc()
        .startAngle(d => x(d.x0))
.endAngle(d => x(d.x1))
.innerRadius(d => Math.max(0, y(d.y0)))
.outerRadius(d => Math.max(0, y(d.y1)));

    const middleArcLine = d => {
        const halfPi = Math.PI/2;
        const angles = [x(d.x0) - halfPi, x(d.x1) - halfPi];
        const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);

        const middleAngle = (angles[1] + angles[0]) / 2;
        const invertDirection = middleAngle > 0 && middleAngle < Math.PI; // On lower quadrants write text ccw
        if (invertDirection) { angles.reverse(); }

        const path = d3.path();
        path.arc(0, 0, r, angles[0], angles[1], invertDirection);
        return path.toString();
    };

    const textFits = d => {
        const CHAR_SPACE = 6;

        const deltaAngle = x(d.x1) - x(d.x0);
        const r = Math.max(0, (y(d.y0) + y(d.y1)) / 2);
        const perimeter = r * deltaAngle;

        return d.data.name.length * CHAR_SPACE < perimeter;
    };

    const svg = d3.select('#right').append('svg')
        .style('width', width)
        .style('height', height)
        .attr('viewBox', `${-width / 2} ${-height / 2} ${width} ${height}`)
        .on('click', () => focusOn()); // Reset zoom on canvas click

    d3.json('atData.json', (error, root) => {
        if (error) throw error;

    root = d3.hierarchy(root);
    root.sum(d => d.size);

    const slice = svg.selectAll('g.slice')
        .data(partition(root).descendants());

    slice.exit().remove();

    const newSlice = slice.enter()
        .append('g').attr('class', 'slice')
        .on('click', d => {
            console.log(d);

            console.log(category);
            console.log(name);
            if (category !== "all"){
                var newData;
                if (d.data.level==="1"){
                    var category = d.data.name[1];
                    var name = d.data.name[0];
                    selection = name;
                    newData = allData.filter(function(d){
                        return d[category] === name;
                    })
                }
                else if (d.data.level==="2"){
                    var category = d.data.name[1];
                    var name = d.data.name[0];
                    var pCategory = d.parent.data.name[1];
                    var pname = d.parent.data.name[0];
                    selection = pname + " - " + name;
                    newData = allData.filter(function(d){
                        return d[category] === name & d[pCategory]=== pname;
                    })
                }
                else {
                    var category = d.data.name[1];
                    var name = d.data.name[0];
                    var pCategory = d.parent.data.name[1];
                    var pname = d.parent.data.name[0];
                    var p2Category = d.parent.parent.data.name[1];
                    var p2Name = d.parent.parent.data.name[0];
                    selection = p2Name + " - " + pname + " - " + name;
                    newData = allData.filter(function(d){
                        return d[category] === name & d[pCategory]=== pname & d[p2Category] === p2Name;
                    })
                }
                map.updateMap(newData);
            } else {
                map.updateMap(allData);
            }

            // console.log(newData);
            d3.event.stopPropagation();
    focusOn(d);
});

    newSlice.append('title')
        .text(d => d.data.name[0] + '\n' + formatNumber(d.value));

    newSlice.append('path')
        .attr('class', 'main-arc')
        .style('fill', function(d){
            if (d.data.name[0] === "registered"){
                return "green"
            } else if (d.data.name[0] ==="not registered") {
                return "red"
            } else {
                return color((d.children ? d : d.parent).data.name[0]);
            }

        })
        .attr('d', arc);

    newSlice.append('path')
        .attr('class', 'hidden-arc')
        .attr('id', (_, i) => `hiddenArc${i}`)
.attr('d', middleArcLine);

    const text = newSlice.append('text')
        .attr('display', d => textFits(d) ? null : 'none');

// Add white contour
    text.append('textPath')
        .attr('startOffset','50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}` )
.text(d => d.data.name[0])
.style('fill', 'none')
        .style('stroke', '#fff')
        .style('stroke-width', 5)
        .style('stroke-linejoin', 'round');

    text.append('textPath')
        .attr('startOffset','50%')
        .attr('xlink:href', (_, i) => `#hiddenArc${i}` )
.text(d => d.data.name[0]);
});

    function focusOn(d = { x0: 0, x1: 1, y0: 0, y1: 1 }) {
// Reset to top-level if no data point specified

        const transition = svg.transition()
            .duration(750)
            .tween('scale', () => {
            const xd = d3.interpolate(x.domain(), [d.x0, d.x1]),
            yd = d3.interpolate(y.domain(), [d.y0, 1]);
        return t => { x.domain(xd(t)); y.domain(yd(t)); };
    });

        transition.selectAll('path.main-arc')
            .attrTween('d', d => () => arc(d));

        transition.selectAll('path.hidden-arc')
            .attrTween('d', d => () => middleArcLine(d));

        transition.selectAll('text')
            .attrTween('display', d => () => textFits(d) ? null : 'none');

        moveStackToFront(d);

//

        function moveStackToFront(elD) {
            svg.selectAll('.slice').filter(d => d === elD)
        .each(function(d) {
                this.parentNode.appendChild(this);
                if (d.parent) { moveStackToFront(d.parent); }
            })
        }
    }
}
