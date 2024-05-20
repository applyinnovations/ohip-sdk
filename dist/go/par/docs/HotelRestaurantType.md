# HotelRestaurantType

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Category** | Pointer to [**RestaurantCategoryType**](RestaurantCategoryType.md) |  | [optional] 
**Comments** | Pointer to **string** | Comments about the Restaurant. | [optional] 
**HotelId** | Pointer to **string** |  | [optional] 
**Hours** | Pointer to **string** | The Hours of Operation of the Restaurant. | [optional] 
**NewRestaurantCode** | Pointer to **string** | The new Restaurant Code which is used in the change method. | [optional] 
**OrderBy** | Pointer to **int32** |  | [optional] 
**PriceRange** | Pointer to **string** | The price range of the Restaurant. | [optional] 
**RestaurantCode** | Pointer to **string** |  | [optional] 
**RestaurantName** | Pointer to **string** | The name of the Restaurant. | [optional] 
**RestaurantType** | Pointer to **string** | The Type of Restaurant. | [optional] 
**TimeSpan** | Pointer to [**TimeSpanType**](TimeSpanType.md) |  | [optional] 

## Methods

### NewHotelRestaurantType

`func NewHotelRestaurantType() *HotelRestaurantType`

NewHotelRestaurantType instantiates a new HotelRestaurantType object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelRestaurantTypeWithDefaults

`func NewHotelRestaurantTypeWithDefaults() *HotelRestaurantType`

NewHotelRestaurantTypeWithDefaults instantiates a new HotelRestaurantType object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetCategory

`func (o *HotelRestaurantType) GetCategory() RestaurantCategoryType`

GetCategory returns the Category field if non-nil, zero value otherwise.

### GetCategoryOk

`func (o *HotelRestaurantType) GetCategoryOk() (*RestaurantCategoryType, bool)`

GetCategoryOk returns a tuple with the Category field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetCategory

`func (o *HotelRestaurantType) SetCategory(v RestaurantCategoryType)`

SetCategory sets Category field to given value.

### HasCategory

`func (o *HotelRestaurantType) HasCategory() bool`

HasCategory returns a boolean if a field has been set.

### GetComments

`func (o *HotelRestaurantType) GetComments() string`

GetComments returns the Comments field if non-nil, zero value otherwise.

### GetCommentsOk

`func (o *HotelRestaurantType) GetCommentsOk() (*string, bool)`

GetCommentsOk returns a tuple with the Comments field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetComments

`func (o *HotelRestaurantType) SetComments(v string)`

SetComments sets Comments field to given value.

### HasComments

`func (o *HotelRestaurantType) HasComments() bool`

HasComments returns a boolean if a field has been set.

### GetHotelId

`func (o *HotelRestaurantType) GetHotelId() string`

GetHotelId returns the HotelId field if non-nil, zero value otherwise.

### GetHotelIdOk

`func (o *HotelRestaurantType) GetHotelIdOk() (*string, bool)`

GetHotelIdOk returns a tuple with the HotelId field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelId

`func (o *HotelRestaurantType) SetHotelId(v string)`

SetHotelId sets HotelId field to given value.

### HasHotelId

`func (o *HotelRestaurantType) HasHotelId() bool`

HasHotelId returns a boolean if a field has been set.

### GetHours

`func (o *HotelRestaurantType) GetHours() string`

GetHours returns the Hours field if non-nil, zero value otherwise.

### GetHoursOk

`func (o *HotelRestaurantType) GetHoursOk() (*string, bool)`

GetHoursOk returns a tuple with the Hours field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHours

`func (o *HotelRestaurantType) SetHours(v string)`

SetHours sets Hours field to given value.

### HasHours

`func (o *HotelRestaurantType) HasHours() bool`

HasHours returns a boolean if a field has been set.

### GetNewRestaurantCode

`func (o *HotelRestaurantType) GetNewRestaurantCode() string`

GetNewRestaurantCode returns the NewRestaurantCode field if non-nil, zero value otherwise.

### GetNewRestaurantCodeOk

`func (o *HotelRestaurantType) GetNewRestaurantCodeOk() (*string, bool)`

GetNewRestaurantCodeOk returns a tuple with the NewRestaurantCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetNewRestaurantCode

`func (o *HotelRestaurantType) SetNewRestaurantCode(v string)`

SetNewRestaurantCode sets NewRestaurantCode field to given value.

### HasNewRestaurantCode

`func (o *HotelRestaurantType) HasNewRestaurantCode() bool`

HasNewRestaurantCode returns a boolean if a field has been set.

### GetOrderBy

`func (o *HotelRestaurantType) GetOrderBy() int32`

GetOrderBy returns the OrderBy field if non-nil, zero value otherwise.

### GetOrderByOk

`func (o *HotelRestaurantType) GetOrderByOk() (*int32, bool)`

GetOrderByOk returns a tuple with the OrderBy field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetOrderBy

`func (o *HotelRestaurantType) SetOrderBy(v int32)`

SetOrderBy sets OrderBy field to given value.

### HasOrderBy

`func (o *HotelRestaurantType) HasOrderBy() bool`

HasOrderBy returns a boolean if a field has been set.

### GetPriceRange

`func (o *HotelRestaurantType) GetPriceRange() string`

GetPriceRange returns the PriceRange field if non-nil, zero value otherwise.

### GetPriceRangeOk

`func (o *HotelRestaurantType) GetPriceRangeOk() (*string, bool)`

GetPriceRangeOk returns a tuple with the PriceRange field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPriceRange

`func (o *HotelRestaurantType) SetPriceRange(v string)`

SetPriceRange sets PriceRange field to given value.

### HasPriceRange

`func (o *HotelRestaurantType) HasPriceRange() bool`

HasPriceRange returns a boolean if a field has been set.

### GetRestaurantCode

`func (o *HotelRestaurantType) GetRestaurantCode() string`

GetRestaurantCode returns the RestaurantCode field if non-nil, zero value otherwise.

### GetRestaurantCodeOk

`func (o *HotelRestaurantType) GetRestaurantCodeOk() (*string, bool)`

GetRestaurantCodeOk returns a tuple with the RestaurantCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestaurantCode

`func (o *HotelRestaurantType) SetRestaurantCode(v string)`

SetRestaurantCode sets RestaurantCode field to given value.

### HasRestaurantCode

`func (o *HotelRestaurantType) HasRestaurantCode() bool`

HasRestaurantCode returns a boolean if a field has been set.

### GetRestaurantName

`func (o *HotelRestaurantType) GetRestaurantName() string`

GetRestaurantName returns the RestaurantName field if non-nil, zero value otherwise.

### GetRestaurantNameOk

`func (o *HotelRestaurantType) GetRestaurantNameOk() (*string, bool)`

GetRestaurantNameOk returns a tuple with the RestaurantName field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestaurantName

`func (o *HotelRestaurantType) SetRestaurantName(v string)`

SetRestaurantName sets RestaurantName field to given value.

### HasRestaurantName

`func (o *HotelRestaurantType) HasRestaurantName() bool`

HasRestaurantName returns a boolean if a field has been set.

### GetRestaurantType

`func (o *HotelRestaurantType) GetRestaurantType() string`

GetRestaurantType returns the RestaurantType field if non-nil, zero value otherwise.

### GetRestaurantTypeOk

`func (o *HotelRestaurantType) GetRestaurantTypeOk() (*string, bool)`

GetRestaurantTypeOk returns a tuple with the RestaurantType field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetRestaurantType

`func (o *HotelRestaurantType) SetRestaurantType(v string)`

SetRestaurantType sets RestaurantType field to given value.

### HasRestaurantType

`func (o *HotelRestaurantType) HasRestaurantType() bool`

HasRestaurantType returns a boolean if a field has been set.

### GetTimeSpan

`func (o *HotelRestaurantType) GetTimeSpan() TimeSpanType`

GetTimeSpan returns the TimeSpan field if non-nil, zero value otherwise.

### GetTimeSpanOk

`func (o *HotelRestaurantType) GetTimeSpanOk() (*TimeSpanType, bool)`

GetTimeSpanOk returns a tuple with the TimeSpan field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTimeSpan

`func (o *HotelRestaurantType) SetTimeSpan(v TimeSpanType)`

SetTimeSpan sets TimeSpan field to given value.

### HasTimeSpan

`func (o *HotelRestaurantType) HasTimeSpan() bool`

HasTimeSpan returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


