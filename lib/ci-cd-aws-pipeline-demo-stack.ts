import * as cdk from 'aws-cdk-lib'
import * as pipelines from 'aws-cdk-lib/pipelines'
import { Construct } from 'constructs'

import { CDKPipelineAppStage } from './stage'

export class CiCdAwsPipelineDemoStack extends cdk.Stack {

    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props)
    
        const pipeline = new pipelines.CodePipeline(this, 'Pipeline', {
            pipelineName: 'TestPipeline',
            synth: new pipelines.ShellStep('Synth', {
                input: pipelines.CodePipelineSource.gitHub('hmashaw/ci-cd-aws-pipeline-demo', 'main'),
                commands: [
                  'npm ci',
                  'npm run build',
                  'npx cdk synth'
                ]
            })
        })

        const testStage = pipeline.addStage(new CDKPipelineAppStage(this, 'test'))
        testStage.addPost(new pipelines.ManualApprovalStep('Manual approval before production deployment'))

        const prodStage = pipeline.addStage(new CDKPipelineAppStage(this, 'prod'))
    }
}

