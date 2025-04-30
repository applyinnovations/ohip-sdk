# \ProfileAPI

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**AddReplaceStayMembership**](ProfileAPI.md#AddReplaceStayMembership) | **Post** /stayMembership | This API facilitates attaching or replacing a membership to a given stayRecord.
[**ChangeMembership**](ProfileAPI.md#ChangeMembership) | **Put** /profiles/{profileId}/membershipType/{membershipType}/membershipId/{membershipId} | Change membership information on a profile
[**ChangeProfileCashieringDetails**](ProfileAPI.md#ChangeProfileCashieringDetails) | **Put** /profiles/{profileId}/cashieringDetails | Change cashiering details for a profile
[**ChangeProfileOwners**](ProfileAPI.md#ChangeProfileOwners) | **Put** /profiles/{profileId}/owners | Change profile owners
[**ChangeStagedProfile**](ProfileAPI.md#ChangeStagedProfile) | **Put** /stagedProfile/{id} | Change a staged profile
[**CheckProfileType**](ProfileAPI.md#CheckProfileType) | **Get** /profiles/action/validate | Validate and check profiles
[**ClearProfileServiceCache**](ProfileAPI.md#ClearProfileServiceCache) | **Delete** /service/profileService/cache | Operation to delete cache for Profile service
[**ConsumeECertificate**](ProfileAPI.md#ConsumeECertificate) | **Put** /ecertificates/{certificateId} | Consume an E-Certificate
[**CopyProfileCommissionAccount**](ProfileAPI.md#CopyProfileCommissionAccount) | **Put** /hotels/{hotelId}/profiles/{profileId}/commissionAccount | Copy profile commission account
[**DeleteAccountForecast**](ProfileAPI.md#DeleteAccountForecast) | **Delete** /profiles/{profileId}/hotels/{hotelId}/forecasts/periodCodes/{periodCode} | Delete account forecast in a hotel by period code
[**DeleteCertificate**](ProfileAPI.md#DeleteCertificate) | **Delete** /certificates | Delete certificate
[**DeleteECertificate**](ProfileAPI.md#DeleteECertificate) | **Delete** /ecertificates/{certificateId} | Delete e-certificate
[**DeleteGlobalPreference**](ProfileAPI.md#DeleteGlobalPreference) | **Delete** /profiles/{profileId}/preferenceType/{preferenceType}/preferences/{preferenceCode} | Delete a global preference from a profile
[**DeleteMembership**](ProfileAPI.md#DeleteMembership) | **Delete** /profiles/{profileId}/membershipType/{membershipType}/membershipId/{membershipId} | Delete membership information from a profile
[**DeleteMultipleAccountForecasts**](ProfileAPI.md#DeleteMultipleAccountForecasts) | **Delete** /profiles/{profileId}/hotels/{hotelId}/forecasts | Delete multiple account forecasts
[**DeletePreference**](ProfileAPI.md#DeletePreference) | **Delete** /profiles/{profileId}/hotels/{hotelId}/preferenceType/{preferenceType}/preferences/{preferenceCode} | Delete a preference from a profile
[**DeleteProfile**](ProfileAPI.md#DeleteProfile) | **Delete** /profiles/{profileId} | Forget or delete a profile by ID
[**DeleteProfileAttachment**](ProfileAPI.md#DeleteProfileAttachment) | **Delete** /profiles/{profileId}/attachments/{attachmentId} | Delete profile attachment
[**DeleteProfileCommissionAccount**](ProfileAPI.md#DeleteProfileCommissionAccount) | **Delete** /profiles/{profileId}/commissionAccount | Delete a commission account from a profile
[**DeleteProfileFlexFieldValue**](ProfileAPI.md#DeleteProfileFlexFieldValue) | **Delete** /hotels/{hotelId}/profiles/{profileId}/flexFieldCode/{flexFieldCode} | Operation to delete a flex field.
[**DeleteStagedProfile**](ProfileAPI.md#DeleteStagedProfile) | **Delete** /profiles/{profileId}/hotels/{hotelId}/stagedProfile | Delete a staged profile
[**DistributePreference**](ProfileAPI.md#DistributePreference) | **Put** /profiles/{profileId}/preferences | Distribute preferences on a profile
[**ExtendECertificate**](ProfileAPI.md#ExtendECertificate) | **Post** /ecertificates/{certificateId}/extensions | Extend E-Certificate Expiry date
[**GetAccountForecasts**](ProfileAPI.md#GetAccountForecasts) | **Get** /profiles/{profileId}/hotels/{hotelId}/forecasts | Fetch Account Forecasts by hotel
[**GetAddress**](ProfileAPI.md#GetAddress) | **Get** /address | Get city states
[**GetAllProfileFlexFieldValues**](ProfileAPI.md#GetAllProfileFlexFieldValues) | **Get** /profiles/{profileId}/flexFieldValues | Operation to fetch flex field values.
[**GetAwards**](ProfileAPI.md#GetAwards) | **Get** /profiles/{profileId}/awardsAndCertificates | Get Profile awards and certificates
[**GetCashieringDetails**](ProfileAPI.md#GetCashieringDetails) | **Get** /profiles/{profileId}/cashieringDetails | Get cashiering details for a profile
[**GetCompanyProfile**](ProfileAPI.md#GetCompanyProfile) | **Get** /companies/{corporateID} | Get company profile by corporate ID
[**GetDuplicateExternalSubscriptions**](ProfileAPI.md#GetDuplicateExternalSubscriptions) | **Get** /duplicateExternalSubscriptions | Get profiles with duplicate external subscriptions 
[**GetDuplicateOPERASubscriptions**](ProfileAPI.md#GetDuplicateOPERASubscriptions) | **Get** /duplicateOPERASubscriptions | Get profiles with duplicate OPERA Cloud subscriptions
[**GetECertificates**](ProfileAPI.md#GetECertificates) | **Get** /ecertificates | Get e-certificate
[**GetFulfillmentExportLogs**](ProfileAPI.md#GetFulfillmentExportLogs) | **Get** /memberships/{membershipId}/fullfillmentExportLogs | Get Fulfillment Export Logs
[**GetGuestProfile**](ProfileAPI.md#GetGuestProfile) | **Get** /guests/{guestId} | Get guest profile by guest ID
[**GetLinkedProfiles**](ProfileAPI.md#GetLinkedProfiles) | **Get** /profiles/{profileId}/links | Get linked profiles
[**GetMatchProfiles**](ProfileAPI.md#GetMatchProfiles) | **Get** /profiles/{profileId}/matches | Get profile matches
[**GetMembershipTierProjections**](ProfileAPI.md#GetMembershipTierProjections) | **Get** /membershipTierProjections | Get Membership Tier Projection
[**GetMergeProfilesSnapshot**](ProfileAPI.md#GetMergeProfilesSnapshot) | **Get** /profiles/{survivorProfileId}/merges/snapshot | Get merge profiles snapshot
[**GetMergeStageProfileSnapshot**](ProfileAPI.md#GetMergeStageProfileSnapshot) | **Get** /profiles/{survivorProfileId}/stageProfiles/snapshot | Get merge stage profile snapshot
[**GetPreferenceForProfile**](ProfileAPI.md#GetPreferenceForProfile) | **Get** /profiles/{profileId}/preferences | Get preferences on a profile
[**GetProfile**](ProfileAPI.md#GetProfile) | **Get** /profiles/{profileId} | Get profile by ID
[**GetProfileAccounts**](ProfileAPI.md#GetProfileAccounts) | **Get** /profiles/{profileId}/accounts | Get profile accounts
[**GetProfileActivityLog**](ProfileAPI.md#GetProfileActivityLog) | **Get** /profiles/activityLog | Fetch profile activity log
[**GetProfileAttachments**](ProfileAPI.md#GetProfileAttachments) | **Get** /profiles/{profileId}/attachments | Get profile attachments
[**GetProfileByExtId**](ProfileAPI.md#GetProfileByExtId) | **Get** /externalSystems/{extSystemCode}/profiles/{profileExternalId} | Get profile by external ID
[**GetProfileCommissionAccount**](ProfileAPI.md#GetProfileCommissionAccount) | **Get** /profiles/{profileId}/commissionAccount | Get commission account on a profile
[**GetProfileFlexFieldValue**](ProfileAPI.md#GetProfileFlexFieldValue) | **Get** /hotels/{hotelId}/profiles/{profileId}/flexFieldValues | Operation to fetch flex field values.
[**GetProfileMatch**](ProfileAPI.md#GetProfileMatch) | **Get** /profileMatch | Fetch the profile Id if a unique guest profile Exists
[**GetProfileOwners**](ProfileAPI.md#GetProfileOwners) | **Get** /profiles/{profileId}/owners | Get profile owners
[**GetProfileRelationships**](ProfileAPI.md#GetProfileRelationships) | **Get** /profiles/{profileId}/relationships | FetchProfileRelationships method provides the ability to retrieve a profile relationships for a profile based on the unique internal profile ID specified.
[**GetProfileTransactions**](ProfileAPI.md#GetProfileTransactions) | **Get** /profileTransactions/{profileId} | Get Profile Transactions 
[**GetProfiles**](ProfileAPI.md#GetProfiles) | **Get** /profiles | Search for profile(s)
[**GetProfilesByIds**](ProfileAPI.md#GetProfilesByIds) | **Get** /profilesByIds | Search for profile(s)
[**GetProfilesMatchList**](ProfileAPI.md#GetProfilesMatchList) | **Get** /profilesMatchList/profileType/{profileType} | Get profiles match list.
[**GetRecentlyAccessedProfiles**](ProfileAPI.md#GetRecentlyAccessedProfiles) | **Get** /recentlyAccessedProfiles | Fetch recently accessed profiles
[**GetStagedProfile**](ProfileAPI.md#GetStagedProfile) | **Get** /stagedProfile/{id} | Get a staged profile
[**GetStagedProfiles**](ProfileAPI.md#GetStagedProfiles) | **Get** /stagedProfiles | Get staged profiles
[**GetStayHistory**](ProfileAPI.md#GetStayHistory) | **Get** /profiles/{profileId}/stayHistory | FetchStayHistory method provides stay history and future reservations of a profile based on the unique internal ID specified.
[**GetStayRecordDetail**](ProfileAPI.md#GetStayRecordDetail) | **Get** /stayRecord/{stayRecordId} | Get Stay Record Detail.
[**GetSuspendedAddresses**](ProfileAPI.md#GetSuspendedAddresses) | **Get** /suspendedAddresses | Fetch Suspended Profile Addresses
[**GetSuspendedProfileErrorSummary**](ProfileAPI.md#GetSuspendedProfileErrorSummary) | **Get** /suspendedProfileErrorSummary | Get suspended profile error summary details
[**MergeProfiles**](ProfileAPI.md#MergeProfiles) | **Post** /profiles/{survivorProfileId}/merges | Merge two profiles by ID
[**PingProfileService**](ProfileAPI.md#PingProfileService) | **Get** /services/profile/status | Operation to check the status of profile service
[**PostAccountForecast**](ProfileAPI.md#PostAccountForecast) | **Post** /profiles/{profileId}/hotels/{hotelId}/forecasts | Create account forecast in a hotel
[**PostCompanyProfile**](ProfileAPI.md#PostCompanyProfile) | **Post** /companies | This API facilitates creation of a company/agent/group/source profile in OPERA.
[**PostECertificate**](ProfileAPI.md#PostECertificate) | **Post** /ecertificates | Create e-certificate
[**PostGuestProfile**](ProfileAPI.md#PostGuestProfile) | **Post** /guests | Create a guest, contact or employee profile in OPERA
[**PostMembership**](ProfileAPI.md#PostMembership) | **Post** /profiles/{profileId}/memberships | Create membership on a profile
[**PostMembershipNumber**](ProfileAPI.md#PostMembershipNumber) | **Post** /memberships/{membershipType}/membershipNumbers | Generate membership number
[**PostPreference**](ProfileAPI.md#PostPreference) | **Post** /profiles/{profileId}/preferences | Add preferences to a profile
[**PostProfile**](ProfileAPI.md#PostProfile) | **Post** /profiles | Create a profile
[**PostProfileCommissionAccount**](ProfileAPI.md#PostProfileCommissionAccount) | **Post** /profiles/{profileId}/commissionAccount | Add a commission account on a profile
[**PostProfileFlexFieldValue**](ProfileAPI.md#PostProfileFlexFieldValue) | **Post** /hotels/{hotelId}/profiles/{profileId}/flexFieldValues | Operation to create a flex field with value for a module.
[**PostProfileOwners**](ProfileAPI.md#PostProfileOwners) | **Post** /profiles/{profileId}/owners | Assign profile owners
[**PostProfileRelationship**](ProfileAPI.md#PostProfileRelationship) | **Post** /profiles/{sourceProfileId}/relationships/{targetProfileId} | CreateProfileRelationship method provides the ability to create profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
[**PostStayRecord**](ProfileAPI.md#PostStayRecord) | **Post** /stayRecord | This API facilitates uploading stage records to LCS.
[**ProcessStagedProfile**](ProfileAPI.md#ProcessStagedProfile) | **Put** /processStagedProfile | Process a staged profile
[**PutAccountForecast**](ProfileAPI.md#PutAccountForecast) | **Put** /profiles/{profileId}/hotels/{hotelId}/forecasts/periodCodes/{periodCode} | Update account forecast in a hotel by period code
[**PutProfile**](ProfileAPI.md#PutProfile) | **Put** /profiles/{profileId} | Update a profile by ID
[**PutProfileByExtId**](ProfileAPI.md#PutProfileByExtId) | **Put** /externalSystems/{extSystemCode}/profiles/{profileExternalId} | Update by external ID
[**PutProfileFlexFieldValue**](ProfileAPI.md#PutProfileFlexFieldValue) | **Put** /hotels/{hotelId}/profiles/{profileId}/flexFieldValues | Operation to update flex field value.
[**PutProfileRelationship**](ProfileAPI.md#PutProfileRelationship) | **Put** /profiles/{sourceProfileId}/relationships/{targetProfileId} | ChangeProfileRelationship method provides the ability to update(delete and add) profile relationship based on the request criteria of SourceProfileID , TargetProfileID, To Be ChangedProfileID and SourceProfileRelationType specified.
[**PutProfilesMatchList**](ProfileAPI.md#PutProfilesMatchList) | **Put** /profilesMatchList | Updates a list of matchIds to skip or don&#39;t skip profile match.
[**RemoveProfileRelationship**](ProfileAPI.md#RemoveProfileRelationship) | **Delete** /profiles/{sourceProfileId}/relationships/{targetProfileId} | DeleteProfileRelationship method provides the ability to delete profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
[**SetProfileCommissionAccount**](ProfileAPI.md#SetProfileCommissionAccount) | **Put** /profiles/{profileId}/commissionAccount | Set profile commission account
[**StoreEmail**](ProfileAPI.md#StoreEmail) | **Post** /profiles/{profileId}/emails | Create an Email.
[**SynchronizeProfileSubscriptions**](ProfileAPI.md#SynchronizeProfileSubscriptions) | **Put** /synchronizeProfileSubscriptions | Synchronize profile subscriptions
[**ValidateForgetProfiles**](ProfileAPI.md#ValidateForgetProfiles) | **Put** /validateForgetProfiles | Validate forget profiles
[**ValidateReservationsForProfile**](ProfileAPI.md#ValidateReservationsForProfile) | **Put** /profiles/{profileId}/reservations/action/validate | Check future past bookings
[**VerifyECertificate**](ProfileAPI.md#VerifyECertificate) | **Put** /ecertificates/{certificateId}/action/validate | Verify E-Certificate Number



## AddReplaceStayMembership

> Status AddReplaceStayMembership(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayMembershipDetails(stayMembershipDetails).AcceptLanguage(acceptLanguage).Execute()

This API facilitates attaching or replacing a membership to a given stayRecord.



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
    stayMembershipDetails := *openapiclient.NewStayMembershipDetails(openapiclient.stayMembershipAttachMode("ADD")) // StayMembershipDetails | Request object for Membership details to attach or replace.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.AddReplaceStayMembership(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayMembershipDetails(stayMembershipDetails).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.AddReplaceStayMembership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `AddReplaceStayMembership`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.AddReplaceStayMembership`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiAddReplaceStayMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **stayMembershipDetails** | [**StayMembershipDetails**](StayMembershipDetails.md) | Request object for Membership details to attach or replace. | 
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


## ChangeMembership

> ChangedMembership ChangeMembership(ctx, membershipId, membershipType, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Membership(membership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change membership information on a profile



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
    membershipType := "membershipType_example" // string | 
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membership := *openapiclient.NewMembership() // Membership | Request object for change/update membership. This object contains unique identifiers for each profile and list of membership details to be updated/changed. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ChangeMembership(context.Background(), membershipId, membershipType, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Membership(membership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ChangeMembership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeMembership`: ChangedMembership
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ChangeMembership`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 
**membershipType** | **string** |  | 
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membership** | [**Membership**](Membership.md) | Request object for change/update membership. This object contains unique identifiers for each profile and list of membership details to be updated/changed. The standard optional Opera Context element is also included. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangedMembership**](ChangedMembership.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ChangeProfileCashieringDetails

> Status ChangeProfileCashieringDetails(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCashieringDetails(profileCashieringDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change cashiering details for a profile



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
    profileCashieringDetails := *openapiclient.NewProfileCashieringDetails() // ProfileCashieringDetails | Request object for changing the profile cashiering details.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ChangeProfileCashieringDetails(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCashieringDetails(profileCashieringDetails).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ChangeProfileCashieringDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeProfileCashieringDetails`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ChangeProfileCashieringDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeProfileCashieringDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileCashieringDetails** | [**ProfileCashieringDetails**](ProfileCashieringDetails.md) | Request object for changing the profile cashiering details. | 
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


## ChangeProfileOwners

> Status ChangeProfileOwners(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileOwners(profileOwners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change profile owners



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
    profileOwners := *openapiclient.NewChangeProfileOwnersRequest() // ChangeProfileOwnersRequest | Request object to change profile owners.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ChangeProfileOwners(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileOwners(profileOwners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ChangeProfileOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeProfileOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ChangeProfileOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeProfileOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileOwners** | [**ChangeProfileOwnersRequest**](ChangeProfileOwnersRequest.md) | Request object to change profile owners. | 
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


## ChangeStagedProfile

> Status ChangeStagedProfile(ctx, id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StagedProfile(stagedProfile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Change a staged profile



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
    id := "id_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    stagedProfile := *openapiclient.NewStagedProfile() // StagedProfile | Request object for changing the staged profile.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ChangeStagedProfile(context.Background(), id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StagedProfile(stagedProfile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ChangeStagedProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ChangeStagedProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ChangeStagedProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiChangeStagedProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **stagedProfile** | [**StagedProfile**](StagedProfile.md) | Request object for changing the staged profile. | 
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


## CheckProfileType

> CheckedProfiles CheckProfileType(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).CheckProfileInstruction(checkProfileInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate and check profiles



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
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    checkProfileInstruction := "checkProfileInstruction_example" // string | Simple type that corresponds to check profile instructions. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.CheckProfileType(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).CheckProfileInstruction(checkProfileInstruction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.CheckProfileType``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CheckProfileType`: CheckedProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.CheckProfileType`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiCheckProfileTypeRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **checkProfileInstruction** | **string** | Simple type that corresponds to check profile instructions. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CheckedProfiles**](CheckedProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ClearProfileServiceCache

> Status ClearProfileServiceCache(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete cache for Profile service



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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ClearProfileServiceCache(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ClearProfileServiceCache``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ClearProfileServiceCache`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ClearProfileServiceCache`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiClearProfileServiceCacheRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## ConsumeECertificate

> Status ConsumeECertificate(ctx, certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateToConsume(eCertificateToConsume).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Consume an E-Certificate



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
    certificateId := "certificateId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCertificateToConsume := *openapiclient.NewECertificateToConsume() // ECertificateToConsume | Request object to Consume an E-Certificate.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ConsumeECertificate(context.Background(), certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateToConsume(eCertificateToConsume).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ConsumeECertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ConsumeECertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ConsumeECertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiConsumeECertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCertificateToConsume** | [**ECertificateToConsume**](ECertificateToConsume.md) | Request object to Consume an E-Certificate. | 
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


## CopyProfileCommissionAccount

> Status CopyProfileCommissionAccount(ctx, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCommissionAccountCopy(profileCommissionAccountCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Copy profile commission account



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
    hotelId := "hotelId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileCommissionAccountCopy := *openapiclient.NewProfileCommissionAccountCopy() // ProfileCommissionAccountCopy | Request object for copying transaction groups configuration.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.CopyProfileCommissionAccount(context.Background(), profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCommissionAccountCopy(profileCommissionAccountCopy).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.CopyProfileCommissionAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `CopyProfileCommissionAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.CopyProfileCommissionAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 
**hotelId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiCopyProfileCommissionAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileCommissionAccountCopy** | [**ProfileCommissionAccountCopy**](ProfileCommissionAccountCopy.md) | Request object for copying transaction groups configuration. | 
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


## DeleteAccountForecast

> Status DeleteAccountForecast(ctx, periodCode, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PeriodCodes(periodCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete account forecast in a hotel by period code



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
    periodCode := "periodCode_example" // string | Period Code.
    hotelId := "hotelId_example" // string | Unique ID of the hotel.
    profileId := "profileId_example" // string | Unique Account Profile ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    periodCodes := []string{"Inner_example"} // []string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteAccountForecast(context.Background(), periodCode, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PeriodCodes(periodCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteAccountForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteAccountForecast`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteAccountForecast`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**periodCode** | **string** | Period Code. | 
**hotelId** | **string** | Unique ID of the hotel. | 
**profileId** | **string** | Unique Account Profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteAccountForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **periodCodes** | **[]string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## DeleteCertificate

> Status DeleteCertificate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete certificate



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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteCertificate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteCertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteCertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteCertificate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiDeleteCertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteECertificate

> Status DeleteECertificate(ctx, certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete e-certificate



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
    certificateId := "certificateId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteECertificate(context.Background(), certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteECertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteECertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteECertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteECertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteGlobalPreference

> Status DeleteGlobalPreference(ctx, preferenceCode, preferenceType, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisteredProperty(registeredProperty).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a global preference from a profile



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
    preferenceCode := "preferenceCode_example" // string | 
    preferenceType := "preferenceType_example" // string | 
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    registeredProperty := "registeredProperty_example" // string | Profiles Registered Property (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteGlobalPreference(context.Background(), preferenceCode, preferenceType, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisteredProperty(registeredProperty).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteGlobalPreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteGlobalPreference`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteGlobalPreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**preferenceCode** | **string** |  | 
**preferenceType** | **string** |  | 
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteGlobalPreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **registeredProperty** | **string** | Profiles Registered Property | 
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


## DeleteMembership

> Status DeleteMembership(ctx, membershipId, membershipType, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete membership information from a profile



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
    membershipType := "membershipType_example" // string | 
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteMembership(context.Background(), membershipId, membershipType, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteMembership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMembership`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteMembership`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 
**membershipType** | **string** |  | 
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteMultipleAccountForecasts

> Status DeleteMultipleAccountForecasts(ctx, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PeriodCodes(periodCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete multiple account forecasts



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
    hotelId := "hotelId_example" // string | 
    profileId := "profileId_example" // string | Unique OPERA internal account profile ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    periodCodes := []string{"Inner_example"} // []string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteMultipleAccountForecasts(context.Background(), hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).PeriodCodes(periodCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteMultipleAccountForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteMultipleAccountForecasts`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteMultipleAccountForecasts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** |  | 
**profileId** | **string** | Unique OPERA internal account profile ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteMultipleAccountForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **periodCodes** | **[]string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
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


## DeletePreference

> Status DeletePreference(ctx, preferenceCode, preferenceType, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisteredProperty(registeredProperty).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a preference from a profile



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
    preferenceCode := "preferenceCode_example" // string | 
    preferenceType := "preferenceType_example" // string | 
    hotelId := "hotelId_example" // string | 
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    registeredProperty := "registeredProperty_example" // string | Profiles Registered Property (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeletePreference(context.Background(), preferenceCode, preferenceType, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisteredProperty(registeredProperty).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeletePreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeletePreference`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeletePreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**preferenceCode** | **string** |  | 
**preferenceType** | **string** |  | 
**hotelId** | **string** |  | 
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeletePreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------




 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **registeredProperty** | **string** | Profiles Registered Property | 
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


## DeleteProfile

> Status DeleteProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Forget or delete a profile by ID



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
    profileId := "profileId_example" // string | OPERA internal profile ID which is used to uniquely identify the profile in OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | OPERA internal profile ID which is used to uniquely identify the profile in OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteProfileAttachment

> Status DeleteProfileAttachment(ctx, attachmentId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).UniqueIdIdExtension(uniqueIdIdExtension).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete profile attachment



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
    attachmentId := "attachmentId_example" // string | 
    profileId := "profileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    idExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional) (default to ["Profile"])
    uniqueIdIdExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    uniqueIdIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    uniqueIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional) (default to ["Attachment"])
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteProfileAttachment(context.Background(), attachmentId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdExtension(idExtension).IdContext(idContext).Type_(type_).UniqueIdIdExtension(uniqueIdIdExtension).UniqueIdIdContext(uniqueIdIdContext).UniqueIdType(uniqueIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteProfileAttachment``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfileAttachment`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteProfileAttachment`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**attachmentId** | **string** |  | 
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProfileAttachmentRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | [default to [&quot;Profile&quot;]]
 **uniqueIdIdExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **uniqueIdIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **uniqueIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | [default to [&quot;Attachment&quot;]]
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


## DeleteProfileCommissionAccount

> Status DeleteProfileCommissionAccount(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidatePending(validatePending).HotelId(hotelId).ProfileIdExtension(profileIdExtension).ProfileContext(profileContext).ProfileType(profileType).BankAccountId(bankAccountId).BankAccountIdExtension(bankAccountIdExtension).BankAccountIdContext(bankAccountIdContext).BankAccountIdType(bankAccountIdType).CommissionCode(commissionCode).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a commission account from a profile



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
    validatePending := true // bool | Used in CRUD operations. When set to true, proceed validating pending commissions (optional)
    hotelId := "hotelId_example" // string | Hotel code from which the profile bank account and code belongs to (optional)
    profileIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    profileContext := "profileContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    bankAccountId := "bankAccountId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    bankAccountIdExtension := int32(56) // int32 | Additional identifying value assigned by the creating system. (optional)
    bankAccountIdContext := "bankAccountIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    bankAccountIdType := "bankAccountIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    commissionCode := "commissionCode_example" // string | Code. (optional)
    description := "description_example" // string | description. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteProfileCommissionAccount(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ValidatePending(validatePending).HotelId(hotelId).ProfileIdExtension(profileIdExtension).ProfileContext(profileContext).ProfileType(profileType).BankAccountId(bankAccountId).BankAccountIdExtension(bankAccountIdExtension).BankAccountIdContext(bankAccountIdContext).BankAccountIdType(bankAccountIdType).CommissionCode(commissionCode).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteProfileCommissionAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfileCommissionAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteProfileCommissionAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProfileCommissionAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **validatePending** | **bool** | Used in CRUD operations. When set to true, proceed validating pending commissions | 
 **hotelId** | **string** | Hotel code from which the profile bank account and code belongs to | 
 **profileIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **profileContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **bankAccountId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **bankAccountIdExtension** | **int32** | Additional identifying value assigned by the creating system. | 
 **bankAccountIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **bankAccountIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **commissionCode** | **string** | Code. | 
 **description** | **string** | description. | 
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


## DeleteProfileFlexFieldValue

> Status DeleteProfileFlexFieldValue(ctx, flexFieldCode, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to delete a flex field.



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
    flexFieldCode := "flexFieldCode_example" // string | Flex field code
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteProfileFlexFieldValue(context.Background(), flexFieldCode, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteProfileFlexFieldValue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfileFlexFieldValue`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteProfileFlexFieldValue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**flexFieldCode** | **string** | Flex field code | 
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteProfileFlexFieldValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DeleteStagedProfile

> Status DeleteStagedProfile(ctx, profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Delete a staged profile



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
    profileId := "profileId_example" // string | Profile id of staged profile.
    hotelId := "hotelId_example" // string | Hotel id of staged profile.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DeleteStagedProfile(context.Background(), profileId, hotelId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DeleteStagedProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteStagedProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DeleteStagedProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Profile id of staged profile. | 
**hotelId** | **string** | Hotel id of staged profile. | 

### Other Parameters

Other parameters are passed through a pointer to a apiDeleteStagedProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## DistributePreference

> Status DistributePreference(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Preference(preference).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Distribute preferences on a profile



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
    preference := *openapiclient.NewPreference() // Preference | Request object for distribute Preference. This object contains unique identifiers for each profile and list of preferences to be associated with the profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.DistributePreference(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Preference(preference).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.DistributePreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DistributePreference`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.DistributePreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiDistributePreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preference** | [**Preference**](Preference.md) | Request object for distribute Preference. This object contains unique identifiers for each profile and list of preferences to be associated with the profile. The standard optional Opera Context element is also included. | 
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


## ExtendECertificate

> Status ExtendECertificate(ctx, certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateToExtend(eCertificateToExtend).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Extend E-Certificate Expiry date



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
    certificateId := "certificateId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCertificateToExtend := *openapiclient.NewECertificateToExtend() // ECertificateToExtend | Request object to Consume an E-Certificate.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ExtendECertificate(context.Background(), certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateToExtend(eCertificateToExtend).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ExtendECertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ExtendECertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ExtendECertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiExtendECertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCertificateToExtend** | [**ECertificateToExtend**](ECertificateToExtend.md) | Request object to Consume an E-Certificate. | 
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


## GetAccountForecasts

> AccountForecasts GetAccountForecasts(ctx, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FromPeriodCode(fromPeriodCode).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Account Forecasts by hotel



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
    hotelId := "hotelId_example" // string | Hotel Code
    profileId := "profileId_example" // string | Unique OPERA internal account profile ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fromPeriodCode := "fromPeriodCode_example" // string | Specifies the From Fiscal or Calendar Period Code (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetAccountForecasts(context.Background(), hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FromPeriodCode(fromPeriodCode).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetAccountForecasts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAccountForecasts`: AccountForecasts
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetAccountForecasts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Hotel Code | 
**profileId** | **string** | Unique OPERA internal account profile ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAccountForecastsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fromPeriodCode** | **string** | Specifies the From Fiscal or Calendar Period Code | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AccountForecasts**](AccountForecasts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAddress

> CityState GetAddress(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeNoCity(excludeNoCity).CityName(cityName).PostalCode(postalCode).State(state).Code(code).StreetAddress(streetAddress).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get city states



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
    excludeNoCity := true // bool | When true indicates that only profiles with city will be fetched. (optional)
    cityName := "cityName_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    code := "code_example" // string | Code for a country or a nationality. (optional)
    streetAddress := "streetAddress_example" // string | First Line of Street Address. For profile search it matches the first Address line. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetAddress(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeNoCity(excludeNoCity).CityName(cityName).PostalCode(postalCode).State(state).Code(code).StreetAddress(streetAddress).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetAddress``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAddress`: CityState
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetAddress`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetAddressRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeNoCity** | **bool** | When true indicates that only profiles with city will be fetched. | 
 **cityName** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **code** | **string** | Code for a country or a nationality. | 
 **streetAddress** | **string** | First Line of Street Address. For profile search it matches the first Address line. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**CityState**](CityState.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAllProfileFlexFieldValues

> FlexFieldsResponse GetAllProfileFlexFieldValues(ctx, profileId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldId(flexFieldId).FlexFieldCode(flexFieldCode).FlexFieldValue(flexFieldValue).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch flex field values.



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
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    hotelIds := []string{"Inner_example"} // []string | Hotel code
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    flexFieldId := float32(8.14) // float32 | Flex field ID (optional)
    flexFieldCode := "flexFieldCode_example" // string | Flex field code (optional)
    flexFieldValue := "flexFieldValue_example" // string | Flex field Value (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. Default is 50 (optional) (default to 50)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 1)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetAllProfileFlexFieldValues(context.Background(), profileId).HotelIds(hotelIds).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldId(flexFieldId).FlexFieldCode(flexFieldCode).FlexFieldValue(flexFieldValue).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetAllProfileFlexFieldValues``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAllProfileFlexFieldValues`: FlexFieldsResponse
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetAllProfileFlexFieldValues`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAllProfileFlexFieldValuesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **hotelIds** | **[]string** | Hotel code | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **flexFieldId** | **float32** | Flex field ID | 
 **flexFieldCode** | **string** | Flex field code | 
 **flexFieldValue** | **string** | Flex field Value | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. Default is 50 | [default to 50]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 1]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FlexFieldsResponse**](FlexFieldsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetAwards

> AwardDetails GetAwards(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileContext(profileContext).ProfileType(profileType).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profile awards and certificates



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
    profileContext := "profileContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelId := "hotelId_example" // string | Hotel Code for which the routing instructions are provided for a profile. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetAwards(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileContext(profileContext).ProfileType(profileType).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetAwards``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetAwards`: AwardDetails
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetAwards`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetAwardsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelId** | **string** | Hotel Code for which the routing instructions are provided for a profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**AwardDetails**](AwardDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCashieringDetails

> ProfileCashieringDetailsInfo GetCashieringDetails(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchPaymentMethod(fetchPaymentMethod).FetchRoutingInstruction(fetchRoutingInstruction).IdContext(idContext).IdType(idType).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get cashiering details for a profile



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
    fetchPaymentMethod := true // bool | Boolean flag that indicates whether the payment method has to be fetched or not. (optional)
    fetchRoutingInstruction := true // bool | Boolean flag that indicates whether the routing instruction has to be fetched or not. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelIds := []string{"Inner_example"} // []string | List of Hotel Codes. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetCashieringDetails(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchPaymentMethod(fetchPaymentMethod).FetchRoutingInstruction(fetchRoutingInstruction).IdContext(idContext).IdType(idType).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetCashieringDetails``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCashieringDetails`: ProfileCashieringDetailsInfo
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetCashieringDetails`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCashieringDetailsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchPaymentMethod** | **bool** | Boolean flag that indicates whether the payment method has to be fetched or not. | 
 **fetchRoutingInstruction** | **bool** | Boolean flag that indicates whether the routing instruction has to be fetched or not. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelIds** | **[]string** | List of Hotel Codes. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileCashieringDetailsInfo**](ProfileCashieringDetailsInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetCompanyProfile

> Company GetCompanyProfile(ctx, corporateID).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get company profile by corporate ID



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
    corporateID := "corporateID_example" // string | Unique OPERA Corporate ID used to find company/agent/group/source profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetCompanyProfile(context.Background(), corporateID).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetCompanyProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompanyProfile`: Company
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetCompanyProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**corporateID** | **string** | Unique OPERA Corporate ID used to find company/agent/group/source profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetCompanyProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Room Ownership information associated with the profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Company**](Company.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDuplicateExternalSubscriptions

> DuplicateExternalSubscriptions GetDuplicateExternalSubscriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).DatabaseId(databaseId).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profiles with duplicate external subscriptions 



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
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    databaseId := "databaseId_example" // string | Code identifying the external database record which is linked to external systems. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileContext := "profileContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetDuplicateExternalSubscriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).DatabaseId(databaseId).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetDuplicateExternalSubscriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDuplicateExternalSubscriptions`: DuplicateExternalSubscriptions
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetDuplicateExternalSubscriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDuplicateExternalSubscriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **databaseId** | **string** | Code identifying the external database record which is linked to external systems. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DuplicateExternalSubscriptions**](DuplicateExternalSubscriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetDuplicateOPERASubscriptions

> DuplicateOPERASubscriptions GetDuplicateOPERASubscriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).DatabaseId(databaseId).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profiles with duplicate OPERA Cloud subscriptions



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
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    databaseId := "databaseId_example" // string | Code identifying the external database record which is linked to external systems. (optional)
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileContext := "profileContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetDuplicateOPERASubscriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).DatabaseId(databaseId).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetDuplicateOPERASubscriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetDuplicateOPERASubscriptions`: DuplicateOPERASubscriptions
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetDuplicateOPERASubscriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetDuplicateOPERASubscriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **databaseId** | **string** | Code identifying the external database record which is linked to external systems. | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**DuplicateOPERASubscriptions**](DuplicateOPERASubscriptions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetECertificates

> ECertificates GetECertificates(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).HotelId(hotelId).Code(code).GroupCode(groupCode).Status(status).IncludeInactive(includeInactive).VoucherNo(voucherNo).ExcludeVoucherNumbers(excludeVoucherNumbers).AvailableECertificates(availableECertificates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get e-certificate



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
    profileId := "profileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileContext := "profileContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileType := "profileType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelId := "hotelId_example" // string | Property for which preferences are to be fetched. (optional)
    code := "code_example" // string | Ecertificates search criteria (optional)
    groupCode := "groupCode_example" // string | Ecertificates search criteria (optional)
    status := []string{"Status_example"} // []string | Indicates that OPERA E-Certificate is reserved. (optional)
    includeInactive := true // bool | Include or not include inactive E-certificate. (optional)
    voucherNo := "voucherNo_example" // string | System generated unique voucher number. (optional)
    excludeVoucherNumbers := []string{"Inner_example"} // []string | List of System generated unique voucher numbers to be excluded. (optional)
    availableECertificates := true // bool | Search criteria to limit Ecertificates that are available for reservation consumption. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetECertificates(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileId(profileId).ProfileContext(profileContext).ProfileType(profileType).HotelId(hotelId).Code(code).GroupCode(groupCode).Status(status).IncludeInactive(includeInactive).VoucherNo(voucherNo).ExcludeVoucherNumbers(excludeVoucherNumbers).AvailableECertificates(availableECertificates).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetECertificates``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetECertificates`: ECertificates
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetECertificates`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetECertificatesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelId** | **string** | Property for which preferences are to be fetched. | 
 **code** | **string** | Ecertificates search criteria | 
 **groupCode** | **string** | Ecertificates search criteria | 
 **status** | **[]string** | Indicates that OPERA E-Certificate is reserved. | 
 **includeInactive** | **bool** | Include or not include inactive E-certificate. | 
 **voucherNo** | **string** | System generated unique voucher number. | 
 **excludeVoucherNumbers** | **[]string** | List of System generated unique voucher numbers to be excluded. | 
 **availableECertificates** | **bool** | Search criteria to limit Ecertificates that are available for reservation consumption. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ECertificates**](ECertificates.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetFulfillmentExportLogs

> FulfillmentExportedLogs GetFulfillmentExportLogs(ctx, membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).MembershipType(membershipType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Fulfillment Export Logs



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
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    membershipType := "membershipType_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetFulfillmentExportLogs(context.Background(), membershipId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).IdType(idType).MembershipType(membershipType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetFulfillmentExportLogs``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetFulfillmentExportLogs`: FulfillmentExportedLogs
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetFulfillmentExportLogs`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetFulfillmentExportLogsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **membershipType** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FulfillmentExportedLogs**](FulfillmentExportedLogs.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetGuestProfile

> Guest GetGuestProfile(ctx, guestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get guest profile by guest ID



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
    guestId := "guestId_example" // string | Unique OPERA internal ID used to find guest/contact/employee profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code used to filter hotel specific information regarding the profile. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetGuestProfile(context.Background(), guestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetGuestProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestProfile`: Guest
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetGuestProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**guestId** | **string** | Unique OPERA internal ID used to find guest/contact/employee profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetGuestProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code used to filter hotel specific information regarding the profile. | 
 **fetchInstructions** | **[]string** | Room Ownership information associated with the profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Guest**](Guest.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetLinkedProfiles

> LinkedProfiles GetLinkedProfiles(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).ProfileTypes(profileTypes).AccountsReceivables(accountsReceivables).CorporateProfiles(corporateProfiles).ExcludeInactive(excludeInactive).ExcludeIncompleteProfiles(excludeIncompleteProfiles).IncludeHasHierarchyOnly(includeHasHierarchyOnly).NegotiatedRates(negotiatedRates).LinkedProfileAdditionalCriteriaProfileType(linkedProfileAdditionalCriteriaProfileType).LinkedProfileid(linkedProfileid).LinkedProfileIdContext(linkedProfileIdContext).LinkedProfileIdType(linkedProfileIdType).Name(name).GivenName(givenName).ExcludeNoCity(excludeNoCity).CityName(cityName).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).OwnerCode(ownerCode).ARNumber(aRNumber).PrioritiesCode(prioritiesCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get linked profiles



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
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    profileTypes := []string{"ProfileTypes_example"} // []string | The types of Profile handled by the web service. (optional)
    accountsReceivables := true // bool | When true indicates that only profiles with AR account fetched. (optional)
    corporateProfiles := true // bool | When true indicates that only profiles with client id are searched for. (optional)
    excludeInactive := true // bool | Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. (optional)
    excludeIncompleteProfiles := true // bool | When true indicates that only profiles with an Address Line 1 and Country or at least one Communications Type will be displayed. (optional)
    includeHasHierarchyOnly := true // bool | Include profiles that have one or more relationships in the search. (optional)
    negotiatedRates := true // bool | When true indicates that this option has to be included in advanced search. (optional)
    linkedProfileAdditionalCriteriaProfileType := "linkedProfileAdditionalCriteriaProfileType_example" // string | The types of Profile handled by the web service. (optional)
    linkedProfileid := "linkedProfileid_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    linkedProfileIdContext := "linkedProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    linkedProfileIdType := "linkedProfileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    excludeNoCity := true // bool | When true indicates that only profiles with city will be fetched. (optional)
    cityName := "cityName_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    streetAddress := "streetAddress_example" // string | First Line of Street Address. For profile search it matches the first Address line. (optional)
    ownerCode := []string{"Inner_example"} // []string |  (optional)
    aRNumber := "aRNumber_example" // string | Account Receivable associated to the profile. (optional)
    prioritiesCode := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetLinkedProfiles(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).IdType(idType).ProfileTypes(profileTypes).AccountsReceivables(accountsReceivables).CorporateProfiles(corporateProfiles).ExcludeInactive(excludeInactive).ExcludeIncompleteProfiles(excludeIncompleteProfiles).IncludeHasHierarchyOnly(includeHasHierarchyOnly).NegotiatedRates(negotiatedRates).LinkedProfileAdditionalCriteriaProfileType(linkedProfileAdditionalCriteriaProfileType).LinkedProfileid(linkedProfileid).LinkedProfileIdContext(linkedProfileIdContext).LinkedProfileIdType(linkedProfileIdType).Name(name).GivenName(givenName).ExcludeNoCity(excludeNoCity).CityName(cityName).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).OwnerCode(ownerCode).ARNumber(aRNumber).PrioritiesCode(prioritiesCode).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetLinkedProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetLinkedProfiles`: LinkedProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetLinkedProfiles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetLinkedProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **profileTypes** | **[]string** | The types of Profile handled by the web service. | 
 **accountsReceivables** | **bool** | When true indicates that only profiles with AR account fetched. | 
 **corporateProfiles** | **bool** | When true indicates that only profiles with client id are searched for. | 
 **excludeInactive** | **bool** | Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. | 
 **excludeIncompleteProfiles** | **bool** | When true indicates that only profiles with an Address Line 1 and Country or at least one Communications Type will be displayed. | 
 **includeHasHierarchyOnly** | **bool** | Include profiles that have one or more relationships in the search. | 
 **negotiatedRates** | **bool** | When true indicates that this option has to be included in advanced search. | 
 **linkedProfileAdditionalCriteriaProfileType** | **string** | The types of Profile handled by the web service. | 
 **linkedProfileid** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **linkedProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **linkedProfileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **excludeNoCity** | **bool** | When true indicates that only profiles with city will be fetched. | 
 **cityName** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **streetAddress** | **string** | First Line of Street Address. For profile search it matches the first Address line. | 
 **ownerCode** | **[]string** |  | 
 **aRNumber** | **string** | Account Receivable associated to the profile. | 
 **prioritiesCode** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**LinkedProfiles**](LinkedProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMatchProfiles

> MatchedProfiles GetMatchProfiles(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profile matches



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
    hotelId := "hotelId_example" // string | Hotel Code for the profile. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    idType := "idType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetMatchProfiles(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdContext(idContext).IdType(idType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetMatchProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMatchProfiles`: MatchedProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetMatchProfiles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMatchProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code for the profile. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **idType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MatchedProfiles**](MatchedProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMembershipTierProjections

> MembershipTierProjections GetMembershipTierProjections(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipId(membershipId).MembershipType(membershipType).Id(id).IdContext(idContext).Type_(type_).ProjectionDate(projectionDate).ProjectionType(projectionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Membership Tier Projection



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
    membershipId := "membershipId_example" // string | Membership Card Number. (optional)
    membershipType := "membershipType_example" // string | Type of the Membership. (optional)
    id := "id_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    projectionDate := time.Now() // string | Date for which Tier projections is fetched. (optional)
    projectionType := "projectionType_example" // string | Upgrade And Downgrade (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetMembershipTierProjections(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipId(membershipId).MembershipType(membershipType).Id(id).IdContext(idContext).Type_(type_).ProjectionDate(projectionDate).ProjectionType(projectionType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetMembershipTierProjections``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMembershipTierProjections`: MembershipTierProjections
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetMembershipTierProjections`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetMembershipTierProjectionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipId** | **string** | Membership Card Number. | 
 **membershipType** | **string** | Type of the Membership. | 
 **id** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **projectionDate** | **string** | Date for which Tier projections is fetched. | 
 **projectionType** | **string** | Upgrade And Downgrade | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MembershipTierProjections**](MembershipTierProjections.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMergeProfilesSnapshot

> MergedProfilesSnapshotDetails GetMergeProfilesSnapshot(ctx, survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OriginalId(originalId).OriginalIdContext(originalIdContext).OriginalIdType(originalIdType).ToBeMergedId(toBeMergedId).ToBeMergedIdContext(toBeMergedIdContext).ToBeMergedIdType(toBeMergedIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get merge profiles snapshot



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
    survivorProfileId := "survivorProfileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    originalId := "originalId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    originalIdContext := "originalIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    originalIdType := "originalIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    toBeMergedId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    toBeMergedIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    toBeMergedIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetMergeProfilesSnapshot(context.Background(), survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).OriginalId(originalId).OriginalIdContext(originalIdContext).OriginalIdType(originalIdType).ToBeMergedId(toBeMergedId).ToBeMergedIdContext(toBeMergedIdContext).ToBeMergedIdType(toBeMergedIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetMergeProfilesSnapshot``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMergeProfilesSnapshot`: MergedProfilesSnapshotDetails
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetMergeProfilesSnapshot`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**survivorProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMergeProfilesSnapshotRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **originalId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **originalIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **originalIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **toBeMergedId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **toBeMergedIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **toBeMergedIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MergedProfilesSnapshotDetails**](MergedProfilesSnapshotDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetMergeStageProfileSnapshot

> MergedStageProfileSnapshot GetMergeStageProfileSnapshot(ctx, survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ResortProfileId(resortProfileId).ResortProfileIdContext(resortProfileIdContext).ResortProfileIdType(resortProfileIdType).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get merge stage profile snapshot



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
    survivorProfileId := "survivorProfileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code for the profile. (optional)
    resortProfileId := "resortProfileId_example" // string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    resortProfileIdContext := "resortProfileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    resortProfileIdType := "resortProfileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    profileIdContext := "profileIdContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    profileIdType := "profileIdType_example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetMergeStageProfileSnapshot(context.Background(), survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).ResortProfileId(resortProfileId).ResortProfileIdContext(resortProfileIdContext).ResortProfileIdType(resortProfileIdType).ProfileIdContext(profileIdContext).ProfileIdType(profileIdType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetMergeStageProfileSnapshot``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetMergeStageProfileSnapshot`: MergedStageProfileSnapshot
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetMergeStageProfileSnapshot`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**survivorProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetMergeStageProfileSnapshotRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code for the profile. | 
 **resortProfileId** | **string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **resortProfileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **resortProfileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **profileIdContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **profileIdType** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**MergedStageProfileSnapshot**](MergedStageProfileSnapshot.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetPreferenceForProfile

> Preference GetPreferenceForProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).HotelId(hotelId).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get preferences on a profile



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
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelId := "hotelId_example" // string | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. (optional)
    codes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetPreferenceForProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).HotelId(hotelId).Codes(codes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetPreferenceForProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetPreferenceForProfile`: Preference
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetPreferenceForProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetPreferenceForProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelId** | **string** | Used for codes in the OPERA Code tables. Possible values of this pattern are 1, 101, 101.EQP, or 101.EQP.X. | 
 **codes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Preference**](Preference.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfile

> Profile GetProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).SystemCode(systemCode).ShowInactiveRoomOwners(showInactiveRoomOwners).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profile by ID



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
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code used to filter hotel specific information regarding the profile. (optional)
    logViewProfile := true // bool | This element tells when the view profile should be logged. (optional)
    systemCode := "systemCode_example" // string | This element will be used to store external database. (optional)
    showInactiveRoomOwners := true // bool | Flag to show inactive Room Owners. (optional)
    markAsRecentlyAccessed := true // bool | Providing this flag marks the profile as recently accessed. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    instructionParameterType := []string{"InstructionParameterType_example"} // []string | Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself. (optional)
    value := []string{"Inner_example"} // []string | Value of Profile Instruction Parameter (optional)
    allowedAction := []string{"AllowedAction_example"} // []string | Flag indicating whether Profile is Enrolled to Primary Membership Program. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).SystemCode(systemCode).ShowInactiveRoomOwners(showInactiveRoomOwners).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfile`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code used to filter hotel specific information regarding the profile. | 
 **logViewProfile** | **bool** | This element tells when the view profile should be logged. | 
 **systemCode** | **string** | This element will be used to store external database. | 
 **showInactiveRoomOwners** | **bool** | Flag to show inactive Room Owners. | 
 **markAsRecentlyAccessed** | **bool** | Providing this flag marks the profile as recently accessed. | 
 **fetchInstructions** | **[]string** | Room Ownership information associated with the profile. | 
 **instructionParameterType** | **[]string** | Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself. | 
 **value** | **[]string** | Value of Profile Instruction Parameter | 
 **allowedAction** | **[]string** | Flag indicating whether Profile is Enrolled to Primary Membership Program. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileAccounts

> ProfileAccounts GetProfileAccounts(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profile accounts



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
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileAccounts(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileAccounts``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileAccounts`: ProfileAccounts
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileAccounts`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileAccountsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileAccounts**](ProfileAccounts.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileActivityLog

> ProfileActivityLog GetProfileActivityLog(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ActivityParamsHotelId(activityParamsHotelId).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIDs(userByIDs).UserForIDs(userForIDs).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch profile activity log



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
    activityParamsHotelId := "activityParamsHotelId_example" // string | Hotel code. (optional)
    module := "module_example" // string | Activity module. (optional)
    parameterName := []string{"Inner_example"} // []string | Name of the parameter. (optional)
    parameterValue := []string{"Inner_example"} // []string | Value of the parameter. (optional)
    activityGroup := "activityGroup_example" // string |  (optional)
    activityType := "activityType_example" // string |  (optional)
    fromDate := time.Now() // string | Search from date for the user activity log. (optional)
    toDate := time.Now() // string | Search to date for the user activity log. (optional)
    searchText := "searchText_example" // string | Search text for the user activity log. (optional)
    userByIDs := []int32{int32(123)} // []int32 |  (optional)
    userForIDs := []int32{int32(123)} // []int32 |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileActivityLog(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).ActivityParamsHotelId(activityParamsHotelId).Module(module).ParameterName(parameterName).ParameterValue(parameterValue).ActivityGroup(activityGroup).ActivityType(activityType).FromDate(fromDate).ToDate(toDate).SearchText(searchText).UserByIDs(userByIDs).UserForIDs(userForIDs).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileActivityLog``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileActivityLog`: ProfileActivityLog
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileActivityLog`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileActivityLogRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **activityParamsHotelId** | **string** | Hotel code. | 
 **module** | **string** | Activity module. | 
 **parameterName** | **[]string** | Name of the parameter. | 
 **parameterValue** | **[]string** | Value of the parameter. | 
 **activityGroup** | **string** |  | 
 **activityType** | **string** |  | 
 **fromDate** | **string** | Search from date for the user activity log. | 
 **toDate** | **string** | Search to date for the user activity log. | 
 **searchText** | **string** | Search text for the user activity log. | 
 **userByIDs** | **[]int32** |  | 
 **userForIDs** | **[]int32** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileActivityLog**](ProfileActivityLog.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileAttachments

> ProfileAttachments GetProfileAttachments(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).AttachedFileName(attachedFileName).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profile attachments



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
    idContext := "idContext_example" // string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := "type__example" // string | A reference to the type of object defined by the UniqueID element. (optional)
    attachedFileName := "attachedFileName_example" // string | File name used to filter final list of attachments. For example, Document.txt. (optional)
    description := "description_example" // string | Description used to filter final list of attachments. For example, Offical guest ID. (This parameter does not require wildcard characters like * or % ). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileAttachments(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).IdContext(idContext).Type_(type_).AttachedFileName(attachedFileName).Description(description).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileAttachments``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileAttachments`: ProfileAttachments
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileAttachments`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileAttachmentsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **idContext** | **string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **string** | A reference to the type of object defined by the UniqueID element. | 
 **attachedFileName** | **string** | File name used to filter final list of attachments. For example, Document.txt. | 
 **description** | **string** | Description used to filter final list of attachments. For example, Offical guest ID. (This parameter does not require wildcard characters like * or % ). | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileAttachments**](ProfileAttachments.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileByExtId

> Profile GetProfileByExtId(ctx, profileExternalId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).ShowInactiveRoomOwners(showInactiveRoomOwners).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profile by external ID



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
    profileExternalId := "profileExternalId_example" // string | External System's ID used to get the profile.
    extSystemCode := "extSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code used to filter hotel specific information regarding the profile. (optional)
    logViewProfile := true // bool | This element tells when the view profile should be logged. (optional)
    showInactiveRoomOwners := true // bool | Flag to show inactive Room Owners. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    instructionParameterType := []string{"InstructionParameterType_example"} // []string | Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself. (optional)
    value := []string{"Inner_example"} // []string | Value of Profile Instruction Parameter (optional)
    allowedAction := []string{"AllowedAction_example"} // []string | Flag indicating whether Profile is Enrolled to Primary Membership Program. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileByExtId(context.Background(), profileExternalId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).ShowInactiveRoomOwners(showInactiveRoomOwners).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileByExtId`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileExternalId** | **string** | External System&#39;s ID used to get the profile. | 
**extSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code used to filter hotel specific information regarding the profile. | 
 **logViewProfile** | **bool** | This element tells when the view profile should be logged. | 
 **showInactiveRoomOwners** | **bool** | Flag to show inactive Room Owners. | 
 **fetchInstructions** | **[]string** | Room Ownership information associated with the profile. | 
 **instructionParameterType** | **[]string** | Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself. | 
 **value** | **[]string** | Value of Profile Instruction Parameter | 
 **allowedAction** | **[]string** | Flag indicating whether Profile is Enrolled to Primary Membership Program. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileCommissionAccount

> ProfileCommissionAccountInfo GetProfileCommissionAccount(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get commission account on a profile



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
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileCommissionAccount(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileCommissionAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileCommissionAccount`: ProfileCommissionAccountInfo
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileCommissionAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileCommissionAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileCommissionAccountInfo**](ProfileCommissionAccountInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileFlexFieldValue

> FlexFieldsResponse GetProfileFlexFieldValue(ctx, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldId(flexFieldId).FlexFieldCode(flexFieldCode).FlexFieldValue(flexFieldValue).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to fetch flex field values.



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
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    flexFieldId := float32(8.14) // float32 | Flex field ID (optional)
    flexFieldCode := "flexFieldCode_example" // string | Flex field code (optional)
    flexFieldValue := "flexFieldValue_example" // string | Flex field Value (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. Default is 50 (optional) (default to 50)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 1)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileFlexFieldValue(context.Background(), hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldId(flexFieldId).FlexFieldCode(flexFieldCode).FlexFieldValue(flexFieldValue).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileFlexFieldValue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileFlexFieldValue`: FlexFieldsResponse
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileFlexFieldValue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileFlexFieldValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **flexFieldId** | **float32** | Flex field ID | 
 **flexFieldCode** | **string** | Flex field code | 
 **flexFieldValue** | **string** | Flex field Value | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. Default is 50 | [default to 50]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 1]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FlexFieldsResponse**](FlexFieldsResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileMatch

> ProfileMatch GetProfileMatch(ctx).LastName(lastName).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FirstName(firstName).MembershipType(membershipType).MembershipCardNumber(membershipCardNumber).IdentificationType(identificationType).IdentificationNumber(identificationNumber).Email(email).SubscriptionType(subscriptionType).SubscriptionId(subscriptionId).ClientId(clientId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch the profile Id if a unique guest profile Exists



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
    lastName := "lastName_example" // string | Last Name for the profile that needs to be matched.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    firstName := "firstName_example" // string | First Name for the profile that needs to be matched. (optional)
    membershipType := "membershipType_example" // string | Membership Type for the profile that needs to be matched. (optional)
    membershipCardNumber := "membershipCardNumber_example" // string | Membership Card Number for the profile that needs to be matched. (optional)
    identificationType := "identificationType_example" // string | Identification Type for the profile that needs to be matched. (optional)
    identificationNumber := "identificationNumber_example" // string | Identification Number for the profile that needs to be matched. (optional)
    email := "email_example" // string | Email for the profile that needs to be matched. (optional)
    subscriptionType := "subscriptionType_example" // string | Subscription Type for the profile that needs to be matched. (optional)
    subscriptionId := "subscriptionId_example" // string | Subscription Id for the profile that needs to be matched. (optional)
    clientId := "clientId_example" // string | Client Id for the profile that needs to be matched. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileMatch(context.Background()).LastName(lastName).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FirstName(firstName).MembershipType(membershipType).MembershipCardNumber(membershipCardNumber).IdentificationType(identificationType).IdentificationNumber(identificationNumber).Email(email).SubscriptionType(subscriptionType).SubscriptionId(subscriptionId).ClientId(clientId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileMatch``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileMatch`: ProfileMatch
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileMatch`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileMatchRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **lastName** | **string** | Last Name for the profile that needs to be matched. | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **firstName** | **string** | First Name for the profile that needs to be matched. | 
 **membershipType** | **string** | Membership Type for the profile that needs to be matched. | 
 **membershipCardNumber** | **string** | Membership Card Number for the profile that needs to be matched. | 
 **identificationType** | **string** | Identification Type for the profile that needs to be matched. | 
 **identificationNumber** | **string** | Identification Number for the profile that needs to be matched. | 
 **email** | **string** | Email for the profile that needs to be matched. | 
 **subscriptionType** | **string** | Subscription Type for the profile that needs to be matched. | 
 **subscriptionId** | **string** | Subscription Id for the profile that needs to be matched. | 
 **clientId** | **string** | Client Id for the profile that needs to be matched. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileMatch**](ProfileMatch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileOwners

> ProfileOwnersDetail GetProfileOwners(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profile owners



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
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileOwners(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Id(id).IdContext(idContext).Type_(type_).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileOwners`: ProfileOwnersDetail
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileOwnersDetail**](ProfileOwnersDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileRelationships

> ProfileRelationships GetProfileRelationships(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RelationshipPrimaryProfile(relationshipPrimaryProfile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

FetchProfileRelationships method provides the ability to retrieve a profile relationships for a profile based on the unique internal profile ID specified.



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
    relationshipPrimaryProfile := true // bool | Type of Profile to be fetched from OPERA. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileRelationships(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RelationshipPrimaryProfile(relationshipPrimaryProfile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileRelationships``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileRelationships`: ProfileRelationships
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileRelationships`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileRelationshipsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **relationshipPrimaryProfile** | **bool** | Type of Profile to be fetched from OPERA. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileRelationships**](ProfileRelationships.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfileTransactions

> ProfileTransactions GetProfileTransactions(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).TransactionDate(transactionDate).HotelId(hotelId).ConfirmationNumber(confirmationNumber).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Profile Transactions 



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
    profileId := "profileId_example" // string | Profile Id for which we want to fetch transactions
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    startDate := time.Now() // string |  (optional)
    endDate := time.Now() // string |  (optional)
    transactionDate := time.Now() // string |  (optional)
    hotelId := "hotelId_example" // string | Stay Record or Membership transaction belongs to which Hotel. (optional)
    confirmationNumber := "confirmationNumber_example" // string | Confirmation Number of the stay Record or Membership Transaction. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional) (default to 20)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 1)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfileTransactions(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StartDate(startDate).EndDate(endDate).TransactionDate(transactionDate).HotelId(hotelId).ConfirmationNumber(confirmationNumber).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfileTransactions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileTransactions`: ProfileTransactions
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfileTransactions`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Profile Id for which we want to fetch transactions | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfileTransactionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **startDate** | **string** |  | 
 **endDate** | **string** |  | 
 **transactionDate** | **string** |  | 
 **hotelId** | **string** | Stay Record or Membership transaction belongs to which Hotel. | 
 **confirmationNumber** | **string** | Confirmation Number of the stay Record or Membership Transaction. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | [default to 20]
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 1]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileTransactions**](ProfileTransactions.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfiles

> ProfileSummaries GetProfiles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeInactive(excludeInactive).HotelId(hotelId).IncludeHasHierarchyOnly(includeHasHierarchyOnly).IncludePrimaryOwnersOnly(includePrimaryOwnersOnly).IncludePurgeProfiles(includePurgeProfiles).Limit(limit).Offset(offset).SearchType(searchType).SummaryInfo(summaryInfo).SearchString(searchString).IncludeAnonymized(includeAnonymized).ProfileType(profileType).ProfileIds(profileIds).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).CorporateIds(corporateIds).ProfileName(profileName).GivenName(givenName).IncognitoName(incognitoName).IncognitoGivenName(incognitoGivenName).City(city).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).Keyword(keyword).Communication(communication).Membership(membership).MembershipType(membershipType).OwnerCodes(ownerCodes).MembershipLevel(membershipLevel).ARNumber(aRNumber).TaxID(taxID).BusinessSegment(businessSegment).AccountsReceivables(accountsReceivables).CorporateProfiles(corporateProfiles).ExcludeIncompleteProfiles(excludeIncompleteProfiles).NegotiatedRates(negotiatedRates).RelatedProfileExcludeInactive(relatedProfileExcludeInactive).RealtedProfileIncludeHasHierarchyOnly(realtedProfileIncludeHasHierarchyOnly).RelatedProfileNegotiatedRates(relatedProfileNegotiatedRates).RelatedProfileType(relatedProfileType).RelatedProfileName(relatedProfileName).ProtectedProfiles(protectedProfiles).ExcludedProfilesId(excludedProfilesId).IdExtension(idExtension).ExcludedProfilesIdContext(excludedProfilesIdContext).ExcludedProfilesIdType(excludedProfilesIdType).IdentificationNo(identificationNo).FetchInstructions(fetchInstructions).AllowedAction(allowedAction).VipCodes(vipCodes).PrioritieCodes(prioritieCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Search for profile(s)



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
    excludeInactive := true // bool | Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. (optional)
    hotelId := "hotelId_example" // string | Hotel Code, It is used to filter hotel specific children to this specific hotel code. (optional)
    includeHasHierarchyOnly := true // bool | Include profiles that have one or more relationships in the search. (optional)
    includePrimaryOwnersOnly := true // bool | Include primary owners in the search. (optional)
    includePurgeProfiles := true // bool | Include purged profiles in the search. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    searchType := "searchType_example" // string | When search type is PatronTrackingSystemMemberProfiles, the FetchProfiles will return the Membership Number of the searched Membership Type regardless of primary flag or sequence of the profile memberships. (optional)
    summaryInfo := true // bool | When true response will return summary information otherwise detailed information. (optional)
    searchString := "searchString_example" // string | Search string to be used for super search. (optional)
    includeAnonymized := true // bool | Indicates whether to include Anonymized Profiles. (optional)
    profileType := []string{"ProfileType_example"} // []string | The types of Profile handled by the web service. (optional)
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    corporateIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    profileName := "profileName_example" // string | Family name, last name or Company Name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    incognitoName := "incognitoName_example" // string | Family name, last name or Company Name. (optional)
    incognitoGivenName := "incognitoGivenName_example" // string | Given name, first name or names. (optional)
    city := "city_example" // string | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). (optional)
    postalCode := "postalCode_example" // string | Post Office Code number. (optional)
    state := "state_example" // string | State or Province name (e.g., Texas). (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    streetAddress := "streetAddress_example" // string | First Line of Street Address. For profile search it matches the first Address line. (optional)
    keyword := "keyword_example" // string | Keyword associated to the profile. (optional)
    communication := "communication_example" // string | Any communication method associated to the profile such as phone, fax, eMail id. (optional)
    membership := "membership_example" // string | Membership number associated to the profile. (optional)
    membershipType := "membershipType_example" // string | Member Type of searching profile. (optional)
    ownerCodes := []string{"Inner_example"} // []string |  (optional)
    membershipLevel := "membershipLevel_example" // string | Membership level associated to the profile. (optional)
    aRNumber := "aRNumber_example" // string | Account Receivable associated to the profile. (optional)
    taxID := "taxID_example" // string | Tax ID associated to the profile (optional)
    businessSegment := []string{"Inner_example"} // []string | Business/Market Segment associated to the profile. (optional)
    accountsReceivables := true // bool | When true indicates that only profiles with AR account fetched. (optional)
    corporateProfiles := true // bool | When true indicates that only profiles with client id are searched for. (optional)
    excludeIncompleteProfiles := true // bool | When true indicates that only profiles with an Address Line 1 and Country or at least one Communications Type will be displayed. (optional)
    negotiatedRates := true // bool | When true indicates that this option has to be included in advanced search. (optional)
    relatedProfileExcludeInactive := true // bool | Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. (optional)
    realtedProfileIncludeHasHierarchyOnly := true // bool | Include profiles that have one or more relationships in the search. (optional)
    relatedProfileNegotiatedRates := true // bool | When true indicates that this option has to be included in advanced search. (optional)
    relatedProfileType := "relatedProfileType_example" // string | The types of Profile handled by the web service. (optional)
    relatedProfileName := "relatedProfileName_example" // string | Family name, last name or Company Name. (optional)
    protectedProfiles := true // bool | Indicates whether to exclude Protected Profiles. (optional)
    excludedProfilesId := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idExtension := []int32{int32(123)} // []int32 | Additional identifying value assigned by the creating system. (optional)
    excludedProfilesIdContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    excludedProfilesIdType := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    identificationNo := "identificationNo_example" // string | Any identification number associated with the profile such as Passport Number, StateID. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    allowedAction := []string{"AllowedAction_example"} // []string | Flag indicating whether Profile is Enrolled to Primary Membership Program. (optional)
    vipCodes := []string{"Inner_example"} // []string |  (optional)
    prioritieCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfiles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeInactive(excludeInactive).HotelId(hotelId).IncludeHasHierarchyOnly(includeHasHierarchyOnly).IncludePrimaryOwnersOnly(includePrimaryOwnersOnly).IncludePurgeProfiles(includePurgeProfiles).Limit(limit).Offset(offset).SearchType(searchType).SummaryInfo(summaryInfo).SearchString(searchString).IncludeAnonymized(includeAnonymized).ProfileType(profileType).ProfileIds(profileIds).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).CorporateIds(corporateIds).ProfileName(profileName).GivenName(givenName).IncognitoName(incognitoName).IncognitoGivenName(incognitoGivenName).City(city).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).Keyword(keyword).Communication(communication).Membership(membership).MembershipType(membershipType).OwnerCodes(ownerCodes).MembershipLevel(membershipLevel).ARNumber(aRNumber).TaxID(taxID).BusinessSegment(businessSegment).AccountsReceivables(accountsReceivables).CorporateProfiles(corporateProfiles).ExcludeIncompleteProfiles(excludeIncompleteProfiles).NegotiatedRates(negotiatedRates).RelatedProfileExcludeInactive(relatedProfileExcludeInactive).RealtedProfileIncludeHasHierarchyOnly(realtedProfileIncludeHasHierarchyOnly).RelatedProfileNegotiatedRates(relatedProfileNegotiatedRates).RelatedProfileType(relatedProfileType).RelatedProfileName(relatedProfileName).ProtectedProfiles(protectedProfiles).ExcludedProfilesId(excludedProfilesId).IdExtension(idExtension).ExcludedProfilesIdContext(excludedProfilesIdContext).ExcludedProfilesIdType(excludedProfilesIdType).IdentificationNo(identificationNo).FetchInstructions(fetchInstructions).AllowedAction(allowedAction).VipCodes(vipCodes).PrioritieCodes(prioritieCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfiles`: ProfileSummaries
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **excludeInactive** | **bool** | Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. | 
 **hotelId** | **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | 
 **includeHasHierarchyOnly** | **bool** | Include profiles that have one or more relationships in the search. | 
 **includePrimaryOwnersOnly** | **bool** | Include primary owners in the search. | 
 **includePurgeProfiles** | **bool** | Include purged profiles in the search. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **searchType** | **string** | When search type is PatronTrackingSystemMemberProfiles, the FetchProfiles will return the Membership Number of the searched Membership Type regardless of primary flag or sequence of the profile memberships. | 
 **summaryInfo** | **bool** | When true response will return summary information otherwise detailed information. | 
 **searchString** | **string** | Search string to be used for super search. | 
 **includeAnonymized** | **bool** | Indicates whether to include Anonymized Profiles. | 
 **profileType** | **[]string** | The types of Profile handled by the web service. | 
 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **corporateIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **profileName** | **string** | Family name, last name or Company Name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **incognitoName** | **string** | Family name, last name or Company Name. | 
 **incognitoGivenName** | **string** | Given name, first name or names. | 
 **city** | **string** | City (e.g., Dublin), town, or postal station (i.e., a postal service territory, often used in a military address). | 
 **postalCode** | **string** | Post Office Code number. | 
 **state** | **string** | State or Province name (e.g., Texas). | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **streetAddress** | **string** | First Line of Street Address. For profile search it matches the first Address line. | 
 **keyword** | **string** | Keyword associated to the profile. | 
 **communication** | **string** | Any communication method associated to the profile such as phone, fax, eMail id. | 
 **membership** | **string** | Membership number associated to the profile. | 
 **membershipType** | **string** | Member Type of searching profile. | 
 **ownerCodes** | **[]string** |  | 
 **membershipLevel** | **string** | Membership level associated to the profile. | 
 **aRNumber** | **string** | Account Receivable associated to the profile. | 
 **taxID** | **string** | Tax ID associated to the profile | 
 **businessSegment** | **[]string** | Business/Market Segment associated to the profile. | 
 **accountsReceivables** | **bool** | When true indicates that only profiles with AR account fetched. | 
 **corporateProfiles** | **bool** | When true indicates that only profiles with client id are searched for. | 
 **excludeIncompleteProfiles** | **bool** | When true indicates that only profiles with an Address Line 1 and Country or at least one Communications Type will be displayed. | 
 **negotiatedRates** | **bool** | When true indicates that this option has to be included in advanced search. | 
 **relatedProfileExcludeInactive** | **bool** | Indicates whether to exclude Inactive Profiles, when true indicates that only profiles with active status will be displayed. | 
 **realtedProfileIncludeHasHierarchyOnly** | **bool** | Include profiles that have one or more relationships in the search. | 
 **relatedProfileNegotiatedRates** | **bool** | When true indicates that this option has to be included in advanced search. | 
 **relatedProfileType** | **string** | The types of Profile handled by the web service. | 
 **relatedProfileName** | **string** | Family name, last name or Company Name. | 
 **protectedProfiles** | **bool** | Indicates whether to exclude Protected Profiles. | 
 **excludedProfilesId** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idExtension** | **[]int32** | Additional identifying value assigned by the creating system. | 
 **excludedProfilesIdContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **excludedProfilesIdType** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **identificationNo** | **string** | Any identification number associated with the profile such as Passport Number, StateID. | 
 **fetchInstructions** | **[]string** | Room Ownership information associated with the profile. | 
 **allowedAction** | **[]string** | Flag indicating whether Profile is Enrolled to Primary Membership Program. | 
 **vipCodes** | **[]string** |  | 
 **prioritieCodes** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileSummaries**](ProfileSummaries.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfilesByIds

> ProfileDetails GetProfilesByIds(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileIds(profileIds).CorporateIds(corporateIds).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).Limit(limit).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).InstructionParameterValue(instructionParameterValue).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Search for profile(s)



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
    profileIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    corporateIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalReferenceIds := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    externalSystemCodes := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    limit := []int32{int32(123)} // []int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    instructionParameterType := []string{"InstructionParameterType_example"} // []string | Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself. (optional)
    instructionParameterValue := []string{"Inner_example"} // []string | Value of Profile Instruction Parameter (optional)
    hotelId := "hotelId_example" // string | Hotel Code, It is used to filter hotel specific. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfilesByIds(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileIds(profileIds).CorporateIds(corporateIds).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).Limit(limit).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).InstructionParameterValue(instructionParameterValue).HotelId(hotelId).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfilesByIds``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfilesByIds`: ProfileDetails
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfilesByIds`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfilesByIdsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **corporateIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalReferenceIds** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **externalSystemCodes** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **limit** | **[]int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Room Ownership information associated with the profile. | 
 **instructionParameterType** | **[]string** | Simple type enumerating the different parameters accepted by a profile Instructions. Parameter names have the name of the instruction expecting it, and the parameter name itself. | 
 **instructionParameterValue** | **[]string** | Value of Profile Instruction Parameter | 
 **hotelId** | **string** | Hotel Code, It is used to filter hotel specific. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileDetails**](ProfileDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetProfilesMatchList

> ProfilesMatch GetProfilesMatchList(ctx, profileType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisteredProperty(registeredProperty).ComputedDate(computedDate).Status(status).ClientID(clientID).Surname(surname).GivenName(givenName).DoNotMerge(doNotMerge).AboveUpperThreshold(aboveUpperThreshold).BelowUpperThreshold(belowUpperThreshold).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get profiles match list.



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
    profileType := "profileType_example" // string | Profile type of the matched profiles.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    registeredProperty := "registeredProperty_example" // string | Property this profile is registered with. (optional)
    computedDate := time.Now() // string | Specific Date when the weighing points were computed for the profiles. (optional)
    status := "status_example" // string | Status of the match. It can be one of these 3 options: Match Points Computed, Do Not Merge, Can Not Merge. (optional)
    clientID := "clientID_example" // string | Corporate id of the profile. (optional)
    surname := "surname_example" // string | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    doNotMerge := true // bool | If this value is true, then the response will return profiles that have been selected as Do Not Merge. (optional)
    aboveUpperThreshold := true // bool | If this value is true, then the response will return profiles with weighing points that are higher than the upper threshold. (optional)
    belowUpperThreshold := true // bool | If this value is true, then the response will return profiles with weighing points that are below the upper threshold. (optional)
    limit := int32(56) // int32 | Indicates maximum number of records a Web Service should return. (optional)
    offset := int32(56) // int32 | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. (optional) (default to 0)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetProfilesMatchList(context.Background(), profileType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RegisteredProperty(registeredProperty).ComputedDate(computedDate).Status(status).ClientID(clientID).Surname(surname).GivenName(givenName).DoNotMerge(doNotMerge).AboveUpperThreshold(aboveUpperThreshold).BelowUpperThreshold(belowUpperThreshold).Limit(limit).Offset(offset).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetProfilesMatchList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfilesMatchList`: ProfilesMatch
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetProfilesMatchList`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileType** | **string** | Profile type of the matched profiles. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetProfilesMatchListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **registeredProperty** | **string** | Property this profile is registered with. | 
 **computedDate** | **string** | Specific Date when the weighing points were computed for the profiles. | 
 **status** | **string** | Status of the match. It can be one of these 3 options: Match Points Computed, Do Not Merge, Can Not Merge. | 
 **clientID** | **string** | Corporate id of the profile. | 
 **surname** | **string** | Family name, last name. May also be used for full name if the sending system does not have the ability to separate a full name into its parts, e.g. the surname element may be used to pass the full name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **doNotMerge** | **bool** | If this value is true, then the response will return profiles that have been selected as Do Not Merge. | 
 **aboveUpperThreshold** | **bool** | If this value is true, then the response will return profiles with weighing points that are higher than the upper threshold. | 
 **belowUpperThreshold** | **bool** | If this value is true, then the response will return profiles with weighing points that are below the upper threshold. | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfilesMatch**](ProfilesMatch.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetRecentlyAccessedProfiles

> RecentlyAccessedProfiles GetRecentlyAccessedProfiles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch recently accessed profiles



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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetRecentlyAccessedProfiles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetRecentlyAccessedProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetRecentlyAccessedProfiles`: RecentlyAccessedProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetRecentlyAccessedProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetRecentlyAccessedProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**RecentlyAccessedProfiles**](RecentlyAccessedProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStagedProfile

> StagedProfileDetails GetStagedProfile(ctx, id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdContext(idContext).Type_(type_).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get a staged profile



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
    id := "id_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | The hotel code that the stage profile belongs to. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | If selected, only invalid details of the staged profile will be retrieved. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetStagedProfile(context.Background(), id).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IdContext(idContext).Type_(type_).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetStagedProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStagedProfile`: StagedProfileDetails
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetStagedProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**id** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStagedProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | The hotel code that the stage profile belongs to. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **fetchInstructions** | **[]string** | If selected, only invalid details of the staged profile will be retrieved. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StagedProfileDetails**](StagedProfileDetails.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStagedProfiles

> StagedProfiles GetStagedProfiles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).StagedReasons(stagedReasons).Id(id).IdContext(idContext).Type_(type_).Name(name).GivenName(givenName).Region(region).CountryCode(countryCode).ProfileType(profileType).ImportDate(importDate).StageStatus(stageStatus).ApplyTo(applyTo).MembershipCodes(membershipCodes).InsertDateFrom(insertDateFrom).InsertDateTo(insertDateTo).MembershipNumber(membershipNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get staged profiles



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
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    stagedReasons := []string{"StagedReasons_example"} // []string | This can be used to fetch staged profiles based on the reason why it got staged Ex : NameChange (optional)
    id := []string{"Inner_example"} // []string | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. (optional)
    idContext := []string{"Inner_example"} // []string | Used to identify the source of the identifier (e.g., IATA, ABTA). (optional)
    type_ := []string{"Inner_example"} // []string | A reference to the type of object defined by the UniqueID element. (optional)
    name := "name_example" // string | Family name, last name or Company Name. (optional)
    givenName := "givenName_example" // string | Given name, first name or names. (optional)
    region := "region_example" // string | The profile region for which the staged profiles shall be fetched. (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    profileType := "profileType_example" // string | Profile type to be included in the search. (optional)
    importDate := time.Now() // string | The date on which the staged profiles have been received. This parameter is deprecated.  (optional)
    stageStatus := "stageStatus_example" // string | The status of the staged profiles. (optional)
    applyTo := "applyTo_example" // string | Membership filter of staged profiles. (optional)
    membershipCodes := []string{"Inner_example"} // []string |  (optional)
    insertDateFrom := time.Now() // string | Accepts a date value and retrieves all the suspended profiles inserted on or after the provided date. (optional)
    insertDateTo := time.Now() // string | Accepts a date value and retrieves all the suspended profiles inserted up to and including the specified date. (optional)
    membershipNumber := "membershipNumber_example" // string |  Accepts a membership number and retrieves the suspended profile(s) associated with the provided code. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetStagedProfiles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Limit(limit).Offset(offset).HotelIds(hotelIds).StagedReasons(stagedReasons).Id(id).IdContext(idContext).Type_(type_).Name(name).GivenName(givenName).Region(region).CountryCode(countryCode).ProfileType(profileType).ImportDate(importDate).StageStatus(stageStatus).ApplyTo(applyTo).MembershipCodes(membershipCodes).InsertDateFrom(insertDateFrom).InsertDateTo(insertDateTo).MembershipNumber(membershipNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetStagedProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStagedProfiles`: StagedProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetStagedProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetStagedProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **limit** | **int32** | Indicates maximum number of records a Web Service should return. | 
 **offset** | **int32** | Index or initial index of the set(page) being requested. If the index goes out of the bounds of the total set count then no data will be returned. | [default to 0]
 **hotelIds** | **[]string** |  | 
 **stagedReasons** | **[]string** | This can be used to fetch staged profiles based on the reason why it got staged Ex : NameChange | 
 **id** | **[]string** | A unique identifying value assigned by the creating system. The ID attribute may be used to reference a primary-key value within a database or in a particular implementation. | 
 **idContext** | **[]string** | Used to identify the source of the identifier (e.g., IATA, ABTA). | 
 **type_** | **[]string** | A reference to the type of object defined by the UniqueID element. | 
 **name** | **string** | Family name, last name or Company Name. | 
 **givenName** | **string** | Given name, first name or names. | 
 **region** | **string** | The profile region for which the staged profiles shall be fetched. | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **profileType** | **string** | Profile type to be included in the search. | 
 **importDate** | **string** | The date on which the staged profiles have been received. This parameter is deprecated.  | 
 **stageStatus** | **string** | The status of the staged profiles. | 
 **applyTo** | **string** | Membership filter of staged profiles. | 
 **membershipCodes** | **[]string** |  | 
 **insertDateFrom** | **string** | Accepts a date value and retrieves all the suspended profiles inserted on or after the provided date. | 
 **insertDateTo** | **string** | Accepts a date value and retrieves all the suspended profiles inserted up to and including the specified date. | 
 **membershipNumber** | **string** |  Accepts a membership number and retrieves the suspended profile(s) associated with the provided code. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StagedProfiles**](StagedProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStayHistory

> ProfileStayHistory GetStayHistory(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IncludePurgeProfiles(includePurgeProfiles).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

FetchStayHistory method provides stay history and future reservations of a profile based on the unique internal ID specified.



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
    hotelId := "hotelId_example" // string | Hotel Code used to filter hotel specific information regarding the profile. (optional)
    includePurgeProfiles := true // bool | Providing this flag includes purged profiles in the result. (optional)
    markAsRecentlyAccessed := true // bool | Providing this flag marks the profile as recently accessed. (optional)
    limit := []int32{int32(123)} // []int32 | Indicates maximum number of records a Web Service should return. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Simple type for instructions that can be used in requests for partial operations to fetch past and future reservation. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetStayHistory(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IncludePurgeProfiles(includePurgeProfiles).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetStayHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStayHistory`: ProfileStayHistory
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetStayHistory`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStayHistoryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code used to filter hotel specific information regarding the profile. | 
 **includePurgeProfiles** | **bool** | Providing this flag includes purged profiles in the result. | 
 **markAsRecentlyAccessed** | **bool** | Providing this flag marks the profile as recently accessed. | 
 **limit** | **[]int32** | Indicates maximum number of records a Web Service should return. | 
 **fetchInstructions** | **[]string** | Simple type for instructions that can be used in requests for partial operations to fetch past and future reservation. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProfileStayHistory**](ProfileStayHistory.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8, application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetStayRecordDetail

> StayRecordDetail GetStayRecordDetail(ctx, stayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get Stay Record Detail.



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
    stayRecordId := "stayRecordId_example" // string | A unique identifying value of the stay record, assigned by the creating system.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Fetch instructions that can be used to fetch required stay record details. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetStayRecordDetail(context.Background(), stayRecordId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetStayRecordDetail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStayRecordDetail`: StayRecordDetail
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetStayRecordDetail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**stayRecordId** | **string** | A unique identifying value of the stay record, assigned by the creating system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiGetStayRecordDetailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **fetchInstructions** | **[]string** | Fetch instructions that can be used to fetch required stay record details. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**StayRecordDetail**](StayRecordDetail.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSuspendedAddresses

> SuspendedAddresses GetSuspendedAddresses(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Name(name).HotelId(hotelId).FirstName(firstName).ProfileType(profileType).MatchCode(matchCode).CountryCode(countryCode).ValidateDate(validateDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Fetch Suspended Profile Addresses



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
    name := "name_example" // string | Last Name of the Profile against which the Suspended Addresses are fetched. (optional)
    hotelId := "hotelId_example" // string | Hotel Code, It is used to filter hotel specific children to this specific hotel code. (optional)
    firstName := "firstName_example" // string | First Name of the Profile against which the Suspended Addresses are fetched. (optional)
    profileType := "profileType_example" // string | ProfileT ype of the Profile against which the Suspended Addresses are fetched.. (optional)
    matchCode := "matchCode_example" // string | Match Code of the Address Validation Performed from the batch processing (optional)
    countryCode := "countryCode_example" // string | Code for a country or a nationality. (optional)
    validateDate := time.Now() // string | Validate Date. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetSuspendedAddresses(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Name(name).HotelId(hotelId).FirstName(firstName).ProfileType(profileType).MatchCode(matchCode).CountryCode(countryCode).ValidateDate(validateDate).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetSuspendedAddresses``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSuspendedAddresses`: SuspendedAddresses
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetSuspendedAddresses`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSuspendedAddressesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **name** | **string** | Last Name of the Profile against which the Suspended Addresses are fetched. | 
 **hotelId** | **string** | Hotel Code, It is used to filter hotel specific children to this specific hotel code. | 
 **firstName** | **string** | First Name of the Profile against which the Suspended Addresses are fetched. | 
 **profileType** | **string** | ProfileT ype of the Profile against which the Suspended Addresses are fetched.. | 
 **matchCode** | **string** | Match Code of the Address Validation Performed from the batch processing | 
 **countryCode** | **string** | Code for a country or a nationality. | 
 **validateDate** | **string** | Validate Date. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SuspendedAddresses**](SuspendedAddresses.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## GetSuspendedProfileErrorSummary

> SuspendedProfileErrorSummaryInfo GetSuspendedProfileErrorSummary(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Get suspended profile error summary details



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
    hotelIds := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.GetSuspendedProfileErrorSummary(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelIds(hotelIds).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.GetSuspendedProfileErrorSummary``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetSuspendedProfileErrorSummary`: SuspendedProfileErrorSummaryInfo
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.GetSuspendedProfileErrorSummary`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetSuspendedProfileErrorSummaryRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelIds** | **[]string** |  | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**SuspendedProfileErrorSummaryInfo**](SuspendedProfileErrorSummaryInfo.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## MergeProfiles

> Status MergeProfiles(ctx, survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileToBeMerged(profileToBeMerged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Merge two profiles by ID



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
    survivorProfileId := "survivorProfileId_example" // string | Original Profile ID to which profiles will be merged in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileToBeMerged := *openapiclient.NewMergeProfilesRequest() // MergeProfilesRequest | Request object for merging profiles.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.MergeProfiles(context.Background(), survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileToBeMerged(profileToBeMerged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.MergeProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MergeProfiles`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.MergeProfiles`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**survivorProfileId** | **string** | Original Profile ID to which profiles will be merged in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiMergeProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileToBeMerged** | [**MergeProfilesRequest**](MergeProfilesRequest.md) | Request object for merging profiles. | 
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


## PingProfileService

> OperaVersion PingProfileService(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to check the status of profile service



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
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PingProfileService(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PingProfileService``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PingProfileService`: OperaVersion
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PingProfileService`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPingProfileServiceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
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


## PostAccountForecast

> Status PostAccountForecast(ctx, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastsInformation(forecastsInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create account forecast in a hotel



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
    hotelId := "hotelId_example" // string | Unique ID of the hotel
    profileId := "profileId_example" // string | Unique OPERA internal account profile ID
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    forecastsInformation := *openapiclient.NewForecastsInformation() // ForecastsInformation | Request object for creating forecast(s) of an account profile.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostAccountForecast(context.Background(), hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastsInformation(forecastsInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostAccountForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostAccountForecast`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostAccountForecast`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel | 
**profileId** | **string** | Unique OPERA internal account profile ID | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostAccountForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **forecastsInformation** | [**ForecastsInformation**](ForecastsInformation.md) | Request object for creating forecast(s) of an account profile. | 
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


## PostCompanyProfile

> Status PostCompanyProfile(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Company(company).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

This API facilitates creation of a company/agent/group/source profile in OPERA.



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
    company := *openapiclient.NewCompany() // Company | Request object for creation of company profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostCompanyProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Company(company).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostCompanyProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompanyProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostCompanyProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCompanyProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **company** | [**Company**](Company.md) | Request object for creation of company profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. | 
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


## PostECertificate

> Status PostECertificate(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateGeneration(eCertificateGeneration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create e-certificate



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
    eCertificateGeneration := *openapiclient.NewECertificateGeneration() // ECertificateGeneration | Request object to issue E-Certificate.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostECertificate(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateGeneration(eCertificateGeneration).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostECertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostECertificate`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostECertificate`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostECertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCertificateGeneration** | [**ECertificateGeneration**](ECertificateGeneration.md) | Request object to issue E-Certificate. | 
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


## PostGuestProfile

> Status PostGuestProfile(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guest(guest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a guest, contact or employee profile in OPERA



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
    guest := *openapiclient.NewGuest() // Guest | Request object for creation of guest profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostGuestProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guest(guest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostGuestProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuestProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostGuestProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGuestProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guest** | [**Guest**](Guest.md) | Request object for creation of guest profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. | 
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


## PostMembership

> Status PostMembership(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Membership(membership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create membership on a profile



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
    membership := *openapiclient.NewMembership() // Membership | Request object for create membership. This object contains unique identifiers for each profile and list of membership details to be created. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostMembership(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Membership(membership).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostMembership``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMembership`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostMembership`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMembershipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membership** | [**Membership**](Membership.md) | Request object for create membership. This object contains unique identifiers for each profile and list of membership details to be created. The standard optional Opera Context element is also included. | 
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


## PostMembershipNumber

> Status PostMembershipNumber(ctx, membershipType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipNumber(membershipNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Generate membership number



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
    membershipType := "membershipType_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    membershipNumber := *openapiclient.NewMembershipNumber() // MembershipNumber | Request object for generating membership number.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostMembershipNumber(context.Background(), membershipType).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MembershipNumber(membershipNumber).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostMembershipNumber``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostMembershipNumber`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostMembershipNumber`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**membershipType** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostMembershipNumberRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **membershipNumber** | [**MembershipNumber**](MembershipNumber.md) | Request object for generating membership number. | 
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


## PostPreference

> Status PostPreference(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Preference(preference).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add preferences to a profile



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
    preference := *openapiclient.NewPreference() // Preference | Request object for Create Preference. This object contains unique identifiers for each profile and list of preferences to be associated with the profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostPreference(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Preference(preference).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostPreference``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostPreference`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostPreference`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostPreferenceRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **preference** | [**Preference**](Preference.md) | Request object for Create Preference. This object contains unique identifiers for each profile and list of preferences to be associated with the profile. The standard optional Opera Context element is also included. | 
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


## PostProfile

> Status PostProfile(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create a profile



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
    profile := *openapiclient.NewPostProfileRequest() // PostProfileRequest | Request object for creation of profiles. This object contains profile details with unique identifiers for each profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profile** | [**PostProfileRequest**](PostProfileRequest.md) | Request object for creation of profiles. This object contains profile details with unique identifiers for each profile. The standard optional Opera Context element is also included. | 
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


## PostProfileCommissionAccount

> Status PostProfileCommissionAccount(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCommissionAccount(profileCommissionAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Add a commission account on a profile



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
    profileCommissionAccount := *openapiclient.NewProfileCommissionAccount() // ProfileCommissionAccount | Request object for creating profile commission detail.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostProfileCommissionAccount(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCommissionAccount(profileCommissionAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostProfileCommissionAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfileCommissionAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostProfileCommissionAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileCommissionAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileCommissionAccount** | [**ProfileCommissionAccount**](ProfileCommissionAccount.md) | Request object for creating profile commission detail. | 
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


## PostProfileFlexFieldValue

> Status PostProfileFlexFieldValue(ctx, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldValueInfo(flexFieldValueInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to create a flex field with value for a module.



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
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    flexFieldValueInfo := *openapiclient.NewFlexFieldValues() // FlexFieldValues | Request object to create a new flex field
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostProfileFlexFieldValue(context.Background(), hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldValueInfo(flexFieldValueInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostProfileFlexFieldValue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfileFlexFieldValue`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostProfileFlexFieldValue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileFlexFieldValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **flexFieldValueInfo** | [**FlexFieldValues**](FlexFieldValues.md) | Request object to create a new flex field | 
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


## PostProfileOwners

> Status PostProfileOwners(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileOwners(profileOwners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Assign profile owners



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
    profileOwners := *openapiclient.NewProfileOwners() // ProfileOwners | Request object to assign profile owners.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostProfileOwners(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileOwners(profileOwners).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostProfileOwners``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfileOwners`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostProfileOwners`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileOwnersRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileOwners** | [**ProfileOwners**](ProfileOwners.md) | Request object to assign profile owners. | 
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


## PostProfileRelationship

> Status PostProfileRelationship(ctx, targetProfileId, sourceProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileRelationship(profileRelationship).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

CreateProfileRelationship method provides the ability to create profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.



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
    targetProfileId := "targetProfileId_example" // string | 
    sourceProfileId := "sourceProfileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileRelationship := *openapiclient.NewPostProfileRelationshipRequest() // PostProfileRelationshipRequest | Request object for creating profile relationship.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostProfileRelationship(context.Background(), targetProfileId, sourceProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileRelationship(profileRelationship).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostProfileRelationship``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfileRelationship`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostProfileRelationship`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**targetProfileId** | **string** |  | 
**sourceProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileRelationshipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileRelationship** | [**PostProfileRelationshipRequest**](PostProfileRelationshipRequest.md) | Request object for creating profile relationship. | 
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


## PostStayRecord

> []InstanceLink PostStayRecord(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayRecordDetails(stayRecordDetails).AcceptLanguage(acceptLanguage).Execute()

This API facilitates uploading stage records to LCS.



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
    stayRecordDetails := *openapiclient.NewStayRecordDetails() // StayRecordDetails | Request object for uploading stage records to LCS.
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PostStayRecord(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StayRecordDetails(stayRecordDetails).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PostStayRecord``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostStayRecord`: []InstanceLink
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PostStayRecord`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostStayRecordRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **stayRecordDetails** | [**StayRecordDetails**](StayRecordDetails.md) | Request object for uploading stage records to LCS. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**[]InstanceLink**](InstanceLink.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ProcessStagedProfile

> ProcessedStagedProfile ProcessStagedProfile(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StagedProfileCriteria(stagedProfileCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Process a staged profile



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
    stagedProfileCriteria := *openapiclient.NewStagedProfileCriteria() // StagedProfileCriteria | Request object for processing the staged profile.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ProcessStagedProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).StagedProfileCriteria(stagedProfileCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ProcessStagedProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ProcessStagedProfile`: ProcessedStagedProfile
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ProcessStagedProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiProcessStagedProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **stagedProfileCriteria** | [**StagedProfileCriteria**](StagedProfileCriteria.md) | Request object for processing the staged profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ProcessedStagedProfile**](ProcessedStagedProfile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutAccountForecast

> ChangeAccountForecastsRS PutAccountForecast(ctx, periodCode, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastsInformation(forecastsInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update account forecast in a hotel by period code



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
    periodCode := "periodCode_example" // string | Period Code
    hotelId := "hotelId_example" // string | Unique ID of the hotel.
    profileId := "profileId_example" // string | Unique Account Profile ID.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    forecastsInformation := *openapiclient.NewForecastsInformation() // ForecastsInformation | Request object for changing forecast(s) of an account profile.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PutAccountForecast(context.Background(), periodCode, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForecastsInformation(forecastsInformation).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PutAccountForecast``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutAccountForecast`: ChangeAccountForecastsRS
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PutAccountForecast`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**periodCode** | **string** | Period Code | 
**hotelId** | **string** | Unique ID of the hotel. | 
**profileId** | **string** | Unique Account Profile ID. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutAccountForecastRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------



 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **forecastsInformation** | [**ForecastsInformation**](ForecastsInformation.md) | Request object for changing forecast(s) of an account profile. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ChangeAccountForecastsRS**](ChangeAccountForecastsRS.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutProfile

> Profile PutProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update a profile by ID



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
    profileId := "profileId_example" // string | OPERA internal profile ID which is used to uniquely identify the profile in OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profile := *openapiclient.NewPutProfileByExtIdRequest() // PutProfileByExtIdRequest | Request object for change/modification of profile details. This object contains modified profile details with unique identifiers for each profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PutProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PutProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfile`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PutProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | OPERA internal profile ID which is used to uniquely identify the profile in OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profile** | [**PutProfileByExtIdRequest**](PutProfileByExtIdRequest.md) | Request object for change/modification of profile details. This object contains modified profile details with unique identifiers for each profile. The standard optional Opera Context element is also included. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutProfileByExtId

> Profile PutProfileByExtId(ctx, profileExternalId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Update by external ID



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
    profileExternalId := "profileExternalId_example" // string | External System's ID used to get the profile.
    extSystemCode := "extSystemCode_example" // string | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profile := *openapiclient.NewPutProfileByExtIdRequest() // PutProfileByExtIdRequest | Request object for change/modification of profile details. This object contains modified profile details with unique identifiers for each profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PutProfileByExtId(context.Background(), profileExternalId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PutProfileByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfileByExtId`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PutProfileByExtId`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileExternalId** | **string** | External System&#39;s ID used to get the profile. | 
**extSystemCode** | **string** | Code to identify the external system from which the request is coming. This is the ExternalSystem ID used to exchange information between OPERA and the external system. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProfileByExtIdRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profile** | [**PutProfileByExtIdRequest**](PutProfileByExtIdRequest.md) | Request object for change/modification of profile details. This object contains modified profile details with unique identifiers for each profile. The standard optional Opera Context element is also included. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**Profile**](Profile.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## PutProfileFlexFieldValue

> Status PutProfileFlexFieldValue(ctx, hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldValueInfo(flexFieldValueInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Operation to update flex field value.



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
    hotelId := "hotelId_example" // string | Unique ID of the hotel in OPERA
    profileId := "profileId_example" // string | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    flexFieldValueInfo := *openapiclient.NewFlexFieldValues() // FlexFieldValues | Request object for updating the configuration of flex fields.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PutProfileFlexFieldValue(context.Background(), hotelId, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FlexFieldValueInfo(flexFieldValueInfo).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PutProfileFlexFieldValue``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfileFlexFieldValue`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PutProfileFlexFieldValue`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**hotelId** | **string** | Unique ID of the hotel in OPERA | 
**profileId** | **string** | Unique OPERA internal profile ID which is used to find any type of profile from OPERA. This ID is a primary identification of a profile in OPERA. | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProfileFlexFieldValueRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **flexFieldValueInfo** | [**FlexFieldValues**](FlexFieldValues.md) | Request object for updating the configuration of flex fields. | 
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


## PutProfileRelationship

> Status PutProfileRelationship(ctx, targetProfileId, sourceProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileRelationshipToBeChanged(profileRelationshipToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

ChangeProfileRelationship method provides the ability to update(delete and add) profile relationship based on the request criteria of SourceProfileID , TargetProfileID, To Be ChangedProfileID and SourceProfileRelationType specified.



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
    targetProfileId := "targetProfileId_example" // string | 
    sourceProfileId := "sourceProfileId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileRelationshipToBeChanged := *openapiclient.NewPutProfileRelationshipRequest() // PutProfileRelationshipRequest | Request object for changing profile relationship.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PutProfileRelationship(context.Background(), targetProfileId, sourceProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileRelationshipToBeChanged(profileRelationshipToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PutProfileRelationship``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfileRelationship`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PutProfileRelationship`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**targetProfileId** | **string** |  | 
**sourceProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiPutProfileRelationshipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileRelationshipToBeChanged** | [**PutProfileRelationshipRequest**](PutProfileRelationshipRequest.md) | Request object for changing profile relationship. | 
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


## PutProfilesMatchList

> Status PutProfilesMatchList(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MatchList(matchList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Updates a list of matchIds to skip or don't skip profile match.



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
    matchList := *openapiclient.NewMatchListType() // MatchListType | Parameter that contains a list of matchIds that will be updated to skip or don't skip profile match.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.PutProfilesMatchList(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).MatchList(matchList).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.PutProfilesMatchList``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfilesMatchList`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.PutProfilesMatchList`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPutProfilesMatchListRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **matchList** | [**MatchListType**](MatchListType.md) | Parameter that contains a list of matchIds that will be updated to skip or don&#39;t skip profile match. | 
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


## RemoveProfileRelationship

> Status RemoveProfileRelationship(ctx, targetProfileId, sourceProfileId).SourceRelation(sourceRelation).TargetRelation(targetRelation).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Primary(primary).SourceRelationDescription(sourceRelationDescription).TargetRelationDescription(targetRelationDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

DeleteProfileRelationship method provides the ability to delete profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.



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
    targetProfileId := "targetProfileId_example" // string | 
    sourceProfileId := "sourceProfileId_example" // string | 
    sourceRelation := "sourceRelation_example" // string | Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile).
    targetRelation := "targetRelation_example" // string | Indicates the type of relationship the related profile(Target Profile) has with the current profile(Source Profile).
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    primary := true // bool | Indicates if this relationship is the primary relationship. (optional)
    sourceRelationDescription := "sourceRelationDescription_example" // string | Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true. (optional)
    targetRelationDescription := "targetRelationDescription_example" // string | Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.RemoveProfileRelationship(context.Background(), targetProfileId, sourceProfileId).SourceRelation(sourceRelation).TargetRelation(targetRelation).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Primary(primary).SourceRelationDescription(sourceRelationDescription).TargetRelationDescription(targetRelationDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.RemoveProfileRelationship``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveProfileRelationship`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.RemoveProfileRelationship`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**targetProfileId** | **string** |  | 
**sourceProfileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiRemoveProfileRelationshipRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------


 **sourceRelation** | **string** | Indicates the type of relationship the current profile(Source Profile) has with the related profile(Target Profile). | 
 **targetRelation** | **string** | Indicates the type of relationship the related profile(Target Profile) has with the current profile(Source Profile). | 
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **primary** | **bool** | Indicates if this relationship is the primary relationship. | 
 **sourceRelationDescription** | **string** | Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true. | 
 **targetRelationDescription** | **string** | Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile). | 
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


## SetProfileCommissionAccount

> Status SetProfileCommissionAccount(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCommissionAccount(profileCommissionAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Set profile commission account



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
    profileCommissionAccount := *openapiclient.NewProfileCommissionAccount() // ProfileCommissionAccount | Request object for updating profile commission detail.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.SetProfileCommissionAccount(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileCommissionAccount(profileCommissionAccount).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.SetProfileCommissionAccount``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SetProfileCommissionAccount`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.SetProfileCommissionAccount`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiSetProfileCommissionAccountRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileCommissionAccount** | [**ProfileCommissionAccount**](ProfileCommissionAccount.md) | Request object for updating profile commission detail. | 
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


## StoreEmail

> Status StoreEmail(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EmailMessageType(emailMessageType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Create an Email.



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
    profileId := "profileId_example" // string | Profile ID linked to an Email.
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    emailMessageType := *openapiclient.NewStoreEmailRequest() // StoreEmailRequest | Request object for storing an email.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.StoreEmail(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EmailMessageType(emailMessageType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.StoreEmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StoreEmail`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.StoreEmail`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** | Profile ID linked to an Email. | 

### Other Parameters

Other parameters are passed through a pointer to a apiStoreEmailRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **emailMessageType** | [**StoreEmailRequest**](StoreEmailRequest.md) | Request object for storing an email. | 
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


## SynchronizeProfileSubscriptions

> Status SynchronizeProfileSubscriptions(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileSubscriptionsToSynchronize(profileSubscriptionsToSynchronize).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Synchronize profile subscriptions



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
    profileSubscriptionsToSynchronize := *openapiclient.NewProfileSubscriptionsToSynchronize() // ProfileSubscriptionsToSynchronize | Request object for re-subscribing profile subscriptions.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.SynchronizeProfileSubscriptions(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileSubscriptionsToSynchronize(profileSubscriptionsToSynchronize).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.SynchronizeProfileSubscriptions``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `SynchronizeProfileSubscriptions`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.SynchronizeProfileSubscriptions`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiSynchronizeProfileSubscriptionsRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profileSubscriptionsToSynchronize** | [**ProfileSubscriptionsToSynchronize**](ProfileSubscriptionsToSynchronize.md) | Request object for re-subscribing profile subscriptions. | 
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


## ValidateForgetProfiles

> ValidatedForgetProfiles ValidateForgetProfiles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForgetProfilesCriteria(forgetProfilesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Validate forget profiles



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
    forgetProfilesCriteria := *openapiclient.NewForgetProfilesCriteria() // ForgetProfilesCriteria | Operation to validate profiles for forgetting.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ValidateForgetProfiles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ForgetProfilesCriteria(forgetProfilesCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ValidateForgetProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateForgetProfiles`: ValidatedForgetProfiles
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ValidateForgetProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiValidateForgetProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **forgetProfilesCriteria** | [**ForgetProfilesCriteria**](ForgetProfilesCriteria.md) | Operation to validate profiles for forgetting. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**ValidatedForgetProfiles**](ValidatedForgetProfiles.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## ValidateReservationsForProfile

> FuturePastBookings ValidateReservationsForProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FuturePastBookingsCriteria(futurePastBookingsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Check future past bookings



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
    futurePastBookingsCriteria := *openapiclient.NewFuturePastBookingsCriteria() // FuturePastBookingsCriteria | Request for information regarding existence of profile in future and/or past business blocks and/or reservations.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.ValidateReservationsForProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FuturePastBookingsCriteria(futurePastBookingsCriteria).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.ValidateReservationsForProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `ValidateReservationsForProfile`: FuturePastBookings
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.ValidateReservationsForProfile`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**profileId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiValidateReservationsForProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **futurePastBookingsCriteria** | [**FuturePastBookingsCriteria**](FuturePastBookingsCriteria.md) | Request for information regarding existence of profile in future and/or past business blocks and/or reservations. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**FuturePastBookings**](FuturePastBookings.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)


## VerifyECertificate

> VerifiedECertificate VerifyECertificate(ctx, certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateToVerify(eCertificateToVerify).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

Verify E-Certificate Number



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
    certificateId := "certificateId_example" // string | 
    authorization := "authorization_example" // string | Bearer token that needs to be passed which is generated post user authentication
    xAppKey := "xAppKey_example" // string | Client or Partner's Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    eCertificateToVerify := *openapiclient.NewECertificateToVerify() // ECertificateToVerify | Request object to Verify an E-Certificate Number.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileAPI.VerifyECertificate(context.Background(), certificateId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ECertificateToVerify(eCertificateToVerify).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileAPI.VerifyECertificate``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `VerifyECertificate`: VerifiedECertificate
    fmt.Fprintf(os.Stdout, "Response from `ProfileAPI.VerifyECertificate`: %v\n", resp)
}
```

### Path Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
**ctx** | **context.Context** | context for authentication, logging, cancellation, deadlines, tracing, etc.
**certificateId** | **string** |  | 

### Other Parameters

Other parameters are passed through a pointer to a apiVerifyECertificateRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------

 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner&#39;s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **eCertificateToVerify** | [**ECertificateToVerify**](ECertificateToVerify.md) | Request object to Verify an E-Certificate Number. | 
 **xExternalsystem** | **string** | External system code. | 
 **acceptLanguage** | **string** | Language code | 

### Return type

[**VerifiedECertificate**](VerifiedECertificate.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json;charset=UTF-8
- **Accept**: application/json;charset=UTF-8

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints)
[[Back to Model list]](../README.md#documentation-for-models)
[[Back to README]](../README.md)

