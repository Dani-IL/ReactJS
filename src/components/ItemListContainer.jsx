import { Component } from "react";
import TitleComponent from "./Title";
import ItemCount from "./ItemCount";

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
        <ItemCount />
      </div>
    );
  }
}

export default ItemList;
