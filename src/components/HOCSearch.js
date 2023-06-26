import React from "react";

const HOCSearch = (WrappedComponenet, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://apitest-lovat.vercel.app/products/`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filteredData = data.filter((d) => {
          const { name } = d;
          return name.indexOf(term) >= 0;
      });
      return (
        <>
          <WrappedComponenet data={filteredData}></WrappedComponenet>
        </>
      );
    }
  };
};

export default HOCSearch;
