# \ProfileApi

All URIs are relative to */crm/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**DeleteProfile**](ProfileApi.md#DeleteProfile) | **Delete** /profiles/{profileId} | Forget or delete a profile by ID
[**GetCompanyProfile**](ProfileApi.md#GetCompanyProfile) | **Get** /companies/{corporateID} | Get company profile by corporate ID
[**GetGuestProfile**](ProfileApi.md#GetGuestProfile) | **Get** /guests/{guestId} | Get guest profile by guest ID
[**GetProfile**](ProfileApi.md#GetProfile) | **Get** /profiles/{profileId} | Get profile by ID
[**GetProfileByExtId**](ProfileApi.md#GetProfileByExtId) | **Get** /externalSystems/{extSystemCode}/profiles/{profileExternalId} | Get profile by external ID
[**GetProfileRelationships**](ProfileApi.md#GetProfileRelationships) | **Get** /profiles/{profileId}/relationships | FetchProfileRelationships method provides the ability to retrieve a profile relationships for a profile based on the unique internal profile ID specified.
[**GetProfiles**](ProfileApi.md#GetProfiles) | **Get** /profiles | Search for profile(s)
[**GetStayHistory**](ProfileApi.md#GetStayHistory) | **Get** /profiles/{profileId}/stayHistory | FetchStayHistory method provides stay history and future reservations of a profile based on the unique internal ID specified.
[**MergeProfiles**](ProfileApi.md#MergeProfiles) | **Post** /profiles/{survivorProfileId}/merges | Merge two profiles by ID
[**PostCompanyProfile**](ProfileApi.md#PostCompanyProfile) | **Post** /companies | This API facilitates creation of a company/agent/group/source profile in OPERA.
[**PostGuestProfile**](ProfileApi.md#PostGuestProfile) | **Post** /guests | Create a guest, contact or employee profile in OPERA
[**PostProfile**](ProfileApi.md#PostProfile) | **Post** /profiles | Create a profile
[**PostProfileRelationship**](ProfileApi.md#PostProfileRelationship) | **Post** /profiles/{sourceProfileId}/relationships/{targetProfileId} | CreateProfileRelationship method provides the ability to create profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
[**PutProfile**](ProfileApi.md#PutProfile) | **Put** /profiles/{profileId} | Update a profile by ID
[**PutProfileRelationship**](ProfileApi.md#PutProfileRelationship) | **Put** /profiles/{sourceProfileId}/relationships/{targetProfileId} | ChangeProfileRelationship method provides the ability to update(delete and add) profile relationship based on the request criteria of SourceProfileID , TargetProfileID, To Be ChangedProfileID and SourceProfileRelationType specified.
[**RemoveProfileRelationship**](ProfileApi.md#RemoveProfileRelationship) | **Delete** /profiles/{sourceProfileId}/relationships/{targetProfileId} | DeleteProfileRelationship method provides the ability to delete profile relationship based on the request criteria of SourceProfileID,TargetProfileID and SourceRelationType specified.
[**StoreEmail**](ProfileApi.md#StoreEmail) | **Post** /profiles/{profileId}/emails | Create an Email.



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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.DeleteProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.DeleteProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `DeleteProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.DeleteProfile`: %v\n", resp)
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.GetCompanyProfile(context.Background(), corporateID).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetCompanyProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetCompanyProfile`: Company
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetCompanyProfile`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code used to filter hotel specific information regarding the profile. (optional)
    fetchInstructions := []string{"FetchInstructions_example"} // []string | Room Ownership information associated with the profile. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.GetGuestProfile(context.Background(), guestId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetGuestProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetGuestProfile`: Guest
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetGuestProfile`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


## GetProfile

> Profile GetProfile(ctx, profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).ShowInactiveRoomOwners(showInactiveRoomOwners).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    hotelId := "hotelId_example" // string | Hotel Code used to filter hotel specific information regarding the profile. (optional)
    logViewProfile := true // bool | This element tells when the view profile should be logged. (optional)
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
    resp, r, err := apiClient.ProfileApi.GetProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).ShowInactiveRoomOwners(showInactiveRoomOwners).MarkAsRecentlyAccessed(markAsRecentlyAccessed).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfile`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetProfile`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **hotelId** | **string** | Hotel Code used to filter hotel specific information regarding the profile. | 
 **logViewProfile** | **bool** | This element tells when the view profile should be logged. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.ProfileApi.GetProfileByExtId(context.Background(), profileExternalId, extSystemCode).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).LogViewProfile(logViewProfile).ShowInactiveRoomOwners(showInactiveRoomOwners).FetchInstructions(fetchInstructions).InstructionParameterType(instructionParameterType).Value(value).AllowedAction(allowedAction).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetProfileByExtId``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileByExtId`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetProfileByExtId`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    relationshipPrimaryProfile := true // bool | Type of Profile to be fetched from OPERA. (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.GetProfileRelationships(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).RelationshipPrimaryProfile(relationshipPrimaryProfile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetProfileRelationships``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfileRelationships`: ProfileRelationships
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetProfileRelationships`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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


## GetProfiles

> ProfileSummaries GetProfiles(ctx).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeInactive(excludeInactive).HotelId(hotelId).IncludeHasHierarchyOnly(includeHasHierarchyOnly).IncludePrimaryOwnersOnly(includePrimaryOwnersOnly).IncludePurgeProfiles(includePurgeProfiles).Limit(limit).Offset(offset).SearchType(searchType).SummaryInfo(summaryInfo).SearchString(searchString).IncludeAnonymized(includeAnonymized).ProfileType(profileType).ProfileIds(profileIds).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).CorporateIds(corporateIds).ProfileName(profileName).GivenName(givenName).IncognitoName(incognitoName).IncognitoGivenName(incognitoGivenName).City(city).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).Keyword(keyword).Communication(communication).Membership(membership).MembershipType(membershipType).OwnerCodes(ownerCodes).MembershipLevel(membershipLevel).ARNumber(aRNumber).TaxID(taxID).BusinessSegment(businessSegment).AccountsReceivables(accountsReceivables).CorporateProfiles(corporateProfiles).ExcludeIncompleteProfiles(excludeIncompleteProfiles).NegotiatedRates(negotiatedRates).RelatedProfileExcludeInactive(relatedProfileExcludeInactive).RealtedProfileIncludeHasHierarchyOnly(realtedProfileIncludeHasHierarchyOnly).RelatedProfileNegotiatedRates(relatedProfileNegotiatedRates).RelatedProfileType(relatedProfileType).RelatedProfileName(relatedProfileName).ProtectedProfiles(protectedProfiles).ExcludedProfilesId(excludedProfilesId).IdExtension(idExtension).ExcludedProfilesIdContext(excludedProfilesIdContext).ExcludedProfilesIdType(excludedProfilesIdType).IdentificationNo(identificationNo).FetchInstructions(fetchInstructions).AllowedAction(allowedAction).VipCodes(vipCodes).PredefinedFilterId(predefinedFilterId).PredefinedFilterCode(predefinedFilterCode).PrioritieCodes(prioritieCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()

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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    predefinedFilterId := float32(8.14) // float32 | Unique ID of the Filter used to filter profiles. (optional)
    predefinedFilterCode := "predefinedFilterCode_example" // string | Filter code. (optional)
    prioritieCodes := []string{"Inner_example"} // []string |  (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.GetProfiles(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ExcludeInactive(excludeInactive).HotelId(hotelId).IncludeHasHierarchyOnly(includeHasHierarchyOnly).IncludePrimaryOwnersOnly(includePrimaryOwnersOnly).IncludePurgeProfiles(includePurgeProfiles).Limit(limit).Offset(offset).SearchType(searchType).SummaryInfo(summaryInfo).SearchString(searchString).IncludeAnonymized(includeAnonymized).ProfileType(profileType).ProfileIds(profileIds).ExternalReferenceIds(externalReferenceIds).ExternalSystemCodes(externalSystemCodes).CorporateIds(corporateIds).ProfileName(profileName).GivenName(givenName).IncognitoName(incognitoName).IncognitoGivenName(incognitoGivenName).City(city).PostalCode(postalCode).State(state).CountryCode(countryCode).StreetAddress(streetAddress).Keyword(keyword).Communication(communication).Membership(membership).MembershipType(membershipType).OwnerCodes(ownerCodes).MembershipLevel(membershipLevel).ARNumber(aRNumber).TaxID(taxID).BusinessSegment(businessSegment).AccountsReceivables(accountsReceivables).CorporateProfiles(corporateProfiles).ExcludeIncompleteProfiles(excludeIncompleteProfiles).NegotiatedRates(negotiatedRates).RelatedProfileExcludeInactive(relatedProfileExcludeInactive).RealtedProfileIncludeHasHierarchyOnly(realtedProfileIncludeHasHierarchyOnly).RelatedProfileNegotiatedRates(relatedProfileNegotiatedRates).RelatedProfileType(relatedProfileType).RelatedProfileName(relatedProfileName).ProtectedProfiles(protectedProfiles).ExcludedProfilesId(excludedProfilesId).IdExtension(idExtension).ExcludedProfilesIdContext(excludedProfilesIdContext).ExcludedProfilesIdType(excludedProfilesIdType).IdentificationNo(identificationNo).FetchInstructions(fetchInstructions).AllowedAction(allowedAction).VipCodes(vipCodes).PredefinedFilterId(predefinedFilterId).PredefinedFilterCode(predefinedFilterCode).PrioritieCodes(prioritieCodes).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetProfiles`: ProfileSummaries
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetProfiles`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiGetProfilesRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
 **predefinedFilterId** | **float32** | Unique ID of the Filter used to filter profiles. | 
 **predefinedFilterCode** | **string** | Filter code. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
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
    resp, r, err := apiClient.ProfileApi.GetStayHistory(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).HotelId(hotelId).IncludePurgeProfiles(includePurgeProfiles).MarkAsRecentlyAccessed(markAsRecentlyAccessed).Limit(limit).FetchInstructions(fetchInstructions).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.GetStayHistory``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `GetStayHistory`: ProfileStayHistory
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.GetStayHistory`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileToBeMerged := *openapiclient.NewMergeProfilesRequest() // MergeProfilesRequest | Request object for merging profiles.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.MergeProfiles(context.Background(), survivorProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileToBeMerged(profileToBeMerged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.MergeProfiles``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `MergeProfiles`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.MergeProfiles`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    company := *openapiclient.NewPostCompanyProfileRequest() // PostCompanyProfileRequest | Request object for creation of company profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PostCompanyProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Company(company).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PostCompanyProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostCompanyProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PostCompanyProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostCompanyProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **company** | [**PostCompanyProfileRequest**](PostCompanyProfileRequest.md) | Request object for creation of company profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    guest := *openapiclient.NewPostGuestProfileRequest() // PostGuestProfileRequest | Request object for creation of guest profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PostGuestProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Guest(guest).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PostGuestProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostGuestProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PostGuestProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostGuestProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **guest** | [**PostGuestProfileRequest**](PostGuestProfileRequest.md) | Request object for creation of guest profile. This object contains profile details with unique identifiers of a profile. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profile := *openapiclient.NewPostProfileRequest() // PostProfileRequest | Request object for creation of profiles. This object contains profile details with unique identifiers for each profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PostProfile(context.Background()).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PostProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfile`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PostProfile`: %v\n", resp)
}
```

### Path Parameters



### Other Parameters

Other parameters are passed through a pointer to a apiPostProfileRequest struct via the builder pattern


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **string** | Bearer token that needs to be passed which is generated post user authentication | 
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileRelationship := *openapiclient.NewPostProfileRelationshipRequest() // PostProfileRelationshipRequest | Request object for creating profile relationship.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PostProfileRelationship(context.Background(), targetProfileId, sourceProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileRelationship(profileRelationship).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PostProfileRelationship``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PostProfileRelationship`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PostProfileRelationship`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profile := *openapiclient.NewPutProfileRequest() // PutProfileRequest | Request object for change/modification of profile details. This object contains modified profile details with unique identifiers for each profile. The standard optional Opera Context element is also included.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PutProfile(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Profile(profile).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PutProfile``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfile`: Profile
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PutProfile`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
 **xHotelid** | **string** | Mandatory parameter to identify the hotel code where the end user is logged in | 
 **profile** | [**PutProfileRequest**](PutProfileRequest.md) | Request object for change/modification of profile details. This object contains modified profile details with unique identifiers for each profile. The standard optional Opera Context element is also included. | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    profileRelationshipToBeChanged := *openapiclient.NewPutProfileRelationshipRequest() // PutProfileRelationshipRequest | Request object for changing profile relationship.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.PutProfileRelationship(context.Background(), targetProfileId, sourceProfileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).ProfileRelationshipToBeChanged(profileRelationshipToBeChanged).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.PutProfileRelationship``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `PutProfileRelationship`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.PutProfileRelationship`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    primary := true // bool | Indicates if this relationship is the primary relationship. (optional)
    sourceRelationDescription := "sourceRelationDescription_example" // string | Displays the description of relationship the current profile(Source Profile) has with the related profile(Target Profile).This needs to be passed if the attribute primary is sent as true. (optional)
    targetRelationDescription := "targetRelationDescription_example" // string | Displays the description of relationship the related profile(Target Profile) has with the current profile(Source Profile). (optional)
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.RemoveProfileRelationship(context.Background(), targetProfileId, sourceProfileId).SourceRelation(sourceRelation).TargetRelation(targetRelation).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).Primary(primary).SourceRelationDescription(sourceRelationDescription).TargetRelationDescription(targetRelationDescription).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.RemoveProfileRelationship``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `RemoveProfileRelationship`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.RemoveProfileRelationship`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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
    xAppKey := "xAppKey_example" // string | Client or Partner’s Application Key
    xHotelid := "xHotelid_example" // string | Mandatory parameter to identify the hotel code where the end user is logged in
    emailMessageType := *openapiclient.NewStoreEmailRequest() // StoreEmailRequest | Request object for storing an email.
    xExternalsystem := "xExternalsystem_example" // string | External system code. (optional)
    acceptLanguage := "acceptLanguage_example" // string | Language code (optional)

    configuration := openapiclient.NewConfiguration()
    apiClient := openapiclient.NewAPIClient(configuration)
    resp, r, err := apiClient.ProfileApi.StoreEmail(context.Background(), profileId).Authorization(authorization).XAppKey(xAppKey).XHotelid(xHotelid).EmailMessageType(emailMessageType).XExternalsystem(xExternalsystem).AcceptLanguage(acceptLanguage).Execute()
    if err != nil {
        fmt.Fprintf(os.Stderr, "Error when calling `ProfileApi.StoreEmail``: %v\n", err)
        fmt.Fprintf(os.Stderr, "Full HTTP response: %v\n", r)
    }
    // response from `StoreEmail`: Status
    fmt.Fprintf(os.Stdout, "Response from `ProfileApi.StoreEmail`: %v\n", resp)
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
 **xAppKey** | **string** | Client or Partner’s Application Key | 
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

