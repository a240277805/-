1.<script type="text/babel">
2.< 在外，{在里
3. components  name is capitalized and should only have one top child node.
4.Please be mindful that the value of this.props.children has three possibilities. If the component has no children node, the value is undefined; If single children node, an object; If multiple children nodes, an array. You should be careful to handle it.

React.Children.map(this.props.children, function (child) {
                  return <li>{child}</li>;
                })
5.PropTypes how to define  props type egs:
					propTypes: {
    title: React.PropTypes.string.isRequired,
  },
6. If you want to give the props a default value, use getDefaultProps()  egs:
		 getDefaultProps : function () {
    return {
      title : 'Hello World'
    };
  },
7. this.state  to hold component's state, getInitialState() to initialize , this.setState() to update this.state and re-render the component.
