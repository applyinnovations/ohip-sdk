# ReservationColorType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelId** | Pointer to **string** | Property which the reservation color belongs to. | [optional] 
**ColorCode** | Pointer to **string** | Code to identify reservation color. | [optional] 
**Description** | Pointer to [**TranslationTextType2000**](TranslationTextType2000.md) |  | [optional] 
**DisplaySequence** | Pointer to **float32** | Display sequence for reservation color. | [optional] 
**Inactive** | Pointer to **bool** | Indicates if reservation color is inactive. | [optional] 

## Methods

### NewReservationColorType

`func NewReservationColorType() *ReservationColorType`

NewReservationColorType instantiates a new ReservationColorType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewReservationColorTypeWithDefaults

`func NewReservationColorTypeWithDefaults() *ReservationColorType`

NewReservationColorTypeWithDefaults instantiates a new ReservationColorType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelId

`func (o *ReservationColorType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *ReservationColorType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *ReservationColorType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *ReservationColorType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetColorCode

`func (o *ReservationColorType) GetColorCode() string`

GetColorCode returns the ColorCode field if non-nil, zero value otherwise.

### GetColorCodeOk

`func (o *ReservationColorType) GetColorCodeOk() (*string, bool)`

GetColorCodeOk returns a tuple with the ColorCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetColorCode

`func (o *ReservationColorType) SetColorCode(v string)`

SetColorCode sets ColorCode field to given value.

### HasColorCode

`func (o *ReservationColorType) HasColorCode() bool`

HasColorCode returns a boolean if a field has been set.

### GetDescription

`func (o *ReservationColorType) GetDescription() TranslationTextType2000`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *ReservationColorType) GetDescriptionOk() (*TranslationTextType2000, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *ReservationColorType) SetDescription(v TranslationTextType2000)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *ReservationColorType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetDisplaySequence

`func (o *ReservationColorType) GetDisplaySequence() float32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *ReservationColorType) GetDisplaySequenceOk() (*float32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *ReservationColorType) SetDisplaySequence(v float32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *ReservationColorType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetInactive

`func (o *ReservationColorType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *ReservationColorType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *ReservationColorType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *ReservationColorType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


