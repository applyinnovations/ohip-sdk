# PostFloorsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelFloors** | Pointer to [**HotelFloorsType**](HotelFloorsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostFloorsRequest

`func NewPostFloorsRequest() *PostFloorsRequest`

NewPostFloorsRequest instantiates a new PostFloorsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostFloorsRequestWithDefaults

`func NewPostFloorsRequestWithDefaults() *PostFloorsRequest`

NewPostFloorsRequestWithDefaults instantiates a new PostFloorsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelFloors

`func (o *PostFloorsRequest) GetHotelFloors() HotelFloorsType`

GetHotelFloors returns the HotelFloors field if non-nil, zero value otherwise.

### GetHotelFloorsOk

`func (o *PostFloorsRequest) GetHotelFloorsOk() (*HotelFloorsType, bool)`

GetHotelFloorsOk returns a tuple with the HotelFloors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelFloors

`func (o *PostFloorsRequest) SetHotelFloors(v HotelFloorsType)`

SetHotelFloors sets HotelFloors field to given value.

### HasHotelFloors

`func (o *PostFloorsRequest) HasHotelFloors() bool`

HasHotelFloors returns a boolean if a field has been set.

### GetLinks

`func (o *PostFloorsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostFloorsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostFloorsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostFloorsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostFloorsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostFloorsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostFloorsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostFloorsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


