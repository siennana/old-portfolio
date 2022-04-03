var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from 'react';
// a window contains a top bar with close/minimize/maximize buttons
// and an inner container for displaying content

var Window = function (_React$Component) {
    _inherits(Window, _React$Component);

    function Window(props) {
        _classCallCheck(this, Window);

        var _this = _possibleConstructorReturn(this, (Window.__proto__ || Object.getPrototypeOf(Window)).call(this, props));

        _this.state = {
            title: props.title
        };
        return _this;
    }

    _createClass(Window, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { "class": "panel" },
                React.createElement(
                    "div",
                    { "class": "top_bar" },
                    React.createElement(
                        "div",
                        { "class": "descriptor" },
                        this.state.title
                    ),
                    React.createElement(
                        "div",
                        { "class": "buttons" },
                        React.createElement("div", { id: "minimize", "class": "min bar_click" }),
                        React.createElement("div", { id: "maximize", "class": "max bar_click" }),
                        React.createElement("div", { id: "close", "class": "exit bar_click" })
                    )
                ),
                React.createElement("div", { "class": "content" })
            );
        }
    }]);

    return Window;
}(React.Component);

ReactDOM.render(React.createElement(Window, { title: "test title" }), document.getElementById('root'));