# BudgetForecastToDelete

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**SegmentCodeInformation** | Pointer to [**DeleteSegmentCodeBudgetInformationType**](DeleteSegmentCodeBudgetInformationType.md) |  | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewBudgetForecastToDelete

`func NewBudgetForecastToDelete() *BudgetForecastToDelete`

NewBudgetForecastToDelete instantiates a new BudgetForecastToDelete object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewBudgetForecastToDeleteWithDefaults

`func NewBudgetForecastToDeleteWithDefaults() *BudgetForecastToDelete`

NewBudgetForecastToDeleteWithDefaults instantiates a new BudgetForecastToDelete object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetSegmentCodeInformation

`func (o *BudgetForecastToDelete) GetSegmentCodeInformation() DeleteSegmentCodeBudgetInformationType`

GetSegmentCodeInformation returns the SegmentCodeInformation field if non-nil, zero value otherwise.

### GetSegmentCodeInformationOk

`func (o *BudgetForecastToDelete) GetSegmentCodeInformationOk() (*DeleteSegmentCodeBudgetInformationType, bool)`

GetSegmentCodeInformationOk returns a tuple with the SegmentCodeInformation field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetSegmentCodeInformation

`func (o *BudgetForecastToDelete) SetSegmentCodeInformation(v DeleteSegmentCodeBudgetInformationType)`

SetSegmentCodeInformation sets SegmentCodeInformation field to given value.

### HasSegmentCodeInformation

`func (o *BudgetForecastToDelete) HasSegmentCodeInformation() bool`

HasSegmentCodeInformation returns a boolean if a field has been set.

### GetLinks

`func (o *BudgetForecastToDelete) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *BudgetForecastToDelete) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *BudgetForecastToDelete) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *BudgetForecastToDelete) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *BudgetForecastToDelete) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *BudgetForecastToDelete) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *BudgetForecastToDelete) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *BudgetForecastToDelete) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


