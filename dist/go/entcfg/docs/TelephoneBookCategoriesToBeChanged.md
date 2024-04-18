# TelephoneBookCategoriesToBeChanged

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**TelephoneCategories** | Pointer to [**[]TelephoneCategoryType**](TelephoneCategoryType.md) | This type holds collection of Telephone Categories with complete information. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewTelephoneBookCategoriesToBeChanged

`func NewTelephoneBookCategoriesToBeChanged() *TelephoneBookCategoriesToBeChanged`

NewTelephoneBookCategoriesToBeChanged instantiates a new TelephoneBookCategoriesToBeChanged object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewTelephoneBookCategoriesToBeChangedWithDefaults

`func NewTelephoneBookCategoriesToBeChangedWithDefaults() *TelephoneBookCategoriesToBeChanged`

NewTelephoneBookCategoriesToBeChangedWithDefaults instantiates a new TelephoneBookCategoriesToBeChanged object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetTelephoneCategories

`func (o *TelephoneBookCategoriesToBeChanged) GetTelephoneCategories() []TelephoneCategoryType`

GetTelephoneCategories returns the TelephoneCategories field if non-nil, zero value otherwise.

### GetTelephoneCategoriesOk

`func (o *TelephoneBookCategoriesToBeChanged) GetTelephoneCategoriesOk() (*[]TelephoneCategoryType, bool)`

GetTelephoneCategoriesOk returns a tuple with the TelephoneCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneCategories

`func (o *TelephoneBookCategoriesToBeChanged) SetTelephoneCategories(v []TelephoneCategoryType)`

SetTelephoneCategories sets TelephoneCategories field to given value.

### HasTelephoneCategories

`func (o *TelephoneBookCategoriesToBeChanged) HasTelephoneCategories() bool`

HasTelephoneCategories returns a boolean if a field has been set.

### GetLinks

`func (o *TelephoneBookCategoriesToBeChanged) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *TelephoneBookCategoriesToBeChanged) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *TelephoneBookCategoriesToBeChanged) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *TelephoneBookCategoriesToBeChanged) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *TelephoneBookCategoriesToBeChanged) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *TelephoneBookCategoriesToBeChanged) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *TelephoneBookCategoriesToBeChanged) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *TelephoneBookCategoriesToBeChanged) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

