# HotelDetailsDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelDetails** | Pointer to [**[]HotelDetailType**](HotelDetailType.md) | Collection of property level hotel details. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelDetailsDetails

`func NewHotelDetailsDetails() *HotelDetailsDetails`

NewHotelDetailsDetails instantiates a new HotelDetailsDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelDetailsDetailsWithDefaults

`func NewHotelDetailsDetailsWithDefaults() *HotelDetailsDetails`

NewHotelDetailsDetailsWithDefaults instantiates a new HotelDetailsDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelDetails

`func (o *HotelDetailsDetails) GetHotelDetails() []HotelDetailType`

GetHotelDetails returns the HotelDetails field if non-nil, zero value otherwise.

### GetHotelDetailsOk

`func (o *HotelDetailsDetails) GetHotelDetailsOk() (*[]HotelDetailType, bool)`

GetHotelDetailsOk returns a tuple with the HotelDetails field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelDetails

`func (o *HotelDetailsDetails) SetHotelDetails(v []HotelDetailType)`

SetHotelDetails sets HotelDetails field to given value.

### HasHotelDetails

`func (o *HotelDetailsDetails) HasHotelDetails() bool`

HasHotelDetails returns a boolean if a field has been set.

### GetLinks

`func (o *HotelDetailsDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelDetailsDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelDetailsDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelDetailsDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelDetailsDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelDetailsDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelDetailsDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelDetailsDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


