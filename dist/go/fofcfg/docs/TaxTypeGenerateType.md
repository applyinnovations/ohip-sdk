# TaxTypeGenerateType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code. | [optional] 
**Description** | Pointer to **string** | description. | [optional] 
**Schedule** | Pointer to [**[]TaxTypeGenerateScheduleType**](TaxTypeGenerateScheduleType.md) | Defines the Calculation Rule for the Tax Type for a specific date schedule | [optional] 

## Methods

### NewTaxTypeGenerateType

`func NewTaxTypeGenerateType() *TaxTypeGenerateType`

NewTaxTypeGenerateType instantiates a new TaxTypeGenerateType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTaxTypeGenerateTypeWithDefaults

`func NewTaxTypeGenerateTypeWithDefaults() *TaxTypeGenerateType`

NewTaxTypeGenerateTypeWithDefaults instantiates a new TaxTypeGenerateType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *TaxTypeGenerateType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TaxTypeGenerateType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TaxTypeGenerateType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TaxTypeGenerateType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TaxTypeGenerateType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TaxTypeGenerateType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TaxTypeGenerateType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TaxTypeGenerateType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSchedule

`func (o *TaxTypeGenerateType) GetSchedule() []TaxTypeGenerateScheduleType`

GetSchedule returns the Schedule field if non-nil, zero value otherwise.

### GetScheduleOk

`func (o *TaxTypeGenerateType) GetScheduleOk() (*[]TaxTypeGenerateScheduleType, bool)`

GetScheduleOk returns a tuple with the Schedule field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSchedule

`func (o *TaxTypeGenerateType) SetSchedule(v []TaxTypeGenerateScheduleType)`

SetSchedule sets Schedule field to given value.

### HasSchedule

`func (o *TaxTypeGenerateType) HasSchedule() bool`

HasSchedule returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


