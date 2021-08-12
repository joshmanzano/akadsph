import React from "react";
import clsx from "clsx";
import PropTypes from "prop-types";
import {
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors,
  Grid,
  Tooltip,
  Button,
  Box,
  Container,
  Typography,
} from "@material-ui/core";
import axios from "axios";

class RandomFact extends React.Component {
  constructor() {
    super();
    this.state = {
      fact: "...",
    };
  }

  componentDidMount() {
    axios
      .get("https://uselessfacts.jsph.pl/random.json?language=en")
      .then((res) => {
        this.setState({ fact: res.data["text"] });
      });
  }

  render() {
    return (
      <Box my={2}>
        <Typography variant="p">{this.state.fact}</Typography>
      </Box>
    );
  }
}

export default RandomFact;
