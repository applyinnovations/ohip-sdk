# AmenitiesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelAmenities** | Pointer to [**[]ConfigHotelAmenityType**](ConfigHotelAmenityType.md) | This type holds a collection of amenities at the property level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAmenitiesToBeChanged

`func NewAmenitiesToBeChanged() *AmenitiesToBeChanged`

NewAmenitiesToBeChanged instantiates a new AmenitiesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAmenitiesToBeChangedWithDefaults

`func NewAmenitiesToBeChangedWithDefaults() *AmenitiesToBeChanged`

NewAmenitiesToBeChangedWithDefaults instantiates a new AmenitiesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelAmenities

`func (o *AmenitiesToBeChanged) GetHotelAmenities() []ConfigHotelAmenityType`

GetHotelAmenities returns the HotelAmenities field if non-nil, zero value otherwise.

### GetHotelAmenitiesOk

`func (o *AmenitiesToBeChanged) GetHotelAmenitiesOk() (*[]ConfigHotelAmenityType, bool)`

GetHotelAmenitiesOk returns a tuple with the HotelAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAmenities

`func (o *AmenitiesToBeChanged) SetHotelAmenities(v []ConfigHotelAmenityType)`

SetHotelAmenities sets HotelAmenities field to given value.

### HasHotelAmenities

`func (o *AmenitiesToBeChanged) HasHotelAmenities() bool`

HasHotelAmenities returns a boolean if a field has been set.

### GetLinks

`func (o *AmenitiesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AmenitiesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AmenitiesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AmenitiesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AmenitiesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AmenitiesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AmenitiesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AmenitiesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


