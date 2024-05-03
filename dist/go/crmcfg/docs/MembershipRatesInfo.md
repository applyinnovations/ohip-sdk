# MembershipRatesInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipRates** | Pointer to [**[]MembershipRateType**](MembershipRateType.md) | Membership Rate summary information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewMembershipRatesInfo

`func NewMembershipRatesInfo() *MembershipRatesInfo`

NewMembershipRatesInfo instantiates a new MembershipRatesInfo object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewMembershipRatesInfoWithDefaults

`func NewMembershipRatesInfoWithDefaults() *MembershipRatesInfo`

NewMembershipRatesInfoWithDefaults instantiates a new MembershipRatesInfo object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipRates

`func (o *MembershipRatesInfo) GetMembershipRates() []MembershipRateType`

GetMembershipRates returns the MembershipRates field if non-nil, zero value otherwise.

### GetMembershipRatesOk

`func (o *MembershipRatesInfo) GetMembershipRatesOk() (*[]MembershipRateType, bool)`

GetMembershipRatesOk returns a tuple with the MembershipRates field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipRates

`func (o *MembershipRatesInfo) SetMembershipRates(v []MembershipRateType)`

SetMembershipRates sets MembershipRates field to given value.

### HasMembershipRates

`func (o *MembershipRatesInfo) HasMembershipRates() bool`

HasMembershipRates returns a boolean if a field has been set.

### GetLinks

`func (o *MembershipRatesInfo) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *MembershipRatesInfo) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *MembershipRatesInfo) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *MembershipRatesInfo) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *MembershipRatesInfo) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *MembershipRatesInfo) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *MembershipRatesInfo) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *MembershipRatesInfo) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


