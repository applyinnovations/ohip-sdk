# CustomNumberConfigurationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Area** | Pointer to [**CustomNumberConfigurationAreaType**](CustomNumberConfigurationAreaType.md) |  | [optional] 
**Code** | Pointer to **string** | Custom number configuration code. | [optional] 
**Condition** | Pointer to **string** | The condition to be met to generate and apply the custom number. | [optional] 
**Description** | Pointer to **string** | The description of the custom number configuration code. | [optional] 
**Formula** | Pointer to **string** | The formula to generate the custom number. | [optional] 
**HotelId** | Pointer to **string** | Hotel context for the custom number configuration. | [optional] 
**InActive** | Pointer to **bool** | Indicator that tells whether the configuration is active or not. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewCustomNumberConfigurationType

`func NewCustomNumberConfigurationType() *CustomNumberConfigurationType`

NewCustomNumberConfigurationType instantiates a new CustomNumberConfigurationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCustomNumberConfigurationTypeWithDefaults

`func NewCustomNumberConfigurationTypeWithDefaults() *CustomNumberConfigurationType`

NewCustomNumberConfigurationTypeWithDefaults instantiates a new CustomNumberConfigurationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetArea

`func (o *CustomNumberConfigurationType) GetArea() CustomNumberConfigurationAreaType`

GetArea returns the Area field if non-nil, zero value otherwise.

### GetAreaOk

`func (o *CustomNumberConfigurationType) GetAreaOk() (*CustomNumberConfigurationAreaType, bool)`

GetAreaOk returns a tuple with the Area field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetArea

`func (o *CustomNumberConfigurationType) SetArea(v CustomNumberConfigurationAreaType)`

SetArea sets Area field to given value.

### HasArea

`func (o *CustomNumberConfigurationType) HasArea() bool`

HasArea returns a boolean if a field has been set.

### GetCode

`func (o *CustomNumberConfigurationType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CustomNumberConfigurationType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CustomNumberConfigurationType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CustomNumberConfigurationType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetCondition

`func (o *CustomNumberConfigurationType) GetCondition() string`

GetCondition returns the Condition field if non-nil, zero value otherwise.

### GetConditionOk

`func (o *CustomNumberConfigurationType) GetConditionOk() (*string, bool)`

GetConditionOk returns a tuple with the Condition field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCondition

`func (o *CustomNumberConfigurationType) SetCondition(v string)`

SetCondition sets Condition field to given value.

### HasCondition

`func (o *CustomNumberConfigurationType) HasCondition() bool`

HasCondition returns a boolean if a field has been set.

### GetDescription

`func (o *CustomNumberConfigurationType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *CustomNumberConfigurationType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *CustomNumberConfigurationType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *CustomNumberConfigurationType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetFormula

`func (o *CustomNumberConfigurationType) GetFormula() string`

GetFormula returns the Formula field if non-nil, zero value otherwise.

### GetFormulaOk

`func (o *CustomNumberConfigurationType) GetFormulaOk() (*string, bool)`

GetFormulaOk returns a tuple with the Formula field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFormula

`func (o *CustomNumberConfigurationType) SetFormula(v string)`

SetFormula sets Formula field to given value.

### HasFormula

`func (o *CustomNumberConfigurationType) HasFormula() bool`

HasFormula returns a boolean if a field has been set.

### GetHotelId

`func (o *CustomNumberConfigurationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *CustomNumberConfigurationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *CustomNumberConfigurationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *CustomNumberConfigurationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInActive

`func (o *CustomNumberConfigurationType) GetInActive() bool`

GetInActive returns the InActive field if non-nil, zero value otherwise.

### GetInActiveOk

`func (o *CustomNumberConfigurationType) GetInActiveOk() (*bool, bool)`

GetInActiveOk returns a tuple with the InActive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInActive

`func (o *CustomNumberConfigurationType) SetInActive(v bool)`

SetInActive sets InActive field to given value.

### HasInActive

`func (o *CustomNumberConfigurationType) HasInActive() bool`

HasInActive returns a boolean if a field has been set.

### GetOrderSequence

`func (o *CustomNumberConfigurationType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *CustomNumberConfigurationType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *CustomNumberConfigurationType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *CustomNumberConfigurationType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.

### GetTimeSpan

`func (o *CustomNumberConfigurationType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *CustomNumberConfigurationType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *CustomNumberConfigurationType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *CustomNumberConfigurationType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


