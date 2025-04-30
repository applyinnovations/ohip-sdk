# FunctionSpaceLocationType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Hotel code that the function space location belongs to. | [optional] 
**Code** | Pointer to **string** | Function Space Location Code. | [optional] 
**TranslatableDescription** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 

## Methods

### NewFunctionSpaceLocationType

`func NewFunctionSpaceLocationType() *FunctionSpaceLocationType`

NewFunctionSpaceLocationType instantiates a new FunctionSpaceLocationType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFunctionSpaceLocationTypeWithDefaults

`func NewFunctionSpaceLocationTypeWithDefaults() *FunctionSpaceLocationType`

NewFunctionSpaceLocationTypeWithDefaults instantiates a new FunctionSpaceLocationType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *FunctionSpaceLocationType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *FunctionSpaceLocationType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *FunctionSpaceLocationType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *FunctionSpaceLocationType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetCode

`func (o *FunctionSpaceLocationType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *FunctionSpaceLocationType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *FunctionSpaceLocationType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *FunctionSpaceLocationType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetTranslatableDescription

`func (o *FunctionSpaceLocationType) GetTranslatableDescription() TranslationTextType2000`

GetTranslatableDescription returns the TranslatableDescription field if non-nil, zero value otherwise.

### GetTranslatableDescriptionOk

`func (o *FunctionSpaceLocationType) GetTranslatableDescriptionOk() (*TranslationTextType2000, bool)`

GetTranslatableDescriptionOk returns a tuple with the TranslatableDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTranslatableDescription

`func (o *FunctionSpaceLocationType) SetTranslatableDescription(v TranslationTextType2000)`

SetTranslatableDescription sets TranslatableDescription field to given value.

### HasTranslatableDescription

`func (o *FunctionSpaceLocationType) HasTranslatableDescription() bool`

HasTranslatableDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


