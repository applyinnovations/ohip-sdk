# EventSpaceScheduleType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Description** | Pointer to **string** | Description for the Function Room. | [optional] 
**EventSpaceAttributes** | Pointer to [**EventSpaceAttributesType**](EventSpaceAttributesType.md) |  | [optional] 
**Events** | Pointer to [**EventSpaceScheduleTypeEvents**](EventSpaceScheduleTypeEvents.md) |  | [optional] 
**HotelId** | Pointer to **string** | Hotel Code associated with the Function Space. | [optional] 
**RoomId** | Pointer to **string** | Function Room Number. | [optional] 
**Name** | Pointer to **string** | Name of the Function Room. | [optional] 
**Building** | Pointer to **string** | Building name where this Room is. | [optional] 
**RoomOrder** | Pointer to **int32** | Order the Room is displayed based on the settings selected by the user. | [optional] 

## Methods

### NewEventSpaceScheduleType

`func NewEventSpaceScheduleType() *EventSpaceScheduleType`

NewEventSpaceScheduleType instantiates a new EventSpaceScheduleType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewEventSpaceScheduleTypeWithDefaults

`func NewEventSpaceScheduleTypeWithDefaults() *EventSpaceScheduleType`

NewEventSpaceScheduleTypeWithDefaults instantiates a new EventSpaceScheduleType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetDescription

`func (o *EventSpaceScheduleType) GetDescription() string`

GetDescription returns the Description field if non-nil, zero value otherwise.

### GetDescriptionOk

`func (o *EventSpaceScheduleType) GetDescriptionOk() (*string, bool)`

GetDescriptionOk returns a tuple with the Description field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetDescription

`func (o *EventSpaceScheduleType) SetDescription(v string)`

SetDescription sets Description field to given value.

### HasDescription

`func (o *EventSpaceScheduleType) HasDescription() bool`

HasDescription returns a boolean if a field has been set.

### GetEventSpaceAttributes

`func (o *EventSpaceScheduleType) GetEventSpaceAttributes() EventSpaceAttributesType`

GetEventSpaceAttributes returns the EventSpaceAttributes field if non-nil, zero value otherwise.

### GetEventSpaceAttributesOk

`func (o *EventSpaceScheduleType) GetEventSpaceAttributesOk() (*EventSpaceAttributesType, bool)`

GetEventSpaceAttributesOk returns a tuple with the EventSpaceAttributes field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEventSpaceAttributes

`func (o *EventSpaceScheduleType) SetEventSpaceAttributes(v EventSpaceAttributesType)`

SetEventSpaceAttributes sets EventSpaceAttributes field to given value.

### HasEventSpaceAttributes

`func (o *EventSpaceScheduleType) HasEventSpaceAttributes() bool`

HasEventSpaceAttributes returns a boolean if a field has been set.

### GetEvents

`func (o *EventSpaceScheduleType) GetEvents() EventSpaceScheduleTypeEvents`

GetEvents returns the Events field if non-nil, zero value otherwise.

### GetEventsOk

`func (o *EventSpaceScheduleType) GetEventsOk() (*EventSpaceScheduleTypeEvents, bool)`

GetEventsOk returns a tuple with the Events field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetEvents

`func (o *EventSpaceScheduleType) SetEvents(v EventSpaceScheduleTypeEvents)`

SetEvents sets Events field to given value.

### HasEvents

`func (o *EventSpaceScheduleType) HasEvents() bool`

HasEvents returns a boolean if a field has been set.

### GetHotelId

`func (o *EventSpaceScheduleType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *EventSpaceScheduleType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *EventSpaceScheduleType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *EventSpaceScheduleType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetRoomId

`func (o *EventSpaceScheduleType) GetRoomId() string`

GetRoomId returns the RoomId field if non-nil, zero value otherwise.

### GetRoomIdOk

`func (o *EventSpaceScheduleType) GetRoomIdOk() (*string, bool)`

GetRoomIdOk returns a tuple with the RoomId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomId

`func (o *EventSpaceScheduleType) SetRoomId(v string)`

SetRoomId sets RoomId field to given value.

### HasRoomId

`func (o *EventSpaceScheduleType) HasRoomId() bool`

HasRoomId returns a boolean if a field has been set.

### GetName

`func (o *EventSpaceScheduleType) GetName() string`

GetName returns the Name field if non-nil, zero value otherwise.

### GetNameOk

`func (o *EventSpaceScheduleType) GetNameOk() (*string, bool)`

GetNameOk returns a tuple with the Name field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetName

`func (o *EventSpaceScheduleType) SetName(v string)`

SetName sets Name field to given value.

### HasName

`func (o *EventSpaceScheduleType) HasName() bool`

HasName returns a boolean if a field has been set.

### GetBuilding

`func (o *EventSpaceScheduleType) GetBuilding() string`

GetBuilding returns the Building field if non-nil, zero value otherwise.

### GetBuildingOk

`func (o *EventSpaceScheduleType) GetBuildingOk() (*string, bool)`

GetBuildingOk returns a tuple with the Building field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBuilding

`func (o *EventSpaceScheduleType) SetBuilding(v string)`

SetBuilding sets Building field to given value.

### HasBuilding

`func (o *EventSpaceScheduleType) HasBuilding() bool`

HasBuilding returns a boolean if a field has been set.

### GetRoomOrder

`func (o *EventSpaceScheduleType) GetRoomOrder() int32`

GetRoomOrder returns the RoomOrder field if non-nil, zero value otherwise.

### GetRoomOrderOk

`func (o *EventSpaceScheduleType) GetRoomOrderOk() (*int32, bool)`

GetRoomOrderOk returns a tuple with the RoomOrder field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomOrder

`func (o *EventSpaceScheduleType) SetRoomOrder(v int32)`

SetRoomOrder sets RoomOrder field to given value.

### HasRoomOrder

`func (o *EventSpaceScheduleType) HasRoomOrder() bool`

HasRoomOrder returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


