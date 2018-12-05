var sumData;
function Map(){
    var w = document.getElementById("left").offsetWidth;
    var h = document.querySelector("#left").offsetHeight;

// console.log(d3.select("#left"));
console.log(w);
console.log(h);

var svg = d3.select("#left").append("svg").attr("width",w).attr("height",h);
var color = d3.scaleLinear().range(["#d9f0d3","#762a83"]);
//var color = d3.scaleOrdinal(d3.schemeCategory20);
var g;


d3.json("https://d3js.org/us-10m.v1.json", function(us) {
        let dataSearch = {};
        // data.forEach(element => {
        //     element["Amount"] = +element["Amount"];
        //     if (element.id.length === 1 ){element.id = "0"+element.id}
        //     dataSearch[element.id] = element.Amount;
        // });
        // console.log(allData);
        allData.forEach(function(d){

            if (d["id"] in dataSearch){
                dataSearch[d["id"]] ++
            } else{
                dataSearch[d["id"]] = 1;
            }
        });
        for (var id in dataSearch) {
            dataSearch[id] =  dataSearch[id]/popSearch[id]
        }
        console.log(dataSearch);
        color.domain(d3.extent(Object.keys(dataSearch) ,function(d){return dataSearch[d]}));

        var projection = d3.geoIdentity()
        .fitExtent([[0,0],[w-50,h-50]], topojson.feature(us, us.objects.states))
      
        var path = d3.geoPath().projection(projection)

        g = svg.append("g")
        .attr("class", "states");

        m = g.selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path").attr("fill",function(d){return color(dataSearch[d.id])})
        .attr("d", path).on("mouseenter",function(d){
            console.log(d);
            var stateData = allData.filter(function(a){
                return a.id === d.id;
            })
            // console.log(stateData);
            // bar.updateBar(stateData);

                tooltip.transition()
                .duration(200)
                .style("opacity", .9);
                tooltip.html(selection+ "<br>" + dataSearch[d.id] * popSearch[d.id])
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        }).on("mouseleave",function(d){
            tooltip.transition()
            .duration(500)
            .style("opacity", 0);
        });
            
        svg.append("path")
            .attr("class", "state-borders")
            .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })))


});

this.updateMap = function(newData){

    var newDataSearch = {};
    newData.forEach(function(d){

        if (d["id"] in newDataSearch){
            newDataSearch[d["id"]] ++
        } else{
            newDataSearch[d["id"]] = 1;
        }
    });

    for (var id in newDataSearch) {
        newDataSearch[id] =  newDataSearch[id]/popSearch[id]
    }
    color.domain(d3.extent(Object.keys(newDataSearch) ,function(d){return newDataSearch[d]}));
    // console.log(newDataSearch);
    m.attr("fill",function(d){
        if (d.id in newDataSearch){
            // console.log(newDataSearch[d.id])
            return color(newDataSearch[d.id])
        } else {
            // console.log("Asd");
            return "grey";
        }
        
    }).on("mouseenter",function(d){
        console.log(d);
        var stateData = allData.filter(function(a){
            return a.id === d.id;
        })
        // console.log(stateData);
        // bar.updateBar(stateData);

        tooltip.transition()
            .duration(200)
            .style("opacity", .9);
        tooltip.html(selection+ "<br>" + newDataSearch[d.id] * popSearch[d.id])
            .style("left", (d3.event.pageX) + "px")
            .style("top", (d3.event.pageY - 28) + "px");
    }).on("mouseleave",function(d){
        tooltip.transition()
            .duration(500)
            .style("opacity", 0);
    });
}
}
