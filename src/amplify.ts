import Amplify from "aws-amplify";

console.log(process.env.REACT_APP_IDENTITY_POOL_ID);

const config: any = {
  Auth: {
    authenticationFlowType: "USER_PASSWORD_AUTH",
    identityPoolId: process.env.REACT_APP_IDENTITY_POOL_ID,
    region: process.env.REACT_APP_AWS_REGION,
    storage: sessionStorage,
    userPoolId: process.env.REACT_APP_USER_POOL_ID,
    userPoolWebClientId: process.env.REACT_APP_USER_POOL_WEB_CLIENT_ID
  },
  Storage: {
    bucket: process.env.REACT_APP_S3_BUCKET,
    region: process.env.REACT_APP_AWS_REGION
  }
};
Amplify.configure(config);
Amplify.Logger.LOG_LEVEL = "DEBUG";