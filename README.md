# OHIP SDK

## GO

### Installation

```
Must do this first:
go get -u github.com/applyinnovations/ohip-sdk/dist/go/oauth@property_23.2.0.0

Then get relevant sdks:
go get -u github.com/applyinnovations/ohip-sdk/dist/go/rsv@property_23.2.0.0
go get -u github.com/applyinnovations/ohip-sdk/dist/go/crm@property_23.2.0.0
```

### Usage

```
import (
	crm "github.com/applyinnovations/ohip-sdk/dist/go/crm"
)
...

configuration := crm.NewConfiguration()
configuration.Scheme = "https"
configuration.HotelId = GetEnvOrDie("OHIP_HOTEL_ID")
configuration.Host = GetEnvOrDie("OHIP_DOMAIN")
configuration.AppKey = GetEnvOrDie("OHIP_APP_KEY")
configuration.OhipCredentials = GetCrmOhipCredentialsFromEnv("OHIP_CREDENTIALS")
client := crm.NewAPIClient(configuration)
client.crm.ProfileApi.GetProfile(ctx, eventIn.PrimaryKey).Execute()
```

## Typescript

### Installation

### Usage
