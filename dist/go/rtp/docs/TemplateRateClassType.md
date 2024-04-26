# TemplateRateClassType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description of the rate class. | [optional] 
**RateClass** | Pointer to **string** | Code that uniquely identifies the rate class. | [optional] 
**Sequence** | Pointer to **int32** | Display Sequence of the rate class. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewTemplateRateClassType

`func NewTemplateRateClassType() *TemplateRateClassType`

NewTemplateRateClassType instantiates a new TemplateRateClassType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateRateClassTypeWithDefaults

`func NewTemplateRateClassTypeWithDefaults() *TemplateRateClassType`

NewTemplateRateClassTypeWithDefaults instantiates a new TemplateRateClassType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *TemplateRateClassType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateRateClassType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateRateClassType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateRateClassType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetRateClass

`func (o *TemplateRateClassType) GetRateClass() string`

GetRateClass returns the RateClass field if non-nil, zero value otherwise.

### GetRateClassOk

`func (o *TemplateRateClassType) GetRateClassOk() (*string, bool)`

GetRateClassOk returns a tuple with the RateClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateClass

`func (o *TemplateRateClassType) SetRateClass(v string)`

SetRateClass sets RateClass field to given value.

### HasRateClass

`func (o *TemplateRateClassType) HasRateClass() bool`

HasRateClass returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateRateClassType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateRateClassType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateRateClassType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateRateClassType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetTimeSpan

`func (o *TemplateRateClassType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *TemplateRateClassType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *TemplateRateClassType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *TemplateRateClassType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


