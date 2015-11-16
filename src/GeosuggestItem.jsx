import React from 'react';

const GeosuggestItem = React.createClass({
  /**
   * Get the default props
   * @return {Object} The props
   */
  getDefaultProps: function() {
    return {
      isActive: false,
      className: {
        normal: 'geosuggest-item',
        active: 'geosuggest-item--active'
      },
      suggest: {
        label: ''
      },
      onSuggestSelect: function() {}
    };
  },

  /**
   * When the element gets clicked
   * @param  {Event} event The click event
   */
  onClick: function(event) {
    event.preventDefault();
    this.props.onSuggestSelect(this.props.suggest);
  },

  /**
   * Render the view
   * @return {Function} The React element to render
   */
  render: function() {
    return (// eslint-disable-line no-extra-parens
      <li className={this.getSuggestClasses()}
        onClick={this.onClick}>
          {this.props.suggest.label}
      </li>
    );
  },

  /**
   * The classes for the suggest item
   * @return {String} The classes
   */
  getSuggestClasses: function() {
    const className = this.props.suggest.className;
    var classes = this.props.className.normal;

    classes += this.props.isActive ? (' ' + this.props.className.active) : '';
    classes += className ? ' ' + className : '';

    return classes;
  }
});

module.exports = GeosuggestItem;
