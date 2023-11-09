# PostRateCategoryRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelRateCategory** | Pointer to [**HotelRateCategoryType**](HotelRateCategoryType.md) |  | [optional] 
**Links** | Pointer to [**Links**](Links.md) |  | [optional] 
**Warnings** | Pointer to [**WarningsType**](WarningsType.md) |  | [optional] 

## Methods

### NewPostRateCategoryRequest

`func NewPostRateCategoryRequest() *PostRateCategoryRequest`

NewPostRateCategoryRequest instantiates a new PostRateCategoryRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostRateCategoryRequestWithDefaults

`func NewPostRateCategoryRequestWithDefaults() *PostRateCategoryRequest`

NewPostRateCategoryRequestWithDefaults instantiates a new PostRateCategoryRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelRateCategory

`func (o *PostRateCategoryRequest) GetHotelRateCategory() HotelRateCategoryType`

GetHotelRateCategory returns the HotelRateCategory field if non-nil, zero value otherwise.

### GetHotelRateCategoryOk

`func (o *PostRateCategoryRequest) GetHotelRateCategoryOk() (*HotelRateCategoryType, bool)`

GetHotelRateCategoryOk returns a tuple with the HotelRateCategory field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelRateCategory

`func (o *PostRateCategoryRequest) SetHotelRateCategory(v HotelRateCategoryType)`

SetHotelRateCategory sets HotelRateCategory field to given value.

### HasHotelRateCategory

`func (o *PostRateCategoryRequest) HasHotelRateCategory() bool`

HasHotelRateCategory returns a boolean if a field has been set.

### GetLinks

`func (o *PostRateCategoryRequest) GetLinks() Links`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostRateCategoryRequest) GetLinksOk() (*Links, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostRateCategoryRequest) SetLinks(v Links)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostRateCategoryRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostRateCategoryRequest) GetWarnings() WarningsType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostRateCategoryRequest) GetWarningsOk() (*WarningsType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostRateCategoryRequest) SetWarnings(v WarningsType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostRateCategoryRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


