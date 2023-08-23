# \CustomerManagementApi

All URIs are relative to */cms/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteCalendarTask**](CustomerManagementApi.md#DeleteCalendarTask) | **Delete** /hotels/{hotelId}/activities/{activityId}/task | Delete a Calendar Task
[**DeleteCalendarTaskAttachment**](CustomerManagementApi.md#DeleteCalendarTaskAttachment) | **Delete** /activities/tasks/attachment | Delete a Calendar Task attachment 
[**DeleteCustomerManagementServiceCache**](CustomerManagementApi.md#DeleteCustomerManagementServiceCache) | **Delete** /services/customerManagement/cache | Operation to clear the cache for the customer management service
[**DeleteTrackItItems**](CustomerManagementApi.md#DeleteTrackItItems) | **Delete** /hotels/{hotelId}/trackItems | Deletes track it items
[**GetCalendarTask**](CustomerManagementApi.md#GetCalendarTask) | **Get** /activities/{activityId}/task | Get a Calendar Task
[**GetCalendarTaskAttachments**](CustomerManagementApi.md#GetCalendarTaskAttachments) | **Get** /hotels/{hotelId}/activities/tasks/{taskId}/attachments | Get calendar task attachments
[**GetCalendarTasks**](CustomerManagementApi.md#GetCalendarTasks) | **Get** /activities/tasks | Get Calendar Tasks
[**GetTrackItItems**](CustomerManagementApi.md#GetTrackItItems) | **Get** /hotels/{hotelId}/trackItems | Fetches track it items
[**PingCustomerManagementService**](CustomerManagementApi.md#PingCustomerManagementService) | **Get** /services/customerManagement/status | Operation to ping the customer management service
[**PostCalendarTask**](CustomerManagementApi.md#PostCalendarTask) | **Post** /hotels/{hotelId}/activities/task | Create Calendar Task
[**PostTrackItItems**](CustomerManagementApi.md#PostTrackItItems) | **Post** /hotels/{hotelId}/trackItems | Creates track it items
[**PutCalendarTask**](CustomerManagementApi.md#PutCalendarTask) | **Put** /hotels/{hotelId}/activities/{activityId}/task | Update Calendar Task
[**PutTrackItItems**](CustomerManagementApi.md#PutTrackItItems) | **Put** /hotels/{hotelId}/trackItems | Updates track it items



## DeleteCalendarTask

> Status DeleteCalendarTask(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Calendar Task



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
    activityId := "activityId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.DeleteCalendarTask(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.DeleteCalendarTask``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCalendarTask`: Status
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.DeleteCalendarTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCalendarTaskRequest struct via the builder pattern


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


## DeleteCalendarTaskAttachment

> Status DeleteCalendarTaskAttachment(ctx).LinkedToId(linkedToId).AttachId(attachId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a Calendar Task attachment 



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
    linkedToId := "linkedToId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    attachId := "attachId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.DeleteCalendarTaskAttachment(context.Background()).LinkedToId(linkedToId).AttachId(attachId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.DeleteCalendarTaskAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCalendarTaskAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.DeleteCalendarTaskAttachment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCalendarTaskAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **linkedToId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **attachId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
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


## DeleteCustomerManagementServiceCache

> Status DeleteCustomerManagementServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to clear the cache for the customer management service



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
    resp, r, err := apiClient.CustomerManagementApi.DeleteCustomerManagementServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.DeleteCustomerManagementServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCustomerManagementServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.DeleteCustomerManagementServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCustomerManagementServiceCacheRequest struct via the builder pattern


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


## DeleteTrackItItems

> Status DeleteTrackItItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItId(trackItId).TrackItIdContext(trackItIdContext).TrackItIdType(trackItIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Deletes track it items



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    trackItIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    trackItIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.DeleteTrackItItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItId(trackItId).TrackItIdContext(trackItIdContext).TrackItIdType(trackItIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.DeleteTrackItItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteTrackItItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.DeleteTrackItItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteTrackItItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **trackItIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **trackItIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
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


## GetCalendarTask

> CalendarTask GetCalendarTask(ctx, activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a Calendar Task



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
    activityId := "activityId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.GetCalendarTask(context.Background(), activityId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.GetCalendarTask``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCalendarTask`: CalendarTask
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.GetCalendarTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCalendarTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalendarTask**](CalendarTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCalendarTaskAttachments

> CalendarTaskAttachments GetCalendarTaskAttachments(ctx, taskId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get calendar task attachments



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
    taskId := "taskId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.GetCalendarTaskAttachments(context.Background(), taskId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.GetCalendarTaskAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCalendarTaskAttachments`: CalendarTaskAttachments
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.GetCalendarTaskAttachments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**taskId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCalendarTaskAttachmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalendarTaskAttachments**](CalendarTaskAttachments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCalendarTasks

> CalendarTasks GetCalendarTasks(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CountSummary(countSummary).TaskSummary(taskSummary).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).Duration(duration).CompletionStatus(completionStatus).PriorityCodes(priorityCodes).ClassCodes(classCodes).TypeCodes(typeCodes).Purpose(purpose).TaskOwner(taskOwner).Author(author).AccountId(accountId).AccountIdContext(accountIdContext).AccountIdType(accountIdType).ContactId(contactId).ContactIdContext(contactIdContext).ContactIdType(contactIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Calendar Tasks



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
    countSummary := true // bool | Indicator whether summary count will be retrieved or not. (optional)
    taskSummary := true // bool | Indicator whether task summary will be retrieved or not. (optional)
    hotelIds := []string{"Inner_example"} // []string | List of Hotel codes of calendar task. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    completionStatus := "completionStatus_example" // string | Defines completion status codes of calendar task. (optional)
    priorityCodes := []string{"Inner_example"} // []string | List of priority levels of calendar task. (optional)
    classCodes := []string{"ClassCodes_example"} // []string | Defines classification codes of calendar task. (optional)
    typeCodes := []string{"Inner_example"} // []string | List of types of calendar task based on its classification. (optional)
    purpose := "purpose_example" // string | Brief description and purpose of calendar task. (optional)
    taskOwner := "taskOwner_example" // string | Owner code of the person to whom the calendar task is assigned. (optional)
    author := "author_example" // string | Author of the calendar task. (optional)
    accountId := "accountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    accountIdContext := "accountIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    accountIdType := "accountIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    contactId := "contactId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    contactIdContext := "contactIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    contactIdType := "contactIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    blockIdContext := "blockIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    blockIdType := "blockIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.GetCalendarTasks(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CountSummary(countSummary).TaskSummary(taskSummary).HotelIds(hotelIds).StartDate(startDate).EndDate(endDate).Duration(duration).CompletionStatus(completionStatus).PriorityCodes(priorityCodes).ClassCodes(classCodes).TypeCodes(typeCodes).Purpose(purpose).TaskOwner(taskOwner).Author(author).AccountId(accountId).AccountIdContext(accountIdContext).AccountIdType(accountIdType).ContactId(contactId).ContactIdContext(contactIdContext).ContactIdType(contactIdType).BlockId(blockId).BlockIdContext(blockIdContext).BlockIdType(blockIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.GetCalendarTasks``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCalendarTasks`: CalendarTasks
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.GetCalendarTasks`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetCalendarTasksRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **countSummary** | **bool** | Indicator whether summary count will be retrieved or not. | 
 **taskSummary** | **bool** | Indicator whether task summary will be retrieved or not. | 
 **hotelIds** | **[]string** | List of Hotel codes of calendar task. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **completionStatus** | **string** | Defines completion status codes of calendar task. | 
 **priorityCodes** | **[]string** | List of priority levels of calendar task. | 
 **classCodes** | **[]string** | Defines classification codes of calendar task. | 
 **typeCodes** | **[]string** | List of types of calendar task based on its classification. | 
 **purpose** | **string** | Brief description and purpose of calendar task. | 
 **taskOwner** | **string** | Owner code of the person to whom the calendar task is assigned. | 
 **author** | **string** | Author of the calendar task. | 
 **accountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **accountIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **accountIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **contactId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **contactIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **contactIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **blockIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **blockIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalendarTasks**](CalendarTasks.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetTrackItItems

> TrackItItems GetTrackItItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketId(ticketId).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).GivenName(givenName).Surname(surname).TrackItGroups(trackItGroups).Types(types).Locations(locations).Actions(actions).ActionStatuses(actionStatuses).AppUserId(appUserId).AppUserIdContext(appUserIdContext).AppUserIdType(appUserIdType).AssignedStatuses(assignedStatuses).Room(room).FollowUpDate(followUpDate).CreatedOn(createdOn).CreatedByUserId(createdByUserId).CreatedByUserIdContext(createdByUserIdContext).CreatedByUserIdType(createdByUserIdType).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetches track it items



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ticketId := "ticketId_example" // string | Complete ticket number of the Track It item. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    surname := "surname_example" // string | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. (optional)
    trackItGroups := []string{"TrackItGroups_example"} // []string | Group to which the Track It items belong. (optional)
    types := []string{"Inner_example"} // []string | Track It types based on the Track It group. (optional)
    locations := []string{"Inner_example"} // []string | Locations for Track It location. (optional)
    actions := []string{"Inner_example"} // []string | Track It actions based on Track It groups. (optional)
    actionStatuses := []string{"ActionStatuses_example"} // []string | Action status of the Track It item(Open, Closed). (optional)
    appUserId := "appUserId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    appUserIdContext := "appUserIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    appUserIdType := "appUserIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    assignedStatuses := []string{"AssignedStatuses_example"} // []string | Assignment status of the Track It item(Assigned, Unassigned). (optional)
    room := "room_example" // string | Guest's room number if ticket associated with a reservation. (optional)
    followUpDate := time.Now() // string | Follow up date for the ticket. (optional)
    createdOn := time.Now() // string | Date when the ticket was created. (optional)
    createdByUserId := "createdByUserId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    createdByUserIdContext := "createdByUserIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    createdByUserIdType := "createdByUserIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    description := "description_example" // string | Description associated with the Track It item. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.GetTrackItItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TicketId(ticketId).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).GivenName(givenName).Surname(surname).TrackItGroups(trackItGroups).Types(types).Locations(locations).Actions(actions).ActionStatuses(actionStatuses).AppUserId(appUserId).AppUserIdContext(appUserIdContext).AppUserIdType(appUserIdType).AssignedStatuses(assignedStatuses).Room(room).FollowUpDate(followUpDate).CreatedOn(createdOn).CreatedByUserId(createdByUserId).CreatedByUserIdContext(createdByUserIdContext).CreatedByUserIdType(createdByUserIdType).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.GetTrackItItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetTrackItItems`: TrackItItems
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.GetTrackItItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetTrackItItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ticketId** | **string** | Complete ticket number of the Track It item. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **givenName** | **string** | Given name, first name or names. | 
 **surname** | **string** | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. | 
 **trackItGroups** | **[]string** | Group to which the Track It items belong. | 
 **types** | **[]string** | Track It types based on the Track It group. | 
 **locations** | **[]string** | Locations for Track It location. | 
 **actions** | **[]string** | Track It actions based on Track It groups. | 
 **actionStatuses** | **[]string** | Action status of the Track It item(Open, Closed). | 
 **appUserId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **appUserIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **appUserIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **assignedStatuses** | **[]string** | Assignment status of the Track It item(Assigned, Unassigned). | 
 **room** | **string** | Guest&#39;s room number if ticket associated with a reservation. | 
 **followUpDate** | **string** | Follow up date for the ticket. | 
 **createdOn** | **string** | Date when the ticket was created. | 
 **createdByUserId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **createdByUserIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **createdByUserIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **description** | **string** | Description associated with the Track It item. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TrackItItems**](TrackItItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingCustomerManagementService

> OperaVersion PingCustomerManagementService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to ping the customer management service



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
    resp, r, err := apiClient.CustomerManagementApi.PingCustomerManagementService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.PingCustomerManagementService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingCustomerManagementService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.PingCustomerManagementService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingCustomerManagementServiceRequest struct via the builder pattern


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


## PostCalendarTask

> Status PostCalendarTask(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CalendarTask(calendarTask).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Calendar Task



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    calendarTask := *openapiclient.NewPostCalendarTaskRequest() // PostCalendarTaskRequest | Request to create calendar task.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.PostCalendarTask(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CalendarTask(calendarTask).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.PostCalendarTask``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCalendarTask`: Status
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.PostCalendarTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostCalendarTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **calendarTask** | [**PostCalendarTaskRequest**](PostCalendarTaskRequest.md) | Request to create calendar task. | 
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


## PostTrackItItems

> Status PostTrackItItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItItems(trackItItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Creates track it items



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItItems := *openapiclient.NewPutTrackItItemsRequest() // PutTrackItItemsRequest | Request object to create Track It items.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.PostTrackItItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItItems(trackItItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.PostTrackItItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostTrackItItems`: Status
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.PostTrackItItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostTrackItItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItItems** | [**PutTrackItItemsRequest**](PutTrackItItemsRequest.md) | Request object to create Track It items. | 
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


## PutCalendarTask

> CalendarTask PutCalendarTask(ctx, activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CalendarTask(calendarTask).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update Calendar Task



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
    activityId := "activityId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    calendarTask := *openapiclient.NewPostCalendarTaskRequest() // PostCalendarTaskRequest | Request to update calendar task.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.PutCalendarTask(context.Background(), activityId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CalendarTask(calendarTask).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.PutCalendarTask``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutCalendarTask`: CalendarTask
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.PutCalendarTask`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**activityId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutCalendarTaskRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **calendarTask** | [**PostCalendarTaskRequest**](PostCalendarTaskRequest.md) | Request to update calendar task. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalendarTask**](CalendarTask.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutTrackItItems

> TrackItItems PutTrackItItems(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItItems(trackItItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates track it items



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    trackItItems := *openapiclient.NewPutTrackItItemsRequest() // PutTrackItItemsRequest | Request object to update Track It items.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.CustomerManagementApi.PutTrackItItems(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).TrackItItems(trackItItems).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `CustomerManagementApi.PutTrackItItems``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutTrackItItems`: TrackItItems
    fmt.Fprintf(os.Stdout, "Response from `CustomerManagementApi.PutTrackItItems`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutTrackItItemsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **trackItItems** | [**PutTrackItItemsRequest**](PutTrackItItemsRequest.md) | Request object to update Track It items. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**TrackItItems**](TrackItItems.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

