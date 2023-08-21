## azure-apollo3-typescript

A simple Azure Function example.

### Run it locally
```
yarn run dev
```

### Login
```
az login
```

### Create a resource group
```
az group create --name apollo3-example --location centralus
```

### Create a storage account
```
az storage account create \
    --name apollo3-example \
    --location centralus \
    --resource-group apollo3-example \
    --sku Standard_LRS
```

### Create a function app
```
az functionapp create \
    --resource-group apollo3-example \
    --name apollo3-example \
    --consumption-plan-location centralus \
    --runtime node \
    --functions-version 3 \
    --storage-account apollo3-example
```

### Publish the function
```
func azure functionapp publish apollo3-example
```