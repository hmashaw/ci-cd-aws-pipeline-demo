import * as cdk from 'aws-cdk-lib'
import { Construct } from 'constructs'

import { CDKDemoLambdaStack } from './lambda-stack'

export class CDKPipelineAppStage extends cdk.Stage {
    constructor(
        scope: Construct,
        stageName: string,
        props?: cdk.StackProps) {

            super(scope, stageName, props)

            const lambdaStack = new CDKDemoLambdaStack(this, 'CDKDemoLambdaStack', stageName)
        
        }
}

