import { Component } from "react";
import TitleComponent from "./Title";

class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categoria: "Hombre",
    };
  }
  render() {
    return (
      <div>
        <TitleComponent name={this.state.categoria} />
      </div>
    );
  }
}

export default ItemList;
