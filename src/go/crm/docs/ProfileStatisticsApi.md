# \ProfileStatisticsApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetProfileMembershipStatistics**](ProfileStatisticsApi.md#GetProfileMembershipStatistics) | **Get** /profileMembershipStatistics | Get Membership statistics 
[**GetProfileStatistics**](ProfileStatisticsApi.md#GetProfileStatistics) | **Get** /profileStatistics | Get Profile Statistics



## GetProfileMembershipStatistics

> ProfileMembershipStatistics GetProfileMembershipStatistics(ctx).ProfileId(profileId).MembershipCardNo(membershipCardNo).MembershipType(membershipType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).TransactionDetail(transactionDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Membership statistics 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    profileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    membershipCardNo := "membershipCardNo_example" // string | Number of the membership card.
    membershipType := "membershipType_example" // string | Type of membership.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    transactionDetail := true // bool | Flag indicating whether to fetch detailed membership points information or just a summary of the total of the points. (optional) (default to false)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileStatisticsApi.GetProfileMembershipStatistics(context.Background()).ProfileId(profileId).MembershipCardNo(membershipCardNo).MembershipType(membershipType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).Duration(duration).TransactionDetail(transactionDetail).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileStatisticsApi.GetProfileMembershipStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileMembershipStatistics`: ProfileMembershipStatistics
    fmt.Fprintf(os.Stdout, "Response from `ProfileStatisticsApi.GetProfileMembershipStatistics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileMembershipStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **membershipCardNo** | **string** | Number of the membership card. | 
 **membershipType** | **string** | Type of membership. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **transactionDetail** | **bool** | Flag indicating whether to fetch detailed membership points information or just a summary of the total of the points. | [default to false]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileMembershipStatistics**](ProfileMembershipStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileStatistics

> ProfileStatistics GetProfileStatistics(ctx).ProfileId(profileId).HotelIds(hotelIds).ReportType(reportType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayFrom(stayFrom).StayTo(stayTo).Summary(summary).PasserBy(passerBy).ContactProfileRoleType(contactProfileRoleType).StayRecordId(stayRecordId).StayRecordIdContext(stayRecordIdContext).StayRecordIdType(stayRecordIdType).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profile Statistics



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    profileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation.
    hotelIds := []string{"Inner_example"} // []string | Hotel code.
    reportType := "reportType_example" // string | Indicate to get revenue of Stay Records.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    stayFrom := time.Now() // string | Stay from date for report (optional)
    stayTo := time.Now() // string | Stay to date for report (optional)
    summary := true // bool | Flag to indicate whether summary/detail report is requested. (optional)
    passerBy := true // bool | Flag to include passerBy records. (optional)
    contactProfileRoleType := "contactProfileRoleType_example" // string | Profile Role Type All. (optional)
    stayRecordId := "stayRecordId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    stayRecordIdContext := "stayRecordIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    stayRecordIdType := "stayRecordIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationId := "reservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationIdContext := "reservationIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    reservationIdType := "reservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileStatisticsApi.GetProfileStatistics(context.Background()).ProfileId(profileId).HotelIds(hotelIds).ReportType(reportType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayFrom(stayFrom).StayTo(stayTo).Summary(summary).PasserBy(passerBy).ContactProfileRoleType(contactProfileRoleType).StayRecordId(stayRecordId).StayRecordIdContext(stayRecordIdContext).StayRecordIdType(stayRecordIdType).ReservationId(reservationId).ReservationIdContext(reservationIdContext).ReservationIdType(reservationIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileStatisticsApi.GetProfileStatistics``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileStatistics`: ProfileStatistics
    fmt.Fprintf(os.Stdout, "Response from `ProfileStatisticsApi.GetProfileStatistics`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileStatisticsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **profileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelIds** | **[]string** | Hotel code. | 
 **reportType** | **string** | Indicate to get revenue of Stay Records. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **stayFrom** | **string** | Stay from date for report | 
 **stayTo** | **string** | Stay to date for report | 
 **summary** | **bool** | Flag to indicate whether summary/detail report is requested. | 
 **passerBy** | **bool** | Flag to include passerBy records. | 
 **contactProfileRoleType** | **string** | Profile Role Type All. | 
 **stayRecordId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **stayRecordIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **stayRecordIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **reservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileStatistics**](ProfileStatistics.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

