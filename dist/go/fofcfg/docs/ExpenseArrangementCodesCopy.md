# ExpenseArrangementCodesCopy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ExpenseArrangementCode** | Pointer to [**[]CopyConfigurationCodeType**](CopyConfigurationCodeType.md) | List of the expense arrangement codes to be copied. | [optional] 
**Links** | Pointer to [**[]InstanceLink**](InstanceLink.md) |  | [optional] 
**Warnings** | Pointer to [**[]WarningType**](WarningType.md) | Used in conjunction with the Success element to define a business error. | [optional] 

## Methods

### NewExpenseArrangementCodesCopy

`func NewExpenseArrangementCodesCopy() *ExpenseArrangementCodesCopy`

NewExpenseArrangementCodesCopy instantiates a new ExpenseArrangementCodesCopy object
This constructor will assign default values to properties that have it defined,
and makes sure properties required by API are set, but the set of arguments
will change when the set of required properties is changed

### NewExpenseArrangementCodesCopyWithDefaults

`func NewExpenseArrangementCodesCopyWithDefaults() *ExpenseArrangementCodesCopy`

NewExpenseArrangementCodesCopyWithDefaults instantiates a new ExpenseArrangementCodesCopy object
This constructor will only assign default values to properties that have it defined,
but it doesn't guarantee that properties required by API are set

### GetExpenseArrangementCode

`func (o *ExpenseArrangementCodesCopy) GetExpenseArrangementCode() []CopyConfigurationCodeType`

GetExpenseArrangementCode returns the ExpenseArrangementCode field if non-nil, zero value otherwise.

### GetExpenseArrangementCodeOk

`func (o *ExpenseArrangementCodesCopy) GetExpenseArrangementCodeOk() (*[]CopyConfigurationCodeType, bool)`

GetExpenseArrangementCodeOk returns a tuple with the ExpenseArrangementCode field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetExpenseArrangementCode

`func (o *ExpenseArrangementCodesCopy) SetExpenseArrangementCode(v []CopyConfigurationCodeType)`

SetExpenseArrangementCode sets ExpenseArrangementCode field to given value.

### HasExpenseArrangementCode

`func (o *ExpenseArrangementCodesCopy) HasExpenseArrangementCode() bool`

HasExpenseArrangementCode returns a boolean if a field has been set.

### GetLinks

`func (o *ExpenseArrangementCodesCopy) GetLinks() []InstanceLink`

GetLinks returns the Links field if non-nil, zero value otherwise.

### GetLinksOk

`func (o *ExpenseArrangementCodesCopy) GetLinksOk() (*[]InstanceLink, bool)`

GetLinksOk returns a tuple with the Links field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetLinks

`func (o *ExpenseArrangementCodesCopy) SetLinks(v []InstanceLink)`

SetLinks sets Links field to given value.

### HasLinks

`func (o *ExpenseArrangementCodesCopy) HasLinks() bool`

HasLinks returns a boolean if a field has been set.

### GetWarnings

`func (o *ExpenseArrangementCodesCopy) GetWarnings() []WarningType`

GetWarnings returns the Warnings field if non-nil, zero value otherwise.

### GetWarningsOk

`func (o *ExpenseArrangementCodesCopy) GetWarningsOk() (*[]WarningType, bool)`

GetWarningsOk returns a tuple with the Warnings field if it's non-nil, zero value otherwise
and a boolean to check if the value has been set.

### SetWarnings

`func (o *ExpenseArrangementCodesCopy) SetWarnings(v []WarningType)`

SetWarnings sets Warnings field to given value.

### HasWarnings

`func (o *ExpenseArrangementCodesCopy) HasWarnings() bool`

HasWarnings returns a boolean if a field has been set.


[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


