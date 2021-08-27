import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridTile } from "material-ui/GridList";

export default class ImageRes extends Component {
  render() {
    let imagelist;
    const { imagesArr } = this.props;

    if (imagesArr) {
      imagelist = (
        <GridList cols={3}>
          {imagesArr.map((img) => (
            <GridTile title={img.tags} key={img.id}>
              <img src={img.largeImageURL} alt="" />
            </GridTile>
          ))}
        </GridList>
      );
    } else {
      imagelist = null;
    }
    return <div>{imagelist}</div>;
  }
}
ImageRes.propTypes = {
  imagesArr: PropTypes.array.isRequired,
};
