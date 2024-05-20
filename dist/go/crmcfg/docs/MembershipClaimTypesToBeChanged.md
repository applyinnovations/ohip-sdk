# MembershipClaimTypesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipClaimTypes** | Pointer to [**[]MembershipClaimTypeType**](MembershipClaimTypeType.md) | List of Membership Claim Types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipClaimTypesToBeChanged

`func NewMembershipClaimTypesToBeChanged() *MembershipClaimTypesToBeChanged`

NewMembershipClaimTypesToBeChanged instantiates a new MembershipClaimTypesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimTypesToBeChangedWithDefaults

`func NewMembershipClaimTypesToBeChangedWithDefaults() *MembershipClaimTypesToBeChanged`

NewMembershipClaimTypesToBeChangedWithDefaults instantiates a new MembershipClaimTypesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipClaimTypes

`func (o *MembershipClaimTypesToBeChanged) GetMembershipClaimTypes() []MembershipClaimTypeType`

GetMembershipClaimTypes returns the MembershipClaimTypes field if non-nil, zero value otherwise.

### GetMembershipClaimTypesOk

`func (o *MembershipClaimTypesToBeChanged) GetMembershipClaimTypesOk() (*[]MembershipClaimTypeType, bool)`

GetMembershipClaimTypesOk returns a tuple with the MembershipClaimTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimTypes

`func (o *MembershipClaimTypesToBeChanged) SetMembershipClaimTypes(v []MembershipClaimTypeType)`

SetMembershipClaimTypes sets MembershipClaimTypes field to given value.

### HasMembershipClaimTypes

`func (o *MembershipClaimTypesToBeChanged) HasMembershipClaimTypes() bool`

HasMembershipClaimTypes returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipClaimTypesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClaimTypesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClaimTypesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClaimTypesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClaimTypesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClaimTypesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClaimTypesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClaimTypesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


