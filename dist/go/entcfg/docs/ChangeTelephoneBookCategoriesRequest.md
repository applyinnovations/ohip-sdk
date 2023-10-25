# ChangeTelephoneBookCategoriesRequest

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**TelephoneCategories** | Pointer to [**[]TelephoneCategoryType**](TelephoneCategoryType.md) | This type holds collection of Telephone Categories with complete information. | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewChangeTelephoneBookCategoriesRequest

`func NewChangeTelephoneBookCategoriesRequest() *ChangeTelephoneBookCategoriesRequest`

NewChangeTelephoneBookCategoriesRequest instantiates a new ChangeTelephoneBookCategoriesRequest object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewChangeTelephoneBookCategoriesRequestWithDefaults

`func NewChangeTelephoneBookCategoriesRequestWithDefaults() *ChangeTelephoneBookCategoriesRequest`

NewChangeTelephoneBookCategoriesRequestWithDefaults instantiates a new ChangeTelephoneBookCategoriesRequest object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetLinks

`func (o *ChangeTelephoneBookCategoriesRequest) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ChangeTelephoneBookCategoriesRequest) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ChangeTelephoneBookCategoriesRequest) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ChangeTelephoneBookCategoriesRequest) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetTelephoneCategories

`func (o *ChangeTelephoneBookCategoriesRequest) GetTelephoneCategories() []TelephoneCategoryType`

GetTelephoneCategories returns the TelephoneCategories field if non-nil, zero value otherwise.

### GetTelephoneCategoriesOk

`func (o *ChangeTelephoneBookCategoriesRequest) GetTelephoneCategoriesOk() (*[]TelephoneCategoryType, bool)`

GetTelephoneCategoriesOk returns a tuple with the TelephoneCategories field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetTelephoneCategories

`func (o *ChangeTelephoneBookCategoriesRequest) SetTelephoneCategories(v []TelephoneCategoryType)`

SetTelephoneCategories sets TelephoneCategories field to given value.

### HasTelephoneCategories

`func (o *ChangeTelephoneBookCategoriesRequest) HasTelephoneCategories() bool`

HasTelephoneCategories returns a boolean if a field has been set.

### GetWarnings

`func (o *ChangeTelephoneBookCategoriesRequest) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ChangeTelephoneBookCategoriesRequest) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ChangeTelephoneBookCategoriesRequest) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ChangeTelephoneBookCategoriesRequest) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


