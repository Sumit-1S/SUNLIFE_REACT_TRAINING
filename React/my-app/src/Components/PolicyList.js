import { Component } from "react";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import Policy from "./Policy";

// this.props.policyList

export default class PolicyList extends Component {
  render() {
    return (
      <div class="PolicyList">
        <h2>Policies Available</h2>
        <Box sx={{ flexGrow: 1, overflow: "hidden", px: 3 }}>
            {this.props.policyList.map((policy, idx) => (
            <Policy key={policy.id} useridx={idx} policy={policy} />
            ))}
        </Box>
        <br />
        <Button
          variant="contained"
          disabled={!this.props.policyList.length}
          onClick={this.props.purchaseAll}
        >
          Purchase ALL
        </Button>
      </div>
    );
  }
}
