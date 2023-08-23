# \OperaExchangeInterfaceStatsApi

All URIs are relative to */oxi/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DequeueOXIMessages**](OperaExchangeInterfaceStatsApi.md#DequeueOXIMessages) | **Delete** /interfaces/{interfaceId}/hotels/{hotelId}/queues/{queueName}/dequeueOXIMessages | Purge the messages from OXI inbound and outbound queues.
[**GetMessageStatistics**](OperaExchangeInterfaceStatsApi.md#GetMessageStatistics) | **Get** /hotels/{hotelId}/messageStatistics | Retrieves the statistics of Messages for Opera Exchange Interface.
[**GetOXIMessageStatistics**](OperaExchangeInterfaceStatsApi.md#GetOXIMessageStatistics) | **Get** /hotels/{hotelId}/queues/{queueName}/messageStatistics | Retrieves the statistics of Messages in inbound,outbound and BE queues.



## DequeueOXIMessages

> Status DequeueOXIMessages(ctx, queueName, hotelId, interfaceId).MessageStatus(messageStatus).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDate(endDate).StartDate(startDate).Module(module).ActionType(actionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Purge the messages from OXI inbound and outbound queues.



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
    queueName := "queueName_example" // string | Queue name from which messages has to be Dequeued.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to find hotel in OPERA.
    interfaceId := "interfaceId_example" // string | Unique OPERA internal ID used to identify an Interface in OPERA..
    messageStatus := "Ready" // string | Supported Message Status.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    endDate := time.Now() // time.Time | The ending value of the time span. (optional)
    startDate := time.Now() // time.Time | The starting value of the time span. (optional)
    module := "module_example" // string | Module of the messages. (optional)
    actionType := "actionType_example" // string | Action Type of the messages. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceStatsApi.DequeueOXIMessages(context.Background(), queueName, hotelId, interfaceId).MessageStatus(messageStatus).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EndDate(endDate).StartDate(startDate).Module(module).ActionType(actionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceStatsApi.DequeueOXIMessages``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DequeueOXIMessages`: Status
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceStatsApi.DequeueOXIMessages`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**queueName** | **string** | Queue name from which messages has to be Dequeued. | 
**hotelId** | **string** | Unique OPERA internal ID used to find hotel in OPERA. | 
**interfaceId** | **string** | Unique OPERA internal ID used to identify an Interface in OPERA.. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDequeueOXIMessagesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **messageStatus** | **string** | Supported Message Status. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **endDate** | **time.Time** | The ending value of the time span. | 
 **startDate** | **time.Time** | The starting value of the time span. | 
 **module** | **string** | Module of the messages. | 
 **actionType** | **string** | Action Type of the messages. | 
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


## GetMessageStatistics

> MessageStatistics GetMessageStatistics(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).EndDate(endDate).StartDate(startDate).StatCode(statCode).InterfaceId(interfaceId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves the statistics of Messages for Opera Exchange Interface.



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
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to find hotel in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    code := []string{"Code_example"} // []string | Supported Exchange Interface report codes. (optional)
    endDate := []string{time.Now()} // []string | End date of the report. (optional)
    startDate := []string{time.Now()} // []string | Start date of the report. (optional)
    statCode := []string{"StatCode_example"} // []string | Supported Exchange Interface statistical codes. (optional)
    interfaceId := "interfaceId_example" // string | ID of the Interface Setup (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceStatsApi.GetMessageStatistics(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Code(code).EndDate(endDate).StartDate(startDate).StatCode(statCode).InterfaceId(interfaceId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceStatsApi.GetMessageStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMessageStatistics`: MessageStatistics
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceStatsApi.GetMessageStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA internal ID used to find hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMessageStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **code** | **[]string** | Supported Exchange Interface report codes. | 
 **endDate** | **[]string** | End date of the report. | 
 **startDate** | **[]string** | Start date of the report. | 
 **statCode** | **[]string** | Supported Exchange Interface statistical codes. | 
 **interfaceId** | **string** | ID of the Interface Setup | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MessageStatistics**](MessageStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetOXIMessageStatistics

> OXIMessageStatistics GetOXIMessageStatistics(ctx, queueName, hotelId).MessageStatus(messageStatus).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceId(interfaceId).EnqueueEndDate(enqueueEndDate).EnqueueStartDate(enqueueStartDate).GroupByModuleAndActionType(groupByModuleAndActionType).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Retrieves the statistics of Messages in inbound,outbound and BE queues.



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
    queueName := "queueName_example" // string | Queue name from which Message statistics has to be fetched.
    hotelId := "hotelId_example" // string | Unique OPERA internal ID used to find hotel in OPERA.
    messageStatus := "messageStatus_example" // string | Supported Message Status. (default to "Ready")
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    interfaceId := "interfaceId_example" // string | InterfaceID for which Message statistics has to be fetched. (optional)
    enqueueEndDate := time.Now() // time.Time | The ending value of the time span. (optional)
    enqueueStartDate := time.Now() // time.Time | The starting value of the time span. (optional)
    groupByModuleAndActionType := true // bool | Attribute that decides whether the results must be grouped additionally by Module and Action type of the messages. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.OperaExchangeInterfaceStatsApi.GetOXIMessageStatistics(context.Background(), queueName, hotelId).MessageStatus(messageStatus).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).InterfaceId(interfaceId).EnqueueEndDate(enqueueEndDate).EnqueueStartDate(enqueueStartDate).GroupByModuleAndActionType(groupByModuleAndActionType).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `OperaExchangeInterfaceStatsApi.GetOXIMessageStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetOXIMessageStatistics`: OXIMessageStatistics
    fmt.Fprintf(os.Stdout, "Response from `OperaExchangeInterfaceStatsApi.GetOXIMessageStatistics`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**queueName** | **string** | Queue name from which Message statistics has to be fetched. | 
**hotelId** | **string** | Unique OPERA internal ID used to find hotel in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetOXIMessageStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **messageStatus** | **string** | Supported Message Status. | [default to &quot;Ready&quot;]
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **interfaceId** | **string** | InterfaceID for which Message statistics has to be fetched. | 
 **enqueueEndDate** | **time.Time** | The ending value of the time span. | 
 **enqueueStartDate** | **time.Time** | The starting value of the time span. | 
 **groupByModuleAndActionType** | **bool** | Attribute that decides whether the results must be grouped additionally by Module and Action type of the messages. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**OXIMessageStatistics**](OXIMessageStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

