# BudgetForecastInformation

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BudgetForecastInformation** | Pointer to [**BudgetForecastInformationType**](BudgetForecastInformationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBudgetForecastInformation

`func NewBudgetForecastInformation() *BudgetForecastInformation`

NewBudgetForecastInformation instantiates a new BudgetForecastInformation object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastInformationWithDefaults

`func NewBudgetForecastInformationWithDefaults() *BudgetForecastInformation`

NewBudgetForecastInformationWithDefaults instantiates a new BudgetForecastInformation object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBudgetForecastInformation

`func (o *BudgetForecastInformation) GetBudgetForecastInformation() BudgetForecastInformationType`

GetBudgetForecastInformation returns the BudgetForecastInformation field if non-nil, zero value otherwise.

### GetBudgetForecastInformationOk

`func (o *BudgetForecastInformation) GetBudgetForecastInformationOk() (*BudgetForecastInformationType, bool)`

GetBudgetForecastInformationOk returns a tuple with the BudgetForecastInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetForecastInformation

`func (o *BudgetForecastInformation) SetBudgetForecastInformation(v BudgetForecastInformationType)`

SetBudgetForecastInformation sets BudgetForecastInformation field to given value.

### HasBudgetForecastInformation

`func (o *BudgetForecastInformation) HasBudgetForecastInformation() bool`

HasBudgetForecastInformation returns a boolean if a field has been set.

### GetLinks

`func (o *BudgetForecastInformation) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BudgetForecastInformation) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BudgetForecastInformation) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BudgetForecastInformation) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BudgetForecastInformation) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BudgetForecastInformation) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BudgetForecastInformation) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BudgetForecastInformation) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


