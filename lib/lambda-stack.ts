import * as cdk from 'aws-cdk-lib'
import * as lambda from 'aws-cdk-lib/aws-lambda'
import { Construct } from 'constructs'

export class CDKDemoLambdaStack extends cdk.Stack {

    constructor(
        scope: Construct, 
        id: string, 
        stageName: string,
        props?: cdk.StackProps) {

            super(scope, id, props)
    
            const fn = new lambda.Function(this, 'CDKDemoLambdaFunction', {
                runtime: lambda.Runtime.NODEJS_16_X,
                handler: 'handler.handler',
                code: lambda.Code.fromAsset('lambda'),
                environment: {
                    'stageName': stageName
                }
            })
    }
}

