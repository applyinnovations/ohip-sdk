# MembershipClaimTypesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**MembershipClaimTypes** | Pointer to [**[]MembershipClaimTypeType**](MembershipClaimTypeType.md) | List of Membership Claim Types. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipClaimTypesDetails

`func NewMembershipClaimTypesDetails() *MembershipClaimTypesDetails`

NewMembershipClaimTypesDetails instantiates a new MembershipClaimTypesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipClaimTypesDetailsWithDefaults

`func NewMembershipClaimTypesDetailsWithDefaults() *MembershipClaimTypesDetails`

NewMembershipClaimTypesDetailsWithDefaults instantiates a new MembershipClaimTypesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *MembershipClaimTypesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipClaimTypesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipClaimTypesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipClaimTypesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetMembershipClaimTypes

`func (o *MembershipClaimTypesDetails) GetMembershipClaimTypes() []MembershipClaimTypeType`

GetMembershipClaimTypes returns the MembershipClaimTypes field if non-nil, zero value otherwise.

### GetMembershipClaimTypesOk

`func (o *MembershipClaimTypesDetails) GetMembershipClaimTypesOk() (*[]MembershipClaimTypeType, bool)`

GetMembershipClaimTypesOk returns a tuple with the MembershipClaimTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipClaimTypes

`func (o *MembershipClaimTypesDetails) SetMembershipClaimTypes(v []MembershipClaimTypeType)`

SetMembershipClaimTypes sets MembershipClaimTypes field to given value.

### HasMembershipClaimTypes

`func (o *MembershipClaimTypesDetails) HasMembershipClaimTypes() bool`

HasMembershipClaimTypes returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipClaimTypesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipClaimTypesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipClaimTypesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipClaimTypesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


