# HotelRestaurantsToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRestaurants** | Pointer to [**[]HotelRestaurantType**](HotelRestaurantType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelRestaurantsToBeChanged

`func NewHotelRestaurantsToBeChanged() *HotelRestaurantsToBeChanged`

NewHotelRestaurantsToBeChanged instantiates a new HotelRestaurantsToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRestaurantsToBeChangedWithDefaults

`func NewHotelRestaurantsToBeChangedWithDefaults() *HotelRestaurantsToBeChanged`

NewHotelRestaurantsToBeChangedWithDefaults instantiates a new HotelRestaurantsToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRestaurants

`func (o *HotelRestaurantsToBeChanged) GetHotelRestaurants() []HotelRestaurantType`

GetHotelRestaurants returns the HotelRestaurants field if non-nil, zero value otherwise.

### GetHotelRestaurantsOk

`func (o *HotelRestaurantsToBeChanged) GetHotelRestaurantsOk() (*[]HotelRestaurantType, bool)`

GetHotelRestaurantsOk returns a tuple with the HotelRestaurants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRestaurants

`func (o *HotelRestaurantsToBeChanged) SetHotelRestaurants(v []HotelRestaurantType)`

SetHotelRestaurants sets HotelRestaurants field to given value.

### HasHotelRestaurants

`func (o *HotelRestaurantsToBeChanged) HasHotelRestaurants() bool`

HasHotelRestaurants returns a boolean if a field has been set.

### GetLinks

`func (o *HotelRestaurantsToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelRestaurantsToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelRestaurantsToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelRestaurantsToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelRestaurantsToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelRestaurantsToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelRestaurantsToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelRestaurantsToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

