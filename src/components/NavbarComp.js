import React, { Component } from "react";
import ImageRes from "./ImageRes";
import { Navbar, Form, FormControl } from "react-bootstrap";
import axios from "axios";

export default class NavbarComp extends Component {
  state = {
    searchText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "19066289-56c3481c5b245d604609c2192",
    imagesArr: [],
  };

  OnTextChange = (e) => {
    const val = e.target.value;

    this.setState({ searchText: e.target.value }, () => {
      if (val === "") {
        this.setState({ imagesArr: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&safesearch=true`
          )
          .then((res) => this.setState({ imagesArr: res.data.hits }))
          .catch((err) => console.log(err));
      }
    });
  };

  render() {
    console.log(this.state.imagesArr);
    return (
      <div>
        <Navbar
          expand="lg"
          bg="dark"
          variant="dark"
          style={{
            height: "120px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }} //styling Navbar
          sticky="top"
        >
          <Navbar.Brand href="#">Search Photos</Navbar.Brand>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              style={{ width: "400px" }}
              name="searchText"
              value={this.state.searchText}
              onChange={this.OnTextChange}
            />
          </Form>
        </Navbar>
        {this.state.imagesArr.length > 0 ? (
          <ImageRes imagesArr={this.state.imagesArr} />
        ) : null}
      </div>
    );
  }
}
