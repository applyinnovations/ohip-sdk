# \ProfileExternalApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CheckIataNumber**](ProfileExternalApi.md#CheckIataNumber) | **Get** /hotels/{hotelId}/travelAgents/{iataNumber} | Validate IATA number.
[**DownloadExternalProfile**](ProfileExternalApi.md#DownloadExternalProfile) | **Get** /externalSystems/{extSystemCode}/chains/{chainCode}/externalProfiles/{profileExternalId} | Download a Profile from external system
[**GetExternalProfiles**](ProfileExternalApi.md#GetExternalProfiles) | **Get** /externalSystems/{extSystemCode}/chains/{chainCode}/externalProfiles | Retrieve profiles from external system
[**GetGamingOffers**](ProfileExternalApi.md#GetGamingOffers) | **Get** /externalSystems/{extSystemCode}/gamingOffers/{membershipNo} | Get offers that can be attached for a profile
[**GetPlayerStatistics**](ProfileExternalApi.md#GetPlayerStatistics) | **Get** /externalSystems/{extSystemCode}/playerStatistics/{profileId} | Retrieve player statistics
[**GetValidatedAddress**](ProfileExternalApi.md#GetValidatedAddress) | **Get** /validatedAddresses/{externalAddressId} | Get full Address information from third party system for a given external Address ID. The external Address ID is fetched from valdatedAddresses service.
[**GetValidatedAddresses**](ProfileExternalApi.md#GetValidatedAddresses) | **Get** /validatedAddresses | Retrive valid addresses from a third party vendor.
[**ValidateMembershipNumber**](ProfileExternalApi.md#ValidateMembershipNumber) | **Get** /externalSystems/{extSystemCode}/chains/{chainCode}/validateMembershipNumber | Validate Membership Number attached to a membership



## CheckIataNumber

> IataNumberDetails CheckIataNumber(ctx, iataNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()

Validate IATA number.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    iataNumber := "iataNumber_example" // string | IATA Number
    hotelId := "hotelId_example" // string | Hotel Id
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xTransactionId := "xTransactionId_example" // string | Transaction Id (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.CheckIataNumber(context.Background(), iataNumber, hotelId).Authorization(authorization).XAppKey(xAppKey).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.CheckIataNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CheckIataNumber`: IataNumberDetails
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.CheckIataNumber`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**iataNumber** | **string** | IATA Number | 
**hotelId** | **string** | Hotel Id | 

### Other Parameters

Other parameters are passed through a pointer to a apiCheckIataNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xTransactionId** | **string** | Transaction Id | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**IataNumberDetails**](IataNumberDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DownloadExternalProfile

> Profile DownloadExternalProfile(ctx, extSystemCode, chainCode, profileExternalId).Authorization(authorization).XAppKey(xAppKey).ExternalDatabaseId(externalDatabaseId).HotelId(hotelId).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()

Download a Profile from external system



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | If supplied, profile will be downloaded from this External System, otherwise it will be decided automatically based on the configuration.
    chainCode := "chainCode_example" // string | Chain code from which the External Profiles will be downloaded.
    profileExternalId := "profileExternalId_example" // string | Unique Identifier of the Profile on the External System.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    externalDatabaseId := "externalDatabaseId_example" // string | Profile will be downloaded from this External database. (optional)
    hotelId := "hotelId_example" // string | Hotel Code, It is used to filter hotel specific children to this specific hotel code. (optional)
    xTransactionId := "xTransactionId_example" // string | Transaction Id (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.DownloadExternalProfile(context.Background(), extSystemCode, chainCode, profileExternalId).Authorization(authorization).XAppKey(xAppKey).ExternalDatabaseId(externalDatabaseId).HotelId(hotelId).XTransactionId(xTransactionId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.DownloadExternalProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DownloadExternalProfile`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.DownloadExternalProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | If supplied, profile will be downloaded from this External System, otherwise it will be decided automatically based on the configuration. | 
**chainCode** | **string** | Chain code from which the External Profiles will be downloaded. | 
**profileExternalId** | **string** | Unique Identifier of the Profile on the External System. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDownloadExternalProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **externalDatabaseId** | **string** | Profile will be downloaded from this External database. | 
 **hotelId** | **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | 
 **xTransactionId** | **string** | Transaction Id | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetExternalProfiles

> ExternalProfiles GetExternalProfiles(ctx, extSystemCode, chainCode).Authorization(authorization).XAppKey(xAppKey).ExternalDatabaseId(externalDatabaseId).HotelId(hotelId).ProfileType(profileType).ProfileId(profileId).ProfileIdType(profileIdType).Name(name).GivenName(givenName).City(city).PostalCode(postalCode).State(state).CountryCode(countryCode).Keyword(keyword).Communication(communication).MembershipNumber(membershipNumber).MembershipType(membershipType).ArNumber(arNumber).BirthDate(birthDate).AcceptLanguage(acceptLanguage).Execute()

Retrieve profiles from external system



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    extSystemCode := "extSystemCode_example" // string | Profiles will be fetched from this External System.
    chainCode := "chainCode_example" // string | Chain code from which the External Profiles will be fetched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    externalDatabaseId := "externalDatabaseId_example" // string | Profile will be fetched from this External database. (optional)
    hotelId := "hotelId_example" // string | Hotel Code, It is used to filter hotel specific children to this specific hotel code. (optional)
    profileType := "profileType_example" // string | The types of Profile handled by the web service. (optional)
    profileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    city := "city_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    keyword := "keyword_example" // string | Keyword associated to the profile. (optional)
    communication := "communication_example" // string | Any communication method associated to the profile such as phone, fax, eMail id. (optional)
    membershipNumber := "membershipNumber_example" // string | Membership number associated to the profile. (optional)
    membershipType := "membershipType_example" // string | Member Type of searching profile. (optional)
    arNumber := "arNumber_example" // string | Account Receivable associated to the profile. (optional)
    birthDate := time.Now() // string | Date of birth (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.GetExternalProfiles(context.Background(), extSystemCode, chainCode).Authorization(authorization).XAppKey(xAppKey).ExternalDatabaseId(externalDatabaseId).HotelId(hotelId).ProfileType(profileType).ProfileId(profileId).ProfileIdType(profileIdType).Name(name).GivenName(givenName).City(city).PostalCode(postalCode).State(state).CountryCode(countryCode).Keyword(keyword).Communication(communication).MembershipNumber(membershipNumber).MembershipType(membershipType).ArNumber(arNumber).BirthDate(birthDate).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.GetExternalProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetExternalProfiles`: ExternalProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.GetExternalProfiles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**extSystemCode** | **string** | Profiles will be fetched from this External System. | 
**chainCode** | **string** | Chain code from which the External Profiles will be fetched. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetExternalProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **externalDatabaseId** | **string** | Profile will be fetched from this External database. | 
 **hotelId** | **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | 
 **profileType** | **string** | The types of Profile handled by the web service. | 
 **profileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **city** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **keyword** | **string** | Keyword associated to the profile. | 
 **communication** | **string** | Any communication method associated to the profile such as phone, fax, eMail id. | 
 **membershipNumber** | **string** | Membership number associated to the profile. | 
 **membershipType** | **string** | Member Type of searching profile. | 
 **arNumber** | **string** | Account Receivable associated to the profile. | 
 **birthDate** | **string** | Date of birth | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ExternalProfiles**](ExternalProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGamingOffers

> GamingOffers GetGamingOffers(ctx, membershipNo, extSystemCode).Authorization(authorization).XAppKey(xAppKey).HotelId(hotelId).StartDate(startDate).EndDate(endDate).AcceptLanguage(acceptLanguage).Execute()

Get offers that can be attached for a profile



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    membershipNo := "membershipNo_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    hotelId := "hotelId_example" // string | Hotel Code for which the offers will be fetched. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.GetGamingOffers(context.Background(), membershipNo, extSystemCode).Authorization(authorization).XAppKey(xAppKey).HotelId(hotelId).StartDate(startDate).EndDate(endDate).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.GetGamingOffers``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGamingOffers`: GamingOffers
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.GetGamingOffers`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipNo** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGamingOffersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **hotelId** | **string** | Hotel Code for which the offers will be fetched. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**GamingOffers**](GamingOffers.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPlayerStatistics

> FetchPlayerStatisticsRS GetPlayerStatistics(ctx, profileId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).PlayerId(playerId).HotelId(hotelId).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).AcceptLanguage(acceptLanguage).Execute()

Retrieve player statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    profileId := "profileId_example" // string | Unique Identifier for profile ID
    extSystemCode := "extSystemCode_example" // string | External System Code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    playerId := "playerId_example" // string | Unique Identifier for PlayerID. (optional)
    hotelId := "hotelId_example" // string | Code of the Hotel. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.GetPlayerStatistics(context.Background(), profileId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).PlayerId(playerId).HotelId(hotelId).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.GetPlayerStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPlayerStatistics`: FetchPlayerStatisticsRS
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.GetPlayerStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique Identifier for profile ID | 
**extSystemCode** | **string** | External System Code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPlayerStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **playerId** | **string** | Unique Identifier for PlayerID. | 
 **hotelId** | **string** | Code of the Hotel. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FetchPlayerStatisticsRS**](FetchPlayerStatisticsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetValidatedAddress

> ValidatedAddress GetValidatedAddress(ctx, externalAddressId).Authorization(authorization).XAppKey(xAppKey).TimeoutSeconds(timeoutSeconds).AcceptLanguage(acceptLanguage).Execute()

Get full Address information from third party system for a given external Address ID. The external Address ID is fetched from valdatedAddresses service.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    externalAddressId := "externalAddressId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    timeoutSeconds := int32(56) // int32 | Maximum time you are prepared to wait for a response. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.GetValidatedAddress(context.Background(), externalAddressId).Authorization(authorization).XAppKey(xAppKey).TimeoutSeconds(timeoutSeconds).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.GetValidatedAddress``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetValidatedAddress`: ValidatedAddress
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.GetValidatedAddress`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**externalAddressId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetValidatedAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **timeoutSeconds** | **int32** | Maximum time you are prepared to wait for a response. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidatedAddress**](ValidatedAddress.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetValidatedAddresses

> ValidatedAddresses GetValidatedAddresses(ctx).AddressText(addressText).Country(country).Authorization(authorization).XAppKey(xAppKey).Language(language).TimeoutSeconds(timeoutSeconds).AcceptLanguage(acceptLanguage).Execute()

Retrive valid addresses from a third party vendor.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    addressText := "addressText_example" // string | The suggestion that should be presented to the user as a possible match to their input.
    country := "country_example" // string | The ID of the address recieved as part of an address search validation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    language := "language_example" // string | The preferred language for results. This should be a 2 or 4 character language code. (optional)
    timeoutSeconds := int32(56) // int32 | Maximum time you are prepared to wait for a response. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.GetValidatedAddresses(context.Background()).AddressText(addressText).Country(country).Authorization(authorization).XAppKey(xAppKey).Language(language).TimeoutSeconds(timeoutSeconds).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.GetValidatedAddresses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetValidatedAddresses`: ValidatedAddresses
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.GetValidatedAddresses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetValidatedAddressesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **addressText** | **string** | The suggestion that should be presented to the user as a possible match to their input. | 
 **country** | **string** | The ID of the address recieved as part of an address search validation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **language** | **string** | The preferred language for results. This should be a 2 or 4 character language code. | 
 **timeoutSeconds** | **int32** | Maximum time you are prepared to wait for a response. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidatedAddresses**](ValidatedAddresses.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateMembershipNumber

> ValidateMembershipNumber ValidateMembershipNumber(ctx, chainCode, extSystemCode).MembershipNo(membershipNo).MembershipType(membershipType).Authorization(authorization).XAppKey(xAppKey).HotelId(hotelId).AcceptLanguage(acceptLanguage).Execute()

Validate Membership Number attached to a membership



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crmoutbound"
)

func main() {
    chainCode := "chainCode_example" // string | 
    extSystemCode := "extSystemCode_example" // string | 
    membershipNo := "membershipNo_example" // string | Indicates membership number of the guest
    membershipType := "membershipType_example" // string | Membership type for which point calculation process is to be run.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    hotelId := "hotelId_example" // string | Hotel code from which the membership code belongs to (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileExternalApi.ValidateMembershipNumber(context.Background(), chainCode, extSystemCode).MembershipNo(membershipNo).MembershipType(membershipType).Authorization(authorization).XAppKey(xAppKey).HotelId(hotelId).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileExternalApi.ValidateMembershipNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateMembershipNumber`: ValidateMembershipNumber
    fmt.Fprintf(os.Stdout, "Response from `ProfileExternalApi.ValidateMembershipNumber`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**chainCode** | **string** |  | 
**extSystemCode** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateMembershipNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **membershipNo** | **string** | Indicates membership number of the guest | 
 **membershipType** | **string** | Membership type for which point calculation process is to be run. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **hotelId** | **string** | Hotel code from which the membership code belongs to | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidateMembershipNumber**](ValidateMembershipNumber.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

