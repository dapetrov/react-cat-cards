import React from "react";
import "./Cats.css";

function filterLikedCat() {
  const filterBox = document.querySelectorAll("div.cat-container");
  filterBox.forEach((element) => {
    if (element.lastChild.innerHTML === "нрав") {
      element.classList.remove("hide");
    } else {
      element.classList.add("hide");
    }
  });
}

function filterLikedCatAll() {
  const filterBox = document.querySelectorAll("div.cat-container");
  filterBox.forEach((element) => {
    element.classList.remove("hide");
  });
}

filterLikedCat();
export default class Cats extends React.Component {
  state = {
    cats: [
      { Name: "Вася", Color: "Белый", Yob: "1999", Like: "нрав" },
      { Name: "Петя", Color: "Белый", Yob: "1999", Like: "нрав" },
      { Name: "Аркадий", Color: "Белый", Yob: "1999", Like: "" },
    ],
  };
  handleAddCat = () => {
    const newCats = [...this.state.cats];
    const inputName = document.getElementById("input-name");
    const inputColor = document.getElementById("input-color");
    const inputYob = document.getElementById("input-yob");
    const inputLike = document.getElementById("input-like");
    const inputLikeValue = inputLike.checked ? "нрав" : "";
    const newCat = {
      Name: inputName.value,
      Color: inputColor.value,
      Yob: inputYob.value,
      Like: inputLikeValue,
    };
    newCats.push(newCat);

    this.setState({ cats: newCats });
  };

  handleDeleteCat = (index) => {
    const cats = this.state.cats;
    const newCats = [];

    for (let i = 0; i < cats.length; i++) {
      if (i !== index) {
        newCats.push(cats[i]);
      }
    }

    this.setState({ cats: newCats });
  };

  render() {
    return (
      <div>
        {this.state.cats.map((cat, index) => (
          <div className="cat-container">
            <img className="cat-avatar" src="cat.jpg" alt="avatar"></img>
            <p>
              <b>Имя: </b> {cat.Name}
            </p>
            <p>
              <b>Цвет: </b>
              {cat.Color}
            </p>
            <p>
              <b>Год рождения: </b>
              {cat.Yob}
            </p>
            <button onClick={() => this.handleDeleteCat(index)}>Удалить</button>
            <p className="liked">{cat.Like}</p>
          </div>
        ))}
        <div className="form-container">
          <label>
            Введите имя нового кота
            <input id="input-name"></input>
          </label>
          <label>
            Введите цвет нового кота
            <input id="input-color"></input>
          </label>
          <label>
            Введите год рождения нового кота
            <input id="input-yob"></input>
          </label>
          <label>
            Нравится ли вам этот кот?
            <input
              className="input-like-checkbox"
              id="input-like"
              type="checkbox"
            ></input>
          </label>
          <button className="add-cat-button" onClick={this.handleAddCat}>
            Добавить кота
          </button>
          <button className="like-filter" onClick={filterLikedCat}>
            Показать нрав
          </button>
          <button className="like-filter_all" onClick={filterLikedCatAll}>
            Показать всех
          </button>
        </div>
      </div>
    );
  }
}
