# FloorsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelFloors** | Pointer to [**[]HotelFloorType**](HotelFloorType.md) | This type holds a collection of floors at the hotel level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewFloorsDetails

`func NewFloorsDetails() *FloorsDetails`

NewFloorsDetails instantiates a new FloorsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewFloorsDetailsWithDefaults

`func NewFloorsDetailsWithDefaults() *FloorsDetails`

NewFloorsDetailsWithDefaults instantiates a new FloorsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelFloors

`func (o *FloorsDetails) GetHotelFloors() []HotelFloorType`

GetHotelFloors returns the HotelFloors field if non-nil, zero value otherwise.

### GetHotelFloorsOk

`func (o *FloorsDetails) GetHotelFloorsOk() (*[]HotelFloorType, bool)`

GetHotelFloorsOk returns a tuple with the HotelFloors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelFloors

`func (o *FloorsDetails) SetHotelFloors(v []HotelFloorType)`

SetHotelFloors sets HotelFloors field to given value.

### HasHotelFloors

`func (o *FloorsDetails) HasHotelFloors() bool`

HasHotelFloors returns a boolean if a field has been set.

### GetLinks

`func (o *FloorsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *FloorsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *FloorsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *FloorsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *FloorsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *FloorsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *FloorsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *FloorsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


