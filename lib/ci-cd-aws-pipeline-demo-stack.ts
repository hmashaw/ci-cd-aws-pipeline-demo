import * as cdk from 'aws-cdk-lib'
import * as pipelines from 'aws-cdk-lib/pipelines'
import { Construct } from 'constructs'

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
    }
}

