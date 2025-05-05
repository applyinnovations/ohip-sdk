# TelephoneBookCategoriesCriteria

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TelephoneCategories** | Pointer to [**[]TelephoneCategoryType**](TelephoneCategoryType.md) | This type holds collection of Telephone Categories with complete information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTelephoneBookCategoriesCriteria

`func NewTelephoneBookCategoriesCriteria() *TelephoneBookCategoriesCriteria`

NewTelephoneBookCategoriesCriteria instantiates a new TelephoneBookCategoriesCriteria object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTelephoneBookCategoriesCriteriaWithDefaults

`func NewTelephoneBookCategoriesCriteriaWithDefaults() *TelephoneBookCategoriesCriteria`

NewTelephoneBookCategoriesCriteriaWithDefaults instantiates a new TelephoneBookCategoriesCriteria object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephoneCategories

`func (o *TelephoneBookCategoriesCriteria) GetTelephoneCategories() []TelephoneCategoryType`

GetTelephoneCategories returns the TelephoneCategories field if non-nil, zero value otherwise.

### GetTelephoneCategoriesOk

`func (o *TelephoneBookCategoriesCriteria) GetTelephoneCategoriesOk() (*[]TelephoneCategoryType, bool)`

GetTelephoneCategoriesOk returns a tuple with the TelephoneCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneCategories

`func (o *TelephoneBookCategoriesCriteria) SetTelephoneCategories(v []TelephoneCategoryType)`

SetTelephoneCategories sets TelephoneCategories field to given value.

### HasTelephoneCategories

`func (o *TelephoneBookCategoriesCriteria) HasTelephoneCategories() bool`

HasTelephoneCategories returns a boolean if a field has been set.

### GetLinks

`func (o *TelephoneBookCategoriesCriteria) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TelephoneBookCategoriesCriteria) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TelephoneBookCategoriesCriteria) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TelephoneBookCategoriesCriteria) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TelephoneBookCategoriesCriteria) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TelephoneBookCategoriesCriteria) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TelephoneBookCategoriesCriteria) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TelephoneBookCategoriesCriteria) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


