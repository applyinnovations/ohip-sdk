# BedTypeInfoType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Bed Type Code. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 

## Methods

### NewBedTypeInfoType

`func NewBedTypeInfoType() *BedTypeInfoType`

NewBedTypeInfoType instantiates a new BedTypeInfoType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBedTypeInfoTypeWithDefaults

`func NewBedTypeInfoTypeWithDefaults() *BedTypeInfoType`

NewBedTypeInfoTypeWithDefaults instantiates a new BedTypeInfoType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *BedTypeInfoType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *BedTypeInfoType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *BedTypeInfoType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *BedTypeInfoType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *BedTypeInfoType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *BedTypeInfoType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *BedTypeInfoType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *BedTypeInfoType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


