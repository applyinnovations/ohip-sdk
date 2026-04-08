# RoomMaintenanceDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomMaintenance** | Pointer to [**HotelRoomMaintenanceType**](HotelRoomMaintenanceType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomMaintenanceDetails

`func NewRoomMaintenanceDetails() *RoomMaintenanceDetails`

NewRoomMaintenanceDetails instantiates a new RoomMaintenanceDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomMaintenanceDetailsWithDefaults

`func NewRoomMaintenanceDetailsWithDefaults() *RoomMaintenanceDetails`

NewRoomMaintenanceDetailsWithDefaults instantiates a new RoomMaintenanceDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomMaintenance

`func (o *RoomMaintenanceDetails) GetRoomMaintenance() HotelRoomMaintenanceType`

GetRoomMaintenance returns the RoomMaintenance field if non-nil, zero value otherwise.

### GetRoomMaintenanceOk

`func (o *RoomMaintenanceDetails) GetRoomMaintenanceOk() (*HotelRoomMaintenanceType, bool)`

GetRoomMaintenanceOk returns a tuple with the RoomMaintenance field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomMaintenance

`func (o *RoomMaintenanceDetails) SetRoomMaintenance(v HotelRoomMaintenanceType)`

SetRoomMaintenance sets RoomMaintenance field to given value.

### HasRoomMaintenance

`func (o *RoomMaintenanceDetails) HasRoomMaintenance() bool`

HasRoomMaintenance returns a boolean if a field has been set.

### GetLinks

`func (o *RoomMaintenanceDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomMaintenanceDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomMaintenanceDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomMaintenanceDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomMaintenanceDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomMaintenanceDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomMaintenanceDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomMaintenanceDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


