# CateringCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CodeId** | Pointer to **float32** | Code ID is used to identify a Catering Code by ID. | [optional] 
**Code** | Pointer to **string** | Code is used to identify a Catering Code. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType200**](TranslationTextType200.md) |  | [optional] 
**DisplaySequence** | Pointer to **float32** | Catering Codes display sequence Number | [optional] 
**WebBookable** | Pointer to **bool** | Indicator used for only WEB Code Type in Item Rate | [optional] 

## Methods

### NewCateringCodeType

`func NewCateringCodeType() *CateringCodeType`

NewCateringCodeType instantiates a new CateringCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewCateringCodeTypeWithDefaults

`func NewCateringCodeTypeWithDefaults() *CateringCodeType`

NewCateringCodeTypeWithDefaults instantiates a new CateringCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCodeId

`func (o *CateringCodeType) GetCodeId() float32`

GetCodeId returns the CodeId field if non-nil, zero value otherwise.

### GetCodeIdOk

`func (o *CateringCodeType) GetCodeIdOk() (*float32, bool)`

GetCodeIdOk returns a tuple with the CodeId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCodeId

`func (o *CateringCodeType) SetCodeId(v float32)`

SetCodeId sets CodeId field to given value.

### HasCodeId

`func (o *CateringCodeType) HasCodeId() bool`

HasCodeId returns a boolean if a field has been set.

### GetCode

`func (o *CateringCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *CateringCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *CateringCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *CateringCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *CateringCodeType) GetTranslatableDescription() TranslationTextType200`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *CateringCodeType) GetTranslatableDescriptionOk() (*TranslationTextType200, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *CateringCodeType) SetTranslatableDescription(v TranslationTextType200)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *CateringCodeType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *CateringCodeType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *CateringCodeType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *CateringCodeType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *CateringCodeType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetWebBookable

`func (o *CateringCodeType) GetWebBookable() bool`

GetWebBookable returns the WebBookable field if non-nil, zero value otherwise.

### GetWebBookableOk

`func (o *CateringCodeType) GetWebBookableOk() (*bool, bool)`

GetWebBookableOk returns a tuple with the WebBookable field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWebBookable

`func (o *CateringCodeType) SetWebBookable(v bool)`

SetWebBookable sets WebBookable field to given value.

### HasWebBookable

`func (o *CateringCodeType) HasWebBookable() bool`

HasWebBookable returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


