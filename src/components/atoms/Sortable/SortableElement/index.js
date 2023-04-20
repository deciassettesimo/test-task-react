import React from 'react';
import { SortableContext } from '../SortableContainer';

export default function sortableElement(WrappedComponent) {
  return class WithSortableElement extends React.Component {
    static contextType = SortableContext;

    static defaultProps = {
      collection: 0,
    };

    constructor(props) {
      super(props);
      this.wrappedInstance = React.createRef();
    }

    componentDidMount() {
      this.register();
    }

    componentDidUpdate(prevProps) {
      if (this.node) {
        if (prevProps.index !== this.props.index) {
          this.node.sortableInfo.index = this.props.index;
        }

        if (prevProps.disabled !== this.props.disabled) {
          this.node.sortableInfo.disabled = this.props.disabled;
        }
      }

      if (prevProps.collection !== this.props.collection) {
        this.unregister(prevProps.collection);
        this.register();
      }
    }

    componentWillUnmount() {
      this.unregister();
    }

    register() {
      const { collection, disabled, index } = this.props;
      const node = this.getWrappedInstance();

      node.sortableInfo = {
        collection,
        disabled,
        index,
        manager: this.context.manager,
      };

      this.node = node;
      this.ref = { node };

      this.context.manager.add(collection, this.ref);
    }

    unregister(collection = this.props.collection) {
      this.context.manager.remove(collection, this.ref);
    }

    getWrappedInstance() {
      return this.wrappedInstance.current;
    }

    render() {
      return <WrappedComponent ref={this.wrappedInstance} {...this.props} />;
    }
  };
}
