import * as React from 'react';

export default function sortableHandle(WrappedComponent) {
  return class WithSortableHandle extends React.Component {
    constructor(props) {
      super(props);
      this.wrappedInstance = React.createRef();
    }

    componentDidMount() {
      const node = this.wrappedInstance.current;
      node.sortableHandle = true;
    }

    getWrappedInstance() {
      return this.wrappedInstance.current;
    }

    render() {
      return <WrappedComponent ref={this.wrappedInstance} {...this.props} />;
    }
  };
}

export function isSortableHandle(node) {
  return node.sortableHandle != null;
}
