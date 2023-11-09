# ChangeFloorsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelFloors** | Pointer to [**HotelFloorsType**](HotelFloorsType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewChangeFloorsRequest

`func NewChangeFloorsRequest() *ChangeFloorsRequest`

NewChangeFloorsRequest instantiates a new ChangeFloorsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeFloorsRequestWithDefaults

`func NewChangeFloorsRequestWithDefaults() *ChangeFloorsRequest`

NewChangeFloorsRequestWithDefaults instantiates a new ChangeFloorsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelFloors

`func (o *ChangeFloorsRequest) GetHotelFloors() HotelFloorsType`

GetHotelFloors returns the HotelFloors field if non-nil, zero value otherwise.

### GetHotelFloorsOk

`func (o *ChangeFloorsRequest) GetHotelFloorsOk() (*HotelFloorsType, bool)`

GetHotelFloorsOk returns a tuple with the HotelFloors field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelFloors

`func (o *ChangeFloorsRequest) SetHotelFloors(v HotelFloorsType)`

SetHotelFloors sets HotelFloors field to given value.

### HasHotelFloors

`func (o *ChangeFloorsRequest) HasHotelFloors() bool`

HasHotelFloors returns a boolean if a field has been set.

### GetLinks

`func (o *ChangeFloorsRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeFloorsRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeFloorsRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeFloorsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeFloorsRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeFloorsRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeFloorsRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeFloorsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


