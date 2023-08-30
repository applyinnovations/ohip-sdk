# PostAmenitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelAmenities** | Pointer to [**[]ConfigHotelAmenityType**](ConfigHotelAmenityType.md) | This type holds a collection of amenities at the property level. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostAmenitiesRequest

`func NewPostAmenitiesRequest() *PostAmenitiesRequest`

NewPostAmenitiesRequest instantiates a new PostAmenitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostAmenitiesRequestWithDefaults

`func NewPostAmenitiesRequestWithDefaults() *PostAmenitiesRequest`

NewPostAmenitiesRequestWithDefaults instantiates a new PostAmenitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelAmenities

`func (o *PostAmenitiesRequest) GetHotelAmenities() []ConfigHotelAmenityType`

GetHotelAmenities returns the HotelAmenities field if non-nil, zero value otherwise.

### GetHotelAmenitiesOk

`func (o *PostAmenitiesRequest) GetHotelAmenitiesOk() (*[]ConfigHotelAmenityType, bool)`

GetHotelAmenitiesOk returns a tuple with the HotelAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAmenities

`func (o *PostAmenitiesRequest) SetHotelAmenities(v []ConfigHotelAmenityType)`

SetHotelAmenities sets HotelAmenities field to given value.

### HasHotelAmenities

`func (o *PostAmenitiesRequest) HasHotelAmenities() bool`

HasHotelAmenities returns a boolean if a field has been set.

### GetLinks

`func (o *PostAmenitiesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostAmenitiesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostAmenitiesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostAmenitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostAmenitiesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostAmenitiesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostAmenitiesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostAmenitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


