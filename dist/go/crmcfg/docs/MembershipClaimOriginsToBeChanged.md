# MembershipClaimOriginsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipClaimOrigins** | Pointer to [**[]MembershipClaimOriginType**](MembershipClaimOriginType.md) | List of Membership Claim Origins. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipClaimOriginsToBeChanged

`func NewMembershipClaimOriginsToBeChanged() *MembershipClaimOriginsToBeChanged`

NewMembershipClaimOriginsToBeChanged instantiates a new MembershipClaimOriginsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimOriginsToBeChangedWithDefaults

`func NewMembershipClaimOriginsToBeChangedWithDefaults() *MembershipClaimOriginsToBeChanged`

NewMembershipClaimOriginsToBeChangedWithDefaults instantiates a new MembershipClaimOriginsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipClaimOriginsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClaimOriginsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClaimOriginsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClaimOriginsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipClaimOrigins

`func (o *MembershipClaimOriginsToBeChanged) GetMembershipClaimOrigins() []MembershipClaimOriginType`

GetMembershipClaimOrigins returns the MembershipClaimOrigins field if non-nil, zero value otherwise.

### GetMembershipClaimOriginsOk

`func (o *MembershipClaimOriginsToBeChanged) GetMembershipClaimOriginsOk() (*[]MembershipClaimOriginType, bool)`

GetMembershipClaimOriginsOk returns a tuple with the MembershipClaimOrigins field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimOrigins

`func (o *MembershipClaimOriginsToBeChanged) SetMembershipClaimOrigins(v []MembershipClaimOriginType)`

SetMembershipClaimOrigins sets MembershipClaimOrigins field to given value.

### HasMembershipClaimOrigins

`func (o *MembershipClaimOriginsToBeChanged) HasMembershipClaimOrigins() bool`

HasMembershipClaimOrigins returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClaimOriginsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClaimOriginsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClaimOriginsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClaimOriginsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


