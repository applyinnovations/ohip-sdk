# \HotelConfigApi

All URIs are relative to */evm/config/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**ChangeRoomTypePool**](HotelConfigApi.md#ChangeRoomTypePool) | **Put** /hotels/{hotelId}/roomPools/{roomPoolCode} | Change Room Type Pool 
[**GetRoomTypePool**](HotelConfigApi.md#GetRoomTypePool) | **Get** /hotels/{hotelId}/roomPools | Fetch Room Type Pool
[**PostRoomTypePool**](HotelConfigApi.md#PostRoomTypePool) | **Post** /hotels/{hotelId}/roomPools | Create Room Type Pools
[**RemoveRoomTypePool**](HotelConfigApi.md#RemoveRoomTypePool) | **Delete** /hotels/{hotelId}/roomPools/{roomPoolCode} | Delete  Room Type Pool and Mappings



## ChangeRoomTypePool

> Status ChangeRoomTypePool(ctx, roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolToBeChanged(roomTypePoolToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change Room Type Pool 



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
    roomPoolCode := "roomPoolCode_example" // string | Unique Code of room type pool.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypePoolToBeChanged := *openapiclient.NewChangeRoomTypePoolRequest() // ChangeRoomTypePoolRequest | Request object for changing existing room pool.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.ChangeRoomTypePool(context.Background(), roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolToBeChanged(roomTypePoolToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.ChangeRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.ChangeRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPoolCode** | **string** | Unique Code of room type pool. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypePoolToBeChanged** | [**ChangeRoomTypePoolRequest**](ChangeRoomTypePoolRequest.md) | Request object for changing existing room pool. | 
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


## GetRoomTypePool

> RoomTypePoolDetails GetRoomTypePool(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).RoomTypePoolCodes(roomTypePoolCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Room Type Pool



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    includeInactive := true // bool | Flag to indicate if inactive room types should be included. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    pageNumber := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional)
    physical := true // bool | Is it a physical sleep room type. (optional)
    pseudo := true // bool | Is it a pseudo room type. (optional)
    summaryInfo := true // bool | Flag to indicate if summary or detailed information should be fetched. (optional)
    roomTypeCodes := []string{"Inner_example"} // []string |  (optional)
    roomClassCodes := []string{"Inner_example"} // []string |  (optional)
    roomTypePoolCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.GetRoomTypePool(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IncludeInactive(includeInactive).Limit(limit).PageNumber(pageNumber).Physical(physical).Pseudo(pseudo).SummaryInfo(summaryInfo).RoomTypeCodes(roomTypeCodes).RoomClassCodes(roomClassCodes).RoomTypePoolCodes(roomTypePoolCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.GetRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRoomTypePool`: RoomTypePoolDetails
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.GetRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **includeInactive** | **bool** | Flag to indicate if inactive room types should be included. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **pageNumber** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | 
 **physical** | **bool** | Is it a physical sleep room type. | 
 **pseudo** | **bool** | Is it a pseudo room type. | 
 **summaryInfo** | **bool** | Flag to indicate if summary or detailed information should be fetched. | 
 **roomTypeCodes** | **[]string** |  | 
 **roomClassCodes** | **[]string** |  | 
 **roomTypePoolCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RoomTypePoolDetails**](RoomTypePoolDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostRoomTypePool

> Status PostRoomTypePool(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolCriteria(roomTypePoolCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create Room Type Pools



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
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    roomTypePoolCriteria := *openapiclient.NewPostRoomTypePoolRequest() // PostRoomTypePoolRequest | Request object for creating new room pool.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.PostRoomTypePool(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RoomTypePoolCriteria(roomTypePoolCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.PostRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.PostRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **roomTypePoolCriteria** | [**PostRoomTypePoolRequest**](PostRoomTypePoolRequest.md) | Request object for creating new room pool. | 
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


## RemoveRoomTypePool

> Status RemoveRoomTypePool(ctx, roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).DefaultText(defaultText).Lang(lang).Sequence(sequence).Inactive(inactive).NumberOfRooms(numberOfRooms).RoomType(roomType).RoomClass(roomClass).ShortDescription(shortDescription).ActiveDate(activeDate).Pseudo(pseudo).Accessible(accessible).SendToInterface(sendToInterface).SellSequence(sellSequence).Suite(suite).MeetingRoom(meetingRoom).Restricted(restricted).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete  Room Type Pool and Mappings



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
    roomPoolCode := "roomPoolCode_example" // string | Unique Code of room type pool.
    hotelId := "hotelId_example" // string | Unique ID of hotel.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    description := []string{"Inner_example"} // []string | The description of room pool type. (optional)
    defaultText := "defaultText_example" // string | Default text with Character length from 0 to 1000. (optional)
    lang := []string{"Inner_example"} // []string | Language code for the translation. (optional)
    sequence := []int32{int32(123)} // []int32 | Sequence for representing room type pool record. (optional)
    inactive := []bool{false} // []bool | Indicates the room type is inactive or not. (optional)
    numberOfRooms := []int32{int32(123)} // []int32 | Number of rooms for this room type. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    roomClass := []string{"Inner_example"} // []string | Room class for the room type code. (optional)
    shortDescription := []string{"Inner_example"} // []string | Short Description of room type. (optional)
    activeDate := []string{time.Now()} // []string | Active date of the room type. (optional)
    pseudo := []bool{false} // []bool | Indicates if room type is pseudo. (optional)
    accessible := []bool{false} // []bool | Indicates if room type is accessible. (optional)
    sendToInterface := []bool{false} // []bool | Indicates if room type is sent to interface. (optional)
    sellSequence := []float32{float32(123)} // []float32 | Indicates room types sell sequence. (optional)
    suite := []bool{false} // []bool | Indicates room type is a suite. (optional)
    meetingRoom := []bool{false} // []bool | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. (optional)
    restricted := []bool{false} // []bool | Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.HotelConfigApi.RemoveRoomTypePool(context.Background(), roomPoolCode, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Description(description).DefaultText(defaultText).Lang(lang).Sequence(sequence).Inactive(inactive).NumberOfRooms(numberOfRooms).RoomType(roomType).RoomClass(roomClass).ShortDescription(shortDescription).ActiveDate(activeDate).Pseudo(pseudo).Accessible(accessible).SendToInterface(sendToInterface).SellSequence(sellSequence).Suite(suite).MeetingRoom(meetingRoom).Restricted(restricted).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `HotelConfigApi.RemoveRoomTypePool``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveRoomTypePool`: Status
    fmt.Fprintf(os.Stdout, "Response from `HotelConfigApi.RemoveRoomTypePool`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**roomPoolCode** | **string** | Unique Code of room type pool. | 
**hotelId** | **string** | Unique ID of hotel. | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveRoomTypePoolRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **description** | **[]string** | The description of room pool type. | 
 **defaultText** | **string** | Default text with Character length from 0 to 1000. | 
 **lang** | **[]string** | Language code for the translation. | 
 **sequence** | **[]int32** | Sequence for representing room type pool record. | 
 **inactive** | **[]bool** | Indicates the room type is inactive or not. | 
 **numberOfRooms** | **[]int32** | Number of rooms for this room type. | 
 **roomType** | **[]string** |  | 
 **roomClass** | **[]string** | Room class for the room type code. | 
 **shortDescription** | **[]string** | Short Description of room type. | 
 **activeDate** | **[]string** | Active date of the room type. | 
 **pseudo** | **[]bool** | Indicates if room type is pseudo. | 
 **accessible** | **[]bool** | Indicates if room type is accessible. | 
 **sendToInterface** | **[]bool** | Indicates if room type is sent to interface. | 
 **sellSequence** | **[]float32** | Indicates room types sell sequence. | 
 **suite** | **[]bool** | Indicates room type is a suite. | 
 **meetingRoom** | **[]bool** | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. | 
 **restricted** | **[]bool** | Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. | 
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

