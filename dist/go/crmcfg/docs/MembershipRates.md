# MembershipRates

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipRates** | Pointer to [**[]MembershipRateType**](MembershipRateType.md) | Membership Rate summary information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipRates

`func NewMembershipRates() *MembershipRates`

NewMembershipRates instantiates a new MembershipRates object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipRatesWithDefaults

`func NewMembershipRatesWithDefaults() *MembershipRates`

NewMembershipRatesWithDefaults instantiates a new MembershipRates object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipRates

`func (o *MembershipRates) GetMembershipRates() []MembershipRateType`

GetMembershipRates returns the MembershipRates field if non-nil, zero value otherwise.

### GetMembershipRatesOk

`func (o *MembershipRates) GetMembershipRatesOk() (*[]MembershipRateType, bool)`

GetMembershipRatesOk returns a tuple with the MembershipRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipRates

`func (o *MembershipRates) SetMembershipRates(v []MembershipRateType)`

SetMembershipRates sets MembershipRates field to given value.

### HasMembershipRates

`func (o *MembershipRates) HasMembershipRates() bool`

HasMembershipRates returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipRates) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipRates) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipRates) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipRates) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipRates) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipRates) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipRates) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipRates) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


