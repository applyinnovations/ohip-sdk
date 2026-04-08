# RoomClassType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the code type. | [optional] 
**RoomTypes** | Pointer to [**RoomTypesSummaryType**](RoomTypesSummaryType.md) |  | [optional] 
**ManagedBy** | Pointer to [**ManagedByOptions**](ManagedByOptions.md) |  | [optional] 

## Methods

### NewRoomClassType

`func NewRoomClassType() *RoomClassType`

NewRoomClassType instantiates a new RoomClassType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassTypeWithDefaults

`func NewRoomClassTypeWithDefaults() *RoomClassType`

NewRoomClassTypeWithDefaults instantiates a new RoomClassType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *RoomClassType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomClassType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomClassType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomClassType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetSequence

`func (o *RoomClassType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *RoomClassType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *RoomClassType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *RoomClassType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetCode

`func (o *RoomClassType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RoomClassType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RoomClassType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RoomClassType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetInactive

`func (o *RoomClassType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomClassType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomClassType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomClassType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomClassType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomClassType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomClassType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomClassType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomTypes

`func (o *RoomClassType) GetRoomTypes() RoomTypesSummaryType`

GetRoomTypes returns the RoomTypes field if non-nil, zero value otherwise.

### GetRoomTypesOk

`func (o *RoomClassType) GetRoomTypesOk() (*RoomTypesSummaryType, bool)`

GetRoomTypesOk returns a tuple with the RoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypes

`func (o *RoomClassType) SetRoomTypes(v RoomTypesSummaryType)`

SetRoomTypes sets RoomTypes field to given value.

### HasRoomTypes

`func (o *RoomClassType) HasRoomTypes() bool`

HasRoomTypes returns a boolean if a field has been set.

### GetManagedBy

`func (o *RoomClassType) GetManagedBy() ManagedByOptions`

GetManagedBy returns the ManagedBy field if non-nil, zero value otherwise.

### GetManagedByOk

`func (o *RoomClassType) GetManagedByOk() (*ManagedByOptions, bool)`

GetManagedByOk returns a tuple with the ManagedBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetManagedBy

`func (o *RoomClassType) SetManagedBy(v ManagedByOptions)`

SetManagedBy sets ManagedBy field to given value.

### HasManagedBy

`func (o *RoomClassType) HasManagedBy() bool`

HasManagedBy returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


