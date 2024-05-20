# RoomPoolRoomTypeType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates if room type is accessible. | [optional] 
**ActiveDate** | Pointer to **string** | Active date of the room type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the room type is inactive or not. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms for this room type. | [optional] 
**Pseudo** | Pointer to **bool** | Indicates if room type is pseudo. | [optional] 
**Restricted** | Pointer to **bool** | Indicates that the room pool cannot be used to allocate inventory to this room type. Inventory must be allocated directly to the room type itself. | [optional] 
**RoomClass** | Pointer to **string** | Room class for the room type code. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**SellSequence** | Pointer to **float32** | Indicates room types sell sequence. | [optional] 
**SendToInterface** | Pointer to **bool** | Indicates if room type is sent to interface. | [optional] 
**ShortDescription** | Pointer to **string** | Short Description of room type. | [optional] 
**Suite** | Pointer to **bool** | Indicates room type is a suite. | [optional] 

## Methods

### NewRoomPoolRoomTypeType

`func NewRoomPoolRoomTypeType() *RoomPoolRoomTypeType`

NewRoomPoolRoomTypeType instantiates a new RoomPoolRoomTypeType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomPoolRoomTypeTypeWithDefaults

`func NewRoomPoolRoomTypeTypeWithDefaults() *RoomPoolRoomTypeType`

NewRoomPoolRoomTypeTypeWithDefaults instantiates a new RoomPoolRoomTypeType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *RoomPoolRoomTypeType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *RoomPoolRoomTypeType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *RoomPoolRoomTypeType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *RoomPoolRoomTypeType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetActiveDate

`func (o *RoomPoolRoomTypeType) GetActiveDate() string`

GetActiveDate returns the ActiveDate field if non-nil, zero value otherwise.

### GetActiveDateOk

`func (o *RoomPoolRoomTypeType) GetActiveDateOk() (*string, bool)`

GetActiveDateOk returns a tuple with the ActiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveDate

`func (o *RoomPoolRoomTypeType) SetActiveDate(v string)`

SetActiveDate sets ActiveDate field to given value.

### HasActiveDate

`func (o *RoomPoolRoomTypeType) HasActiveDate() bool`

HasActiveDate returns a boolean if a field has been set.

### GetInactive

`func (o *RoomPoolRoomTypeType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomPoolRoomTypeType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomPoolRoomTypeType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomPoolRoomTypeType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *RoomPoolRoomTypeType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *RoomPoolRoomTypeType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *RoomPoolRoomTypeType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *RoomPoolRoomTypeType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *RoomPoolRoomTypeType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *RoomPoolRoomTypeType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *RoomPoolRoomTypeType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *RoomPoolRoomTypeType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetPseudo

`func (o *RoomPoolRoomTypeType) GetPseudo() bool`

GetPseudo returns the Pseudo field if non-nil, zero value otherwise.

### GetPseudoOk

`func (o *RoomPoolRoomTypeType) GetPseudoOk() (*bool, bool)`

GetPseudoOk returns a tuple with the Pseudo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudo

`func (o *RoomPoolRoomTypeType) SetPseudo(v bool)`

SetPseudo sets Pseudo field to given value.

### HasPseudo

`func (o *RoomPoolRoomTypeType) HasPseudo() bool`

HasPseudo returns a boolean if a field has been set.

### GetRestricted

`func (o *RoomPoolRoomTypeType) GetRestricted() bool`

GetRestricted returns the Restricted field if non-nil, zero value otherwise.

### GetRestrictedOk

`func (o *RoomPoolRoomTypeType) GetRestrictedOk() (*bool, bool)`

GetRestrictedOk returns a tuple with the Restricted field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestricted

`func (o *RoomPoolRoomTypeType) SetRestricted(v bool)`

SetRestricted sets Restricted field to given value.

### HasRestricted

`func (o *RoomPoolRoomTypeType) HasRestricted() bool`

HasRestricted returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomPoolRoomTypeType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomPoolRoomTypeType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomPoolRoomTypeType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomPoolRoomTypeType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomPoolRoomTypeType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomPoolRoomTypeType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomPoolRoomTypeType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomPoolRoomTypeType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSellSequence

`func (o *RoomPoolRoomTypeType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *RoomPoolRoomTypeType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *RoomPoolRoomTypeType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *RoomPoolRoomTypeType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetSendToInterface

`func (o *RoomPoolRoomTypeType) GetSendToInterface() bool`

GetSendToInterface returns the SendToInterface field if non-nil, zero value otherwise.

### GetSendToInterfaceOk

`func (o *RoomPoolRoomTypeType) GetSendToInterfaceOk() (*bool, bool)`

GetSendToInterfaceOk returns a tuple with the SendToInterface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendToInterface

`func (o *RoomPoolRoomTypeType) SetSendToInterface(v bool)`

SetSendToInterface sets SendToInterface field to given value.

### HasSendToInterface

`func (o *RoomPoolRoomTypeType) HasSendToInterface() bool`

HasSendToInterface returns a boolean if a field has been set.

### GetShortDescription

`func (o *RoomPoolRoomTypeType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *RoomPoolRoomTypeType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *RoomPoolRoomTypeType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *RoomPoolRoomTypeType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetSuite

`func (o *RoomPoolRoomTypeType) GetSuite() bool`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *RoomPoolRoomTypeType) GetSuiteOk() (*bool, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *RoomPoolRoomTypeType) SetSuite(v bool)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *RoomPoolRoomTypeType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


