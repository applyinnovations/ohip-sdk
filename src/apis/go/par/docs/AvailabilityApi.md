# \AvailabilityApi

All URIs are relative to */par/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**GetHotelAvailability**](AvailabilityApi.md#GetHotelAvailability) | **Get** /hotels/{hotelId}/availability | Get hotel availability
[**GetReservationGuarantees**](AvailabilityApi.md#GetReservationGuarantees) | **Get** /hotels/{hotelId}/guarantees | Get reservation guarantees
[**GetRestrictionsByDateRange**](AvailabilityApi.md#GetRestrictionsByDateRange) | **Get** /hotels/{hotelId}/restrictions | Get hotel restrictions



## GetHotelAvailability

> HotelAvailability GetHotelAvailability(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).IncludeClosedRates(includeClosedRates).IncludeDefaultRatePlanSet(includeDefaultRatePlanSet).InitialRatePlanSet(initialRatePlanSet).Limit(limit).PagePointerKey(pagePointerKey).RatePlanSet(ratePlanSet).RedeemAwards(redeemAwards).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayQuantity(roomStayQuantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).FullStayTimeSpanStartDate(fullStayTimeSpanStartDate).FullStayTimeSpanEndDate(fullStayTimeSpanEndDate).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).PromotionCode(promotionCode).RoomType(roomType).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).AttachedProfileId(attachedProfileId).HotelReservationId(hotelReservationId).HotelReservationIdType(hotelReservationIdType).RatePlanInfo(ratePlanInfo).ReturnOnlyAvailableRateCodes(returnOnlyAvailableRateCodes).ResGuaranteeInfo(resGuaranteeInfo).RoomTypeInfo(roomTypeInfo).MembershipIdNumber(membershipIdNumber).MembershipLevel(membershipLevel).MembershipType(membershipType).PointsAvailable(pointsAvailable).SmokingPreference(smokingPreference).HotelPackage(hotelPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel availability



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    cro := []string{"Inner_example"} // []string | Central reservation office Code who is requesting Rate Availability. (optional)
    includeClosedRates := []bool{false} // []bool | Used to indicate if closed rates are to be included in the Rate Plan set. (optional)
    includeDefaultRatePlanSet := []bool{false} // []bool | Used to indicate if the configured default rate plan set will be included. (optional)
    initialRatePlanSet := []bool{false} // []bool | If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. (optional)
    limit := []int32{int32(123)} // []int32 | Indicates maximum number of records a Web Service should return. (optional)
    pagePointerKey := []string{"Inner_example"} // []string | Specifies fetched record's key as pointer to fetch additional records from. If key is composite use comma separated string. (optional)
    ratePlanSet := []string{"Inner_example"} // []string | Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). (optional)
    redeemAwards := []bool{false} // []bool | Used to indicate if the awards are to be redeemed. (optional)
    roomStayStartDate := time.Now() // string |  (optional)
    roomStayEndDate := time.Now() // string |  (optional)
    roomStayQuantity := int32(56) // int32 |  (optional)
    adults := int32(56) // int32 | Defines the number of Adults. (optional)
    children := int32(56) // int32 | Defines the number of Children. (optional)
    childAge := []int32{int32(123)} // []int32 | Age of a child in years. (optional)
    bucket1Count := int32(56) // int32 | Number of children classified under the first Age Qualifying Group(Child Bucket#1). (optional)
    bucket2Count := int32(56) // int32 | Number of children classified under the second Age Qualifying Group(Child Bucket#2). (optional)
    bucket3Count := int32(56) // int32 | Number of children classified under the third Age Qualifying Group(Child Bucket#3). (optional)
    bucket4Count := int32(56) // int32 | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). (optional)
    bucket5Count := int32(56) // int32 | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). (optional)
    fullStayTimeSpanStartDate := time.Now() // string |  (optional)
    fullStayTimeSpanEndDate := time.Now() // string |  (optional)
    prevailingRate := true // bool |  (optional)
    rateCategory := "rateCategory_example" // string |  (optional)
    rateClass := "rateClass_example" // string |  (optional)
    rateGroup := "rateGroup_example" // string |  (optional)
    ratePlanCode := []string{"Inner_example"} // []string |  (optional)
    promotionCode := []string{"Inner_example"} // []string | Promotion code associated with the rate plan. (optional)
    roomType := []string{"Inner_example"} // []string |  (optional)
    feature := []string{"Inner_example"} // []string |  (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestIdType := "reservationGuestIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    reservationProfileType := []string{"ReservationProfileType_example"} // []string |  (optional)
    attachedProfileId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    hotelReservationId := "hotelReservationId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    hotelReservationIdType := "hotelReservationIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    ratePlanInfo := true // bool | If true Rate Plan Code Master information will be included in the response. (optional)
    returnOnlyAvailableRateCodes := true // bool | If true Only availability check will be done and it will return available rate codes. (optional)
    resGuaranteeInfo := true // bool | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. (optional)
    roomTypeInfo := true // bool | If true Room Type Master information will be included in the response. (optional)
    membershipIdNumber := []int32{int32(123)} // []int32 | Membership id Number of the guest. (optional)
    membershipLevel := []string{"Inner_example"} // []string | Membership id Number of the guest. (optional)
    membershipType := []string{"Inner_example"} // []string | Membership id Number of the guest. (optional)
    pointsAvailable := []int32{int32(123)} // []int32 | Used to indicate Points Available for Profile Primary Membership Type. (optional)
    smokingPreference := []string{"Inner_example"} // []string | Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. (optional)
    hotelPackage := []string{"Inner_example"} // []string | Hotel Package Code to filter the search result. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetHotelAvailability(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Cro(cro).IncludeClosedRates(includeClosedRates).IncludeDefaultRatePlanSet(includeDefaultRatePlanSet).InitialRatePlanSet(initialRatePlanSet).Limit(limit).PagePointerKey(pagePointerKey).RatePlanSet(ratePlanSet).RedeemAwards(redeemAwards).RoomStayStartDate(roomStayStartDate).RoomStayEndDate(roomStayEndDate).RoomStayQuantity(roomStayQuantity).Adults(adults).Children(children).ChildAge(childAge).Bucket1Count(bucket1Count).Bucket2Count(bucket2Count).Bucket3Count(bucket3Count).Bucket4Count(bucket4Count).Bucket5Count(bucket5Count).FullStayTimeSpanStartDate(fullStayTimeSpanStartDate).FullStayTimeSpanEndDate(fullStayTimeSpanEndDate).PrevailingRate(prevailingRate).RateCategory(rateCategory).RateClass(rateClass).RateGroup(rateGroup).RatePlanCode(ratePlanCode).PromotionCode(promotionCode).RoomType(roomType).Feature(feature).ReservationGuestId(reservationGuestId).ReservationGuestIdType(reservationGuestIdType).ReservationProfileType(reservationProfileType).AttachedProfileId(attachedProfileId).HotelReservationId(hotelReservationId).HotelReservationIdType(hotelReservationIdType).RatePlanInfo(ratePlanInfo).ReturnOnlyAvailableRateCodes(returnOnlyAvailableRateCodes).ResGuaranteeInfo(resGuaranteeInfo).RoomTypeInfo(roomTypeInfo).MembershipIdNumber(membershipIdNumber).MembershipLevel(membershipLevel).MembershipType(membershipType).PointsAvailable(pointsAvailable).SmokingPreference(smokingPreference).HotelPackage(hotelPackage).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetHotelAvailability``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetHotelAvailability`: HotelAvailability
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetHotelAvailability`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetHotelAvailabilityRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **cro** | **[]string** | Central reservation office Code who is requesting Rate Availability. | 
 **includeClosedRates** | **[]bool** | Used to indicate if closed rates are to be included in the Rate Plan set. | 
 **includeDefaultRatePlanSet** | **[]bool** | Used to indicate if the configured default rate plan set will be included. | 
 **initialRatePlanSet** | **[]bool** | If InitialRatePlanSet is set to true response will return most relevant Rate Plan Set(e.g. NEGOTIATED if profiles has Negotiated Rates) depending on the request. if request does not requires special Rate Plan Set, it will return default Rate Plan Set if RatePlanSet value is not set. | 
 **limit** | **[]int32** | Indicates maximum number of records a Web Service should return. | 
 **pagePointerKey** | **[]string** | Specifies fetched record&#39;s key as pointer to fetch additional records from. If key is composite use comma separated string. | 
 **ratePlanSet** | **[]string** | Rate Plan Set code to filter Rate Plans based on the predefined set. if not specified it will not filter any Rate Plans by Rate Plan Set. When InitialRatePlanSet is true response may not always return Rate Plans for the supplied Rate Plan Set(See InitialRatePlanSet documentation). | 
 **redeemAwards** | **[]bool** | Used to indicate if the awards are to be redeemed. | 
 **roomStayStartDate** | **string** |  | 
 **roomStayEndDate** | **string** |  | 
 **roomStayQuantity** | **int32** |  | 
 **adults** | **int32** | Defines the number of Adults. | 
 **children** | **int32** | Defines the number of Children. | 
 **childAge** | **[]int32** | Age of a child in years. | 
 **bucket1Count** | **int32** | Number of children classified under the first Age Qualifying Group(Child Bucket#1). | 
 **bucket2Count** | **int32** | Number of children classified under the second Age Qualifying Group(Child Bucket#2). | 
 **bucket3Count** | **int32** | Number of children classified under the third Age Qualifying Group(Child Bucket#3). | 
 **bucket4Count** | **int32** | Number of children classified under the fourth Age Qualifying Group(Child Bucket#4). | 
 **bucket5Count** | **int32** | Number of children classified under the fifth Age Qualifying Group(Child Bucket#5). | 
 **fullStayTimeSpanStartDate** | **string** |  | 
 **fullStayTimeSpanEndDate** | **string** |  | 
 **prevailingRate** | **bool** |  | 
 **rateCategory** | **string** |  | 
 **rateClass** | **string** |  | 
 **rateGroup** | **string** |  | 
 **ratePlanCode** | **[]string** |  | 
 **promotionCode** | **[]string** | Promotion code associated with the rate plan. | 
 **roomType** | **[]string** |  | 
 **feature** | **[]string** |  | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **reservationProfileType** | **[]string** |  | 
 **attachedProfileId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelReservationId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **hotelReservationIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **ratePlanInfo** | **bool** | If true Rate Plan Code Master information will be included in the response. | 
 **returnOnlyAvailableRateCodes** | **bool** | If true Only availability check will be done and it will return available rate codes. | 
 **resGuaranteeInfo** | **bool** | If true Guarantee Code information will be fetched with Rate Code Information. This attribute is only effective when RatePlanInfo is true. | 
 **roomTypeInfo** | **bool** | If true Room Type Master information will be included in the response. | 
 **membershipIdNumber** | **[]int32** | Membership id Number of the guest. | 
 **membershipLevel** | **[]string** | Membership id Number of the guest. | 
 **membershipType** | **[]string** | Membership id Number of the guest. | 
 **pointsAvailable** | **[]int32** | Used to indicate Points Available for Profile Primary Membership Type. | 
 **smokingPreference** | **[]string** | Smoking preference to search a reservation. This is compared to the preference on the guest profile of the reservation. | 
 **hotelPackage** | **[]string** | Hotel Package Code to filter the search result. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**HotelAvailability**](HotelAvailability.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetReservationGuarantees

> ReservationGuaranteesPolicies GetReservationGuarantees(ctx, hotelId).ArrivalDate(arrivalDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).BlockId(blockId).ReservationGuestId(reservationGuestId).CompanyId(companyId).TravelAgentId(travelAgentId).SourceId(sourceId).GroupId(groupId).GuaranteeCode(guaranteeCode).CalculateEstimateAmount(calculateEstimateAmount).StartDate(startDate).EndDate(endDate).NumberOfRooms(numberOfRooms).NumberOfAdults(numberOfAdults).NumberOfChildren(numberOfChildren).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get reservation guarantees



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    arrivalDate := time.Now() // string | Arrival Date of the guest.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    ratePlanCode := "ratePlanCode_example" // string | Rate Plan Code to find associated Guarantee Codes. (optional)
    blockId := "blockId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    reservationGuestId := "reservationGuestId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    companyId := "companyId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    travelAgentId := "travelAgentId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    sourceId := "sourceId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    groupId := "groupId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    guaranteeCode := "guaranteeCode_example" // string | Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information. (optional)
    calculateEstimateAmount := true // bool | Determines whether estimated amount to be calculated or not (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    numberOfRooms := int32(56) // int32 |  (optional)
    numberOfAdults := int32(56) // int32 | Defines the number of Adults. (optional)
    numberOfChildren := int32(56) // int32 | Defines the number of Children. (optional)
    roomType := "roomType_example" // string | Room Type for the reservation (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetReservationGuarantees(context.Background(), hotelId).ArrivalDate(arrivalDate).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RatePlanCode(ratePlanCode).BlockId(blockId).ReservationGuestId(reservationGuestId).CompanyId(companyId).TravelAgentId(travelAgentId).SourceId(sourceId).GroupId(groupId).GuaranteeCode(guaranteeCode).CalculateEstimateAmount(calculateEstimateAmount).StartDate(startDate).EndDate(endDate).NumberOfRooms(numberOfRooms).NumberOfAdults(numberOfAdults).NumberOfChildren(numberOfChildren).RoomType(roomType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetReservationGuarantees``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetReservationGuarantees`: ReservationGuaranteesPolicies
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetReservationGuarantees`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetReservationGuaranteesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **arrivalDate** | **string** | Arrival Date of the guest. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **ratePlanCode** | **string** | Rate Plan Code to find associated Guarantee Codes. | 
 **blockId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **reservationGuestId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **companyId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **travelAgentId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **sourceId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **groupId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **guaranteeCode** | **string** | Guarantee Code should be supplied only for the code verification purpose, if the supplied code is valid for the rest of the criteria it will return the response with the Guarantee Code information. | 
 **calculateEstimateAmount** | **bool** | Determines whether estimated amount to be calculated or not | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **numberOfRooms** | **int32** |  | 
 **numberOfAdults** | **int32** | Defines the number of Adults. | 
 **numberOfChildren** | **int32** | Defines the number of Children. | 
 **roomType** | **string** | Room Type for the reservation | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ReservationGuaranteesPolicies**](ReservationGuaranteesPolicies.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRestrictionsByDateRange

> RestrictionsByDateRange GetRestrictionsByDateRange(ctx, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).End(end).FetchSizeByDay(fetchSizeByDay).Limit(limit).RestrictionInfo(restrictionInfo).RestrictionSearchCriteriaStartDate(restrictionSearchCriteriaStartDate).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).FilterCodeCategory(filterCodeCategory).FilterCode(filterCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get hotel restrictions



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    "time"
    openapiclient "github.com/applyinnovations/ohip-sdk/par"
)

func main() {
    hotelId := "hotelId_example" // string | Unique ID that identifies a single hotel property.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    chainName := "chainName_example" // string | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    fetchSizeByDay := int32(56) // int32 | Defines the maximum amount of restrictions by day. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    restrictionInfo := "restrictionInfo_example" // string |  (optional)
    restrictionSearchCriteriaStartDate := time.Now() // string | The starting value of the date range. (optional)
    bookingChannelCode := "bookingChannelCode_example" // string | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. (optional)
    ratePlanCategory := "ratePlanCategory_example" // string | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. (optional)
    ratePlanCode := "ratePlanCode_example" // string | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. (optional)
    roomClass := "roomClass_example" // string | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. (optional)
    roomType := "roomType_example" // string | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. (optional)
    filterCodeCategory := "filterCodeCategory_example" // string | An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode. (optional)
    filterCode := []string{"Inner_example"} // []string | Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.AvailabilityApi.GetRestrictionsByDateRange(context.Background(), hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ChainName(chainName).End(end).FetchSizeByDay(fetchSizeByDay).Limit(limit).RestrictionInfo(restrictionInfo).RestrictionSearchCriteriaStartDate(restrictionSearchCriteriaStartDate).BookingChannelCode(bookingChannelCode).RatePlanCategory(ratePlanCategory).RatePlanCode(ratePlanCode).RoomClass(roomClass).RoomType(roomType).FilterCodeCategory(filterCodeCategory).FilterCode(filterCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `AvailabilityApi.GetRestrictionsByDateRange``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRestrictionsByDateRange`: RestrictionsByDateRange
    fmt.Fprintf(os.Stdout, "Response from `AvailabilityApi.GetRestrictionsByDateRange`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID that identifies a single hotel property. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetRestrictionsByDateRangeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **chainName** | **string** | The name of the hotel chain (e.g., Hilton, Marriott, Hyatt). | 
 **end** | **string** | The ending value of the date range. | 
 **fetchSizeByDay** | **int32** | Defines the maximum amount of restrictions by day. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **restrictionInfo** | **string** |  | 
 **restrictionSearchCriteriaStartDate** | **string** | The starting value of the date range. | 
 **bookingChannelCode** | **string** | Indicates restriction is applicable to specified Booking Channel Code in conjunction with other codes, if specified. | 
 **ratePlanCategory** | **string** | Indicates restriction is applicable to specified Rate Plan Category in conjunction with other codes, if specified. | 
 **ratePlanCode** | **string** | Indicates restriction is applicable to specified Rate Plan Code in conjunction with other codes, if specified. | 
 **roomClass** | **string** | Indicates restriction is applicable to specified Room Category in conjunction with other codes, if specified. | 
 **roomType** | **string** | Indicates restriction is applicable to specified Room Type in conjunction with other codes, if specified. | 
 **filterCodeCategory** | **string** | An enumerated type defining the Filter Code Categort or Type. Values: BookingChannelCode, RoomClass, RoomType, RatePlanCategory, RatePlanCode. | 
 **filterCode** | **[]string** | Defines BookingChannelCode, RoomClass, RoomType, RatePlanCategory or RatePlanCode to filter the Restriction. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RestrictionsByDateRange**](RestrictionsByDateRange.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

