// Amplify Configuration
// Update these values with your AWS Amplify backend configuration
// You can find these values in the AWS Amplify Console

export const amplifyConfig = {
  Auth: {
    Cognito: {
      userPoolId: import.meta.env.VITE_USER_POOL_ID || '',
      userPoolClientId: import.meta.env.VITE_USER_POOL_CLIENT_ID || '',
      region: import.meta.env.VITE_AWS_REGION || 'us-east-1',
    },
  },
};

export default amplifyConfig;
