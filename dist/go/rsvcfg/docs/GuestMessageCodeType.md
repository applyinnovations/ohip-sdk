# GuestMessageCodeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for the guest message type | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplaySequence** | Pointer to **float32** | Sequence for guest message template. | [optional] 
**HotelId** | Pointer to **string** | Sequence for guest message. | [optional] 

## Methods

### NewGuestMessageCodeType

`func NewGuestMessageCodeType() *GuestMessageCodeType`

NewGuestMessageCodeType instantiates a new GuestMessageCodeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewGuestMessageCodeTypeWithDefaults

`func NewGuestMessageCodeTypeWithDefaults() *GuestMessageCodeType`

NewGuestMessageCodeTypeWithDefaults instantiates a new GuestMessageCodeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *GuestMessageCodeType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *GuestMessageCodeType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *GuestMessageCodeType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *GuestMessageCodeType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *GuestMessageCodeType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *GuestMessageCodeType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *GuestMessageCodeType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *GuestMessageCodeType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *GuestMessageCodeType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *GuestMessageCodeType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *GuestMessageCodeType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *GuestMessageCodeType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetHotelId

`func (o *GuestMessageCodeType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *GuestMessageCodeType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *GuestMessageCodeType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *GuestMessageCodeType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


