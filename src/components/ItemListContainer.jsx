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
        <ItemCount stock={5} initial={1} />
      </div>
    );
  }
}

export default ItemList;
