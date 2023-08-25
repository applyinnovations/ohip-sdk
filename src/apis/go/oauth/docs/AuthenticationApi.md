# \AuthenticationApi

All URIs are relative to */oauth/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetToken**](AuthenticationApi.md#GetToken) | **Post** /tokens | Authenticate with the identity server



## GetToken

> OAuth2TokenResponse GetToken(ctx).XAppKey(xAppKey).GrantType(grantType).Username(username).Password(password).Scope(scope).Execute()

Authenticate with the identity server



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/oauth"
)

func main() {
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    grantType := "grantType_example" // string | The grant type.  This value will depend on the API you are passing the OAuth token to.
    username := "username_example" // string | Your OPERA Cloud integration user name. Required value when requesting a token using the password grant. (optional)
    password := "password_example" // string | Your OPERA Cloud integration user password. Required value when requesting a token using the password grant. (optional)
    scope := "scope_example" // string | Your desired scope to be included in the token.  This is an optional parameter and is reserved for future use. (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AuthenticationApi.GetToken(context.Background()).XAppKey(xAppKey).GrantType(grantType).Username(username).Password(password).Scope(scope).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AuthenticationApi.GetToken``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetToken`: OAuth2TokenResponse
    fmt.Fprintf(os.Stdout, "Response from `AuthenticationApi.GetToken`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetTokenRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **grantType** | **string** | The grant type.  This value will depend on the API you are passing the OAuth token to. | 
 **username** | **string** | Your OPERA Cloud integration user name. Required value when requesting a token using the password grant. | 
 **password** | **string** | Your OPERA Cloud integration user password. Required value when requesting a token using the password grant. | 
 **scope** | **string** | Your desired scope to be included in the token.  This is an optional parameter and is reserved for future use. | 

### Return type

[**OAuth2TokenResponse**](OAuth2TokenResponse.md)

### Authorization

[basicAuth](../README.md#basicAuth)

### HTTP request headers

- **Content-Type**: application/x-www-form-urlencoded
- **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

