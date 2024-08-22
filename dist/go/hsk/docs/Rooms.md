# Rooms

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HousekeepingRooms** | Pointer to [**HotelRoomsType**](HotelRoomsType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRooms

`func NewRooms() *Rooms`

NewRooms instantiates a new Rooms object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomsWithDefaults

`func NewRoomsWithDefaults() *Rooms`

NewRoomsWithDefaults instantiates a new Rooms object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHousekeepingRooms

`func (o *Rooms) GetHousekeepingRooms() HotelRoomsType`

GetHousekeepingRooms returns the HousekeepingRooms field if non-nil, zero value otherwise.

### GetHousekeepingRoomsOk

`func (o *Rooms) GetHousekeepingRoomsOk() (*HotelRoomsType, bool)`

GetHousekeepingRoomsOk returns a tuple with the HousekeepingRooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHousekeepingRooms

`func (o *Rooms) SetHousekeepingRooms(v HotelRoomsType)`

SetHousekeepingRooms sets HousekeepingRooms field to given value.

### HasHousekeepingRooms

`func (o *Rooms) HasHousekeepingRooms() bool`

HasHousekeepingRooms returns a boolean if a field has been set.

### GetLinks

`func (o *Rooms) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *Rooms) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *Rooms) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *Rooms) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *Rooms) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *Rooms) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *Rooms) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *Rooms) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


