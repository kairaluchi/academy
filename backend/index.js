exports.handler = async function(event, context) {
    console.log('EVENT', event)
    console.log('CONTEXT', context)
    return {
        statusCode: 200,
        body: JSON.stringify({message: "Hello World"})
    };
}
