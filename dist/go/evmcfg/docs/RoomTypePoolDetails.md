# RoomTypePoolDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**RoomTypePools** | Pointer to [**[]RoomTypePoolType**](RoomTypePoolType.md) | Collection of room type pool and associated room type(s). | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomTypePoolDetails

`func NewRoomTypePoolDetails() *RoomTypePoolDetails`

NewRoomTypePoolDetails instantiates a new RoomTypePoolDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomTypePoolDetailsWithDefaults

`func NewRoomTypePoolDetailsWithDefaults() *RoomTypePoolDetails`

NewRoomTypePoolDetailsWithDefaults instantiates a new RoomTypePoolDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *RoomTypePoolDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomTypePoolDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomTypePoolDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomTypePoolDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetRoomTypePools

`func (o *RoomTypePoolDetails) GetRoomTypePools() []RoomTypePoolType`

GetRoomTypePools returns the RoomTypePools field if non-nil, zero value otherwise.

### GetRoomTypePoolsOk

`func (o *RoomTypePoolDetails) GetRoomTypePoolsOk() (*[]RoomTypePoolType, bool)`

GetRoomTypePoolsOk returns a tuple with the RoomTypePools field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomTypePools

`func (o *RoomTypePoolDetails) SetRoomTypePools(v []RoomTypePoolType)`

SetRoomTypePools sets RoomTypePools field to given value.

### HasRoomTypePools

`func (o *RoomTypePoolDetails) HasRoomTypePools() bool`

HasRoomTypePools returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomTypePoolDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomTypePoolDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomTypePoolDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomTypePoolDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


