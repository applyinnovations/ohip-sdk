# TemplateHotelDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** | Specifies the hotel detail category. | [optional] 
**Code** | Pointer to **string** | Specifies the hotel detail code. | [optional] 
**Description** | Pointer to **string** | Specifies the hotel detail description. | [optional] 
**Sequence** | Pointer to **int32** | Specifies the sorting sequence number for the hotel detail. | [optional] 
**TemplateHotelDetailValues** | Pointer to [**[]TemplateHotelDetailValueType**](TemplateHotelDetailValueType.md) | Collection of template level hotel detail values. | [optional] 

## Methods

### NewTemplateHotelDetailType

`func NewTemplateHotelDetailType() *TemplateHotelDetailType`

NewTemplateHotelDetailType instantiates a new TemplateHotelDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTemplateHotelDetailTypeWithDefaults

`func NewTemplateHotelDetailTypeWithDefaults() *TemplateHotelDetailType`

NewTemplateHotelDetailTypeWithDefaults instantiates a new TemplateHotelDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *TemplateHotelDetailType) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *TemplateHotelDetailType) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *TemplateHotelDetailType) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *TemplateHotelDetailType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetCode

`func (o *TemplateHotelDetailType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *TemplateHotelDetailType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *TemplateHotelDetailType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *TemplateHotelDetailType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *TemplateHotelDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *TemplateHotelDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *TemplateHotelDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *TemplateHotelDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *TemplateHotelDetailType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *TemplateHotelDetailType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *TemplateHotelDetailType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *TemplateHotelDetailType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetTemplateHotelDetailValues

`func (o *TemplateHotelDetailType) GetTemplateHotelDetailValues() []TemplateHotelDetailValueType`

GetTemplateHotelDetailValues returns the TemplateHotelDetailValues field if non-nil, zero value otherwise.

### GetTemplateHotelDetailValuesOk

`func (o *TemplateHotelDetailType) GetTemplateHotelDetailValuesOk() (*[]TemplateHotelDetailValueType, bool)`

GetTemplateHotelDetailValuesOk returns a tuple with the TemplateHotelDetailValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTemplateHotelDetailValues

`func (o *TemplateHotelDetailType) SetTemplateHotelDetailValues(v []TemplateHotelDetailValueType)`

SetTemplateHotelDetailValues sets TemplateHotelDetailValues field to given value.

### HasTemplateHotelDetailValues

`func (o *TemplateHotelDetailType) HasTemplateHotelDetailValues() bool`

HasTemplateHotelDetailValues returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


