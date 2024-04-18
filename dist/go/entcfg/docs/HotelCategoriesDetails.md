# HotelCategoriesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**HotelCategories** | Pointer to [**[]HotelCategoryType**](HotelCategoryType.md) | List of Hotel Categories. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewHotelCategoriesDetails

`func NewHotelCategoriesDetails() *HotelCategoriesDetails`

NewHotelCategoriesDetails instantiates a new HotelCategoriesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewHotelCategoriesDetailsWithDefaults

`func NewHotelCategoriesDetailsWithDefaults() *HotelCategoriesDetails`

NewHotelCategoriesDetailsWithDefaults instantiates a new HotelCategoriesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetHotelCategories

`func (o *HotelCategoriesDetails) GetHotelCategories() []HotelCategoryType`

GetHotelCategories returns the HotelCategories field if non-nil, zero value otherwise.

### GetHotelCategoriesOk

`func (o *HotelCategoriesDetails) GetHotelCategoriesOk() (*[]HotelCategoryType, bool)`

GetHotelCategoriesOk returns a tuple with the HotelCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetHotelCategories

`func (o *HotelCategoriesDetails) SetHotelCategories(v []HotelCategoryType)`

SetHotelCategories sets HotelCategories field to given value.

### HasHotelCategories

`func (o *HotelCategoriesDetails) HasHotelCategories() bool`

HasHotelCategories returns a boolean if a field has been set.

### GetLinks

`func (o *HotelCategoriesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *HotelCategoriesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *HotelCategoriesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *HotelCategoriesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *HotelCategoriesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *HotelCategoriesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *HotelCategoriesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *HotelCategoriesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


