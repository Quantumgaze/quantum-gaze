# Using Replicate for image Generation 

- Model used : stable Diffusion 
- Resource : https://replicate.com/docs/get-started/nextjs 

## Terminology
Let’s start by defining some important terms that you’ll need to know:

### Models
In the world of machine learning, the word “model” can mean many different things depending on context. It can be the source code, the trained weights, the architecture, or some combination thereof. At Replicate, when we say “model” we’re generally referring to a trained, packaged, and published software program that accepts inputs and returns outputs.

### Versions
Just like normal software, machine learning models change and improve over time, and those changes are released as new versions. Whenever a model author retrains a model with new data, fixes a bug in the source code, or updates a dependency, those changes can influence the behavior of the model. The changes are published as new versions, so model authors can make improvements without disrupting the experience for people using older versions of the model. Versioning is essential to making machine learning reproducible: it helps guarantee that a model will behave consistently regardless of when or where it’s being run.

### Predictions
Every time you run a model, you’re creating a prediction. A prediction is an object that represents a single result from running the model, including the inputs that you provided, the outputs that the model returned, as well as other metadata like the model version, the user who created it, the status of the prediction, and timestamps.

