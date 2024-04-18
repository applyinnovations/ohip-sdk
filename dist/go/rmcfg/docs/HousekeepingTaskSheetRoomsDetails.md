# HousekeepingTaskSheetRoomsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingTaskSheetRooms** | Pointer to [**[]HousekeepingTaskSheetRoomType**](HousekeepingTaskSheetRoomType.md) | Collection of housekeeping room details | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHousekeepingTaskSheetRoomsDetails

`func NewHousekeepingTaskSheetRoomsDetails() *HousekeepingTaskSheetRoomsDetails`

NewHousekeepingTaskSheetRoomsDetails instantiates a new HousekeepingTaskSheetRoomsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHousekeepingTaskSheetRoomsDetailsWithDefaults

`func NewHousekeepingTaskSheetRoomsDetailsWithDefaults() *HousekeepingTaskSheetRoomsDetails`

NewHousekeepingTaskSheetRoomsDetailsWithDefaults instantiates a new HousekeepingTaskSheetRoomsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingTaskSheetRooms

`func (o *HousekeepingTaskSheetRoomsDetails) GetHousekeepingTaskSheetRooms() []HousekeepingTaskSheetRoomType`

GetHousekeepingTaskSheetRooms returns the HousekeepingTaskSheetRooms field if non-nil, zero value otherwise.

### GetHousekeepingTaskSheetRoomsOk

`func (o *HousekeepingTaskSheetRoomsDetails) GetHousekeepingTaskSheetRoomsOk() (*[]HousekeepingTaskSheetRoomType, bool)`

GetHousekeepingTaskSheetRoomsOk returns a tuple with the HousekeepingTaskSheetRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingTaskSheetRooms

`func (o *HousekeepingTaskSheetRoomsDetails) SetHousekeepingTaskSheetRooms(v []HousekeepingTaskSheetRoomType)`

SetHousekeepingTaskSheetRooms sets HousekeepingTaskSheetRooms field to given value.

### HasHousekeepingTaskSheetRooms

`func (o *HousekeepingTaskSheetRoomsDetails) HasHousekeepingTaskSheetRooms() bool`

HasHousekeepingTaskSheetRooms returns a boolean if a field has been set.

### GetLinks

`func (o *HousekeepingTaskSheetRoomsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HousekeepingTaskSheetRoomsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HousekeepingTaskSheetRoomsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HousekeepingTaskSheetRoomsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HousekeepingTaskSheetRoomsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HousekeepingTaskSheetRoomsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HousekeepingTaskSheetRoomsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HousekeepingTaskSheetRoomsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

