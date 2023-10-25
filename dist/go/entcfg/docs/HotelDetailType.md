# HotelDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to **string** | Specifies the hotel detail category. | [optional] 
**Code** | Pointer to **string** | Specifies the hotel detail code. | [optional] 
**Description** | Pointer to **string** | Specifies the hotel detail description. | [optional] 
**HotelDetailValues** | Pointer to [**[]HotelDetailValueType**](HotelDetailValueType.md) | Collection of property level hotel detail values. | [optional] 
**HotelId** | Pointer to **string** | Specifies the hotel code of the hotel detail. | [optional] 
**Sequence** | Pointer to **int32** | Specifies the sorting sequence number for the hotel detail. | [optional] 

## Methods

### NewHotelDetailType

`func NewHotelDetailType() *HotelDetailType`

NewHotelDetailType instantiates a new HotelDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelDetailTypeWithDefaults

`func NewHotelDetailTypeWithDefaults() *HotelDetailType`

NewHotelDetailTypeWithDefaults instantiates a new HotelDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *HotelDetailType) GetCategory() string`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *HotelDetailType) GetCategoryOk() (*string, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *HotelDetailType) SetCategory(v string)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *HotelDetailType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetCode

`func (o *HotelDetailType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *HotelDetailType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *HotelDetailType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *HotelDetailType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *HotelDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *HotelDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *HotelDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *HotelDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelDetailValues

`func (o *HotelDetailType) GetHotelDetailValues() []HotelDetailValueType`

GetHotelDetailValues returns the HotelDetailValues field if non-nil, zero value otherwise.

### GetHotelDetailValuesOk

`func (o *HotelDetailType) GetHotelDetailValuesOk() (*[]HotelDetailValueType, bool)`

GetHotelDetailValuesOk returns a tuple with the HotelDetailValues field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelDetailValues

`func (o *HotelDetailType) SetHotelDetailValues(v []HotelDetailValueType)`

SetHotelDetailValues sets HotelDetailValues field to given value.

### HasHotelDetailValues

`func (o *HotelDetailType) HasHotelDetailValues() bool`

HasHotelDetailValues returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelDetailType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelDetailType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelDetailType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelDetailType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetSequence

`func (o *HotelDetailType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *HotelDetailType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *HotelDetailType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *HotelDetailType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


