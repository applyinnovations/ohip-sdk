# ChangeAmenitiesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelAmenities** | Pointer to [**ConfigHotelAmenitiesType**](ConfigHotelAmenitiesType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeAmenitiesRequest

`func NewChangeAmenitiesRequest() *ChangeAmenitiesRequest`

NewChangeAmenitiesRequest instantiates a new ChangeAmenitiesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeAmenitiesRequestWithDefaults

`func NewChangeAmenitiesRequestWithDefaults() *ChangeAmenitiesRequest`

NewChangeAmenitiesRequestWithDefaults instantiates a new ChangeAmenitiesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelAmenities

`func (o *ChangeAmenitiesRequest) GetHotelAmenities() ConfigHotelAmenitiesType`

GetHotelAmenities returns the HotelAmenities field if non-nil, zero value otherwise.

### GetHotelAmenitiesOk

`func (o *ChangeAmenitiesRequest) GetHotelAmenitiesOk() (*ConfigHotelAmenitiesType, bool)`

GetHotelAmenitiesOk returns a tuple with the HotelAmenities field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelAmenities

`func (o *ChangeAmenitiesRequest) SetHotelAmenities(v ConfigHotelAmenitiesType)`

SetHotelAmenities sets HotelAmenities field to given value.

### HasHotelAmenities

`func (o *ChangeAmenitiesRequest) HasHotelAmenities() bool`

HasHotelAmenities returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeAmenitiesRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeAmenitiesRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeAmenitiesRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeAmenitiesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeAmenitiesRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeAmenitiesRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeAmenitiesRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeAmenitiesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


