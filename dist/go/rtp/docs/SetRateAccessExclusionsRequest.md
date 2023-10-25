# SetRateAccessExclusionsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RateAccessExclusions** | Pointer to [**RateAccessExclusionsType**](RateAccessExclusionsType.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewSetRateAccessExclusionsRequest

`func NewSetRateAccessExclusionsRequest() *SetRateAccessExclusionsRequest`

NewSetRateAccessExclusionsRequest instantiates a new SetRateAccessExclusionsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewSetRateAccessExclusionsRequestWithDefaults

`func NewSetRateAccessExclusionsRequestWithDefaults() *SetRateAccessExclusionsRequest`

NewSetRateAccessExclusionsRequestWithDefaults instantiates a new SetRateAccessExclusionsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *SetRateAccessExclusionsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *SetRateAccessExclusionsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *SetRateAccessExclusionsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *SetRateAccessExclusionsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRateAccessExclusions

`func (o *SetRateAccessExclusionsRequest) GetRateAccessExclusions() RateAccessExclusionsType`

GetRateAccessExclusions returns the RateAccessExclusions field if non-nil, zero value otherwise.

### GetRateAccessExclusionsOk

`func (o *SetRateAccessExclusionsRequest) GetRateAccessExclusionsOk() (*RateAccessExclusionsType, bool)`

GetRateAccessExclusionsOk returns a tuple with the RateAccessExclusions field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateAccessExclusions

`func (o *SetRateAccessExclusionsRequest) SetRateAccessExclusions(v RateAccessExclusionsType)`

SetRateAccessExclusions sets RateAccessExclusions field to given value.

### HasRateAccessExclusions

`func (o *SetRateAccessExclusionsRequest) HasRateAccessExclusions() bool`

HasRateAccessExclusions returns a boolean if a field has been set.

### GetWarnings

`func (o *SetRateAccessExclusionsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *SetRateAccessExclusionsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *SetRateAccessExclusionsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *SetRateAccessExclusionsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


