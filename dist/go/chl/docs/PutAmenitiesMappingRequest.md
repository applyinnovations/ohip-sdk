# PutAmenitiesMappingRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Amenities** | Pointer to [**[]AmenityMappingType**](AmenityMappingType.md) | Information about an external system amenity mapping. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPutAmenitiesMappingRequest

`func NewPutAmenitiesMappingRequest() *PutAmenitiesMappingRequest`

NewPutAmenitiesMappingRequest instantiates a new PutAmenitiesMappingRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPutAmenitiesMappingRequestWithDefaults

`func NewPutAmenitiesMappingRequestWithDefaults() *PutAmenitiesMappingRequest`

NewPutAmenitiesMappingRequestWithDefaults instantiates a new PutAmenitiesMappingRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetAmenities

`func (o *PutAmenitiesMappingRequest) GetAmenities() []AmenityMappingType`

GetAmenities returns the Amenities field if non-nil, zero value otherwise.

### GetAmenitiesOk

`func (o *PutAmenitiesMappingRequest) GetAmenitiesOk() (*[]AmenityMappingType, bool)`

GetAmenitiesOk returns a tuple with the Amenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetAmenities

`func (o *PutAmenitiesMappingRequest) SetAmenities(v []AmenityMappingType)`

SetAmenities sets Amenities field to given value.

### HasAmenities

`func (o *PutAmenitiesMappingRequest) HasAmenities() bool`

HasAmenities returns a boolean if a field has been set.

### GetLinks

`func (o *PutAmenitiesMappingRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PutAmenitiesMappingRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PutAmenitiesMappingRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PutAmenitiesMappingRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PutAmenitiesMappingRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PutAmenitiesMappingRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PutAmenitiesMappingRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PutAmenitiesMappingRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


