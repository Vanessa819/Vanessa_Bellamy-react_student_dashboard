import React from 'react';
import { VictoryLine, VictoryChart, VictoryAxis } from 'victory';

class GraphComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
       return (
            <div className = "GraphComponent">
                <VictoryChart 
                    height= {250}
                    padding={{ left: 20, top: 20, right: 50, bottom: 100}}
                >
                    <VictoryAxis
                       tickFormat={this.props.averageStudent.assigment}
                        style={{
                            tickLabels: { angle: 45, textAnchor: 'start', fontSize: 4 },
                            ticks: { stroke: "grey", size: 2 },
                            grid: { stroke: "rgb(221,221,221)" }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={[ 1, 2, 3, 4, 5]}
                        style={{
                            tickLabels: { fontSize: 6},
                            ticks: { stroke: "grey", size: 2 },
                            grid: { stroke: "rgb(221,221,221)" }
                        }}
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#c2185b " ,
                            strokeWidth: 0.8 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.averageStudent}
                        x="assignment"
                        y="average"
                    />
                    <VictoryLine
                        style={{
                            data: { stroke: "#084d8d",
                                 strokeWidth: 0.8 },
                            parent: { border: "1px solid #ccc" }
                        }}
                        data={this.props.averageAll}
                        x="assignment"
                        y="average"
                    />
                </VictoryChart>
                <div className = "ComponentInfo">
                    <p className = "averageAll">Het gemiddelde cijfer van een opdracht onder de studenten</p>
                    <p className = "averageOneStudent">Het gemiddelde cijfer van deze student voor alle opdrachten</p>
                </div>
            </div >
        )
    }
}

export default GraphComponent;