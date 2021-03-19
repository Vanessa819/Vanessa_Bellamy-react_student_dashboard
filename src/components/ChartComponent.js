import React from 'react';
import InputSelect from './InputSelect';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup } from 'victory';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDifficult: true,
            showFun: true
        }
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }
    handleFilterChange(name, state) {
        if (name === 'difficult') {
            this.setState(() => {
                return {
                    showDifficult: state
                }
            })
        } else if (name === 'fun') {
            this.setState(() => {
                return {
                    showFun: state
                }
            })
        }
    }
    render() {
        const renderDifficultBar = (showDifficult) => {
            if (showDifficult) {
                return (
                    <VictoryBar
                        colorScale={[ "#c2185b"]}
                        alignment="middle"
                        data={this.props.studentData}
                        x="assignment"
                        y="difficult"
                    />
                )
            }
        }
        const renderFunBar = (showFun) => {
            if (showFun) {
                return (
                <VictoryBar
                        colorScale={["#084d8d"]}
                        alignment="end"
                        data={this.props.studentData}
                        x="assignment"
                        y="fun"
                    />
                )
            }
        }
        return (
            <div className= "ChartComponent">
                <div className= "InputSelect">
                    <InputSelect
                        selectName={'fun'}
                        selectText={' Plezierbeleving tijdens het maken van de opdracht'}
                        selectChange={this.handleFilterChange}
                    />
                    <br />
                    <InputSelect
                        selectName = {'difficult'}
                        selectText = {'Moelijkheidsgraad van de opdracht '}
                        selectChange={this.handleFilterChange}
                    />
                </div>
                <VictoryChart
                    height={250}
                    domainPadding={{ x: 15 }}
                    className = "VictoryChart-BarChart"
                    padding={{ left: 30, top: 30, right: 30, bottom: 100 }}
                >
                    <VictoryAxis
                        tickFormat={this.props.studentData.assigment}
                        style={{
                            tickLabels: { angle: 45, textAnchor: 'start', fontSize: 4 },
                            ticks: { stroke: "grey", size: 2 }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={[1, 2, 3, 4, 5]}
                        style={{
                            tickLabels: { fontSize: 6 },
                            ticks: { stroke: "grey", size: 2 }
                        }}
                    />
                    <VictoryGroup offset={4}>  
                        {renderDifficultBar(this.state.showDifficult)}
                        {renderFunBar(this.state.showFun)}
                    </VictoryGroup>
                    </VictoryChart>
                <div className= "ComponentInfo">
                    <p className="fun">Plezierbeleving tijdens het maken van de opdracht</p>
                    <p className="difficult">Moelijkheidsgraad van de opdracht</p>
                </div>
            </div>
        )
    }
}
export default ChartComponent;