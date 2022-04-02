import React from 'react';
// a window contains a top bar with close/minimize/maximize buttons
// and an inner container for displaying content
class Window extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: props.title,
        };
    }

    render() {
        return (
            <div class="panel">
                <div class="top_bar">
                    <div class="descriptor">{this.state.title}</div>
                    <div class="buttons">
                        <div id="minimize" class="min bar_click"></div>
                        <div id="maximize" class="max bar_click"></div>
                        <div id="close" class="exit bar_click"></div>
                    </div>
                </div>
                <div class="content">
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Window title="test title"/>,
    document.getElementById('root')
);