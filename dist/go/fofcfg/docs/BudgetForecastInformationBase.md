# BudgetForecastInformationBase

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BudgetForecastInformation** | Pointer to [**BudgetForecastInformationBaseType**](BudgetForecastInformationBaseType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBudgetForecastInformationBase

`func NewBudgetForecastInformationBase() *BudgetForecastInformationBase`

NewBudgetForecastInformationBase instantiates a new BudgetForecastInformationBase object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastInformationBaseWithDefaults

`func NewBudgetForecastInformationBaseWithDefaults() *BudgetForecastInformationBase`

NewBudgetForecastInformationBaseWithDefaults instantiates a new BudgetForecastInformationBase object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetBudgetForecastInformation

`func (o *BudgetForecastInformationBase) GetBudgetForecastInformation() BudgetForecastInformationBaseType`

GetBudgetForecastInformation returns the BudgetForecastInformation field if non-nil, zero value otherwise.

### GetBudgetForecastInformationOk

`func (o *BudgetForecastInformationBase) GetBudgetForecastInformationOk() (*BudgetForecastInformationBaseType, bool)`

GetBudgetForecastInformationOk returns a tuple with the BudgetForecastInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetBudgetForecastInformation

`func (o *BudgetForecastInformationBase) SetBudgetForecastInformation(v BudgetForecastInformationBaseType)`

SetBudgetForecastInformation sets BudgetForecastInformation field to given value.

### HasBudgetForecastInformation

`func (o *BudgetForecastInformationBase) HasBudgetForecastInformation() bool`

HasBudgetForecastInformation returns a boolean if a field has been set.

### GetLinks

`func (o *BudgetForecastInformationBase) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BudgetForecastInformationBase) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BudgetForecastInformationBase) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BudgetForecastInformationBase) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BudgetForecastInformationBase) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BudgetForecastInformationBase) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BudgetForecastInformationBase) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BudgetForecastInformationBase) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


