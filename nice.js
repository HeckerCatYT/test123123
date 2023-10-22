class SayHelloExtension {
  constructor(runtime) {
    this.runtime = runtime;
  }

  sayHello() {
    // Get the current sprite
    const sprite = this.runtime.getTarget();

    // Use the Scratch API to make the sprite say "Hello"
    sprite.say("Hello");
  }
}

// Metadata for the extension
const extensionMetadata = {
  "name": "Say Hello Extension",
  "extensionID": "sayHelloExtension",
  "blocks": [
    {
      "opcode": "sayHello",
      "type": "command",
      "text": "Say Hello",
      "inputs": [],
      "help": "Make the sprite say 'Hello.'"
    }
  ]
};

// Register the extension
const extension = new SayHelloExtension(Scratch.extensions.makeRuntime());
Scratch.extensions.register(extensionMetadata, SayHelloExtension);
