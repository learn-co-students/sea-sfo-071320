import React from "react";
import { Route, Switch } from "react-router-dom";

import PaintingsList from "./PaintingsList";
import PaintingDetail from "./PaintingDetail";
import PaintingForm from "./PaintingForm";
import Searchbar from "./Searchbar";
import paintingsData from "../paintings.json";

class PaintingsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      paintings: paintingsData.paintings,
      searchText: ""
    };
  }

  voteForPainting = id => {
    let updatePaintings = this.state.paintings.map(painting => {
      if (painting.id === id) {
        let newPainting = {
          ...painting,
          votes: painting.votes + 1
        };
        return newPainting;
      } else {
        return painting;
      }
    });
    this.setState({ paintings: updatePaintings });
  };

  updatePaintingInfo = (paintingId, info) => {
    let newPaintingsArray = this.state.paintings.map(painting => {
      if (painting.id === paintingId) {
        return {
          ...painting,
          title: info.title,
          artist: {
            name: info.name,
            birthday: info.birthday,
            deathday: info.deathday
          }
        };
      } else {
        return painting;
      }
    });

    this.setState({ paintings: newPaintingsArray, editing: false });
  };

  changeSearch = searchText => {
    this.setState({ searchText });
  };

  filteredPaintings = () => {
    return this.state.paintings.filter(
      p =>
        p.title.toLowerCase().includes(this.state.searchText.toLowerCase()) ||
        p.artist.name
          .toLowerCase()
          .includes(this.state.searchText.toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <Switch>
          <Route
            path="/paintings/:paintingId/edit"
            render={data => {
              let selectedPainting = this.state.paintings.find(
                painting => painting.id === data.match.params.paintingId
              );
              return (
                <PaintingForm
                  painting={selectedPainting}
                  updatePaintingInfo={this.updatePaintingInfo}
                />
              );
            }}
          />
          <Route
            path="/paintings/:paintingId"
            render={data => {
              let selectedPainting = this.state.paintings.find(
                painting => painting.id === data.match.params.paintingId
              );
              return <PaintingDetail painting={selectedPainting} />;
            }}
          />
          <Route
            path="/"
            render={() => (
              <div className="ui narrow container segment">
                <Searchbar
                  value={this.state.searchText}
                  onChange={this.changeSearch}
                />
                <PaintingsList
                  selectPainting={this.selectPainting}
                  paintings={this.filteredPaintings()}
                />
              </div>
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default PaintingsContainer;
