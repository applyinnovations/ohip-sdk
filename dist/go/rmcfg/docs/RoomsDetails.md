# RoomsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Rooms** | Pointer to [**[]ConfigRoomsType**](ConfigRoomsType.md) | Collection of rooms with detailed information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomsDetails

`func NewRoomsDetails() *RoomsDetails`

NewRoomsDetails instantiates a new RoomsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomsDetailsWithDefaults

`func NewRoomsDetailsWithDefaults() *RoomsDetails`

NewRoomsDetailsWithDefaults instantiates a new RoomsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRooms

`func (o *RoomsDetails) GetRooms() []ConfigRoomsType`

GetRooms returns the Rooms field if non-nil, zero value otherwise.

### GetRoomsOk

`func (o *RoomsDetails) GetRoomsOk() (*[]ConfigRoomsType, bool)`

GetRoomsOk returns a tuple with the Rooms field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRooms

`func (o *RoomsDetails) SetRooms(v []ConfigRoomsType)`

SetRooms sets Rooms field to given value.

### HasRooms

`func (o *RoomsDetails) HasRooms() bool`

HasRooms returns a boolean if a field has been set.

### GetLinks

`func (o *RoomsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


