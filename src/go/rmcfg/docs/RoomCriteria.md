# RoomCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Room** | Pointer to [**RoomCriteriaRoom**](RoomCriteriaRoom.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRoomCriteria

`func NewRoomCriteria() *RoomCriteria`

NewRoomCriteria instantiates a new RoomCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomCriteriaWithDefaults

`func NewRoomCriteriaWithDefaults() *RoomCriteria`

NewRoomCriteriaWithDefaults instantiates a new RoomCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomCriteria) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomCriteria) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomCriteria) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoom

`func (o *RoomCriteria) GetRoom() RoomCriteriaRoom`

GetRoom returns the Room field if non-nil, zero value otherwise.

### GetRoomOk

`func (o *RoomCriteria) GetRoomOk() (*RoomCriteriaRoom, bool)`

GetRoomOk returns a tuple with the Room field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoom

`func (o *RoomCriteria) SetRoom(v RoomCriteriaRoom)`

SetRoom sets Room field to given value.

### HasRoom

`func (o *RoomCriteria) HasRoom() bool`

HasRoom returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomCriteria) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomCriteria) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomCriteria) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


