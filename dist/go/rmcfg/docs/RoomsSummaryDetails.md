# RoomsSummaryDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rooms** | Pointer to [**RoomsSummaryDetailsRooms**](RoomsSummaryDetailsRooms.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomsSummaryDetails

`func NewRoomsSummaryDetails() *RoomsSummaryDetails`

NewRoomsSummaryDetails instantiates a new RoomsSummaryDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomsSummaryDetailsWithDefaults

`func NewRoomsSummaryDetailsWithDefaults() *RoomsSummaryDetails`

NewRoomsSummaryDetailsWithDefaults instantiates a new RoomsSummaryDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRooms

`func (o *RoomsSummaryDetails) GetRooms() RoomsSummaryDetailsRooms`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *RoomsSummaryDetails) GetRoomsOk() (*RoomsSummaryDetailsRooms, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *RoomsSummaryDetails) SetRooms(v RoomsSummaryDetailsRooms)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *RoomsSummaryDetails) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetLinks

`func (o *RoomsSummaryDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomsSummaryDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomsSummaryDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomsSummaryDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomsSummaryDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomsSummaryDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomsSummaryDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomsSummaryDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


