import * as Akumina from "akumina-core";
import { connect } from 'react-redux';
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types"
import Manager from "../components/manager";
import AkMsGraphApiService from "../apis/graphApiService";
import { bindActionCreators, Dispatch } from "redux";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  handleClick: () => {
    
  let akConfig = Akumina.Digispace.ConfigurationContext;
  //let user: string = Akumina.Digispace.UserContext.UserLoginName;
  //Invoke Mark API
  //Akumina.Digispace.PerfLogger.AddMark("Graph call start");
  new AkMsGraphApiService(
    akConfig.InterchangeURL,
    akConfig.InterchangeQueryKey,
    ""
  )
    .fetchAllUsers()
    .then(function(response:Response) {
      //Invoke Mark API
      //Akumina.Digispace.PerfLogger.AddMark("Graph call end");
      console.log(response.status);
    });
  }
})

export const ManagerContainer = connect(
  null,
  mapDispatchToProps
)(Manager);