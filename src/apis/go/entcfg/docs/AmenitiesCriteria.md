# AmenitiesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelAmenities** | Pointer to [**[]ConfigHotelAmenityType**](ConfigHotelAmenityType.md) | This type holds a collection of amenities at the property level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewAmenitiesCriteria

`func NewAmenitiesCriteria() *AmenitiesCriteria`

NewAmenitiesCriteria instantiates a new AmenitiesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewAmenitiesCriteriaWithDefaults

`func NewAmenitiesCriteriaWithDefaults() *AmenitiesCriteria`

NewAmenitiesCriteriaWithDefaults instantiates a new AmenitiesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelAmenities

`func (o *AmenitiesCriteria) GetHotelAmenities() []ConfigHotelAmenityType`

GetHotelAmenities returns the HotelAmenities field if non-nil, zero value otherwise.

### GetHotelAmenitiesOk

`func (o *AmenitiesCriteria) GetHotelAmenitiesOk() (*[]ConfigHotelAmenityType, bool)`

GetHotelAmenitiesOk returns a tuple with the HotelAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAmenities

`func (o *AmenitiesCriteria) SetHotelAmenities(v []ConfigHotelAmenityType)`

SetHotelAmenities sets HotelAmenities field to given value.

### HasHotelAmenities

`func (o *AmenitiesCriteria) HasHotelAmenities() bool`

HasHotelAmenities returns a boolean if a field has been set.

### GetLinks

`func (o *AmenitiesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *AmenitiesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *AmenitiesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *AmenitiesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *AmenitiesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *AmenitiesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *AmenitiesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *AmenitiesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


