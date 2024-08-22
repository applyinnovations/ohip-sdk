# URLType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Value** | Pointer to **string** | Property Value | [optional] 
**Type** | Pointer to **string** | Defines the purpose of the URL address, such as personal, business, public, etc. | [optional] 
**TypeDescription** | Pointer to **string** | Describes the Type code | [optional] 
**PrimaryInd** | Pointer to **bool** | When true, indicates a primary information. | [optional] 
**OrderSequence** | Pointer to **float32** | Display Order sequence. | [optional] 

## Methods

### NewURLType

`func NewURLType() *URLType`

NewURLType instantiates a new URLType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewURLTypeWithDefaults

`func NewURLTypeWithDefaults() *URLType`

NewURLTypeWithDefaults instantiates a new URLType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetValue

`func (o *URLType) GetValue() string`

GetValue returns the Value field if non-nil, zero value otherwise.

### GetValueOk

`func (o *URLType) GetValueOk() (*string, bool)`

GetValueOk returns a tuple with the Value field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetValue

`func (o *URLType) SetValue(v string)`

SetValue sets Value field to given value.

### HasValue

`func (o *URLType) HasValue() bool`

HasValue returns a boolean if a field has been set.

### GetType

`func (o *URLType) GetType() string`

GetType returns the Type field if non-nil, zero value otherwise.

### GetTypeOk

`func (o *URLType) GetTypeOk() (*string, bool)`

GetTypeOk returns a tuple with the Type field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetType

`func (o *URLType) SetType(v string)`

SetType sets Type field to given value.

### HasType

`func (o *URLType) HasType() bool`

HasType returns a boolean if a field has been set.

### GetTypeDescription

`func (o *URLType) GetTypeDescription() string`

GetTypeDescription returns the TypeDescription field if non-nil, zero value otherwise.

### GetTypeDescriptionOk

`func (o *URLType) GetTypeDescriptionOk() (*string, bool)`

GetTypeDescriptionOk returns a tuple with the TypeDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTypeDescription

`func (o *URLType) SetTypeDescription(v string)`

SetTypeDescription sets TypeDescription field to given value.

### HasTypeDescription

`func (o *URLType) HasTypeDescription() bool`

HasTypeDescription returns a boolean if a field has been set.

### GetPrimaryInd

`func (o *URLType) GetPrimaryInd() bool`

GetPrimaryInd returns the PrimaryInd field if non-nil, zero value otherwise.

### GetPrimaryIndOk

`func (o *URLType) GetPrimaryIndOk() (*bool, bool)`

GetPrimaryIndOk returns a tuple with the PrimaryInd field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPrimaryInd

`func (o *URLType) SetPrimaryInd(v bool)`

SetPrimaryInd sets PrimaryInd field to given value.

### HasPrimaryInd

`func (o *URLType) HasPrimaryInd() bool`

HasPrimaryInd returns a boolean if a field has been set.

### GetOrderSequence

`func (o *URLType) GetOrderSequence() float32`

GetOrderSequence returns the OrderSequence field if non-nil, zero value otherwise.

### GetOrderSequenceOk

`func (o *URLType) GetOrderSequenceOk() (*float32, bool)`

GetOrderSequenceOk returns a tuple with the OrderSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderSequence

`func (o *URLType) SetOrderSequence(v float32)`

SetOrderSequence sets OrderSequence field to given value.

### HasOrderSequence

`func (o *URLType) HasOrderSequence() bool`

HasOrderSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


