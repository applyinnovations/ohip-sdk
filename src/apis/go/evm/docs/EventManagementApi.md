# \EventManagementApi

All URIs are relative to */evm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetEvent**](EventManagementApi.md#GetEvent) | **Get** /hotels/{hotelId}/events/{eventId} | Get an Event
[**GetEventsMultipleHotels**](EventManagementApi.md#GetEventsMultipleHotels) | **Get** /events | Get Events 
[**GetEventsOneHotel**](EventManagementApi.md#GetEventsOneHotel) | **Get** /hotels/{hotelId}/events | Get Events 



## GetEvent

> Event GetEvent(ctx, eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get an Event



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    eventId := "3700516" // string | Unique ID of the event
    hotelId := "BHOTEL" // string | Unique ID of a hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch all eligible master events for the selected event (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementApi.GetEvent(context.Background(), eventId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementApi.GetEvent``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEvent`: Event
    fmt.Fprintf(os.Stdout, "Response from `EventManagementApi.GetEvent`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**eventId** | **string** | Unique ID of the event | 
**hotelId** | **string** | Unique ID of a hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **fetchInstructions** | **[]string** | Instruction to fetch all eligible master events for the selected event | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Event**](Event.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventsMultipleHotels

> Events GetEventsMultipleHotels(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).Category(category).Name(name).AttachedProfileId(attachedProfileId).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Events 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    hotelIds := []string{"Inner_example"} // []string | This is the Hotel Code of the Event (optional)
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockId := []string{"Inner_example"} // []string | Block ID linked to the Catering Event (optional)
    eventId := []string{"Inner_example"} // []string | Unique ID for the catering event (optional)
    category := []string{"Category_example"} // []string | Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company. (optional)
    name := []string{"Inner_example"} // []string | Attached profile name (optional)
    attachedProfileId := []string{"Inner_example"} // []string | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. (optional)
    eventStatusCodes := []string{"Inner_example"} // []string | Status Codes associated with the events to be fetched. (optional)
    eventTypeCodes := []string{"Inner_example"} // []string | Event Type Codes associated with the events to be fetched. (optional)
    functionSpaceCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := false // bool | Indicates whether to include inactive events in search result. (optional) (default to false)
    includeAlternateEvents := false // bool | Indicates whether to include the alternate events in the search result. (optional) (default to false)
    includeSubEvents := false // bool | Indicates whether to include the sub events in the search result. (optional) (default to false)
    cateringEventOrderBy := "StartDateTimeAsc" // string | A collection of supported list of order by for search catering events. (optional) (default to "StartDateTimeAsc")
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instructions to fetch details information about the selected event. The BlocksInfo fetch instructions will retain a limited amount of data for the associated block.  The Indicators instruction will provide a count. (optional)
    limit := int32(200) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 200)
    offset := int32(0) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementApi.GetEventsMultipleHotels(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).Category(category).Name(name).AttachedProfileId(attachedProfileId).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementApi.GetEventsMultipleHotels``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventsMultipleHotels`: Events
    fmt.Fprintf(os.Stdout, "Response from `EventManagementApi.GetEventsMultipleHotels`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEventsMultipleHotelsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **hotelIds** | **[]string** | This is the Hotel Code of the Event | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **blockId** | **[]string** | Block ID linked to the Catering Event | 
 **eventId** | **[]string** | Unique ID for the catering event | 
 **category** | **[]string** | Simple type for block instructions to be used in requests for fetching blocks. Valid status values are Group, Source, TravelAgent, Contact, Company. | 
 **name** | **[]string** | Attached profile name | 
 **attachedProfileId** | **[]string** | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. | 
 **eventStatusCodes** | **[]string** | Status Codes associated with the events to be fetched. | 
 **eventTypeCodes** | **[]string** | Event Type Codes associated with the events to be fetched. | 
 **functionSpaceCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive events in search result. | [default to false]
 **includeAlternateEvents** | **bool** | Indicates whether to include the alternate events in the search result. | [default to false]
 **includeSubEvents** | **bool** | Indicates whether to include the sub events in the search result. | [default to false]
 **cateringEventOrderBy** | **string** | A collection of supported list of order by for search catering events. | [default to &quot;StartDateTimeAsc&quot;]
 **fetchInstructions** | **[]string** | Instructions to fetch details information about the selected event. The BlocksInfo fetch instructions will retain a limited amount of data for the associated block.  The Indicators instruction will provide a count. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 200]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Events**](Events.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEventsOneHotel

> Events GetEventsOneHotel(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).AttachedProfileId(attachedProfileId).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Events 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/evm"
)

func main() {
    hotelId := "BHOTEL" // string | Unique ID of a hotel
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in
    eventStartDate := time.Now() // string | The starting value of the date range. (optional)
    eventEndDate := time.Now() // string | The ending value of the date range. (optional)
    blockId := []string{"Inner_example"} // []string | Block ID linked to the Catering Event (optional)
    eventId := []string{"Inner_example"} // []string | Unique ID for the catering event (optional)
    attachedProfileId := "323816531" // string | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. (optional)
    eventStatusCodes := []string{"Inner_example"} // []string | Status Codes associated with the events to be fetched. (optional)
    eventTypeCodes := []string{"Inner_example"} // []string | Event Type Codes associated with the events to be fetched. (optional)
    functionSpaceCodes := []string{"Inner_example"} // []string |  (optional)
    includeInactive := false // bool | Indicates whether to include inactive events in search result. (optional) (default to false)
    includeAlternateEvents := false // bool | Indicates whether to include the alternate events in the search result. (optional) (default to false)
    includeSubEvents := false // bool | Indicates whether to include the sub events in the search result. (optional) (default to false)
    cateringEventOrderBy := "StartDateTimeAsc" // string | A collection of supported list of order by for search catering events. (optional) (default to "StartDateTimeAsc")
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Instruction to fetch all eligible master events for the selected event (optional)
    limit := int32(200) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 200)
    offset := int32(0) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.EventManagementApi.GetEventsOneHotel(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EventStartDate(eventStartDate).EventEndDate(eventEndDate).BlockId(blockId).EventId(eventId).AttachedProfileId(attachedProfileId).EventStatusCodes(eventStatusCodes).EventTypeCodes(eventTypeCodes).FunctionSpaceCodes(functionSpaceCodes).IncludeInactive(includeInactive).IncludeAlternateEvents(includeAlternateEvents).IncludeSubEvents(includeSubEvents).CateringEventOrderBy(cateringEventOrderBy).FetchInstructions(fetchInstructions).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `EventManagementApi.GetEventsOneHotel``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEventsOneHotel`: Events
    fmt.Fprintf(os.Stdout, "Response from `EventManagementApi.GetEventsOneHotel`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of a hotel | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetEventsOneHotelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the eventEndDate user is logged in | 
 **eventStartDate** | **string** | The starting value of the date range. | 
 **eventEndDate** | **string** | The ending value of the date range. | 
 **blockId** | **[]string** | Block ID linked to the Catering Event | 
 **eventId** | **[]string** | Unique ID for the catering event | 
 **attachedProfileId** | **string** | A unique identifying numeric value assigned to a profile utilized to fetch events associated to blocks linked to the profile. | 
 **eventStatusCodes** | **[]string** | Status Codes associated with the events to be fetched. | 
 **eventTypeCodes** | **[]string** | Event Type Codes associated with the events to be fetched. | 
 **functionSpaceCodes** | **[]string** |  | 
 **includeInactive** | **bool** | Indicates whether to include inactive events in search result. | [default to false]
 **includeAlternateEvents** | **bool** | Indicates whether to include the alternate events in the search result. | [default to false]
 **includeSubEvents** | **bool** | Indicates whether to include the sub events in the search result. | [default to false]
 **cateringEventOrderBy** | **string** | A collection of supported list of order by for search catering events. | [default to &quot;StartDateTimeAsc&quot;]
 **fetchInstructions** | **[]string** | Instruction to fetch all eligible master events for the selected event | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 200]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Events**](Events.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

