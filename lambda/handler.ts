/**
 * handler.ts
 */

export async function handler(event: string, context: string) {
    
    console.log(`Stage Name is: ${process.env.stage}`)
    return {
        statusCode: 200,
        body: 'Hello from the CDK Demo Lambda Function'
    }
}

