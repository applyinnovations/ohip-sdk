# \ActivityApi

All URIs are relative to */act/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteActivities**](ActivityApi.md#DeleteActivities) | **Delete** /hotels/{hotelId}/activities/{activityId} | Delete activity in a hotel by ID
[**DeleteMultipleActivities**](ActivityApi.md#DeleteMultipleActivities) | **Delete** /activities | Delete activities
[**GetActivities**](ActivityApi.md#GetActivities) | **Get** /hotels/{hotelId}/activities | Get activities by hotel
[**GetActivitiesByMultipleHotelIds**](ActivityApi.md#GetActivitiesByMultipleHotelIds) | **Get** /activities | Get activities
[**GetActivity**](ActivityApi.md#GetActivity) | **Get** /hotels/{hotelId}/activities/{activityId} | Get activity in a hotel by ID
[**PostActivities**](ActivityApi.md#PostActivities) | **Post** /hotels/{hotelId}/activities | Create activities in a hotel
[**PostMultipleActivitiesCompletion**](ActivityApi.md#PostMultipleActivitiesCompletion) | **Post** /activities/activitiesCompletion | Complete activities
[**PostSingleActivityCompletion**](ActivityApi.md#PostSingleActivityCompletion) | **Post** /hotels/{hotelId}/activities/{activityId}/activityCompletion | Complete activity in a hotel by ID
[**PutActivities**](ActivityApi.md#PutActivities) | **Put** /hotels/{hotelId}/activities/{activityId} | Update activity in a hotel by ID



## DeleteActivities

> Status DeleteActivities(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityIds(activityIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete activity in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    activityId := "activityId_example" // string | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where activity is searched based on Activity ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.DeleteActivities(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityIds(activityIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.DeleteActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.DeleteActivities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where activity is searched based on Activity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## DeleteMultipleActivities

> Status DeleteMultipleActivities(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityIds(activityIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete activities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.DeleteMultipleActivities(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityIds(activityIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.DeleteMultipleActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMultipleActivities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.DeleteMultipleActivities`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMultipleActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activityIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivities

> ActivitiesInfo GetActivities(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Completed(completed).HighPriority(highPriority).Limit(limit).Offset(offset).Text(text).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).OwnerCode(ownerCode).ActivityClass(activityClass).ActivityType(activityType).ActivityPurpose(activityPurpose).AccountId(accountId).ContactId(contactId).BlockId(blockId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get activities by hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    hotelId := "hotelId_example" // string | This is the Hotel Code of the Activity
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    completed := true // bool | Indicates whether the Activity is completed or not. (optional)
    highPriority := true // bool | Indicates whether the Activity has high priority. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    text := "text_example" // string | Search string to be used for super search. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    ownerCode := []string{"Inner_example"} // []string |  (optional)
    activityClass := "activityClass_example" // string | A collection of supported list of activity classes. (optional)
    activityType := []string{"Inner_example"} // []string |  (optional)
    activityPurpose := "activityPurpose_example" // string | Purpose of the Activity. (optional)
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactId := "contactId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivities(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Completed(completed).HighPriority(highPriority).Limit(limit).Offset(offset).Text(text).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).OwnerCode(ownerCode).ActivityClass(activityClass).ActivityType(activityType).ActivityPurpose(activityPurpose).AccountId(accountId).ContactId(contactId).BlockId(blockId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivities`: ActivitiesInfo
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | This is the Hotel Code of the Activity | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **completed** | **bool** | Indicates whether the Activity is completed or not. | 
 **highPriority** | **bool** | Indicates whether the Activity has high priority. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **text** | **string** | Search string to be used for super search. | 
 **hotelIds** | **[]string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **ownerCode** | **[]string** |  | 
 **activityClass** | **string** | A collection of supported list of activity classes. | 
 **activityType** | **[]string** |  | 
 **activityPurpose** | **string** | Purpose of the Activity. | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivitiesInfo**](ActivitiesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivitiesByMultipleHotelIds

> ActivitiesInfo GetActivitiesByMultipleHotelIds(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Completed(completed).HighPriority(highPriority).Limit(limit).Offset(offset).Text(text).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).OwnerCode(ownerCode).ActivityClass(activityClass).ActivityType(activityType).ActivityPurpose(activityPurpose).AccountId(accountId).ContactId(contactId).BlockId(blockId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get activities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    completed := true // bool | Indicates whether the Activity is completed or not. (optional)
    highPriority := true // bool | Indicates whether the Activity has high priority. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    text := "text_example" // string | Search string to be used for super search. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    ownerCode := []string{"Inner_example"} // []string |  (optional)
    activityClass := "activityClass_example" // string | A collection of supported list of activity classes. (optional)
    activityType := []string{"Inner_example"} // []string |  (optional)
    activityPurpose := "activityPurpose_example" // string | Purpose of the Activity. (optional)
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactId := "contactId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivitiesByMultipleHotelIds(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Completed(completed).HighPriority(highPriority).Limit(limit).Offset(offset).Text(text).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).OwnerCode(ownerCode).ActivityClass(activityClass).ActivityType(activityType).ActivityPurpose(activityPurpose).AccountId(accountId).ContactId(contactId).BlockId(blockId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivitiesByMultipleHotelIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivitiesByMultipleHotelIds`: ActivitiesInfo
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivitiesByMultipleHotelIds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetActivitiesByMultipleHotelIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **completed** | **bool** | Indicates whether the Activity is completed or not. | 
 **highPriority** | **bool** | Indicates whether the Activity has high priority. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **text** | **string** | Search string to be used for super search. | 
 **hotelIds** | **[]string** |  | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **ownerCode** | **[]string** |  | 
 **activityClass** | **string** | A collection of supported list of activity classes. | 
 **activityType** | **[]string** |  | 
 **activityPurpose** | **string** | Purpose of the Activity. | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivitiesInfo**](ActivitiesInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivity

> Activity GetActivity(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get activity in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    activityId := "activityId_example" // string | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where activity is searched based on Activity ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch Activity's information, linked Block and Profile, Attachments and linked Activities. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivity(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivity``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivity`: Activity
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivity`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where activity is searched based on Activity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Instruction to fetch Activity&#39;s information, linked Block and Profile, Attachments and linked Activities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Activity**](Activity.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostActivities

> Status PostActivities(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesInformation(activitiesInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create activities in a hotel



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID of the hotel where activity is searched based on Activity ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activitiesInformation := *openapiclient.NewPostActivitiesRequest() // PostActivitiesRequest | Request object for creating Activities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.PostActivities(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesInformation(activitiesInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.PostActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.PostActivities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel where activity is searched based on Activity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activitiesInformation** | [**PostActivitiesRequest**](PostActivitiesRequest.md) | Request object for creating Activities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostMultipleActivitiesCompletion

> Status PostMultipleActivitiesCompletion(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesToChange(activitiesToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete activities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activitiesToChange := *openapiclient.NewPostMultipleActivitiesCompletionRequest() // PostMultipleActivitiesCompletionRequest | Request object for changing Activities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.PostMultipleActivitiesCompletion(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesToChange(activitiesToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.PostMultipleActivitiesCompletion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMultipleActivitiesCompletion`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.PostMultipleActivitiesCompletion`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostMultipleActivitiesCompletionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activitiesToChange** | [**PostMultipleActivitiesCompletionRequest**](PostMultipleActivitiesCompletionRequest.md) | Request object for changing Activities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostSingleActivityCompletion

> Status PostSingleActivityCompletion(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesToChange(activitiesToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Complete activity in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    activityId := "activityId_example" // string | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where activity is searched based on Activity ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activitiesToChange := *openapiclient.NewPostSingleActivityCompletionRequest() // PostSingleActivityCompletionRequest | Request object for changing Activities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.PostSingleActivityCompletion(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesToChange(activitiesToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.PostSingleActivityCompletion``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostSingleActivityCompletion`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.PostSingleActivityCompletion`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where activity is searched based on Activity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostSingleActivityCompletionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activitiesToChange** | [**PostSingleActivityCompletionRequest**](PostSingleActivityCompletionRequest.md) | Request object for changing Activities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutActivities

> Status PutActivities(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesToChange(activitiesToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update activity in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/act"
)

func main() {
    activityId := "activityId_example" // string | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA.
    hotelId := "hotelId_example" // string | Unique ID of the hotel where activity is searched based on Activity ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activitiesToChange := *openapiclient.NewPutActivitiesRequest() // PutActivitiesRequest | Request object for changing Activities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.PutActivities(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivitiesToChange(activitiesToChange).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.PutActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.PutActivities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA. | 
**hotelId** | **string** | Unique ID of the hotel where activity is searched based on Activity ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **activitiesToChange** | [**PutActivitiesRequest**](PutActivitiesRequest.md) | Request object for changing Activities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Status**](Status.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

