# \HotelsAPI

All URIs are relative to */tokenExchange/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**OpenPaymentTokenExchange**](HotelsAPI.md#OpenPaymentTokenExchange) | **Post** /hotels/{hotelCode}/tokens | Card Tokenization



## OpenPaymentTokenExchange

> OpenPaymentTokenExchange200Response OpenPaymentTokenExchange(ctx, hotelCode).Authorization(authorization).XAppKey(xAppKey).Body(body).Execute()

Card Tokenization



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/tokenexchange"
)

func main() {
    hotelCode := "Hotel123" // string | OPERA Hotel Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner Application Key
    body := *openapiclient.NewOpenPaymentTokenExchangeRequest("2312", "1111222233334444") // OpenPaymentTokenExchangeRequest | TokenRequest object

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelsAPI.OpenPaymentTokenExchange(context.Background(), hotelCode).Authorization(authorization).XAppKey(xAppKey).Body(body).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelsAPI.OpenPaymentTokenExchange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `OpenPaymentTokenExchange`: OpenPaymentTokenExchange200Response
    fmt.Fprintf(os.Stdout, "Response from `HotelsAPI.OpenPaymentTokenExchange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelCode** | **string** | OPERA Hotel Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiOpenPaymentTokenExchangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner Application Key | 
 **body** | [**OpenPaymentTokenExchangeRequest**](OpenPaymentTokenExchangeRequest.md) | TokenRequest object | 

### Return type

[**OpenPaymentTokenExchange200Response**](OpenPaymentTokenExchange200Response.md)

### Authorization

[jwt](../README.md#jwt)

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

