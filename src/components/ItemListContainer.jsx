import { Component } from "react";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: "Ropa de ",
    };
  }
  render() {
    return (
      <div>
        <h1>
          {this.state.categoria}
          {this.props.sexo}
        </h1>
      </div>
    );
  }
}

export default ItemList;
