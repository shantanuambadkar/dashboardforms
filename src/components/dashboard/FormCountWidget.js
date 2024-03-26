import { Grid } from '@material-ui/core';
import '../../css/DBFormCount.css';
import Pending from '../../components/icons/icons8-sand-watch-64.png';
import Approved from '../../components/icons/icons8-done-64.png';
import Rejected from '../../components/icons/icons8-rejected-64.png';

function FormCountWidget() {
  return (
    <div>
      <Grid container>
        <Grid className="transparent-button-with-blue-hover">
          <div>Open</div>
          <div>
            <span>30</span>
          </div>
          <div>
            <img
              className="formCountIcons"
              src={Pending}
              alt="Outlined Sand Watch"
            />
          </div>
        </Grid>
        <Grid className="transparent-button-with-blue-hover accepted-font">
          <div>Accepted</div>
          <div>
            <span>10</span>
          </div>
          <div>
            <img className="formCountIcons" src={Approved} alt="Green Tick" />
          </div>
        </Grid>
        <Grid className="transparent-button-with-blue-hover rejected-font">
          <div>Rejected</div>
          <div>
            <span>5</span>
          </div>
          <div>
            <img className="formCountIcons" src={Rejected} alt="Cross" />
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
