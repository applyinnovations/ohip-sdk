# IndicatorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**IndicatorName** | Pointer to **string** | Name of the indicator. | [optional] 
**Count** | Pointer to **int32** | Indicates number of occurrences of the indicator. | [optional] 

## Methods

### NewIndicatorType

`func NewIndicatorType() *IndicatorType`

NewIndicatorType instantiates a new IndicatorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewIndicatorTypeWithDefaults

`func NewIndicatorTypeWithDefaults() *IndicatorType`

NewIndicatorTypeWithDefaults instantiates a new IndicatorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetIndicatorName

`func (o *IndicatorType) GetIndicatorName() string`

GetIndicatorName returns the IndicatorName field if non-nil, zero value otherwise.

### GetIndicatorNameOk

`func (o *IndicatorType) GetIndicatorNameOk() (*string, bool)`

GetIndicatorNameOk returns a tuple with the IndicatorName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetIndicatorName

`func (o *IndicatorType) SetIndicatorName(v string)`

SetIndicatorName sets IndicatorName field to given value.

### HasIndicatorName

`func (o *IndicatorType) HasIndicatorName() bool`

HasIndicatorName returns a boolean if a field has been set.

### GetCount

`func (o *IndicatorType) GetCount() int32`

GetCount returns the Count field if non-nil, zero value otherwise.

### GetCountOk

`func (o *IndicatorType) GetCountOk() (*int32, bool)`

GetCountOk returns a tuple with the Count field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCount

`func (o *IndicatorType) SetCount(v int32)`

SetCount sets Count field to given value.

### HasCount

`func (o *IndicatorType) HasCount() bool`

HasCount returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


