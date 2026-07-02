const Log=require("./logger");
async function testLoggingMiddleware() {
    await Log("backend", "info", "handler", "Testing logging middleware");
}
testLoggingMiddleware();