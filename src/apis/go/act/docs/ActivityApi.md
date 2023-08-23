# \ActivityApi

All URIs are relative to */act/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteActivities**](ActivityApi.md#DeleteActivities) | **Delete** /hotels/{hotelId}/activities/{activityId} | Delete activity in a hotel by ID
[**DeleteActivitiesWithOutHotelId**](ActivityApi.md#DeleteActivitiesWithOutHotelId) | **Delete** /activities/{activityId} | Delete activity  by ID
[**DeleteActivityAttachment**](ActivityApi.md#DeleteActivityAttachment) | **Delete** /hotels/{hotelId}/activities/{activityId}/attachments/{attachmentId} | Delete an attachment from an Activity
[**DeleteActivityAttachmentWithoutHotelId**](ActivityApi.md#DeleteActivityAttachmentWithoutHotelId) | **Delete** /activities/{activityId}/attachments/{attachmentId} | Delete an attachment from an Activity
[**DeleteActivityServiceCache**](ActivityApi.md#DeleteActivityServiceCache) | **Delete** /services/activity/cache | Clear Activity Cache
[**DeleteMultipleActivities**](ActivityApi.md#DeleteMultipleActivities) | **Delete** /activities | Delete activities
[**GetActivities**](ActivityApi.md#GetActivities) | **Get** /hotels/{hotelId}/activities | Get activities by hotel
[**GetActivitiesByMultipleHotelIds**](ActivityApi.md#GetActivitiesByMultipleHotelIds) | **Get** /activities | Get activities
[**GetActivity**](ActivityApi.md#GetActivity) | **Get** /hotels/{hotelId}/activities/{activityId} | Get activity in a hotel by ID
[**GetActivityAttachments**](ActivityApi.md#GetActivityAttachments) | **Get** /hotels/{hotelId}/activities/{activityId}/attachments | Get Activity Attachments
[**GetActivityLog**](ActivityApi.md#GetActivityLog) | **Get** /hotels/{hotelId}/activityLog | Get Activity Log
[**GetActivityStatistics**](ActivityApi.md#GetActivityStatistics) | **Get** /hotels/{hotelId}/activities/statistics | Get Activity statistics
[**GetActivityWithOutHotelId**](ActivityApi.md#GetActivityWithOutHotelId) | **Get** /activities/{activityId} | Get activity by ID
[**GetEmails**](ActivityApi.md#GetEmails) | **Get** /activities/emails | Get Emails
[**GetRecentlyAccessedActivities**](ActivityApi.md#GetRecentlyAccessedActivities) | **Get** /hotels/{hotelId}/recentlyAccessedActivities | Get recently accessed activities
[**GetRecentlyAccessedActivitiesWithOutHotelId**](ActivityApi.md#GetRecentlyAccessedActivitiesWithOutHotelId) | **Get** /recentlyAccessedActivities | Get recently accessed activities
[**PingActivityService**](ActivityApi.md#PingActivityService) | **Get** /services/activity/status | Operation to get health status
[**PostActivities**](ActivityApi.md#PostActivities) | **Post** /hotels/{hotelId}/activities | Create activities in a hotel
[**PostLinkedActivities**](ActivityApi.md#PostLinkedActivities) | **Post** /hotels/{hotelId}/activities/{activityId}/linkedActivities | Create linked activities in a hotel by ID
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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


## DeleteActivitiesWithOutHotelId

> Status DeleteActivitiesWithOutHotelId(ctx, activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityIds(activityIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete activity  by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    activityId := "activityId_example" // string | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    activityIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.DeleteActivitiesWithOutHotelId(context.Background(), activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ActivityIds(activityIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.DeleteActivitiesWithOutHotelId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivitiesWithOutHotelId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.DeleteActivitiesWithOutHotelId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivitiesWithOutHotelIdRequest struct via the builder pattern


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


## DeleteActivityAttachment

> Status DeleteActivityAttachment(ctx, attachmentId, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an attachment from an Activity



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    attachmentId := "attachmentId_example" // string | Attachment ID
    activityId := "activityId_example" // string | Activity ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.DeleteActivityAttachment(context.Background(), attachmentId, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.DeleteActivityAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.DeleteActivityAttachment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attachmentId** | **string** | Attachment ID | 
**activityId** | **string** | Activity ID | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
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


## DeleteActivityAttachmentWithoutHotelId

> Status DeleteActivityAttachmentWithoutHotelId(ctx, attachmentId, activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete an attachment from an Activity



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    attachmentId := "attachmentId_example" // string | Attachment ID
    activityId := "activityId_example" // string | Activity ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.DeleteActivityAttachmentWithoutHotelId(context.Background(), attachmentId, activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.DeleteActivityAttachmentWithoutHotelId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityAttachmentWithoutHotelId`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.DeleteActivityAttachmentWithoutHotelId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attachmentId** | **string** | Attachment ID | 
**activityId** | **string** | Activity ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityAttachmentWithoutHotelIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
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


## DeleteActivityServiceCache

> Status DeleteActivityServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Clear Activity Cache



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.DeleteActivityServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.DeleteActivityServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.DeleteActivityServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityServiceCacheRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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


## GetActivityAttachments

> ActivityAttachments GetActivityAttachments(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Activity Attachments



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    activityId := "activityId_example" // string | Activity ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivityAttachments(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivityAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityAttachments`: ActivityAttachments
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivityAttachments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Activity ID | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityAttachmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityAttachments**](ActivityAttachments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivityLog

> ActivityLog GetActivityLog(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ModuleParamsParameterName(moduleParamsParameterName).ModuleParamsParameterValue(moduleParamsParameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIdUserIds(userByIdUserIds).UserForIdUserIds(userForIdUserIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Activity Log



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    module := "module_example" // string | Activity module. (optional)
    moduleParamsParameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    moduleParamsParameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    fromDate := time.Now() // string | Search from date for the user activity log. (optional)
    toDate := time.Now() // string | Search to date for the user activity log. (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    userByIdUserIds := []int32{int32(123)} // []int32 |  (optional)
    userForIdUserIds := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivityLog(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Module(module).ModuleParamsParameterName(moduleParamsParameterName).ModuleParamsParameterValue(moduleParamsParameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIdUserIds(userByIdUserIds).UserForIdUserIds(userForIdUserIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityLog`: ActivityLog
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivityLog`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **module** | **string** | Activity module. | 
 **moduleParamsParameterName** | **[]string** | Name of the parameter. | 
 **moduleParamsParameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **fromDate** | **string** | Search from date for the user activity log. | 
 **toDate** | **string** | Search to date for the user activity log. | 
 **searchText** | **string** | Search text for the user activity log. | 
 **userByIdUserIds** | **[]int32** |  | 
 **userForIdUserIds** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityLog**](ActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivityStatistics

> ActivityStatistics GetActivityStatistics(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReportStartDate(reportStartDate).ActivityTypeCodes(activityTypeCodes).OwnerCodeList(ownerCodeList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Activity statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reportStartDate := time.Now() // string | Start date of the report. (optional)
    activityTypeCodes := []string{"Inner_example"} // []string |  (optional)
    ownerCodeList := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivityStatistics(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReportStartDate(reportStartDate).ActivityTypeCodes(activityTypeCodes).OwnerCodeList(ownerCodeList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivityStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityStatistics`: ActivityStatistics
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivityStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reportStartDate** | **string** | Start date of the report. | 
 **activityTypeCodes** | **[]string** |  | 
 **ownerCodeList** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityStatistics**](ActivityStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetActivityWithOutHotelId

> Activity GetActivityWithOutHotelId(ctx, activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get activity by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    activityId := "activityId_example" // string | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch Activity's information, linked Block and Profile, Attachments and linked Activities. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetActivityWithOutHotelId(context.Background(), activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetActivityWithOutHotelId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityWithOutHotelId`: Activity
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetActivityWithOutHotelId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Unique OPERA Activity ID which is used to find an Activity from OPERA. This ID is a primary identification of an Activity in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityWithOutHotelIdRequest struct via the builder pattern


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
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEmails

> EmailsDetails GetEmails(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).AccountIdId(accountIdId).AccountIdIdExtension(accountIdIdExtension).AccountIdIdContext(accountIdIdContext).AccountIdType(accountIdType).ContactIdId(contactIdId).ContactIdIdExtension(contactIdIdExtension).ContactIdIdContext(contactIdIdContext).ContactIdType(contactIdType).BlockIdId(blockIdId).BlockIdIdExtension(blockIdIdExtension).BlockIdIdContext(blockIdIdContext).BlockIdType(blockIdType).EmailSubject(emailSubject).SenderLastName(senderLastName).SenderFirstName(senderFirstName).SenderEmailAddress(senderEmailAddress).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Emails



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    code := []string{"Inner_example"} // []string |  (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    accountIdId := "accountIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    accountIdIdContext := "accountIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountIdType := "accountIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    contactIdId := "contactIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    contactIdIdContext := "contactIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    contactIdType := "contactIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    blockIdId := "blockIdId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    blockIdIdContext := "blockIdIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    emailSubject := "emailSubject_example" // string | Subject of the email. (optional)
    senderLastName := "senderLastName_example" // string | Family name or last name of the Sender. (optional)
    senderFirstName := "senderFirstName_example" // string | Given name or first name of the Sender. (optional)
    senderEmailAddress := "senderEmailAddress_example" // string | Email address of the Sender. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetEmails(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).Code(code).Id(id).IdExtension(idExtension).IdContext(idContext).Type_(type_).AccountIdId(accountIdId).AccountIdIdExtension(accountIdIdExtension).AccountIdIdContext(accountIdIdContext).AccountIdType(accountIdType).ContactIdId(contactIdId).ContactIdIdExtension(contactIdIdExtension).ContactIdIdContext(contactIdIdContext).ContactIdType(contactIdType).BlockIdId(blockIdId).BlockIdIdExtension(blockIdIdExtension).BlockIdIdContext(blockIdIdContext).BlockIdType(blockIdType).EmailSubject(emailSubject).SenderLastName(senderLastName).SenderFirstName(senderFirstName).SenderEmailAddress(senderEmailAddress).StartDate(startDate).EndDate(endDate).Duration(duration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetEmails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEmails`: EmailsDetails
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetEmails`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEmailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **code** | **[]string** |  | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **accountIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **accountIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **contactIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **contactIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **contactIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **blockIdId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **blockIdIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **emailSubject** | **string** | Subject of the email. | 
 **senderLastName** | **string** | Family name or last name of the Sender. | 
 **senderFirstName** | **string** | Given name or first name of the Sender. | 
 **senderEmailAddress** | **string** | Email address of the Sender. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EmailsDetails**](EmailsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRecentlyAccessedActivities

> RecentlyAccessedActivities GetRecentlyAccessedActivities(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get recently accessed activities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetRecentlyAccessedActivities(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetRecentlyAccessedActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecentlyAccessedActivities`: RecentlyAccessedActivities
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetRecentlyAccessedActivities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentlyAccessedActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RecentlyAccessedActivities**](RecentlyAccessedActivities.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRecentlyAccessedActivitiesWithOutHotelId

> RecentlyAccessedActivities GetRecentlyAccessedActivitiesWithOutHotelId(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get recently accessed activities



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.GetRecentlyAccessedActivitiesWithOutHotelId(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.GetRecentlyAccessedActivitiesWithOutHotelId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecentlyAccessedActivitiesWithOutHotelId`: RecentlyAccessedActivities
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.GetRecentlyAccessedActivitiesWithOutHotelId`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentlyAccessedActivitiesWithOutHotelIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RecentlyAccessedActivities**](RecentlyAccessedActivities.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingActivityService

> OperaVersion PingActivityService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to get health status



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.PingActivityService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.PingActivityService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingActivityService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.PingActivityService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingActivityServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OperaVersion**](OperaVersion.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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


## PostLinkedActivities

> Status PostLinkedActivities(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkedActivities(linkedActivities).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create linked activities in a hotel by ID



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
)

func main() {
    activityId := "activityId_example" // string | Activity ID
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    linkedActivities := *openapiclient.NewPostLinkedActivitiesRequest() // PostLinkedActivitiesRequest | Request to create linked activities for an activity.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ActivityApi.PostLinkedActivities(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LinkedActivities(linkedActivities).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ActivityApi.PostLinkedActivities``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostLinkedActivities`: Status
    fmt.Fprintf(os.Stdout, "Response from `ActivityApi.PostLinkedActivities`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** | Activity ID | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostLinkedActivitiesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **linkedActivities** | [**PostLinkedActivitiesRequest**](PostLinkedActivitiesRequest.md) | Request to create linked activities for an activity. | 
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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
    openapiclient "github.com/GIT_USER_ID/GIT_REPO_ID"
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

