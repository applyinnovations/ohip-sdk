# PropertyDetailCategoriesDetails

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**PropertyDetailCategories** | Pointer to [**[]PropertyDetailCategoryType**](PropertyDetailCategoryType.md) | List of Property Detail Categories. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewPropertyDetailCategoriesDetails

`func NewPropertyDetailCategoriesDetails() *PropertyDetailCategoriesDetails`

NewPropertyDetailCategoriesDetails instantiates a new PropertyDetailCategoriesDetails object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewPropertyDetailCategoriesDetailsWithDefaults

`func NewPropertyDetailCategoriesDetailsWithDefaults() *PropertyDetailCategoriesDetails`

NewPropertyDetailCategoriesDetailsWithDefaults instantiates a new PropertyDetailCategoriesDetails object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetPropertyDetailCategories

`func (o *PropertyDetailCategoriesDetails) GetPropertyDetailCategories() []PropertyDetailCategoryType`

GetPropertyDetailCategories returns the PropertyDetailCategories field if non-nil, zero value otherwise.

### GetPropertyDetailCategoriesOk

`func (o *PropertyDetailCategoriesDetails) GetPropertyDetailCategoriesOk() (*[]PropertyDetailCategoryType, bool)`

GetPropertyDetailCategoriesOk returns a tuple with the PropertyDetailCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetPropertyDetailCategories

`func (o *PropertyDetailCategoriesDetails) SetPropertyDetailCategories(v []PropertyDetailCategoryType)`

SetPropertyDetailCategories sets PropertyDetailCategories field to given value.

### HasPropertyDetailCategories

`func (o *PropertyDetailCategoriesDetails) HasPropertyDetailCategories() bool`

HasPropertyDetailCategories returns a boolean if a field has been set.

### GetLinks

`func (o *PropertyDetailCategoriesDetails) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *PropertyDetailCategoriesDetails) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *PropertyDetailCategoriesDetails) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *PropertyDetailCategoriesDetails) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *PropertyDetailCategoriesDetails) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *PropertyDetailCategoriesDetails) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *PropertyDetailCategoriesDetails) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *PropertyDetailCategoriesDetails) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

