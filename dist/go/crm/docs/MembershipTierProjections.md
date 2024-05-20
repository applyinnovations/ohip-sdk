# MembershipTierProjections

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipTierProjection** | Pointer to [**MembershipTierProjectionType**](MembershipTierProjectionType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipTierProjections

`func NewMembershipTierProjections() *MembershipTierProjections`

NewMembershipTierProjections instantiates a new MembershipTierProjections object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipTierProjectionsWithDefaults

`func NewMembershipTierProjectionsWithDefaults() *MembershipTierProjections`

NewMembershipTierProjectionsWithDefaults instantiates a new MembershipTierProjections object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipTierProjections) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipTierProjections) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipTierProjections) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipTierProjections) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipTierProjection

`func (o *MembershipTierProjections) GetMembershipTierProjection() MembershipTierProjectionType`

GetMembershipTierProjection returns the MembershipTierProjection field if non-nil, zero value otherwise.

### GetMembershipTierProjectionOk

`func (o *MembershipTierProjections) GetMembershipTierProjectionOk() (*MembershipTierProjectionType, bool)`

GetMembershipTierProjectionOk returns a tuple with the MembershipTierProjection field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipTierProjection

`func (o *MembershipTierProjections) SetMembershipTierProjection(v MembershipTierProjectionType)`

SetMembershipTierProjection sets MembershipTierProjection field to given value.

### HasMembershipTierProjection

`func (o *MembershipTierProjections) HasMembershipTierProjection() bool`

HasMembershipTierProjection returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipTierProjections) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipTierProjections) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipTierProjections) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipTierProjections) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


