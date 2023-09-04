# OHIPS SDK

### Installation

```
go get github.com/applyinnovations/ohip-sdk/src/apis/go/oauth@gosdk
go get github.com/applyinnovations/ohip-sdk/src/apis/go/<packageName>@gosdk
```

### Usage Go

```go
import (
  ...
  rsvApi "github.com/applyinnovations/ohip-sdk/src/apis/go/rsv"
)

...
configuration := rsvApi.NewConfiguration()
	configuration.Host = "hostname"
	configuration.Scheme = "https"
	configuration.Password= "password1"
	configuration.Username= "username1"
	configuration.ApiKey = "xAppKey"
	configuration.HotelId = "xHotelid"


	configuration.OhipCredentials=[]rsvApi.OhipCredential{
		{
			Username: username1,
			Password: password1,
		},
		{
			Username: username1,
			Password: password1,
		},
	}

    apiClient := rsvApi.NewAPIClient(configuration)

```

### Development

### Requirements

- Close [oracle/hospitality-api-docs](https://github.com/oracle/hospitality-api-docs) in the projects root directory.
- Change branch to `property_22.3`

### Building

- run `yarn build`
