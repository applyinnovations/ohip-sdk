# PostHotelRestaurantsRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRestaurants** | Pointer to [**[]HotelRestaurantType**](HotelRestaurantType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHotelRestaurantsRequest

`func NewPostHotelRestaurantsRequest() *PostHotelRestaurantsRequest`

NewPostHotelRestaurantsRequest instantiates a new PostHotelRestaurantsRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHotelRestaurantsRequestWithDefaults

`func NewPostHotelRestaurantsRequestWithDefaults() *PostHotelRestaurantsRequest`

NewPostHotelRestaurantsRequestWithDefaults instantiates a new PostHotelRestaurantsRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRestaurants

`func (o *PostHotelRestaurantsRequest) GetHotelRestaurants() []HotelRestaurantType`

GetHotelRestaurants returns the HotelRestaurants field if non-nil, zero value otherwise.

### GetHotelRestaurantsOk

`func (o *PostHotelRestaurantsRequest) GetHotelRestaurantsOk() (*[]HotelRestaurantType, bool)`

GetHotelRestaurantsOk returns a tuple with the HotelRestaurants field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRestaurants

`func (o *PostHotelRestaurantsRequest) SetHotelRestaurants(v []HotelRestaurantType)`

SetHotelRestaurants sets HotelRestaurants field to given value.

### HasHotelRestaurants

`func (o *PostHotelRestaurantsRequest) HasHotelRestaurants() bool`

HasHotelRestaurants returns a boolean if a field has been set.

### GetLinks

`func (o *PostHotelRestaurantsRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHotelRestaurantsRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHotelRestaurantsRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHotelRestaurantsRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHotelRestaurantsRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHotelRestaurantsRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHotelRestaurantsRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHotelRestaurantsRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


