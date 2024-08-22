# MembershipClaims

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipClaimsDetail** | Pointer to [**[]MembershipClaimSummaryType**](MembershipClaimSummaryType.md) | Contains summary information of the claim. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipClaims

`func NewMembershipClaims() *MembershipClaims`

NewMembershipClaims instantiates a new MembershipClaims object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimsWithDefaults

`func NewMembershipClaimsWithDefaults() *MembershipClaims`

NewMembershipClaimsWithDefaults instantiates a new MembershipClaims object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipClaims) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClaims) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClaims) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClaims) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipClaimsDetail

`func (o *MembershipClaims) GetMembershipClaimsDetail() []MembershipClaimSummaryType`

GetMembershipClaimsDetail returns the MembershipClaimsDetail field if non-nil, zero value otherwise.

### GetMembershipClaimsDetailOk

`func (o *MembershipClaims) GetMembershipClaimsDetailOk() (*[]MembershipClaimSummaryType, bool)`

GetMembershipClaimsDetailOk returns a tuple with the MembershipClaimsDetail field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimsDetail

`func (o *MembershipClaims) SetMembershipClaimsDetail(v []MembershipClaimSummaryType)`

SetMembershipClaimsDetail sets MembershipClaimsDetail field to given value.

### HasMembershipClaimsDetail

`func (o *MembershipClaims) HasMembershipClaimsDetail() bool`

HasMembershipClaimsDetail returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClaims) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClaims) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClaims) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClaims) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


