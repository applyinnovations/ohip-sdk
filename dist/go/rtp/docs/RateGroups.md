# RateGroups

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateGroups** | Pointer to [**[]RateGroupType**](RateGroupType.md) | Collection of Rate Groups. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateGroups

`func NewRateGroups() *RateGroups`

NewRateGroups instantiates a new RateGroups object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateGroupsWithDefaults

`func NewRateGroupsWithDefaults() *RateGroups`

NewRateGroupsWithDefaults instantiates a new RateGroups object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RateGroups) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateGroups) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateGroups) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateGroups) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateGroups

`func (o *RateGroups) GetRateGroups() []RateGroupType`

GetRateGroups returns the RateGroups field if non-nil, zero value otherwise.

### GetRateGroupsOk

`func (o *RateGroups) GetRateGroupsOk() (*[]RateGroupType, bool)`

GetRateGroupsOk returns a tuple with the RateGroups field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateGroups

`func (o *RateGroups) SetRateGroups(v []RateGroupType)`

SetRateGroups sets RateGroups field to given value.

### HasRateGroups

`func (o *RateGroups) HasRateGroups() bool`

HasRateGroups returns a boolean if a field has been set.

### GetWarnings

`func (o *RateGroups) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateGroups) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateGroups) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateGroups) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

