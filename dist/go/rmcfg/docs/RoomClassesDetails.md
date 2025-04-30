# RoomClassesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**RoomClasses** | Pointer to [**[]RoomClassType**](RoomClassType.md) | Collection of hotel level room classes with attached room types. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewRoomClassesDetails

`func NewRoomClassesDetails() *RoomClassesDetails`

NewRoomClassesDetails instantiates a new RoomClassesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRoomClassesDetailsWithDefaults

`func NewRoomClassesDetailsWithDefaults() *RoomClassesDetails`

NewRoomClassesDetailsWithDefaults instantiates a new RoomClassesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetRoomClasses

`func (o *RoomClassesDetails) GetRoomClasses() []RoomClassType`

GetRoomClasses returns the RoomClasses field if non-nil, zero value otherwise.

### GetRoomClassesOk

`func (o *RoomClassesDetails) GetRoomClassesOk() (*[]RoomClassType, bool)`

GetRoomClassesOk returns a tuple with the RoomClasses field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRoomClasses

`func (o *RoomClassesDetails) SetRoomClasses(v []RoomClassType)`

SetRoomClasses sets RoomClasses field to given value.

### HasRoomClasses

`func (o *RoomClassesDetails) HasRoomClasses() bool`

HasRoomClasses returns a boolean if a field has been set.

### GetLinks

`func (o *RoomClassesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RoomClassesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RoomClassesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RoomClassesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RoomClassesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RoomClassesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RoomClassesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RoomClassesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


