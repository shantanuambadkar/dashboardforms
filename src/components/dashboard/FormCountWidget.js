import { Grid } from '@material-ui/core';
import '../../css/DBFormCount.css';

function FormCountWidget() {
  return (
    <div>
      <Grid container>
        <Grid className="transparent-button-with-blue-hover">
          <div>Open</div>
          <div>
            <span>30</span>
          </div>
        </Grid>
        <Grid className="transparent-button-with-blue-hover">
          <div>Accepted</div>
          <div>
            <span>10</span>
          </div>
        </Grid>
        <Grid className="transparent-button-with-blue-hover rejected-font">
          <div>Rejected</div>
          <div>
            <span>5</span>
          </div>
        </Grid>
        <Grid className="transparent-button-with-blue-hover">
          <div>Total</div>
          <div>
            <span>45</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default FormCountWidget;
