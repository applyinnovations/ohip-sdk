# RoomTypePoolType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AssociatedRoomTypes** | Pointer to [**[]RoomPoolRoomTypeType**](RoomPoolRoomTypeType.md) | Collection of room type pool mapping type. | [optional] 
**Description** | Pointer to **string** | The description of room pool type. | [optional] 
**HotelId** | Pointer to **string** | Hotel Code where room pool belongs to. | [optional] 
**RoomTypePoolCode** | Pointer to **string** | Room type pool Code. | [optional] 
**Sequence** | Pointer to **int32** | Sequence for representing room type pool record. | [optional] 
**ShortDescription** | Pointer to [**TranslationTextType1000**](TranslationTextType1000.md) |  | [optional] 

## Methods

### NewRoomTypePoolType

`func NewRoomTypePoolType() *RoomTypePoolType`

NewRoomTypePoolType instantiates a new RoomTypePoolType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypePoolTypeWithDefaults

`func NewRoomTypePoolTypeWithDefaults() *RoomTypePoolType`

NewRoomTypePoolTypeWithDefaults instantiates a new RoomTypePoolType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAssociatedRoomTypes

`func (o *RoomTypePoolType) GetAssociatedRoomTypes() []RoomPoolRoomTypeType`

GetAssociatedRoomTypes returns the AssociatedRoomTypes field if non-nil, zero value otherwise.

### GetAssociatedRoomTypesOk

`func (o *RoomTypePoolType) GetAssociatedRoomTypesOk() (*[]RoomPoolRoomTypeType, bool)`

GetAssociatedRoomTypesOk returns a tuple with the AssociatedRoomTypes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAssociatedRoomTypes

`func (o *RoomTypePoolType) SetAssociatedRoomTypes(v []RoomPoolRoomTypeType)`

SetAssociatedRoomTypes sets AssociatedRoomTypes field to given value.

### HasAssociatedRoomTypes

`func (o *RoomTypePoolType) HasAssociatedRoomTypes() bool`

HasAssociatedRoomTypes returns a boolean if a field has been set.

### GetDescription

`func (o *RoomTypePoolType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomTypePoolType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomTypePoolType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomTypePoolType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomTypePoolType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomTypePoolType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomTypePoolType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomTypePoolType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomTypePoolCode

`func (o *RoomTypePoolType) GetRoomTypePoolCode() string`

GetRoomTypePoolCode returns the RoomTypePoolCode field if non-nil, zero value otherwise.

### GetRoomTypePoolCodeOk

`func (o *RoomTypePoolType) GetRoomTypePoolCodeOk() (*string, bool)`

GetRoomTypePoolCodeOk returns a tuple with the RoomTypePoolCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypePoolCode

`func (o *RoomTypePoolType) SetRoomTypePoolCode(v string)`

SetRoomTypePoolCode sets RoomTypePoolCode field to given value.

### HasRoomTypePoolCode

`func (o *RoomTypePoolType) HasRoomTypePoolCode() bool`

HasRoomTypePoolCode returns a boolean if a field has been set.

### GetSequence

`func (o *RoomTypePoolType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *RoomTypePoolType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *RoomTypePoolType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *RoomTypePoolType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.

### GetShortDescription

`func (o *RoomTypePoolType) GetShortDescription() TranslationTextType1000`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *RoomTypePoolType) GetShortDescriptionOk() (*TranslationTextType1000, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *RoomTypePoolType) SetShortDescription(v TranslationTextType1000)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *RoomTypePoolType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


