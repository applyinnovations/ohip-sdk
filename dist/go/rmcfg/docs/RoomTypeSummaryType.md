# RoomTypeSummaryType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Accessible** | Pointer to **bool** | Indicates if room type is accessible. | [optional] 
**ActiveDate** | Pointer to **string** | Active date of the room type. | [optional] 
**Inactive** | Pointer to **bool** | Indicates the room type is inactive or not. | [optional] 
**MeetingRoom** | Pointer to **bool** | Indicates room type is meeting room. This Can be Meeting room flag cannot be unmarked at the property level. Can only be marked for non pseudo room types. | [optional] 
**NumberOfRooms** | Pointer to **int32** | Number of rooms for this room type. | [optional] 
**Pseudo** | Pointer to **bool** | Indicates if room type is pseudo. | [optional] 
**RoomClass** | Pointer to **string** | Room class for the room type code. | [optional] 
**RoomType** | Pointer to **string** |  | [optional] 
**SellSequence** | Pointer to **float32** | Indicates room types sell sequence. | [optional] 
**SendToInterface** | Pointer to **bool** | Indicates if room type is sent to interface. | [optional] 
**ShortDescription** | Pointer to **string** | Short Description of room type. | [optional] 
**Suite** | Pointer to **bool** | Indicates room type is a suite. | [optional] 

## Methods

### NewRoomTypeSummaryType

`func NewRoomTypeSummaryType() *RoomTypeSummaryType`

NewRoomTypeSummaryType instantiates a new RoomTypeSummaryType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypeSummaryTypeWithDefaults

`func NewRoomTypeSummaryTypeWithDefaults() *RoomTypeSummaryType`

NewRoomTypeSummaryTypeWithDefaults instantiates a new RoomTypeSummaryType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAccessible

`func (o *RoomTypeSummaryType) GetAccessible() bool`

GetAccessible returns the Accessible field if non-nil, zero value otherwise.

### GetAccessibleOk

`func (o *RoomTypeSummaryType) GetAccessibleOk() (*bool, bool)`

GetAccessibleOk returns a tuple with the Accessible field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAccessible

`func (o *RoomTypeSummaryType) SetAccessible(v bool)`

SetAccessible sets Accessible field to given value.

### HasAccessible

`func (o *RoomTypeSummaryType) HasAccessible() bool`

HasAccessible returns a boolean if a field has been set.

### GetActiveDate

`func (o *RoomTypeSummaryType) GetActiveDate() string`

GetActiveDate returns the ActiveDate field if non-nil, zero value otherwise.

### GetActiveDateOk

`func (o *RoomTypeSummaryType) GetActiveDateOk() (*string, bool)`

GetActiveDateOk returns a tuple with the ActiveDate field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetActiveDate

`func (o *RoomTypeSummaryType) SetActiveDate(v string)`

SetActiveDate sets ActiveDate field to given value.

### HasActiveDate

`func (o *RoomTypeSummaryType) HasActiveDate() bool`

HasActiveDate returns a boolean if a field has been set.

### GetInactive

`func (o *RoomTypeSummaryType) GetInactive() bool`

GetInactive returns the Inactive field if non-nil, zero value otherwise.

### GetInactiveOk

`func (o *RoomTypeSummaryType) GetInactiveOk() (*bool, bool)`

GetInactiveOk returns a tuple with the Inactive field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetInactive

`func (o *RoomTypeSummaryType) SetInactive(v bool)`

SetInactive sets Inactive field to given value.

### HasInactive

`func (o *RoomTypeSummaryType) HasInactive() bool`

HasInactive returns a boolean if a field has been set.

### GetMeetingRoom

`func (o *RoomTypeSummaryType) GetMeetingRoom() bool`

GetMeetingRoom returns the MeetingRoom field if non-nil, zero value otherwise.

### GetMeetingRoomOk

`func (o *RoomTypeSummaryType) GetMeetingRoomOk() (*bool, bool)`

GetMeetingRoomOk returns a tuple with the MeetingRoom field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetMeetingRoom

`func (o *RoomTypeSummaryType) SetMeetingRoom(v bool)`

SetMeetingRoom sets MeetingRoom field to given value.

### HasMeetingRoom

`func (o *RoomTypeSummaryType) HasMeetingRoom() bool`

HasMeetingRoom returns a boolean if a field has been set.

### GetNumberOfRooms

`func (o *RoomTypeSummaryType) GetNumberOfRooms() int32`

GetNumberOfRooms returns the NumberOfRooms field if non-nil, zero value otherwise.

### GetNumberOfRoomsOk

`func (o *RoomTypeSummaryType) GetNumberOfRoomsOk() (*int32, bool)`

GetNumberOfRoomsOk returns a tuple with the NumberOfRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNumberOfRooms

`func (o *RoomTypeSummaryType) SetNumberOfRooms(v int32)`

SetNumberOfRooms sets NumberOfRooms field to given value.

### HasNumberOfRooms

`func (o *RoomTypeSummaryType) HasNumberOfRooms() bool`

HasNumberOfRooms returns a boolean if a field has been set.

### GetPseudo

`func (o *RoomTypeSummaryType) GetPseudo() bool`

GetPseudo returns the Pseudo field if non-nil, zero value otherwise.

### GetPseudoOk

`func (o *RoomTypeSummaryType) GetPseudoOk() (*bool, bool)`

GetPseudoOk returns a tuple with the Pseudo field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPseudo

`func (o *RoomTypeSummaryType) SetPseudo(v bool)`

SetPseudo sets Pseudo field to given value.

### HasPseudo

`func (o *RoomTypeSummaryType) HasPseudo() bool`

HasPseudo returns a boolean if a field has been set.

### GetRoomClass

`func (o *RoomTypeSummaryType) GetRoomClass() string`

GetRoomClass returns the RoomClass field if non-nil, zero value otherwise.

### GetRoomClassOk

`func (o *RoomTypeSummaryType) GetRoomClassOk() (*string, bool)`

GetRoomClassOk returns a tuple with the RoomClass field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClass

`func (o *RoomTypeSummaryType) SetRoomClass(v string)`

SetRoomClass sets RoomClass field to given value.

### HasRoomClass

`func (o *RoomTypeSummaryType) HasRoomClass() bool`

HasRoomClass returns a boolean if a field has been set.

### GetRoomType

`func (o *RoomTypeSummaryType) GetRoomType() string`

GetRoomType returns the RoomType field if non-nil, zero value otherwise.

### GetRoomTypeOk

`func (o *RoomTypeSummaryType) GetRoomTypeOk() (*string, bool)`

GetRoomTypeOk returns a tuple with the RoomType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomType

`func (o *RoomTypeSummaryType) SetRoomType(v string)`

SetRoomType sets RoomType field to given value.

### HasRoomType

`func (o *RoomTypeSummaryType) HasRoomType() bool`

HasRoomType returns a boolean if a field has been set.

### GetSellSequence

`func (o *RoomTypeSummaryType) GetSellSequence() float32`

GetSellSequence returns the SellSequence field if non-nil, zero value otherwise.

### GetSellSequenceOk

`func (o *RoomTypeSummaryType) GetSellSequenceOk() (*float32, bool)`

GetSellSequenceOk returns a tuple with the SellSequence field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSellSequence

`func (o *RoomTypeSummaryType) SetSellSequence(v float32)`

SetSellSequence sets SellSequence field to given value.

### HasSellSequence

`func (o *RoomTypeSummaryType) HasSellSequence() bool`

HasSellSequence returns a boolean if a field has been set.

### GetSendToInterface

`func (o *RoomTypeSummaryType) GetSendToInterface() bool`

GetSendToInterface returns the SendToInterface field if non-nil, zero value otherwise.

### GetSendToInterfaceOk

`func (o *RoomTypeSummaryType) GetSendToInterfaceOk() (*bool, bool)`

GetSendToInterfaceOk returns a tuple with the SendToInterface field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSendToInterface

`func (o *RoomTypeSummaryType) SetSendToInterface(v bool)`

SetSendToInterface sets SendToInterface field to given value.

### HasSendToInterface

`func (o *RoomTypeSummaryType) HasSendToInterface() bool`

HasSendToInterface returns a boolean if a field has been set.

### GetShortDescription

`func (o *RoomTypeSummaryType) GetShortDescription() string`

GetShortDescription returns the ShortDescription field if non-nil, zero value otherwise.

### GetShortDescriptionOk

`func (o *RoomTypeSummaryType) GetShortDescriptionOk() (*string, bool)`

GetShortDescriptionOk returns a tuple with the ShortDescription field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetShortDescription

`func (o *RoomTypeSummaryType) SetShortDescription(v string)`

SetShortDescription sets ShortDescription field to given value.

### HasShortDescription

`func (o *RoomTypeSummaryType) HasShortDescription() bool`

HasShortDescription returns a boolean if a field has been set.

### GetSuite

`func (o *RoomTypeSummaryType) GetSuite() bool`

GetSuite returns the Suite field if non-nil, zero value otherwise.

### GetSuiteOk

`func (o *RoomTypeSummaryType) GetSuiteOk() (*bool, bool)`

GetSuiteOk returns a tuple with the Suite field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSuite

`func (o *RoomTypeSummaryType) SetSuite(v bool)`

SetSuite sets Suite field to given value.

### HasSuite

`func (o *RoomTypeSummaryType) HasSuite() bool`

HasSuite returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


