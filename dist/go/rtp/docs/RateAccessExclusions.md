# RateAccessExclusions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateAccessExclusions** | Pointer to [**RateAccessExclusionsType**](RateAccessExclusionsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRateAccessExclusions

`func NewRateAccessExclusions() *RateAccessExclusions`

NewRateAccessExclusions instantiates a new RateAccessExclusions object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateAccessExclusionsWithDefaults

`func NewRateAccessExclusionsWithDefaults() *RateAccessExclusions`

NewRateAccessExclusionsWithDefaults instantiates a new RateAccessExclusions object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RateAccessExclusions) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateAccessExclusions) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateAccessExclusions) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateAccessExclusions) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateAccessExclusions

`func (o *RateAccessExclusions) GetRateAccessExclusions() RateAccessExclusionsType`

GetRateAccessExclusions returns the RateAccessExclusions field if non-nil, zero value otherwise.

### GetRateAccessExclusionsOk

`func (o *RateAccessExclusions) GetRateAccessExclusionsOk() (*RateAccessExclusionsType, bool)`

GetRateAccessExclusionsOk returns a tuple with the RateAccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAccessExclusions

`func (o *RateAccessExclusions) SetRateAccessExclusions(v RateAccessExclusionsType)`

SetRateAccessExclusions sets RateAccessExclusions field to given value.

### HasRateAccessExclusions

`func (o *RateAccessExclusions) HasRateAccessExclusions() bool`

HasRateAccessExclusions returns a boolean if a field has been set.

### GetWarnings

`func (o *RateAccessExclusions) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateAccessExclusions) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateAccessExclusions) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateAccessExclusions) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


