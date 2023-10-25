# RoomAmenitiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomAmenities** | Pointer to [**[]RoomAmenityType**](RoomAmenityType.md) | List of Room Amenities. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomAmenitiesCriteria

`func NewRoomAmenitiesCriteria() *RoomAmenitiesCriteria`

NewRoomAmenitiesCriteria instantiates a new RoomAmenitiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomAmenitiesCriteriaWithDefaults

`func NewRoomAmenitiesCriteriaWithDefaults() *RoomAmenitiesCriteria`

NewRoomAmenitiesCriteriaWithDefaults instantiates a new RoomAmenitiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomAmenitiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomAmenitiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomAmenitiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomAmenitiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomAmenities

`func (o *RoomAmenitiesCriteria) GetRoomAmenities() []RoomAmenityType`

GetRoomAmenities returns the RoomAmenities field if non-nil, zero value otherwise.

### GetRoomAmenitiesOk

`func (o *RoomAmenitiesCriteria) GetRoomAmenitiesOk() (*[]RoomAmenityType, bool)`

GetRoomAmenitiesOk returns a tuple with the RoomAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomAmenities

`func (o *RoomAmenitiesCriteria) SetRoomAmenities(v []RoomAmenityType)`

SetRoomAmenities sets RoomAmenities field to given value.

### HasRoomAmenities

`func (o *RoomAmenitiesCriteria) HasRoomAmenities() bool`

HasRoomAmenities returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomAmenitiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomAmenitiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomAmenitiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomAmenitiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


