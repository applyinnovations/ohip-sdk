# RoomFeatureConfigType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Code for the code type. | [optional] 
**Description** | Pointer to [**TranslationTextType50**](TranslationTextType50.md) |  | [optional] 
**GroupCode** | Pointer to **string** | Group code to which this code type belongs. | [optional] 
**HotelId** | Pointer to **string** | Hotel code for the code type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the code type is inactive or not. | [optional] 
**MappedPreferenceCodes** | Pointer to [**[]ConfigHotelPreferenceType**](ConfigHotelPreferenceType.md) | This type holds a collection of preferences at the property level. | [optional] 
**Sequence** | Pointer to **int32** | Display sequence for the code type. | [optional] 

## Methods

### NewRoomFeatureConfigType

`func NewRoomFeatureConfigType() *RoomFeatureConfigType`

NewRoomFeatureConfigType instantiates a new RoomFeatureConfigType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomFeatureConfigTypeWithDefaults

`func NewRoomFeatureConfigTypeWithDefaults() *RoomFeatureConfigType`

NewRoomFeatureConfigTypeWithDefaults instantiates a new RoomFeatureConfigType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RoomFeatureConfigType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RoomFeatureConfigType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RoomFeatureConfigType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RoomFeatureConfigType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RoomFeatureConfigType) GetDescription() TranslationTextType50`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RoomFeatureConfigType) GetDescriptionOk() (*TranslationTextType50, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RoomFeatureConfigType) SetDescription(v TranslationTextType50)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RoomFeatureConfigType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetGroupCode

`func (o *RoomFeatureConfigType) GetGroupCode() string`

GetGroupCode returns the GroupCode field if non-nil, zero value otherwise.

### GetGroupCodeOk

`func (o *RoomFeatureConfigType) GetGroupCodeOk() (*string, bool)`

GetGroupCodeOk returns a tuple with the GroupCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetGroupCode

`func (o *RoomFeatureConfigType) SetGroupCode(v string)`

SetGroupCode sets GroupCode field to given value.

### HasGroupCode

`func (o *RoomFeatureConfigType) HasGroupCode() bool`

HasGroupCode returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomFeatureConfigType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomFeatureConfigType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomFeatureConfigType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomFeatureConfigType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetInactive

`func (o *RoomFeatureConfigType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomFeatureConfigType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomFeatureConfigType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomFeatureConfigType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMappedPreferenceCodes

`func (o *RoomFeatureConfigType) GetMappedPreferenceCodes() []ConfigHotelPreferenceType`

GetMappedPreferenceCodes returns the MappedPreferenceCodes field if non-nil, zero value otherwise.

### GetMappedPreferenceCodesOk

`func (o *RoomFeatureConfigType) GetMappedPreferenceCodesOk() (*[]ConfigHotelPreferenceType, bool)`

GetMappedPreferenceCodesOk returns a tuple with the MappedPreferenceCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMappedPreferenceCodes

`func (o *RoomFeatureConfigType) SetMappedPreferenceCodes(v []ConfigHotelPreferenceType)`

SetMappedPreferenceCodes sets MappedPreferenceCodes field to given value.

### HasMappedPreferenceCodes

`func (o *RoomFeatureConfigType) HasMappedPreferenceCodes() bool`

HasMappedPreferenceCodes returns a boolean if a field has been set.

### GetSequence

`func (o *RoomFeatureConfigType) GetSequence() int32`

GetSequence returns the Sequence field if non-nil, zero value otherwise.

### GetSequenceOk

`func (o *RoomFeatureConfigType) GetSequenceOk() (*int32, bool)`

GetSequenceOk returns a tuple with the Sequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSequence

`func (o *RoomFeatureConfigType) SetSequence(v int32)`

SetSequence sets Sequence field to given value.

### HasSequence

`func (o *RoomFeatureConfigType) HasSequence() bool`

HasSequence returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


