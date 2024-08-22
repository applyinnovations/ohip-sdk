# StatusStatisticType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**StatisticUnit** | Pointer to [**[]StatisticUnitType**](StatisticUnitType.md) | Unit type to hold statistic code and value pair. | [optional] 
**Status** | Pointer to **string** | Status type of statistic, e.g. Definite. | [optional] 

## Methods

### NewStatusStatisticType

`func NewStatusStatisticType() *StatusStatisticType`

NewStatusStatisticType instantiates a new StatusStatisticType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewStatusStatisticTypeWithDefaults

`func NewStatusStatisticTypeWithDefaults() *StatusStatisticType`

NewStatusStatisticTypeWithDefaults instantiates a new StatusStatisticType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetStatisticUnit

`func (o *StatusStatisticType) GetStatisticUnit() []StatisticUnitType`

GetStatisticUnit returns the StatisticUnit field if non-nil, zero value otherwise.

### GetStatisticUnitOk

`func (o *StatusStatisticType) GetStatisticUnitOk() (*[]StatisticUnitType, bool)`

GetStatisticUnitOk returns a tuple with the StatisticUnit field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatisticUnit

`func (o *StatusStatisticType) SetStatisticUnit(v []StatisticUnitType)`

SetStatisticUnit sets StatisticUnit field to given value.

### HasStatisticUnit

`func (o *StatusStatisticType) HasStatisticUnit() bool`

HasStatisticUnit returns a boolean if a field has been set.

### GetStatus

`func (o *StatusStatisticType) GetStatus() string`

GetStatus returns the Status field if non-nil, zero value otherwise.

### GetStatusOk

`func (o *StatusStatisticType) GetStatusOk() (*string, bool)`

GetStatusOk returns a tuple with the Status field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetStatus

`func (o *StatusStatisticType) SetStatus(v string)`

SetStatus sets Status field to given value.

### HasStatus

`func (o *StatusStatisticType) HasStatus() bool`

HasStatus returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


