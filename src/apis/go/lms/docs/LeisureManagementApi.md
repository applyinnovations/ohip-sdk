# \LeisureManagementApi

All URIs are relative to */lms/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteActivityBooking**](LeisureManagementApi.md#DeleteActivityBooking) | **Delete** /hotels/{hotelId}/reservations/{reservationId}/activityBookings | Send a response to Cancellation of an Activity Booking
[**DeleteLeisureManagementServiceCache**](LeisureManagementApi.md#DeleteLeisureManagementServiceCache) | **Delete** /services/leisureManagement/cache | Clear Cache for the Leisure Management Service
[**GetActivityBookings**](LeisureManagementApi.md#GetActivityBookings) | **Get** /hotels/{hotelId}/activityBookings | Send a response to Look-up of Activity Bookings
[**PingLeisureManagementService**](LeisureManagementApi.md#PingLeisureManagementService) | **Get** /services/leisureManagement/status | Ping the Leisure Management Service
[**PostActivityBooking**](LeisureManagementApi.md#PostActivityBooking) | **Post** /hotels/{hotelId}/reservations/{reservationId}/activityBookings | Send a response to Creation of Activity Booking
[**PostLocationNotification**](LeisureManagementApi.md#PostLocationNotification) | **Post** /hotels/{hotelId}/reservations/{reservationId}/locationNotifications | Send a response to Location Notification
[**PutActivityBooking**](LeisureManagementApi.md#PutActivityBooking) | **Put** /hotels/{hotelId}/reservations/{reservationId}/activityBookings | Send a response to Change in Activity Booking



## DeleteActivityBooking

> Status DeleteActivityBooking(ctx, reservationId, hotelId).ActivityId(activityId).ActivityIdType(activityIdType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Send a response to Cancellation of an Activity Booking



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
    reservationId := "reservationId_example" // string | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    activityId := "activityId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    activityIdType := "EXTERNALSYSTEMCODE" // string | A reference to the type of object defined by the UniqueID element.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementApi.DeleteActivityBooking(context.Background(), reservationId, hotelId).ActivityId(activityId).ActivityIdType(activityIdType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.DeleteActivityBooking``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteActivityBooking`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.DeleteActivityBooking`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteActivityBookingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **activityId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **activityIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
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


## DeleteLeisureManagementServiceCache

> Status DeleteLeisureManagementServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Clear Cache for the Leisure Management Service



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
    resp, r, err := apiClient.LeisureManagementApi.DeleteLeisureManagementServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.DeleteLeisureManagementServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteLeisureManagementServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.DeleteLeisureManagementServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteLeisureManagementServiceCacheRequest struct via the builder pattern


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


## GetActivityBookings

> ActivityBookingsDetails GetActivityBookings(ctx, hotelId).ProfileIds(profileIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileIdContext(profileIdContext).ProfileIdsType(profileIdsType).ReservationIds(reservationIds).ReservationIdContext(reservationIdContext).ReservationIdsType(reservationIdsType).ActivityIds(activityIds).ActivityIdContext(activityIdContext).ActivityIdsType(activityIdsType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Send a response to Look-up of Activity Bookings



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
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to ["Opera"])
    profileIdsType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional) (default to ["Profile"])
    reservationIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional) (default to ["Opera"])
    reservationIdsType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional) (default to ["Reservation"])
    activityIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    activityIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    activityIdsType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementApi.GetActivityBookings(context.Background(), hotelId).ProfileIds(profileIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileIdContext(profileIdContext).ProfileIdsType(profileIdsType).ReservationIds(reservationIds).ReservationIdContext(reservationIdContext).ReservationIdsType(reservationIdsType).ActivityIds(activityIds).ActivityIdContext(activityIdContext).ActivityIdsType(activityIdsType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.GetActivityBookings``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetActivityBookings`: ActivityBookingsDetails
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.GetActivityBookings`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetActivityBookingsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to [&quot;Opera&quot;]]
 **profileIdsType** | **[]string** | A reference to the type of object defined by the UniqueID element. | [default to [&quot;Profile&quot;]]
 **reservationIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | [default to [&quot;Opera&quot;]]
 **reservationIdsType** | **[]string** | A reference to the type of object defined by the UniqueID element. | [default to [&quot;Reservation&quot;]]
 **activityIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **activityIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **activityIdsType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityBookingsDetails**](ActivityBookingsDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PingLeisureManagementService

> OperaVersion PingLeisureManagementService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Ping the Leisure Management Service



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
    resp, r, err := apiClient.LeisureManagementApi.PingLeisureManagementService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.PingLeisureManagementService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingLeisureManagementService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.PingLeisureManagementService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingLeisureManagementServiceRequest struct via the builder pattern


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


## PostActivityBooking

> Status PostActivityBooking(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityBooking(createActivityBooking).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Send a response to Creation of Activity Booking



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
    reservationId := "reservationId_example" // string | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    createActivityBooking := *openapiclient.NewPostActivityBookingRequest() // PostActivityBookingRequest | Self-contained Request object that is used when Creating activities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementApi.PostActivityBooking(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).CreateActivityBooking(createActivityBooking).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.PostActivityBooking``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostActivityBooking`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.PostActivityBooking`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostActivityBookingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **createActivityBooking** | [**PostActivityBookingRequest**](PostActivityBookingRequest.md) | Self-contained Request object that is used when Creating activities. | 
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


## PostLocationNotification

> Status PostLocationNotification(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocationNotificationToBeCreated(locationNotificationToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Send a response to Location Notification



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
    reservationId := "reservationId_example" // string | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    locationNotificationToBeCreated := *openapiclient.NewPostLocationNotificationRequest() // PostLocationNotificationRequest | Generic self-contained request object that is used for Location Notification
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementApi.PostLocationNotification(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).LocationNotificationToBeCreated(locationNotificationToBeCreated).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.PostLocationNotification``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostLocationNotification`: Status
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.PostLocationNotification`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostLocationNotificationRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **locationNotificationToBeCreated** | [**PostLocationNotificationRequest**](PostLocationNotificationRequest.md) | Generic self-contained request object that is used for Location Notification | 
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


## PutActivityBooking

> ActivityBookingModified PutActivityBooking(ctx, reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityBooking(changeActivityBooking).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Send a response to Change in Activity Booking



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
    reservationId := "reservationId_example" // string | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA.
    hotelId := "hotelId_example" // string | Unique OPERA Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    changeActivityBooking := *openapiclient.NewPutActivityBookingRequest() // PutActivityBookingRequest | Self-contained Request object that is used when Updating activities.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.LeisureManagementApi.PutActivityBooking(context.Background(), reservationId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChangeActivityBooking(changeActivityBooking).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `LeisureManagementApi.PutActivityBooking``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutActivityBooking`: ActivityBookingModified
    fmt.Fprintf(os.Stdout, "Response from `LeisureManagementApi.PutActivityBooking`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**reservationId** | **string** | Unique OPERA internal Reservation ID which is used to find any reservation in OPERA. This ID is a primary identification of a reservation in OPERA. | 
**hotelId** | **string** | Unique OPERA Hotel code | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutActivityBookingRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **changeActivityBooking** | [**PutActivityBookingRequest**](PutActivityBookingRequest.md) | Self-contained Request object that is used when Updating activities. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ActivityBookingModified**](ActivityBookingModified.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

