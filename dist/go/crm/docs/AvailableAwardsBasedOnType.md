# AvailableAwardsBasedOnType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**MembershipAvailableAwards** | Pointer to [**[]MembershipAwardAvailabilityType**](MembershipAwardAvailabilityType.md) | List of available awards information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAvailableAwardsBasedOnType

`func NewAvailableAwardsBasedOnType() *AvailableAwardsBasedOnType`

NewAvailableAwardsBasedOnType instantiates a new AvailableAwardsBasedOnType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAvailableAwardsBasedOnTypeWithDefaults

`func NewAvailableAwardsBasedOnTypeWithDefaults() *AvailableAwardsBasedOnType`

NewAvailableAwardsBasedOnTypeWithDefaults instantiates a new AvailableAwardsBasedOnType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetMembershipAvailableAwards

`func (o *AvailableAwardsBasedOnType) GetMembershipAvailableAwards() []MembershipAwardAvailabilityType`

GetMembershipAvailableAwards returns the MembershipAvailableAwards field if non-nil, zero value otherwise.

### GetMembershipAvailableAwardsOk

`func (o *AvailableAwardsBasedOnType) GetMembershipAvailableAwardsOk() (*[]MembershipAwardAvailabilityType, bool)`

GetMembershipAvailableAwardsOk returns a tuple with the MembershipAvailableAwards field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMembershipAvailableAwards

`func (o *AvailableAwardsBasedOnType) SetMembershipAvailableAwards(v []MembershipAwardAvailabilityType)`

SetMembershipAvailableAwards sets MembershipAvailableAwards field to given value.

### HasMembershipAvailableAwards

`func (o *AvailableAwardsBasedOnType) HasMembershipAvailableAwards() bool`

HasMembershipAvailableAwards returns a boolean if a field has been set.

### GetLinks

`func (o *AvailableAwardsBasedOnType) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AvailableAwardsBasedOnType) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AvailableAwardsBasedOnType) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AvailableAwardsBasedOnType) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AvailableAwardsBasedOnType) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AvailableAwardsBasedOnType) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AvailableAwardsBasedOnType) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AvailableAwardsBasedOnType) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


