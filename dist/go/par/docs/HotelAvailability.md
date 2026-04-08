# HotelAvailability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelAvailability** | Pointer to [**[]AvailResponseSegmentType**](AvailResponseSegmentType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelAvailability

`func NewHotelAvailability() *HotelAvailability`

NewHotelAvailability instantiates a new HotelAvailability object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelAvailabilityWithDefaults

`func NewHotelAvailabilityWithDefaults() *HotelAvailability`

NewHotelAvailabilityWithDefaults instantiates a new HotelAvailability object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelAvailability

`func (o *HotelAvailability) GetHotelAvailability() []AvailResponseSegmentType`

GetHotelAvailability returns the HotelAvailability field if non-nil, zero value otherwise.

### GetHotelAvailabilityOk

`func (o *HotelAvailability) GetHotelAvailabilityOk() (*[]AvailResponseSegmentType, bool)`

GetHotelAvailabilityOk returns a tuple with the HotelAvailability field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAvailability

`func (o *HotelAvailability) SetHotelAvailability(v []AvailResponseSegmentType)`

SetHotelAvailability sets HotelAvailability field to given value.

### HasHotelAvailability

`func (o *HotelAvailability) HasHotelAvailability() bool`

HasHotelAvailability returns a boolean if a field has been set.

### GetLinks

`func (o *HotelAvailability) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelAvailability) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelAvailability) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelAvailability) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelAvailability) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelAvailability) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelAvailability) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelAvailability) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


