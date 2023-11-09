# RateCategoryDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRateCategories** | Pointer to [**RateCategoryDetailsHotelRateCategories**](RateCategoryDetailsHotelRateCategories.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewRateCategoryDetails

`func NewRateCategoryDetails() *RateCategoryDetails`

NewRateCategoryDetails instantiates a new RateCategoryDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewRateCategoryDetailsWithDefaults

`func NewRateCategoryDetailsWithDefaults() *RateCategoryDetails`

NewRateCategoryDetailsWithDefaults instantiates a new RateCategoryDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRateCategories

`func (o *RateCategoryDetails) GetHotelRateCategories() RateCategoryDetailsHotelRateCategories`

GetHotelRateCategories returns the HotelRateCategories field if non-nil, zero value otherwise.

### GetHotelRateCategoriesOk

`func (o *RateCategoryDetails) GetHotelRateCategoriesOk() (*RateCategoryDetailsHotelRateCategories, bool)`

GetHotelRateCategoriesOk returns a tuple with the HotelRateCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateCategories

`func (o *RateCategoryDetails) SetHotelRateCategories(v RateCategoryDetailsHotelRateCategories)`

SetHotelRateCategories sets HotelRateCategories field to given value.

### HasHotelRateCategories

`func (o *RateCategoryDetails) HasHotelRateCategories() bool`

HasHotelRateCategories returns a boolean if a field has been set.

### GetLinks

`func (o *RateCategoryDetails) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *RateCategoryDetails) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *RateCategoryDetails) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *RateCategoryDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *RateCategoryDetails) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *RateCategoryDetails) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *RateCategoryDetails) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *RateCategoryDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


