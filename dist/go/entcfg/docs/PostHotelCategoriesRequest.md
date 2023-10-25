# PostHotelCategoriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCategories** | Pointer to [**[]HotelCategoryType**](HotelCategoryType.md) | List of Hotel Categories. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPostHotelCategoriesRequest

`func NewPostHotelCategoriesRequest() *PostHotelCategoriesRequest`

NewPostHotelCategoriesRequest instantiates a new PostHotelCategoriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPostHotelCategoriesRequestWithDefaults

`func NewPostHotelCategoriesRequestWithDefaults() *PostHotelCategoriesRequest`

NewPostHotelCategoriesRequestWithDefaults instantiates a new PostHotelCategoriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCategories

`func (o *PostHotelCategoriesRequest) GetHotelCategories() []HotelCategoryType`

GetHotelCategories returns the HotelCategories field if non-nil, zero value otherwise.

### GetHotelCategoriesOk

`func (o *PostHotelCategoriesRequest) GetHotelCategoriesOk() (*[]HotelCategoryType, bool)`

GetHotelCategoriesOk returns a tuple with the HotelCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCategories

`func (o *PostHotelCategoriesRequest) SetHotelCategories(v []HotelCategoryType)`

SetHotelCategories sets HotelCategories field to given value.

### HasHotelCategories

`func (o *PostHotelCategoriesRequest) HasHotelCategories() bool`

HasHotelCategories returns a boolean if a field has been set.

### GetLinks

`func (o *PostHotelCategoriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PostHotelCategoriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PostHotelCategoriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PostHotelCategoriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PostHotelCategoriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PostHotelCategoriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PostHotelCategoriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PostHotelCategoriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


