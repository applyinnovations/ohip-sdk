# \ProfileMembershipApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**CalculateMembershipPoints**](ProfileMembershipApi.md#CalculateMembershipPoints) | **Post** /membershipPoints/calculations | Calculate Membership Points
[**ChangeMembershipClaim**](ProfileMembershipApi.md#ChangeMembershipClaim) | **Put** /membershipClaims/{claimId} | Change membership Claim
[**DeleteAwards**](ProfileMembershipApi.md#DeleteAwards) | **Delete** /awards | Delete Awards
[**ExportMembershipAward**](ProfileMembershipApi.md#ExportMembershipAward) | **Get** /memberships/{membershipId}/award | Export Membership Award
[**ExtendMemberPointsToExpire**](ProfileMembershipApi.md#ExtendMemberPointsToExpire) | **Put** /memberships/{membershipId}/pointsToExpire | Extend Member Points set to Expire
[**GetAirlineTransactionsStatus**](ProfileMembershipApi.md#GetAirlineTransactionsStatus) | **Get** /airline/transactions | Get airline transactions status
[**GetAllMembershipClaims**](ProfileMembershipApi.md#GetAllMembershipClaims) | **Get** /membershipClaims | Get membership claims
[**GetAvailableAwardsBasedOnType**](ProfileMembershipApi.md#GetAvailableAwardsBasedOnType) | **Get** /availableAwardsBasedOnType | Get Available Awards
[**GetAwardsToGrant**](ProfileMembershipApi.md#GetAwardsToGrant) | **Get** /awardsToGrant | Get Awards to Grant
[**GetEnrollmentMatchProfiles**](ProfileMembershipApi.md#GetEnrollmentMatchProfiles) | **Get** /profileForEnrollment | Get Profiles for Enrollment
[**GetMemberPointsToExpire**](ProfileMembershipApi.md#GetMemberPointsToExpire) | **Get** /memberships/{membershipId}/pointsToExpire | Get  membership points to expire 
[**GetMembershipAwardExportInfo**](ProfileMembershipApi.md#GetMembershipAwardExportInfo) | **Get** /memberships/{membershipId}/awardExports | Get Membership Award Export Information
[**GetMembershipAwardPointsByHotel**](ProfileMembershipApi.md#GetMembershipAwardPointsByHotel) | **Get** /hotels/{hotelId}/memberships/{membershipId} | Get Membership Issued awards points 
[**GetMembershipClaim**](ProfileMembershipApi.md#GetMembershipClaim) | **Get** /membershipClaims/{claimId} | Get membership claim 
[**GetMembershipClaims**](ProfileMembershipApi.md#GetMembershipClaims) | **Get** /memberships/{membershipId}/claims | Get membership claims
[**GetMembershipDetails**](ProfileMembershipApi.md#GetMembershipDetails) | **Get** /profiles/{profileId}/memberships/info | Get membership information on a profile
[**GetMembershipIssueAwardsList**](ProfileMembershipApi.md#GetMembershipIssueAwardsList) | **Get** /memberships/{membershipId}/awards | Get Membership Award list
[**GetMembershipTransaction**](ProfileMembershipApi.md#GetMembershipTransaction) | **Get** /membershipTransactions/{membershipTransactionId} | Get a membership transaction
[**GetMembershipTransactionAwardPoints**](ProfileMembershipApi.md#GetMembershipTransactionAwardPoints) | **Get** /membershipTransaction/{membershipTransactionId}/awardPoints | Fetch the Award Points Accrued for the current points transaction.
[**GetMembershipTransactionExceptions**](ProfileMembershipApi.md#GetMembershipTransactionExceptions) | **Get** /profiles/{profileId}/membershipTransactionExceptions | Get membership transaction exception details
[**GetMembershipTransactionPointsRejectionReasons**](ProfileMembershipApi.md#GetMembershipTransactionPointsRejectionReasons) | **Get** /membershipTransaction/{membershipTransactionId}/pointRejectionReasons | Fetch the reason points were not awarded for a given points transaction.
[**GetMembershipTransactionRates**](ProfileMembershipApi.md#GetMembershipTransactionRates) | **Get** /membershipTransaction/{membershipTransactionId}/rates | Fetch the rate details associated to current points transaction.
[**GetMembershipTransactionRevenue**](ProfileMembershipApi.md#GetMembershipTransactionRevenue) | **Get** /membershipTransaction/{membershipTransactionId}/revenue | Fetch the revenue details for the stay associated with current point transaction.
[**GetMembershipTransactionTierPoints**](ProfileMembershipApi.md#GetMembershipTransactionTierPoints) | **Get** /membershipTransaction/{membershipTransactionId}/tierPoints | Fetch the Tier Points Accrued for the current points transaction
[**GetMembershipTransactionsSummary**](ProfileMembershipApi.md#GetMembershipTransactionsSummary) | **Get** /memberships/{membershipId}/transactions | Get membership transactions 
[**PostEnrollment**](ProfileMembershipApi.md#PostEnrollment) | **Post** /enrollments | Create an Enrollment
[**PostMembershipClaim**](ProfileMembershipApi.md#PostMembershipClaim) | **Post** /membershipClaims | Create membership Claim
[**PostMembershipTransaction**](ProfileMembershipApi.md#PostMembershipTransaction) | **Post** /memberships/{membershipId}/transactions | Post a membership transaction
[**RedeemAward**](ProfileMembershipApi.md#RedeemAward) | **Put** /profiles/{profileId}/awards/redeem | Redeem an award



## CalculateMembershipPoints

> Status CalculateMembershipPoints(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipPointsToCalculate(membershipPointsToCalculate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Calculate Membership Points



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipPointsToCalculate := *openapiclient.NewCalculateMembershipPointsRequest() // CalculateMembershipPointsRequest | Request to run membership points calculation job.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.CalculateMembershipPoints(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipPointsToCalculate(membershipPointsToCalculate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.CalculateMembershipPoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CalculateMembershipPoints`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.CalculateMembershipPoints`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCalculateMembershipPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipPointsToCalculate** | [**CalculateMembershipPointsRequest**](CalculateMembershipPointsRequest.md) | Request to run membership points calculation job. | 
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


## ChangeMembershipClaim

> Status ChangeMembershipClaim(ctx, claimId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipClaim(membershipClaim).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change membership Claim



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    claimId := "claimId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipClaim := *openapiclient.NewPostMembershipClaimRequest() // PostMembershipClaimRequest | Request object for changing membership claim information.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.ChangeMembershipClaim(context.Background(), claimId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipClaim(membershipClaim).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.ChangeMembershipClaim``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeMembershipClaim`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.ChangeMembershipClaim`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**claimId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeMembershipClaimRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipClaim** | [**PostMembershipClaimRequest**](PostMembershipClaimRequest.md) | Request object for changing membership claim information. | 
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


## DeleteAwards

> Status DeleteAwards(ctx).AwardNumber(awardNumber).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationCancellationNumber(reservationCancellationNumber).ActualCancelPoints(actualCancelPoints).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete Awards



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    awardNumber := float32(8.14) // float32 | An identifying number of the award, assigned by the system when the award was issued.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    reservationCancellationNumber := "reservationCancellationNumber_example" // string | Identifies reservation cancellation number. (optional)
    actualCancelPoints := float32(8.14) // float32 | The amount of points that will be deducted for cancelling the award, from the total guest award points. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.DeleteAwards(context.Background()).AwardNumber(awardNumber).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ReservationCancellationNumber(reservationCancellationNumber).ActualCancelPoints(actualCancelPoints).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.DeleteAwards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAwards`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.DeleteAwards`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAwardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **awardNumber** | **float32** | An identifying number of the award, assigned by the system when the award was issued. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **reservationCancellationNumber** | **string** | Identifies reservation cancellation number. | 
 **actualCancelPoints** | **float32** | The amount of points that will be deducted for cancelling the award, from the total guest award points. | 
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


## ExportMembershipAward

> Status ExportMembershipAward(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateInfoHotelId(rateInfoHotelId).TotalAvailablePoints(totalAvailablePoints).PointsRequired(pointsRequired).CancelPenaltyPoints(cancelPenaltyPoints).CancelPenaltyDays(cancelPenaltyDays).CancelPenaltyCharge(cancelPenaltyCharge).CancelPenaltyType(cancelPenaltyType).RawIssueKey(rawIssueKey).AwardNumber(awardNumber).RateCode(rateCode).RateDescription(rateDescription).RoomLabel(roomLabel).RoomDescription(roomDescription).RoomCategory(roomCategory).StayDate(stayDate).AwardType(awardType).ProductInfoHotelId(productInfoHotelId).ProductInfoTotalAvailablePoints(productInfoTotalAvailablePoints).ProductInfoPointsRequired(productInfoPointsRequired).ProductInfoCancelPenaltyPoints(productInfoCancelPenaltyPoints).ProductInfoCancelPenaltyDays(productInfoCancelPenaltyDays).ProductInfoCancelPenaltyCharge(productInfoCancelPenaltyCharge).ProductInfoCancelPenaltyType(productInfoCancelPenaltyType).ProductInfoRawIssueKey(productInfoRawIssueKey).ProductInfoAwardNumber(productInfoAwardNumber).PackageCode(packageCode).PackageDescription(packageDescription).AwardValidFrom(awardValidFrom).AwardValidTo(awardValidTo).UpgradeInfoAwardType(upgradeInfoAwardType).UpgradeInfoHotelId(upgradeInfoHotelId).UpgradeInfoTotalAvailablePoints(upgradeInfoTotalAvailablePoints).UpgradeInfoPointsRequired(upgradeInfoPointsRequired).UpgradeInfoCancelPenaltyPoints(upgradeInfoCancelPenaltyPoints).UpgradeInfoCancelPenaltyDays(upgradeInfoCancelPenaltyDays).UpgradeInfoCancelPenaltyCharge(upgradeInfoCancelPenaltyCharge).UpgradeInfoCancelPenaltyType(upgradeInfoCancelPenaltyType).UpgradeInfoRawIssueKey(upgradeInfoRawIssueKey).UpgradeInfoAwardNumber(upgradeInfoAwardNumber).FromRoomCategory(fromRoomCategory).ToRoomCategory(toRoomCategory).FromRoomDescription(fromRoomDescription).ToRoomDescription(toRoomDescription).FromRoom(fromRoom).ToRoom(toRoom).UpgradeInfoStayDate(upgradeInfoStayDate).OtherInfoAwardType(otherInfoAwardType).SellBeginDate(sellBeginDate).SellEndDate(sellEndDate).ShortDescription(shortDescription).AwardValue(awardValue).OtherInfoTotalAvailablePoints(otherInfoTotalAvailablePoints).OtherInfoPointsRequired(otherInfoPointsRequired).LongDescription(longDescription).OtherInfoAwardNumber(otherInfoAwardNumber).IssueAwardsHotelId(issueAwardsHotelId).ExternalReservationNumber(externalReservationNumber).ConfirmationBookingNumber(confirmationBookingNumber).AwardSource(awardSource).ArrivalDate(arrivalDate).DepartureDate(departureDate).ExportInfoAwardNumber(exportInfoAwardNumber).NameType(nameType).Name(name).FullName(fullName).NamePrefix(namePrefix).GivenName(givenName).MiddleName(middleName).NameSuffix(nameSuffix).NameTitle(nameTitle).PhoneNumber(phoneNumber).CompanyName(companyName).Id(id).IdContext(idContext).IdType(idType).BarCode(barCode).CreateDateTime(createDateTime).CreatorId(creatorId).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).PrimaryInd(primaryInd).PurgeDate(purgeDate).Type_(type_).TypeDescription(typeDescription).UpdateReservations(updateReservations).AddressLine(addressLine).CityName(cityName).PostalCode(postalCode).CityExtension(cityExtension).County(county).State(state).Code(code).Language(language).CharacterUDFsAltName(characterUDFsAltName).CharacterUDFsName(characterUDFsName).CharacterUDFsValue(characterUDFsValue).NumericUDFsAltName(numericUDFsAltName).NumericUDFsName(numericUDFsName).NumericUDFsValue(numericUDFsValue).DateUDFsAltname(dateUDFsAltname).DateUDFsName(dateUDFsName).DateUDFsValue(dateUDFsValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Export Membership Award



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
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    rateInfoHotelId := "rateInfoHotelId_example" // string | HotelCode where the award will be consumed. (optional)
    totalAvailablePoints := float32(8.14) // float32 | Total award points available for redemption. (optional)
    pointsRequired := float32(8.14) // float32 | The number of points that must be redeemed for this award. (optional)
    cancelPenaltyPoints := float32(8.14) // float32 | The award points that will be forfeited if the cancel penalty charge is applied. (optional)
    cancelPenaltyDays := float32(8.14) // float32 | Number of days before arrival when a reservation may be cancelled without an award points penalty. (optional)
    cancelPenaltyCharge := float32(8.14) // float32 | The cancel penalty charge. (optional)
    cancelPenaltyType := "cancelPenaltyType_example" // string | The penalty charge is either a percentage or a flat number of points. (optional)
    rawIssueKey := "rawIssueKey_example" // string | Issue key in format of Raw data. (optional)
    awardNumber := float32(8.14) // float32 | An identifying number of the award, assigned by the system when the award was issued. (optional)
    rateCode := "rateCode_example" // string | Rate code associated with the award. (optional)
    rateDescription := "rateDescription_example" // string | Rate code description associated with the award. (optional)
    roomLabel := "roomLabel_example" // string | Code for the room type in which the award was issued. (optional)
    roomDescription := "roomDescription_example" // string | Description of the Room. (optional)
    roomCategory := "roomCategory_example" // string | Indicates which room category it belongs. (optional)
    stayDate := time.Now() // string | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. (optional)
    awardType := "awardType_example" // string | Unique code that identifies this award. (optional)
    productInfoHotelId := "productInfoHotelId_example" // string | HotelCode where the award will be consumed. (optional)
    productInfoTotalAvailablePoints := float32(8.14) // float32 | Total award points available for redemption. (optional)
    productInfoPointsRequired := float32(8.14) // float32 | The number of points that must be redeemed for this award. (optional)
    productInfoCancelPenaltyPoints := float32(8.14) // float32 | The award points that will be forfeited if the cancel penalty charge is applied. (optional)
    productInfoCancelPenaltyDays := float32(8.14) // float32 | Number of days before arrival when a reservation may be cancelled without an award points penalty. (optional)
    productInfoCancelPenaltyCharge := float32(8.14) // float32 | The cancel penalty charge. (optional)
    productInfoCancelPenaltyType := "productInfoCancelPenaltyType_example" // string | The penalty charge is either a percentage or a flat number of points. (optional)
    productInfoRawIssueKey := "productInfoRawIssueKey_example" // string | Issue key in format of Raw data. (optional)
    productInfoAwardNumber := float32(8.14) // float32 | An identifying number of the award, assigned by the system when the award was issued. (optional)
    packageCode := "packageCode_example" // string | Package/Product code for the award . (optional)
    packageDescription := "packageDescription_example" // string | Description of the product. (optional)
    awardValidFrom := time.Now() // string | The valid time period from when the award can be issued. (optional)
    awardValidTo := time.Now() // string | The valid time to an issued award. (optional)
    upgradeInfoAwardType := "upgradeInfoAwardType_example" // string | Unique code that identifies this award. (optional)
    upgradeInfoHotelId := "upgradeInfoHotelId_example" // string | HotelCode where the award will be consumed. (optional)
    upgradeInfoTotalAvailablePoints := float32(8.14) // float32 | Total award points available for redemption. (optional)
    upgradeInfoPointsRequired := float32(8.14) // float32 | The number of points that must be redeemed for this award. (optional)
    upgradeInfoCancelPenaltyPoints := float32(8.14) // float32 | The award points that will be forfeited if the cancel penalty charge is applied. (optional)
    upgradeInfoCancelPenaltyDays := float32(8.14) // float32 | Number of days before arrival when a reservation may be cancelled without an award points penalty. (optional)
    upgradeInfoCancelPenaltyCharge := float32(8.14) // float32 | The cancel penalty charge. (optional)
    upgradeInfoCancelPenaltyType := "upgradeInfoCancelPenaltyType_example" // string | The penalty charge is either a percentage or a flat number of points. (optional)
    upgradeInfoRawIssueKey := "upgradeInfoRawIssueKey_example" // string | Issue key in format of Raw data. (optional)
    upgradeInfoAwardNumber := float32(8.14) // float32 | An identifying number of the award, assigned by the system when the award was issued. (optional)
    fromRoomCategory := "fromRoomCategory_example" // string | Indicates room type code for the room prior to the upgrade. (optional)
    toRoomCategory := "toRoomCategory_example" // string | Indicates room type code of the upgrade room. (optional)
    fromRoomDescription := "fromRoomDescription_example" // string | Indicates room type Description for the room prior to the upgrade. (optional)
    toRoomDescription := "toRoomDescription_example" // string | Indicates room type Description of the upgrade room. (optional)
    fromRoom := "fromRoom_example" // string | Indicates room type code for the room prior to the upgrade. (optional)
    toRoom := "toRoom_example" // string | Indicates room type code of the upgrade room. (optional)
    upgradeInfoStayDate := time.Now() // string | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. (optional)
    otherInfoAwardType := "otherInfoAwardType_example" // string | Unique code that identifies this award. (optional)
    sellBeginDate := time.Now() // string | Beginning date of the award. (optional)
    sellEndDate := time.Now() // string | End date that the award will be available. (optional)
    shortDescription := "shortDescription_example" // string | Descriptive name of the award. (optional)
    awardValue := float32(8.14) // float32 | The actual value of the award, in the amount of currency. (optional)
    otherInfoTotalAvailablePoints := float32(8.14) // float32 | Total award points available for redemption. (optional)
    otherInfoPointsRequired := float32(8.14) // float32 | The number of points that must be redeemed for this award. (optional)
    longDescription := "longDescription_example" // string | Detail description of the award. (optional)
    otherInfoAwardNumber := float32(8.14) // float32 | An identifying number of the award, assigned by the system when the award was issued. (optional)
    issueAwardsHotelId := "issueAwardsHotelId_example" // string | HotelCode where the award will be consumed. (optional)
    externalReservationNumber := "externalReservationNumber_example" // string | PMS Reservation number. (optional)
    confirmationBookingNumber := "confirmationBookingNumber_example" // string | ORS Booking number. (optional)
    awardSource := "awardSource_example" // string | The source for the reservation associated with the award. (optional)
    arrivalDate := time.Now() // string | Arrival date of the reservation associated with the award. (optional)
    departureDate := time.Now() // string | Departure date of the reservation associated with the award. (optional)
    exportInfoAwardNumber := float32(8.14) // float32 | Award Number to identify member's information. (optional)
    nameType := "nameType_example" // string | Person's name in an external system. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    fullName := "fullName_example" // string | Full display Name. (optional)
    namePrefix := "namePrefix_example" // string | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    middleName := "middleName_example" // string | The middle name of the person name. (optional)
    nameSuffix := "nameSuffix_example" // string | Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) (optional)
    nameTitle := "nameTitle_example" // string | Degree or honors (e.g., Ph.D., M.D.) (optional)
    phoneNumber := "phoneNumber_example" // string | Phone number (optional)
    companyName := "companyName_example" // string | It returns a Company Name,If the member is associated with a company. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    barCode := "barCode_example" // string | The postal barcode for the address. (optional)
    createDateTime := "createDateTime_example" // string | Time stamp of the creation. (optional)
    creatorId := "creatorId_example" // string | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. (optional)
    lastModifierId := "lastModifierId_example" // string | Identifies the last software system or person to modify a record. (optional)
    lastModifyDateTime := "lastModifyDateTime_example" // string | Time stamp of last modification. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    purgeDate := time.Now() // string | Date an item will be purged from a database (e.g., from a live database to an archive). (optional)
    type_ := "type__example" // string | Defines the type of address (e.g. home, business, other). (optional)
    typeDescription := "typeDescription_example" // string | Describes the type code (optional)
    updateReservations := true // bool | Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address. (optional)
    addressLine := []string{"Inner_example"} // []string | When the address is unformatted (FormattedInd=\"false\") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. (optional)
    cityName := "cityName_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    cityExtension := "cityExtension_example" // string | Post Office City Extension Code number. City Extension mainly used for UK addresses. (optional)
    county := "county_example" // string | County or District Name (e.g., Fairfax). This is read only. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    code := "code_example" // string | Code for a country or a nationality. (optional)
    language := "language_example" // string | Language code associated with the address (optional)
    characterUDFsAltName := []string{"Inner_example"} // []string | Label of user defined field used by vendors or customers. (optional)
    characterUDFsName := []string{"Inner_example"} // []string | Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. (optional)
    characterUDFsValue := []string{"Inner_example"} // []string | Value of user defined field. (optional)
    numericUDFsAltName := []string{"Inner_example"} // []string | Label of user defined field used by vendors or customers. (optional)
    numericUDFsName := []string{"Inner_example"} // []string | Name of user defined field. (optional)
    numericUDFsValue := []float32{float32(123)} // []float32 | Value of user defined field. (optional)
    dateUDFsAltname := []string{"Inner_example"} // []string | Label of user defined field used by vendors or customers. (optional)
    dateUDFsName := []string{"Inner_example"} // []string | Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. (optional)
    dateUDFsValue := []string{time.Now()} // []string | Value of user defined field. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.ExportMembershipAward(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RateInfoHotelId(rateInfoHotelId).TotalAvailablePoints(totalAvailablePoints).PointsRequired(pointsRequired).CancelPenaltyPoints(cancelPenaltyPoints).CancelPenaltyDays(cancelPenaltyDays).CancelPenaltyCharge(cancelPenaltyCharge).CancelPenaltyType(cancelPenaltyType).RawIssueKey(rawIssueKey).AwardNumber(awardNumber).RateCode(rateCode).RateDescription(rateDescription).RoomLabel(roomLabel).RoomDescription(roomDescription).RoomCategory(roomCategory).StayDate(stayDate).AwardType(awardType).ProductInfoHotelId(productInfoHotelId).ProductInfoTotalAvailablePoints(productInfoTotalAvailablePoints).ProductInfoPointsRequired(productInfoPointsRequired).ProductInfoCancelPenaltyPoints(productInfoCancelPenaltyPoints).ProductInfoCancelPenaltyDays(productInfoCancelPenaltyDays).ProductInfoCancelPenaltyCharge(productInfoCancelPenaltyCharge).ProductInfoCancelPenaltyType(productInfoCancelPenaltyType).ProductInfoRawIssueKey(productInfoRawIssueKey).ProductInfoAwardNumber(productInfoAwardNumber).PackageCode(packageCode).PackageDescription(packageDescription).AwardValidFrom(awardValidFrom).AwardValidTo(awardValidTo).UpgradeInfoAwardType(upgradeInfoAwardType).UpgradeInfoHotelId(upgradeInfoHotelId).UpgradeInfoTotalAvailablePoints(upgradeInfoTotalAvailablePoints).UpgradeInfoPointsRequired(upgradeInfoPointsRequired).UpgradeInfoCancelPenaltyPoints(upgradeInfoCancelPenaltyPoints).UpgradeInfoCancelPenaltyDays(upgradeInfoCancelPenaltyDays).UpgradeInfoCancelPenaltyCharge(upgradeInfoCancelPenaltyCharge).UpgradeInfoCancelPenaltyType(upgradeInfoCancelPenaltyType).UpgradeInfoRawIssueKey(upgradeInfoRawIssueKey).UpgradeInfoAwardNumber(upgradeInfoAwardNumber).FromRoomCategory(fromRoomCategory).ToRoomCategory(toRoomCategory).FromRoomDescription(fromRoomDescription).ToRoomDescription(toRoomDescription).FromRoom(fromRoom).ToRoom(toRoom).UpgradeInfoStayDate(upgradeInfoStayDate).OtherInfoAwardType(otherInfoAwardType).SellBeginDate(sellBeginDate).SellEndDate(sellEndDate).ShortDescription(shortDescription).AwardValue(awardValue).OtherInfoTotalAvailablePoints(otherInfoTotalAvailablePoints).OtherInfoPointsRequired(otherInfoPointsRequired).LongDescription(longDescription).OtherInfoAwardNumber(otherInfoAwardNumber).IssueAwardsHotelId(issueAwardsHotelId).ExternalReservationNumber(externalReservationNumber).ConfirmationBookingNumber(confirmationBookingNumber).AwardSource(awardSource).ArrivalDate(arrivalDate).DepartureDate(departureDate).ExportInfoAwardNumber(exportInfoAwardNumber).NameType(nameType).Name(name).FullName(fullName).NamePrefix(namePrefix).GivenName(givenName).MiddleName(middleName).NameSuffix(nameSuffix).NameTitle(nameTitle).PhoneNumber(phoneNumber).CompanyName(companyName).Id(id).IdContext(idContext).IdType(idType).BarCode(barCode).CreateDateTime(createDateTime).CreatorId(creatorId).LastModifierId(lastModifierId).LastModifyDateTime(lastModifyDateTime).PrimaryInd(primaryInd).PurgeDate(purgeDate).Type_(type_).TypeDescription(typeDescription).UpdateReservations(updateReservations).AddressLine(addressLine).CityName(cityName).PostalCode(postalCode).CityExtension(cityExtension).County(county).State(state).Code(code).Language(language).CharacterUDFsAltName(characterUDFsAltName).CharacterUDFsName(characterUDFsName).CharacterUDFsValue(characterUDFsValue).NumericUDFsAltName(numericUDFsAltName).NumericUDFsName(numericUDFsName).NumericUDFsValue(numericUDFsValue).DateUDFsAltname(dateUDFsAltname).DateUDFsName(dateUDFsName).DateUDFsValue(dateUDFsValue).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.ExportMembershipAward``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExportMembershipAward`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.ExportMembershipAward`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiExportMembershipAwardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **rateInfoHotelId** | **string** | HotelCode where the award will be consumed. | 
 **totalAvailablePoints** | **float32** | Total award points available for redemption. | 
 **pointsRequired** | **float32** | The number of points that must be redeemed for this award. | 
 **cancelPenaltyPoints** | **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | 
 **cancelPenaltyDays** | **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | 
 **cancelPenaltyCharge** | **float32** | The cancel penalty charge. | 
 **cancelPenaltyType** | **string** | The penalty charge is either a percentage or a flat number of points. | 
 **rawIssueKey** | **string** | Issue key in format of Raw data. | 
 **awardNumber** | **float32** | An identifying number of the award, assigned by the system when the award was issued. | 
 **rateCode** | **string** | Rate code associated with the award. | 
 **rateDescription** | **string** | Rate code description associated with the award. | 
 **roomLabel** | **string** | Code for the room type in which the award was issued. | 
 **roomDescription** | **string** | Description of the Room. | 
 **roomCategory** | **string** | Indicates which room category it belongs. | 
 **stayDate** | **string** | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. | 
 **awardType** | **string** | Unique code that identifies this award. | 
 **productInfoHotelId** | **string** | HotelCode where the award will be consumed. | 
 **productInfoTotalAvailablePoints** | **float32** | Total award points available for redemption. | 
 **productInfoPointsRequired** | **float32** | The number of points that must be redeemed for this award. | 
 **productInfoCancelPenaltyPoints** | **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | 
 **productInfoCancelPenaltyDays** | **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | 
 **productInfoCancelPenaltyCharge** | **float32** | The cancel penalty charge. | 
 **productInfoCancelPenaltyType** | **string** | The penalty charge is either a percentage or a flat number of points. | 
 **productInfoRawIssueKey** | **string** | Issue key in format of Raw data. | 
 **productInfoAwardNumber** | **float32** | An identifying number of the award, assigned by the system when the award was issued. | 
 **packageCode** | **string** | Package/Product code for the award . | 
 **packageDescription** | **string** | Description of the product. | 
 **awardValidFrom** | **string** | The valid time period from when the award can be issued. | 
 **awardValidTo** | **string** | The valid time to an issued award. | 
 **upgradeInfoAwardType** | **string** | Unique code that identifies this award. | 
 **upgradeInfoHotelId** | **string** | HotelCode where the award will be consumed. | 
 **upgradeInfoTotalAvailablePoints** | **float32** | Total award points available for redemption. | 
 **upgradeInfoPointsRequired** | **float32** | The number of points that must be redeemed for this award. | 
 **upgradeInfoCancelPenaltyPoints** | **float32** | The award points that will be forfeited if the cancel penalty charge is applied. | 
 **upgradeInfoCancelPenaltyDays** | **float32** | Number of days before arrival when a reservation may be cancelled without an award points penalty. | 
 **upgradeInfoCancelPenaltyCharge** | **float32** | The cancel penalty charge. | 
 **upgradeInfoCancelPenaltyType** | **string** | The penalty charge is either a percentage or a flat number of points. | 
 **upgradeInfoRawIssueKey** | **string** | Issue key in format of Raw data. | 
 **upgradeInfoAwardNumber** | **float32** | An identifying number of the award, assigned by the system when the award was issued. | 
 **fromRoomCategory** | **string** | Indicates room type code for the room prior to the upgrade. | 
 **toRoomCategory** | **string** | Indicates room type code of the upgrade room. | 
 **fromRoomDescription** | **string** | Indicates room type Description for the room prior to the upgrade. | 
 **toRoomDescription** | **string** | Indicates room type Description of the upgrade room. | 
 **fromRoom** | **string** | Indicates room type code for the room prior to the upgrade. | 
 **toRoom** | **string** | Indicates room type code of the upgrade room. | 
 **upgradeInfoStayDate** | **string** | The date of the reservation associated with the award. There may be more than one date (multiple nights) associated with award. | 
 **otherInfoAwardType** | **string** | Unique code that identifies this award. | 
 **sellBeginDate** | **string** | Beginning date of the award. | 
 **sellEndDate** | **string** | End date that the award will be available. | 
 **shortDescription** | **string** | Descriptive name of the award. | 
 **awardValue** | **float32** | The actual value of the award, in the amount of currency. | 
 **otherInfoTotalAvailablePoints** | **float32** | Total award points available for redemption. | 
 **otherInfoPointsRequired** | **float32** | The number of points that must be redeemed for this award. | 
 **longDescription** | **string** | Detail description of the award. | 
 **otherInfoAwardNumber** | **float32** | An identifying number of the award, assigned by the system when the award was issued. | 
 **issueAwardsHotelId** | **string** | HotelCode where the award will be consumed. | 
 **externalReservationNumber** | **string** | PMS Reservation number. | 
 **confirmationBookingNumber** | **string** | ORS Booking number. | 
 **awardSource** | **string** | The source for the reservation associated with the award. | 
 **arrivalDate** | **string** | Arrival date of the reservation associated with the award. | 
 **departureDate** | **string** | Departure date of the reservation associated with the award. | 
 **exportInfoAwardNumber** | **float32** | Award Number to identify member&#39;s information. | 
 **nameType** | **string** | Person&#39;s name in an external system. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **fullName** | **string** | Full display Name. | 
 **namePrefix** | **string** | Salutation of honorific (e.g. Mr., Mrs., Ms., Miss, Dr.) | 
 **givenName** | **string** | Given name, first name or names. | 
 **middleName** | **string** | The middle name of the person name. | 
 **nameSuffix** | **string** | Hold various name suffixes and letters (e.g. Jr., Sr., III, Ret., Esq.) | 
 **nameTitle** | **string** | Degree or honors (e.g., Ph.D., M.D.) | 
 **phoneNumber** | **string** | Phone number | 
 **companyName** | **string** | It returns a Company Name,If the member is associated with a company. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **barCode** | **string** | The postal barcode for the address. | 
 **createDateTime** | **string** | Time stamp of the creation. | 
 **creatorId** | **string** | ID of creator. The creator could be a software system identifier or an identifier of an employee resposible for the creation. | 
 **lastModifierId** | **string** | Identifies the last software system or person to modify a record. | 
 **lastModifyDateTime** | **string** | Time stamp of last modification. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **purgeDate** | **string** | Date an item will be purged from a database (e.g., from a live database to an archive). | 
 **type_** | **string** | Defines the type of address (e.g. home, business, other). | 
 **typeDescription** | **string** | Describes the type code | 
 **updateReservations** | **bool** | Indicates whether to update the reservations or not. If true and the address is primary, then all associated active reservations will be updated with the new primary address. | 
 **addressLine** | **[]string** | When the address is unformatted (FormattedInd&#x3D;\&quot;false\&quot;) these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. | 
 **cityName** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **cityExtension** | **string** | Post Office City Extension Code number. City Extension mainly used for UK addresses. | 
 **county** | **string** | County or District Name (e.g., Fairfax). This is read only. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **code** | **string** | Code for a country or a nationality. | 
 **language** | **string** | Language code associated with the address | 
 **characterUDFsAltName** | **[]string** | Label of user defined field used by vendors or customers. | 
 **characterUDFsName** | **[]string** | Used to hold user defined field of Character Type. It is highly recommended to use UDFC01, UDFC02,...UDFC40 (Total 40) as Character/String UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | 
 **characterUDFsValue** | **[]string** | Value of user defined field. | 
 **numericUDFsAltName** | **[]string** | Label of user defined field used by vendors or customers. | 
 **numericUDFsName** | **[]string** | Name of user defined field. | 
 **numericUDFsValue** | **[]float32** | Value of user defined field. | 
 **dateUDFsAltname** | **[]string** | Label of user defined field used by vendors or customers. | 
 **dateUDFsName** | **[]string** | Used to hold user defined field of Date Type. It is highly recommended to use UDFD01, UDFD02,...UDFN20 (Total 20) as Date UDF names(commonly used on Reservation, Profile etc.). Name is not restricted using enumeration, to provide flexibility of different name usage if required. | 
 **dateUDFsValue** | **[]string** | Value of user defined field. | 
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


## ExtendMemberPointsToExpire

> Status ExtendMemberPointsToExpire(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExtendMemberPointsToExpire(extendMemberPointsToExpire).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Extend Member Points set to Expire



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    extendMemberPointsToExpire := *openapiclient.NewExtendMemberPointsToExpireRequest() // ExtendMemberPointsToExpireRequest | Request object to extend a member points to expire.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.ExtendMemberPointsToExpire(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExtendMemberPointsToExpire(extendMemberPointsToExpire).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.ExtendMemberPointsToExpire``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExtendMemberPointsToExpire`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.ExtendMemberPointsToExpire`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiExtendMemberPointsToExpireRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **extendMemberPointsToExpire** | [**ExtendMemberPointsToExpireRequest**](ExtendMemberPointsToExpireRequest.md) | Request object to extend a member points to expire. | 
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


## GetAirlineTransactionsStatus

> AirlineTransactionsStatus GetAirlineTransactionsStatus(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).BatchId(batchId).BatchIdType(batchIdType).ImportDate(importDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get airline transactions status



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    batchId := "batchId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    batchIdType := "batchIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    importDate := time.Now() // string | The date when this batch was imported into OPERA (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetAirlineTransactionsStatus(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).BatchId(batchId).BatchIdType(batchIdType).ImportDate(importDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetAirlineTransactionsStatus``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAirlineTransactionsStatus`: AirlineTransactionsStatus
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetAirlineTransactionsStatus`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAirlineTransactionsStatusRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **batchId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **batchIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **importDate** | **string** | The date when this batch was imported into OPERA | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AirlineTransactionsStatus**](AirlineTransactionsStatus.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllMembershipClaims

> MembershipClaims GetAllMembershipClaims(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipId(membershipId).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).Name(name).GivenName(givenName).MembershipType(membershipType).ClaimType(claimType).Source(source).Owner(owner).ClaimNumber(claimNumber).ClaimNoContext(claimNoContext).ClaimNoType(claimNoType).HotelId(hotelId).ConfirmationNo(confirmationNo).Submitter(submitter).ClaimStatus(claimStatus).CloseDateEnd(closeDateEnd).CloseDateStart(closeDateStart).ClaimDateEnd(claimDateEnd).ClaimDateStart(claimDateStart).ReplyByEnd(replyByEnd).ReplyByStart(replyByStart).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get membership claims



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipId := "membershipId_example" // string | Id to get the claims. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    membershipType := "membershipType_example" // string | Membership Type code. (optional)
    claimType := "claimType_example" // string | Type of user-definable claim to be searched. (optional)
    source := "source_example" // string | Source of the membership claim. (optional)
    owner := "owner_example" // string | Unique application user ID of the person responsible for handling the claim. (optional)
    claimNumber := "claimNumber_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    claimNoContext := "claimNoContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    claimNoType := "claimNoType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelId := "hotelId_example" // string | Property where the stay took place. (optional)
    confirmationNo := "confirmationNo_example" // string | Reservation confirmation or booking reference number. (optional)
    submitter := "submitter_example" // string | Application user ID of the user who entered the claim. (optional)
    claimStatus := "claimStatus_example" // string | Status of the claim.(Open, Waiting for Manager, etc.) (optional)
    closeDateEnd := time.Now() // string | The ending value of the date range. (optional)
    closeDateStart := time.Now() // string | The starting value of the date range. (optional)
    claimDateEnd := time.Now() // string | The ending value of the date range. (optional)
    claimDateStart := time.Now() // string | The starting value of the date range. (optional)
    replyByEnd := time.Now() // string | The ending value of the date range. (optional)
    replyByStart := time.Now() // string | The starting value of the date range. (optional)
    arrivalEnd := time.Now() // string | The ending value of the date range. (optional)
    arrivalStart := time.Now() // string | The starting value of the date range. (optional)
    departureEnd := time.Now() // string | The ending value of the date range. (optional)
    departureStart := time.Now() // string | The starting value of the date range. (optional)
    approvalStatus := "approvalStatus_example" // string | Claim approve or reject status. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetAllMembershipClaims(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipId(membershipId).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).Name(name).GivenName(givenName).MembershipType(membershipType).ClaimType(claimType).Source(source).Owner(owner).ClaimNumber(claimNumber).ClaimNoContext(claimNoContext).ClaimNoType(claimNoType).HotelId(hotelId).ConfirmationNo(confirmationNo).Submitter(submitter).ClaimStatus(claimStatus).CloseDateEnd(closeDateEnd).CloseDateStart(closeDateStart).ClaimDateEnd(claimDateEnd).ClaimDateStart(claimDateStart).ReplyByEnd(replyByEnd).ReplyByStart(replyByStart).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetAllMembershipClaims``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAllMembershipClaims`: MembershipClaims
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetAllMembershipClaims`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAllMembershipClaimsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipId** | **string** | Id to get the claims. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **membershipType** | **string** | Membership Type code. | 
 **claimType** | **string** | Type of user-definable claim to be searched. | 
 **source** | **string** | Source of the membership claim. | 
 **owner** | **string** | Unique application user ID of the person responsible for handling the claim. | 
 **claimNumber** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **claimNoContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **claimNoType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelId** | **string** | Property where the stay took place. | 
 **confirmationNo** | **string** | Reservation confirmation or booking reference number. | 
 **submitter** | **string** | Application user ID of the user who entered the claim. | 
 **claimStatus** | **string** | Status of the claim.(Open, Waiting for Manager, etc.) | 
 **closeDateEnd** | **string** | The ending value of the date range. | 
 **closeDateStart** | **string** | The starting value of the date range. | 
 **claimDateEnd** | **string** | The ending value of the date range. | 
 **claimDateStart** | **string** | The starting value of the date range. | 
 **replyByEnd** | **string** | The ending value of the date range. | 
 **replyByStart** | **string** | The starting value of the date range. | 
 **arrivalEnd** | **string** | The ending value of the date range. | 
 **arrivalStart** | **string** | The starting value of the date range. | 
 **departureEnd** | **string** | The ending value of the date range. | 
 **departureStart** | **string** | The starting value of the date range. | 
 **approvalStatus** | **string** | Claim approve or reject status. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipClaims**](MembershipClaims.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAvailableAwardsBasedOnType

> AvailableAwardsBasedOnType GetAvailableAwardsBasedOnType(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AwardBasedOn(awardBasedOn).MembershipType(membershipType).RateCriteriaHotelId(rateCriteriaHotelId).ArrivalDate(arrivalDate).DepartureDate(departureDate).BookingDate(bookingDate).PointsBelow(pointsBelow).PointsAbove(pointsAbove).RateCode(rateCode).RoomCategory(roomCategory).Rooms(rooms).AwardType(awardType).ProductCriteriaMembershipType(productCriteriaMembershipType).ProductCriteriaHotelId(productCriteriaHotelId).ProductCriteriaArrivalDate(productCriteriaArrivalDate).ProductCriteriaDepartureDate(productCriteriaDepartureDate).ProductCriteriaBookingDate(productCriteriaBookingDate).ProductCriteriaPointsBelow(productCriteriaPointsBelow).ProductCriteriaPointsAbove(productCriteriaPointsAbove).PackageCode(packageCode).UpgradeCriteriaMembershipType(upgradeCriteriaMembershipType).UpgradeCriteriaHotelId(upgradeCriteriaHotelId).UpgradeCriteriaArrivalDate(upgradeCriteriaArrivalDate).UpgradeCriteriaDepartureDate(upgradeCriteriaDepartureDate).UpgradeCriteriaBookingDate(upgradeCriteriaBookingDate).UpgradeCriteriaPointsBelow(upgradeCriteriaPointsBelow).UpgradeCriteriaPointsAbove(upgradeCriteriaPointsAbove).FromRoomCategory(fromRoomCategory).ToRoomCategory(toRoomCategory).UpgradeCriteriaRooms(upgradeCriteriaRooms).UpgradeCriteriaAwardType(upgradeCriteriaAwardType).AwardCode(awardCode).TotalBillingAmount(totalBillingAmount).CurrencyCode(currencyCode).FTPaymentCriteriaPointsBelow(fTPaymentCriteriaPointsBelow).FTPaymentCriteriaPointsAbove(fTPaymentCriteriaPointsAbove).OtherCriteriaAwardCode(otherCriteriaAwardCode).OtherCriteriaMembershipType(otherCriteriaMembershipType).MembershipLevel(membershipLevel).ShortDescription(shortDescription).ValueBelow(valueBelow).ValueAbove(valueAbove).OtherCriteriaPointsBelow(otherCriteriaPointsBelow).OtherCriteriaPointsAbove(otherCriteriaPointsAbove).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Available Awards



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
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    awardBasedOn := "awardBasedOn_example" // string | This award allows a guest to apply available membership points towards the balance of his or her bill. (optional)
    membershipType := "membershipType_example" // string | Membership type for which awards are defined. (optional)
    rateCriteriaHotelId := "rateCriteriaHotelId_example" // string | Hotel name where the award will be consumed. (optional)
    arrivalDate := time.Now() // string | Arrival date of the reservation associated with the award. (optional)
    departureDate := time.Now() // string | Departure date of the reservation associated with the award. (optional)
    bookingDate := time.Now() // string | Booking date of the reservation associated with the award. (optional)
    pointsBelow := int32(56) // int32 | Minimum number of points the member is willing to redeem. (optional)
    pointsAbove := int32(56) // int32 | Maximum number of points the member is willing to redeem. (optional)
    rateCode := "rateCode_example" // string | Indicates rate code for the room type. (optional)
    roomCategory := "roomCategory_example" // string | Indicates which room category it belongs. (optional)
    rooms := "rooms_example" // string | Number of rooms that the member will be using. (optional)
    awardType := "awardType_example" // string | Indicates the award type or code. (optional)
    productCriteriaMembershipType := "productCriteriaMembershipType_example" // string | Membership type for which awards are defined. (optional)
    productCriteriaHotelId := "productCriteriaHotelId_example" // string | Hotel name where the award will be consumed. (optional)
    productCriteriaArrivalDate := time.Now() // string | Arrival date of the reservation associated with the award. (optional)
    productCriteriaDepartureDate := time.Now() // string | Departure date of the reservation associated with the award. (optional)
    productCriteriaBookingDate := time.Now() // string | Booking date of the reservation associated with the award. (optional)
    productCriteriaPointsBelow := int32(56) // int32 | Minimum number of points the member is willing to redeem. (optional)
    productCriteriaPointsAbove := int32(56) // int32 | Maximum number of points the member is willing to redeem. (optional)
    packageCode := "packageCode_example" // string | Package/Product code for the award to check availability. (optional)
    upgradeCriteriaMembershipType := "upgradeCriteriaMembershipType_example" // string | Membership type for which awards are defined. (optional)
    upgradeCriteriaHotelId := "upgradeCriteriaHotelId_example" // string | Hotel name where the award will be consumed. (optional)
    upgradeCriteriaArrivalDate := time.Now() // string | Arrival date of the reservation associated with the award. (optional)
    upgradeCriteriaDepartureDate := time.Now() // string | Departure date of the reservation associated with the award. (optional)
    upgradeCriteriaBookingDate := time.Now() // string | Booking date of the reservation associated with the award. (optional)
    upgradeCriteriaPointsBelow := int32(56) // int32 | Minimum number of points the member is willing to redeem. (optional)
    upgradeCriteriaPointsAbove := int32(56) // int32 | Maximum number of points the member is willing to redeem. (optional)
    fromRoomCategory := "fromRoomCategory_example" // string | Indicates availability of upgrade awards based on the room type(range of room types ) (optional)
    toRoomCategory := "toRoomCategory_example" // string | Indicates availability of upgrade awards based on the room type(range of room types ) (optional)
    upgradeCriteriaRooms := "upgradeCriteriaRooms_example" // string | Number of rooms that the member will be using. (optional)
    upgradeCriteriaAwardType := "upgradeCriteriaAwardType_example" // string | Indicates the award type or code. (optional)
    awardCode := "awardCode_example" // string | Unique code identifying the Award. (optional)
    totalBillingAmount := float32(8.14) // float32 | Total amount for the bill. (optional)
    currencyCode := "currencyCode_example" // string | The currency code for the member. (optional)
    fTPaymentCriteriaPointsBelow := int32(56) // int32 | Minimum number of points the member is willing to redeem. (optional)
    fTPaymentCriteriaPointsAbove := int32(56) // int32 | Maximum number of points the member is willing to redeem. (optional)
    otherCriteriaAwardCode := "otherCriteriaAwardCode_example" // string | Unique code identifying the award. (optional)
    otherCriteriaMembershipType := "otherCriteriaMembershipType_example" // string | Membership type for which awards are defined. (optional)
    membershipLevel := "membershipLevel_example" // string | Level of this Membership Type. (optional)
    shortDescription := "shortDescription_example" // string | Name or code identifying the award. (optional)
    valueBelow := float32(8.14) // float32 | Amount of currency of the worth of the other award,below or actual value. (optional)
    valueAbove := float32(8.14) // float32 | Amount of currency of the worth of the other award,above or actual value. (optional)
    otherCriteriaPointsBelow := int32(56) // int32 | Minimum number of points the member is willing to redeem. (optional)
    otherCriteriaPointsAbove := int32(56) // int32 | Maximum number of points the member is willing to redeem. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetAvailableAwardsBasedOnType(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AwardBasedOn(awardBasedOn).MembershipType(membershipType).RateCriteriaHotelId(rateCriteriaHotelId).ArrivalDate(arrivalDate).DepartureDate(departureDate).BookingDate(bookingDate).PointsBelow(pointsBelow).PointsAbove(pointsAbove).RateCode(rateCode).RoomCategory(roomCategory).Rooms(rooms).AwardType(awardType).ProductCriteriaMembershipType(productCriteriaMembershipType).ProductCriteriaHotelId(productCriteriaHotelId).ProductCriteriaArrivalDate(productCriteriaArrivalDate).ProductCriteriaDepartureDate(productCriteriaDepartureDate).ProductCriteriaBookingDate(productCriteriaBookingDate).ProductCriteriaPointsBelow(productCriteriaPointsBelow).ProductCriteriaPointsAbove(productCriteriaPointsAbove).PackageCode(packageCode).UpgradeCriteriaMembershipType(upgradeCriteriaMembershipType).UpgradeCriteriaHotelId(upgradeCriteriaHotelId).UpgradeCriteriaArrivalDate(upgradeCriteriaArrivalDate).UpgradeCriteriaDepartureDate(upgradeCriteriaDepartureDate).UpgradeCriteriaBookingDate(upgradeCriteriaBookingDate).UpgradeCriteriaPointsBelow(upgradeCriteriaPointsBelow).UpgradeCriteriaPointsAbove(upgradeCriteriaPointsAbove).FromRoomCategory(fromRoomCategory).ToRoomCategory(toRoomCategory).UpgradeCriteriaRooms(upgradeCriteriaRooms).UpgradeCriteriaAwardType(upgradeCriteriaAwardType).AwardCode(awardCode).TotalBillingAmount(totalBillingAmount).CurrencyCode(currencyCode).FTPaymentCriteriaPointsBelow(fTPaymentCriteriaPointsBelow).FTPaymentCriteriaPointsAbove(fTPaymentCriteriaPointsAbove).OtherCriteriaAwardCode(otherCriteriaAwardCode).OtherCriteriaMembershipType(otherCriteriaMembershipType).MembershipLevel(membershipLevel).ShortDescription(shortDescription).ValueBelow(valueBelow).ValueAbove(valueAbove).OtherCriteriaPointsBelow(otherCriteriaPointsBelow).OtherCriteriaPointsAbove(otherCriteriaPointsAbove).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetAvailableAwardsBasedOnType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAvailableAwardsBasedOnType`: AvailableAwardsBasedOnType
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetAvailableAwardsBasedOnType`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAvailableAwardsBasedOnTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **awardBasedOn** | **string** | This award allows a guest to apply available membership points towards the balance of his or her bill. | 
 **membershipType** | **string** | Membership type for which awards are defined. | 
 **rateCriteriaHotelId** | **string** | Hotel name where the award will be consumed. | 
 **arrivalDate** | **string** | Arrival date of the reservation associated with the award. | 
 **departureDate** | **string** | Departure date of the reservation associated with the award. | 
 **bookingDate** | **string** | Booking date of the reservation associated with the award. | 
 **pointsBelow** | **int32** | Minimum number of points the member is willing to redeem. | 
 **pointsAbove** | **int32** | Maximum number of points the member is willing to redeem. | 
 **rateCode** | **string** | Indicates rate code for the room type. | 
 **roomCategory** | **string** | Indicates which room category it belongs. | 
 **rooms** | **string** | Number of rooms that the member will be using. | 
 **awardType** | **string** | Indicates the award type or code. | 
 **productCriteriaMembershipType** | **string** | Membership type for which awards are defined. | 
 **productCriteriaHotelId** | **string** | Hotel name where the award will be consumed. | 
 **productCriteriaArrivalDate** | **string** | Arrival date of the reservation associated with the award. | 
 **productCriteriaDepartureDate** | **string** | Departure date of the reservation associated with the award. | 
 **productCriteriaBookingDate** | **string** | Booking date of the reservation associated with the award. | 
 **productCriteriaPointsBelow** | **int32** | Minimum number of points the member is willing to redeem. | 
 **productCriteriaPointsAbove** | **int32** | Maximum number of points the member is willing to redeem. | 
 **packageCode** | **string** | Package/Product code for the award to check availability. | 
 **upgradeCriteriaMembershipType** | **string** | Membership type for which awards are defined. | 
 **upgradeCriteriaHotelId** | **string** | Hotel name where the award will be consumed. | 
 **upgradeCriteriaArrivalDate** | **string** | Arrival date of the reservation associated with the award. | 
 **upgradeCriteriaDepartureDate** | **string** | Departure date of the reservation associated with the award. | 
 **upgradeCriteriaBookingDate** | **string** | Booking date of the reservation associated with the award. | 
 **upgradeCriteriaPointsBelow** | **int32** | Minimum number of points the member is willing to redeem. | 
 **upgradeCriteriaPointsAbove** | **int32** | Maximum number of points the member is willing to redeem. | 
 **fromRoomCategory** | **string** | Indicates availability of upgrade awards based on the room type(range of room types ) | 
 **toRoomCategory** | **string** | Indicates availability of upgrade awards based on the room type(range of room types ) | 
 **upgradeCriteriaRooms** | **string** | Number of rooms that the member will be using. | 
 **upgradeCriteriaAwardType** | **string** | Indicates the award type or code. | 
 **awardCode** | **string** | Unique code identifying the Award. | 
 **totalBillingAmount** | **float32** | Total amount for the bill. | 
 **currencyCode** | **string** | The currency code for the member. | 
 **fTPaymentCriteriaPointsBelow** | **int32** | Minimum number of points the member is willing to redeem. | 
 **fTPaymentCriteriaPointsAbove** | **int32** | Maximum number of points the member is willing to redeem. | 
 **otherCriteriaAwardCode** | **string** | Unique code identifying the award. | 
 **otherCriteriaMembershipType** | **string** | Membership type for which awards are defined. | 
 **membershipLevel** | **string** | Level of this Membership Type. | 
 **shortDescription** | **string** | Name or code identifying the award. | 
 **valueBelow** | **float32** | Amount of currency of the worth of the other award,below or actual value. | 
 **valueAbove** | **float32** | Amount of currency of the worth of the other award,above or actual value. | 
 **otherCriteriaPointsBelow** | **int32** | Minimum number of points the member is willing to redeem. | 
 **otherCriteriaPointsAbove** | **int32** | Maximum number of points the member is willing to redeem. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AvailableAwardsBasedOnType**](AvailableAwardsBasedOnType.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAwardsToGrant

> AwardsToGrant GetAwardsToGrant(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AwardBasedOn(awardBasedOn).TotalPointsRequired(totalPointsRequired).Rooms(rooms).MembershipId(membershipId).MembershipType(membershipType).AwardType(awardType).GrantAwardInfoHotelId(grantAwardInfoHotelId).RateCode(rateCode).RoomCategory(roomCategory).FromRoom(fromRoom).ToRoom(toRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Awards to Grant



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    awardBasedOn := "awardBasedOn_example" // string | This award allows a guest to apply available membership points towards the balance of his or her bill. (optional)
    totalPointsRequired := float32(8.14) // float32 | The number of points that must be redeemed for this award. (optional)
    rooms := "rooms_example" // string | Number of rooms that the member will be using. (optional)
    membershipId := float32(8.14) // float32 | Unique Membership ID to get award info. (optional)
    membershipType := "membershipType_example" // string | Membership type for which awards are defined. (optional)
    awardType := "awardType_example" // string | Indicates the award type or code. (optional)
    grantAwardInfoHotelId := "grantAwardInfoHotelId_example" // string | HotelCode where the award will be consumed. (optional)
    rateCode := "rateCode_example" // string | Rate code associated with the award. (optional)
    roomCategory := "roomCategory_example" // string | Indicates which room category it belongs. (optional)
    fromRoom := "fromRoom_example" // string | Indicates room type code for the room prior to the upgrade. (optional)
    toRoom := "toRoom_example" // string | Indicates room type code of the upgrade room. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetAwardsToGrant(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AwardBasedOn(awardBasedOn).TotalPointsRequired(totalPointsRequired).Rooms(rooms).MembershipId(membershipId).MembershipType(membershipType).AwardType(awardType).GrantAwardInfoHotelId(grantAwardInfoHotelId).RateCode(rateCode).RoomCategory(roomCategory).FromRoom(fromRoom).ToRoom(toRoom).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetAwardsToGrant``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAwardsToGrant`: AwardsToGrant
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetAwardsToGrant`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAwardsToGrantRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **awardBasedOn** | **string** | This award allows a guest to apply available membership points towards the balance of his or her bill. | 
 **totalPointsRequired** | **float32** | The number of points that must be redeemed for this award. | 
 **rooms** | **string** | Number of rooms that the member will be using. | 
 **membershipId** | **float32** | Unique Membership ID to get award info. | 
 **membershipType** | **string** | Membership type for which awards are defined. | 
 **awardType** | **string** | Indicates the award type or code. | 
 **grantAwardInfoHotelId** | **string** | HotelCode where the award will be consumed. | 
 **rateCode** | **string** | Rate code associated with the award. | 
 **roomCategory** | **string** | Indicates which room category it belongs. | 
 **fromRoom** | **string** | Indicates room type code for the room prior to the upgrade. | 
 **toRoom** | **string** | Indicates room type code of the upgrade room. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AwardsToGrant**](AwardsToGrant.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetEnrollmentMatchProfiles

> EnrollmentMatchProfiles GetEnrollmentMatchProfiles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalDatabaseID(externalDatabaseID).MatchedProfileType(matchedProfileType).Language(language).GivenName(givenName).Surname(surname).NameTitle(nameTitle).AddressId(addressId).AddressIdContext(addressIdContext).AddressIdType(addressIdType).PrimaryInd(primaryInd).Type_(type_).AddressLine(addressLine).CityName(cityName).PostalCode(postalCode).County(county).State(state).CountryCode(countryCode).LanguageCode(languageCode).BusinessSegment(businessSegment).Territory(territory).TraceCode(traceCode).OwnerCode(ownerCode).InfluenceCode(influenceCode).HasMore(hasMore).TotalResults(totalResults).TelephoneId(telephoneId).TelephoneIdContext(telephoneIdContext).TelephoneIdType(telephoneIdType).PhoneNumber(phoneNumber).PhoneTechType(phoneTechType).PhoneUseType(phoneUseType).PhoneUseTypeDescription(phoneUseTypeDescription).TelephonePrimaryInd(telephonePrimaryInd).EmailInfoId(emailInfoId).EmailInfoIdContext(emailInfoIdContext).EmailInfoIdType(emailInfoIdType).EmailAddress(emailAddress).EmailPrimaryInd(emailPrimaryInd).EmailType(emailType).UrlId(urlId).UrlIdContext(urlIdContext).UrlIdType(urlIdType).UrlPrimaryInd(urlPrimaryInd).UrlType(urlType).MembershipId(membershipId).NameOnCard(nameOnCard).MembershipLevel(membershipLevel).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).PaymentMethodCode(paymentMethodCode).Amount(amount).AmountCode(amountCode).Comments(comments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profiles for Enrollment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    externalDatabaseID := "externalDatabaseID_example" // string | Enrollment details will be fetched from this External database. (optional)
    matchedProfileType := "matchedProfileType_example" // string | The types of Profile handled by the web service. (optional)
    language := "language_example" // string | Language code associated with an alternate name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    surname := "surname_example" // string | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. (optional)
    nameTitle := "nameTitle_example" // string | Degree or honors (e.g., Ph.D., M.D.) (optional)
    addressId := "addressId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    addressIdContext := "addressIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    addressIdType := "addressIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    primaryInd := true // bool | When true, indicates a primary information. (optional)
    type_ := "type__example" // string | Defines the type of address (e.g. home, business, other). (optional)
    addressLine := []string{"Inner_example"} // []string | When the address is unformatted (FormattedInd=\"false\") these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. (optional)
    cityName := "cityName_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    county := "county_example" // string | County or District Name (e.g., Fairfax). This is read only. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    languageCode := "languageCode_example" // string | Language code associated with the address (optional)
    businessSegment := []string{"Inner_example"} // []string | Business/Market Segment associated to the profile. (optional)
    territory := "territory_example" // string | Territory associated to the profile. (optional)
    traceCode := "traceCode_example" // string | Trace Code associated to the profile. (optional)
    ownerCode := "ownerCode_example" // string | Owner Code associated to the profile. (optional)
    influenceCode := "influenceCode_example" // string | Influence Code associated to the profile. (optional)
    hasMore := true // bool | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. (optional)
    totalResults := int32(56) // int32 | Total number of rows queried (optional)
    telephoneId := "telephoneId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    telephoneIdContext := "telephoneIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    telephoneIdType := "telephoneIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    phoneNumber := "phoneNumber_example" // string | Telephone number assigned to a single location. (optional)
    phoneTechType := "phoneTechType_example" // string | Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc. (optional)
    phoneUseType := "phoneUseType_example" // string | Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening). (optional)
    phoneUseTypeDescription := "phoneUseTypeDescription_example" // string | Description of the PhoneUseType code (optional)
    telephonePrimaryInd := true // bool | When true, indicates a primary information. (optional)
    emailInfoId := "emailInfoId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    emailInfoIdContext := "emailInfoIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    emailInfoIdType := "emailInfoIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    emailAddress := "emailAddress_example" // string | Defines the e-mail address. (optional)
    emailPrimaryInd := true // bool | When true, indicates a primary information. (optional)
    emailType := "emailType_example" // string | Defines the purpose of the e-mail address (e.g. personal, business, listserve). (optional)
    urlId := "urlId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    urlIdContext := "urlIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    urlIdType := "urlIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    urlPrimaryInd := true // bool | When true, indicates a primary information. (optional)
    urlType := "urlType_example" // string | Defines the purpose of the URL address, such as personal, business, public, etc. (optional)
    membershipId := "membershipId_example" // string | Card Number of the membership. (optional)
    nameOnCard := "nameOnCard_example" // string | Name to be displayed on the membership card. (optional)
    membershipLevel := "membershipLevel_example" // string | Indicates the membership level. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileContext := "profileContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    paymentMethodCode := "paymentMethodCode_example" // string | Code. (optional)
    amount := float32(8.14) // float32 | Amount/Fee to enroll to membership Program. (optional)
    amountCode := "amountCode_example" // string | Code. (optional)
    comments := "comments_example" // string | Payment Comments. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetEnrollmentMatchProfiles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExternalDatabaseID(externalDatabaseID).MatchedProfileType(matchedProfileType).Language(language).GivenName(givenName).Surname(surname).NameTitle(nameTitle).AddressId(addressId).AddressIdContext(addressIdContext).AddressIdType(addressIdType).PrimaryInd(primaryInd).Type_(type_).AddressLine(addressLine).CityName(cityName).PostalCode(postalCode).County(county).State(state).CountryCode(countryCode).LanguageCode(languageCode).BusinessSegment(businessSegment).Territory(territory).TraceCode(traceCode).OwnerCode(ownerCode).InfluenceCode(influenceCode).HasMore(hasMore).TotalResults(totalResults).TelephoneId(telephoneId).TelephoneIdContext(telephoneIdContext).TelephoneIdType(telephoneIdType).PhoneNumber(phoneNumber).PhoneTechType(phoneTechType).PhoneUseType(phoneUseType).PhoneUseTypeDescription(phoneUseTypeDescription).TelephonePrimaryInd(telephonePrimaryInd).EmailInfoId(emailInfoId).EmailInfoIdContext(emailInfoIdContext).EmailInfoIdType(emailInfoIdType).EmailAddress(emailAddress).EmailPrimaryInd(emailPrimaryInd).EmailType(emailType).UrlId(urlId).UrlIdContext(urlIdContext).UrlIdType(urlIdType).UrlPrimaryInd(urlPrimaryInd).UrlType(urlType).MembershipId(membershipId).NameOnCard(nameOnCard).MembershipLevel(membershipLevel).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).PaymentMethodCode(paymentMethodCode).Amount(amount).AmountCode(amountCode).Comments(comments).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetEnrollmentMatchProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetEnrollmentMatchProfiles`: EnrollmentMatchProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetEnrollmentMatchProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetEnrollmentMatchProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **externalDatabaseID** | **string** | Enrollment details will be fetched from this External database. | 
 **matchedProfileType** | **string** | The types of Profile handled by the web service. | 
 **language** | **string** | Language code associated with an alternate name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **surname** | **string** | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. | 
 **nameTitle** | **string** | Degree or honors (e.g., Ph.D., M.D.) | 
 **addressId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **addressIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **addressIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **primaryInd** | **bool** | When true, indicates a primary information. | 
 **type_** | **string** | Defines the type of address (e.g. home, business, other). | 
 **addressLine** | **[]string** | When the address is unformatted (FormattedInd&#x3D;\&quot;false\&quot;) these lines will contain free form address details. When the address is formatted and street number and street name must be sent independently, the street number will be sent using StreetNmbr, and the street name will be sent in the first AddressLine occurrence. | 
 **cityName** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **county** | **string** | County or District Name (e.g., Fairfax). This is read only. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **languageCode** | **string** | Language code associated with the address | 
 **businessSegment** | **[]string** | Business/Market Segment associated to the profile. | 
 **territory** | **string** | Territory associated to the profile. | 
 **traceCode** | **string** | Trace Code associated to the profile. | 
 **ownerCode** | **string** | Owner Code associated to the profile. | 
 **influenceCode** | **string** | Influence Code associated to the profile. | 
 **hasMore** | **bool** | Indicates whether all the records are included in the response or not. Absence of the attribute values should be consider as all rows fetched in the response. | 
 **totalResults** | **int32** | Total number of rows queried | 
 **telephoneId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **telephoneIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **telephoneIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **phoneNumber** | **string** | Telephone number assigned to a single location. | 
 **phoneTechType** | **string** | Indicates type of technology associated with this telephone number, such as Voice, Data, Fax, Pager, Mobile, TTY, etc. | 
 **phoneUseType** | **string** | Describes the type of telephone number, in the context of its general use (e.g. Home, Business, Emergency Contact, Travel Arranger, Day, Evening). | 
 **phoneUseTypeDescription** | **string** | Description of the PhoneUseType code | 
 **telephonePrimaryInd** | **bool** | When true, indicates a primary information. | 
 **emailInfoId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **emailInfoIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **emailInfoIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **emailAddress** | **string** | Defines the e-mail address. | 
 **emailPrimaryInd** | **bool** | When true, indicates a primary information. | 
 **emailType** | **string** | Defines the purpose of the e-mail address (e.g. personal, business, listserve). | 
 **urlId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **urlIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **urlIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **urlPrimaryInd** | **bool** | When true, indicates a primary information. | 
 **urlType** | **string** | Defines the purpose of the URL address, such as personal, business, public, etc. | 
 **membershipId** | **string** | Card Number of the membership. | 
 **nameOnCard** | **string** | Name to be displayed on the membership card. | 
 **membershipLevel** | **string** | Indicates the membership level. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **paymentMethodCode** | **string** | Code. | 
 **amount** | **float32** | Amount/Fee to enroll to membership Program. | 
 **amountCode** | **string** | Code. | 
 **comments** | **string** | Payment Comments. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**EnrollmentMatchProfiles**](EnrollmentMatchProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMemberPointsToExpire

> MemberPointsToExpire GetMemberPointsToExpire(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get  membership points to expire 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMemberPointsToExpire(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMemberPointsToExpire``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMemberPointsToExpire`: MemberPointsToExpire
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMemberPointsToExpire`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMemberPointsToExpireRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MemberPointsToExpire**](MemberPointsToExpire.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipAwardExportInfo

> MembershipAwardExportInfo GetMembershipAwardExportInfo(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AwardNumber(awardNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Membership Award Export Information



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    awardNumber := float32(8.14) // float32 | Award Number to identify member's information. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipAwardExportInfo(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).AwardNumber(awardNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipAwardExportInfo``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipAwardExportInfo`: MembershipAwardExportInfo
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipAwardExportInfo`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipAwardExportInfoRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **awardNumber** | **float32** | Award Number to identify member&#39;s information. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipAwardExportInfo**](MembershipAwardExportInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipAwardPointsByHotel

> MembershipAwardPointsByHotel GetMembershipAwardPointsByHotel(ctx, membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Membership Issued awards points 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipAwardPointsByHotel(context.Background(), membershipId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipAwardPointsByHotel``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipAwardPointsByHotel`: MembershipAwardPointsByHotel
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipAwardPointsByHotel`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipAwardPointsByHotelRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipAwardPointsByHotel**](MembershipAwardPointsByHotel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipClaim

> MembershipClaim GetMembershipClaim(ctx, claimId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get membership claim 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    claimId := "claimId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for membership claim instructions that can be used in requests for partial operations. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipClaim(context.Background(), claimId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipClaim``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipClaim`: MembershipClaim
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipClaim`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**claimId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipClaimRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | Simple type for membership claim instructions that can be used in requests for partial operations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipClaim**](MembershipClaim.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipClaims

> MembershipClaims GetMembershipClaims(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).Name(name).GivenName(givenName).MembershipType(membershipType).ClaimType(claimType).Source(source).Owner(owner).ClaimNumber(claimNumber).ClaimNoContext(claimNoContext).ClaimNoType(claimNoType).HotelId(hotelId).ConfirmationNo(confirmationNo).Submitter(submitter).ClaimStatus(claimStatus).CloseDateEnd(closeDateEnd).CloseDateStart(closeDateStart).ClaimDateEnd(claimDateEnd).ClaimDateStart(claimDateStart).ReplyByEnd(replyByEnd).ReplyByStart(replyByStart).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get membership claims



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
    membershipId := "membershipId_example" // string | Id to get the claims.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    membershipType := "membershipType_example" // string | Membership Type code. (optional)
    claimType := "claimType_example" // string | Type of user-definable claim to be searched. (optional)
    source := "source_example" // string | Source of the membership claim. (optional)
    owner := "owner_example" // string | Unique application user ID of the person responsible for handling the claim. (optional)
    claimNumber := "claimNumber_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    claimNoContext := "claimNoContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    claimNoType := "claimNoType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelId := "hotelId_example" // string | Property where the stay took place. (optional)
    confirmationNo := "confirmationNo_example" // string | Reservation confirmation or booking reference number. (optional)
    submitter := "submitter_example" // string | Application user ID of the user who entered the claim. (optional)
    claimStatus := "claimStatus_example" // string | Status of the claim.(Open, Waiting for Manager, etc.) (optional)
    closeDateEnd := time.Now() // string | The ending value of the date range. (optional)
    closeDateStart := time.Now() // string | The starting value of the date range. (optional)
    claimDateEnd := time.Now() // string | The ending value of the date range. (optional)
    claimDateStart := time.Now() // string | The starting value of the date range. (optional)
    replyByEnd := time.Now() // string | The ending value of the date range. (optional)
    replyByStart := time.Now() // string | The starting value of the date range. (optional)
    arrivalEnd := time.Now() // string | The ending value of the date range. (optional)
    arrivalStart := time.Now() // string | The starting value of the date range. (optional)
    departureEnd := time.Now() // string | The ending value of the date range. (optional)
    departureStart := time.Now() // string | The starting value of the date range. (optional)
    approvalStatus := "approvalStatus_example" // string | Claim approve or reject status. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipClaims(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).Name(name).GivenName(givenName).MembershipType(membershipType).ClaimType(claimType).Source(source).Owner(owner).ClaimNumber(claimNumber).ClaimNoContext(claimNoContext).ClaimNoType(claimNoType).HotelId(hotelId).ConfirmationNo(confirmationNo).Submitter(submitter).ClaimStatus(claimStatus).CloseDateEnd(closeDateEnd).CloseDateStart(closeDateStart).ClaimDateEnd(claimDateEnd).ClaimDateStart(claimDateStart).ReplyByEnd(replyByEnd).ReplyByStart(replyByStart).ArrivalEnd(arrivalEnd).ArrivalStart(arrivalStart).DepartureEnd(departureEnd).DepartureStart(departureStart).ApprovalStatus(approvalStatus).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipClaims``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipClaims`: MembershipClaims
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipClaims`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** | Id to get the claims. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipClaimsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **membershipType** | **string** | Membership Type code. | 
 **claimType** | **string** | Type of user-definable claim to be searched. | 
 **source** | **string** | Source of the membership claim. | 
 **owner** | **string** | Unique application user ID of the person responsible for handling the claim. | 
 **claimNumber** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **claimNoContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **claimNoType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelId** | **string** | Property where the stay took place. | 
 **confirmationNo** | **string** | Reservation confirmation or booking reference number. | 
 **submitter** | **string** | Application user ID of the user who entered the claim. | 
 **claimStatus** | **string** | Status of the claim.(Open, Waiting for Manager, etc.) | 
 **closeDateEnd** | **string** | The ending value of the date range. | 
 **closeDateStart** | **string** | The starting value of the date range. | 
 **claimDateEnd** | **string** | The ending value of the date range. | 
 **claimDateStart** | **string** | The starting value of the date range. | 
 **replyByEnd** | **string** | The ending value of the date range. | 
 **replyByStart** | **string** | The starting value of the date range. | 
 **arrivalEnd** | **string** | The ending value of the date range. | 
 **arrivalStart** | **string** | The starting value of the date range. | 
 **departureEnd** | **string** | The ending value of the date range. | 
 **departureStart** | **string** | The starting value of the date range. | 
 **approvalStatus** | **string** | Claim approve or reject status. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipClaims**](MembershipClaims.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipDetails

> MemberInformation GetMembershipDetails(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).MembershipType(membershipType).MembershipId(membershipId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).Mode(mode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get membership information on a profile



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
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipType := "membershipType_example" // string | The type of the membership. (optional)
    membershipId := "membershipId_example" // string | The card number associated with this membership. (optional)
    hotelId := "hotelId_example" // string | Property from which the membership stay information was received. (optional)
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    duration := "duration_example" // string |  (optional)
    mode := "mode_example" // string | Whether member info search will pertain to transaction dates/ stay dates/ points credit dates. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipDetails(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).MembershipType(membershipType).MembershipId(membershipId).HotelId(hotelId).StartDate(startDate).EndDate(endDate).Duration(duration).Mode(mode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipDetails`: MemberInformation
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipType** | **string** | The type of the membership. | 
 **membershipId** | **string** | The card number associated with this membership. | 
 **hotelId** | **string** | Property from which the membership stay information was received. | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **duration** | **string** |  | 
 **mode** | **string** | Whether member info search will pertain to transaction dates/ stay dates/ points credit dates. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MemberInformation**](MemberInformation.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipIssueAwardsList

> MembershipIssueAwards GetMembershipIssueAwardsList(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipType(membershipType).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Membership Award list



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipType := "membershipType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 20)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 1)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipIssueAwardsList(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipType(membershipType).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipIssueAwardsList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipIssueAwardsList`: MembershipIssueAwards
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipIssueAwardsList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipIssueAwardsListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 20]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 1]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipIssueAwards**](MembershipIssueAwards.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransaction

> MembershipTransaction GetMembershipTransaction(ctx, membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a membership transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipTransactionId := "membershipTransactionId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransaction(context.Background(), membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransaction`: MembershipTransaction
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipTransactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipTransaction**](MembershipTransaction.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionAwardPoints

> CalculatedPoints GetMembershipTransactionAwardPoints(ctx, membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the Award Points Accrued for the current points transaction.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipTransactionId := "membershipTransactionId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionAwardPoints(context.Background(), membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionAwardPoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionAwardPoints`: CalculatedPoints
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionAwardPoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipTransactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionAwardPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalculatedPoints**](CalculatedPoints.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionExceptions

> MembershipTransactionExceptions GetMembershipTransactionExceptions(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).End(end).Start(start).Id(id).IdContext(idContext).Type_(type_).MembershipType(membershipType).MembershipLevel(membershipLevel).MembershipCardNo(membershipCardNo).IncludeEPE(includeEPE).ExceptionType(exceptionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get membership transaction exception details



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
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Membership belongs to which Hotel. (optional)
    end := time.Now() // string | The ending value of the date range. (optional)
    start := time.Now() // string | The starting value of the date range. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipType := "membershipType_example" // string | The type of the membership. (optional)
    membershipLevel := "membershipLevel_example" // string | The current level of the membership. (optional)
    membershipCardNo := "membershipCardNo_example" // string | The card number associated with this membership. (optional)
    includeEPE := true // bool | Indicates to Include External Processing Exception (optional)
    exceptionType := int32(56) // int32 | Indicates the type of Exception like Exception not resolved,Points Rejected on Exception etc., (optional)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionExceptions(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).End(end).Start(start).Id(id).IdContext(idContext).Type_(type_).MembershipType(membershipType).MembershipLevel(membershipLevel).MembershipCardNo(membershipCardNo).IncludeEPE(includeEPE).ExceptionType(exceptionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionExceptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionExceptions`: MembershipTransactionExceptions
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionExceptions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionExceptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Membership belongs to which Hotel. | 
 **end** | **string** | The ending value of the date range. | 
 **start** | **string** | The starting value of the date range. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipType** | **string** | The type of the membership. | 
 **membershipLevel** | **string** | The current level of the membership. | 
 **membershipCardNo** | **string** | The card number associated with this membership. | 
 **includeEPE** | **bool** | Indicates to Include External Processing Exception | 
 **exceptionType** | **int32** | Indicates the type of Exception like Exception not resolved,Points Rejected on Exception etc., | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipTransactionExceptions**](MembershipTransactionExceptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionPointsRejectionReasons

> PointsRejectionReasons GetMembershipTransactionPointsRejectionReasons(ctx, membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the reason points were not awarded for a given points transaction.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipTransactionId := "membershipTransactionId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionPointsRejectionReasons(context.Background(), membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionPointsRejectionReasons``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionPointsRejectionReasons`: PointsRejectionReasons
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionPointsRejectionReasons`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipTransactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionPointsRejectionReasonsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**PointsRejectionReasons**](PointsRejectionReasons.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionRates

> Rates GetMembershipTransactionRates(ctx, membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the rate details associated to current points transaction.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipTransactionId := "membershipTransactionId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionRates(context.Background(), membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionRates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionRates`: Rates
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionRates`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipTransactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionRatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Rates**](Rates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionRevenue

> Revenues GetMembershipTransactionRevenue(ctx, membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the revenue details for the stay associated with current point transaction.



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipTransactionId := "membershipTransactionId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionRevenue(context.Background(), membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionRevenue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionRevenue`: Revenues
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionRevenue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipTransactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionRevenueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Revenues**](Revenues.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionTierPoints

> CalculatedPoints GetMembershipTransactionTierPoints(ctx, membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the Tier Points Accrued for the current points transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipTransactionId := "membershipTransactionId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionTierPoints(context.Background(), membershipTransactionId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionTierPoints``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionTierPoints`: CalculatedPoints
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionTierPoints`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipTransactionId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionTierPointsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CalculatedPoints**](CalculatedPoints.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTransactionsSummary

> MembershipTransactionsSummary GetMembershipTransactionsSummary(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get membership transactions 



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.GetMembershipTransactionsSummary(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.GetMembershipTransactionsSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTransactionsSummary`: MembershipTransactionsSummary
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.GetMembershipTransactionsSummary`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTransactionsSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipTransactionsSummary**](MembershipTransactionsSummary.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PostEnrollment

> Status PostEnrollment(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Enrollment(enrollment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Enrollment



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    enrollment := *openapiclient.NewPostEnrollmentRequest() // PostEnrollmentRequest | Request object to create profile enrollment.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.PostEnrollment(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Enrollment(enrollment).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.PostEnrollment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostEnrollment`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.PostEnrollment`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostEnrollmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **enrollment** | [**PostEnrollmentRequest**](PostEnrollmentRequest.md) | Request object to create profile enrollment. | 
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


## PostMembershipClaim

> Status PostMembershipClaim(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipClaim(membershipClaim).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create membership Claim



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipClaim := *openapiclient.NewPostMembershipClaimRequest() // PostMembershipClaimRequest | Request object for creating membership claim.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.PostMembershipClaim(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipClaim(membershipClaim).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.PostMembershipClaim``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMembershipClaim`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.PostMembershipClaim`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostMembershipClaimRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipClaim** | [**PostMembershipClaimRequest**](PostMembershipClaimRequest.md) | Request object for creating membership claim. | 
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


## PostMembershipTransaction

> Status PostMembershipTransaction(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipTransaction(membershipTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Post a membership transaction



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    membershipId := "membershipId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipTransaction := *openapiclient.NewPostMembershipTransactionRequest() // PostMembershipTransactionRequest | Request object for creating a membership transaction.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.PostMembershipTransaction(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipTransaction(membershipTransaction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.PostMembershipTransaction``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMembershipTransaction`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.PostMembershipTransaction`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMembershipTransactionRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipTransaction** | [**PostMembershipTransactionRequest**](PostMembershipTransactionRequest.md) | Request object for creating a membership transaction. | 
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


## RedeemAward

> Award RedeemAward(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Award(award).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Redeem an award



### Example

```go
package main

import (
    "context"
    "fmt"
    "os"
    openapiclient "github.com/applyinnovations/ohip-sdk/crm"
)

func main() {
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    award := *openapiclient.NewRedeemAwardRequest() // RedeemAwardRequest | Request object to redeem award.
    xExternalsystem := "EXTERNALSYSTEMCODE" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileMembershipApi.RedeemAward(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Award(award).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileMembershipApi.RedeemAward``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RedeemAward`: Award
    fmt.Fprintf(os.Stdout, "Response from `ProfileMembershipApi.RedeemAward`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRedeemAwardRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **award** | [**RedeemAwardRequest**](RedeemAwardRequest.md) | Request object to redeem award. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Award**](Award.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

