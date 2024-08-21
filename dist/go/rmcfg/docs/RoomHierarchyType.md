# RoomHierarchyType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**DisplaySequence** | Pointer to **int32** | Display Sequence | [optional] 
**FromCode** | Pointer to **string** | From code to process | [optional] 
**HotelId** | Pointer to **string** | Resort code in which the hierarchy should exist | [optional] 
**RoomHierarchyType** | Pointer to [**RoomHierarchyTypeType**](RoomHierarchyTypeType.md) |  | [optional] 
**ToCodes** | Pointer to **[]string** |  | [optional] 

## Methods

### NewRoomHierarchyType

`func NewRoomHierarchyType() *RoomHierarchyType`

NewRoomHierarchyType instantiates a new RoomHierarchyType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomHierarchyTypeWithDefaults

`func NewRoomHierarchyTypeWithDefaults() *RoomHierarchyType`

NewRoomHierarchyTypeWithDefaults instantiates a new RoomHierarchyType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDisplaySequence

`func (o *RoomHierarchyType) GetDisplaySequence() int32`

GetDisplaySequence returns the DisplaySequence field if non-nil, zero value otherwise.

### GetDisplaySequenceOk

`func (o *RoomHierarchyType) GetDisplaySequenceOk() (*int32, bool)`

GetDisplaySequenceOk returns a tuple with the DisplaySequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDisplaySequence

`func (o *RoomHierarchyType) SetDisplaySequence(v int32)`

SetDisplaySequence sets DisplaySequence field to given value.

### HasDisplaySequence

`func (o *RoomHierarchyType) HasDisplaySequence() bool`

HasDisplaySequence returns a boolean if a field has been set.

### GetFromCode

`func (o *RoomHierarchyType) GetFromCode() string`

GetFromCode returns the FromCode field if non-nil, zero value otherwise.

### GetFromCodeOk

`func (o *RoomHierarchyType) GetFromCodeOk() (*string, bool)`

GetFromCodeOk returns a tuple with the FromCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetFromCode

`func (o *RoomHierarchyType) SetFromCode(v string)`

SetFromCode sets FromCode field to given value.

### HasFromCode

`func (o *RoomHierarchyType) HasFromCode() bool`

HasFromCode returns a boolean if a field has been set.

### GetHotelId

`func (o *RoomHierarchyType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *RoomHierarchyType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *RoomHierarchyType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *RoomHierarchyType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomHierarchyType

`func (o *RoomHierarchyType) GetRoomHierarchyType() RoomHierarchyTypeType`

GetRoomHierarchyType returns the RoomHierarchyType field if non-nil, zero value otherwise.

### GetRoomHierarchyTypeOk

`func (o *RoomHierarchyType) GetRoomHierarchyTypeOk() (*RoomHierarchyTypeType, bool)`

GetRoomHierarchyTypeOk returns a tuple with the RoomHierarchyType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomHierarchyType

`func (o *RoomHierarchyType) SetRoomHierarchyType(v RoomHierarchyTypeType)`

SetRoomHierarchyType sets RoomHierarchyType field to given value.

### HasRoomHierarchyType

`func (o *RoomHierarchyType) HasRoomHierarchyType() bool`

HasRoomHierarchyType returns a boolean if a field has been set.

### GetToCodes

`func (o *RoomHierarchyType) GetToCodes() []string`

GetToCodes returns the ToCodes field if non-nil, zero value otherwise.

### GetToCodesOk

`func (o *RoomHierarchyType) GetToCodesOk() (*[]string, bool)`

GetToCodesOk returns a tuple with the ToCodes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetToCodes

`func (o *RoomHierarchyType) SetToCodes(v []string)`

SetToCodes sets ToCodes field to given value.

### HasToCodes

`func (o *RoomHierarchyType) HasToCodes() bool`

HasToCodes returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


