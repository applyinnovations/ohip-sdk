# RateRoomTypeDetailType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Code** | Pointer to **string** | Room type code | [optional] 
**Description** | Pointer to **string** | Text description for the room type | [optional] 
**Pseudo** | Pointer to **bool** | True if room type will not be associated with physical rooms included in inventory | [optional] 
**RateFloor** | Pointer to **float32** | This is the minimum amount of which room can be sold | [optional] 

## Methods

### NewRateRoomTypeDetailType

`func NewRateRoomTypeDetailType() *RateRoomTypeDetailType`

NewRateRoomTypeDetailType instantiates a new RateRoomTypeDetailType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateRoomTypeDetailTypeWithDefaults

`func NewRateRoomTypeDetailTypeWithDefaults() *RateRoomTypeDetailType`

NewRateRoomTypeDetailTypeWithDefaults instantiates a new RateRoomTypeDetailType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCode

`func (o *RateRoomTypeDetailType) GetCode() string`

GetCode returns the Code field if non-nil, zero value otherwise.

### GetCodeOk

`func (o *RateRoomTypeDetailType) GetCodeOk() (*string, bool)`

GetCodeOk returns a tuple with the Code field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCode

`func (o *RateRoomTypeDetailType) SetCode(v string)`

SetCode sets Code field to given value.

### HasCode

`func (o *RateRoomTypeDetailType) HasCode() bool`

HasCode returns a boolean if a field has been set.

### GetDescription

`func (o *RateRoomTypeDetailType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *RateRoomTypeDetailType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *RateRoomTypeDetailType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *RateRoomTypeDetailType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetPseudo

`func (o *RateRoomTypeDetailType) GetPseudo() bool`

GetPseudo returns the Pseudo field if non-nil, zero value otherwise.

### GetPseudoOk

`func (o *RateRoomTypeDetailType) GetPseudoOk() (*bool, bool)`

GetPseudoOk returns a tuple with the Pseudo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudo

`func (o *RateRoomTypeDetailType) SetPseudo(v bool)`

SetPseudo sets Pseudo field to given value.

### HasPseudo

`func (o *RateRoomTypeDetailType) HasPseudo() bool`

HasPseudo returns a boolean if a field has been set.

### GetRateFloor

`func (o *RateRoomTypeDetailType) GetRateFloor() float32`

GetRateFloor returns the RateFloor field if non-nil, zero value otherwise.

### GetRateFloorOk

`func (o *RateRoomTypeDetailType) GetRateFloorOk() (*float32, bool)`

GetRateFloorOk returns a tuple with the RateFloor field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRateFloor

`func (o *RateRoomTypeDetailType) SetRateFloor(v float32)`

SetRateFloor sets RateFloor field to given value.

### HasRateFloor

`func (o *RateRoomTypeDetailType) HasRateFloor() bool`

HasRateFloor returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


